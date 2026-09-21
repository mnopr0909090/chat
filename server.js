const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, "public")));

// Keep last 100 messages in memory so a new person joining
// can see recent chat history.
const MAX_HISTORY = 100;
let history = [];

// Track who is currently online (simple in-memory list)
let onlineUsers = new Map(); // socketId -> name

io.on("connection", (socket) => {
  // Send chat history to the newly connected user
  socket.emit("history", history);

  socket.on("join", (name) => {
    name = (name || "Someone").toString().slice(0, 24);
    onlineUsers.set(socket.id, name);
    io.emit("presence", Array.from(onlineUsers.values()));
    io.emit("system", `${name} joined the chat`);
  });

  socket.on("message", (data) => {
    const name = onlineUsers.get(socket.id) || "Someone";
    const msg = {
      sender: name,
      text: (data && data.text ? data.text.toString() : "").slice(0, 1000),
      ts: Date.now(),
    };
    if (!msg.text.trim()) return;

    history.push(msg);
    if (history.length > MAX_HISTORY) history.shift();

    io.emit("message", msg);
  });

  socket.on("typing", () => {
    const name = onlineUsers.get(socket.id) || "Someone";
    socket.broadcast.emit("typing", name);
  });

  socket.on("disconnect", () => {
    const name = onlineUsers.get(socket.id);
    onlineUsers.delete(socket.id);
    io.emit("presence", Array.from(onlineUsers.values()));
    if (name) io.emit("system", `${name} left the chat`);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Divesh Chat server running on port ${PORT}`);
});
