# Divesh Chat 💬

Ek real-time chat app jisse tum aur tumhara dost, kisi bhi device se, kisi bhi
account se, ek dusre ke saath **turant baat** kar sakte ho. Yeh kisi bhi Claude
account se bandha hua nahi hai — poori tarah tumhara apna app hai.

## Yeh kaam kaise karta hai

- `server.js` — chat ka backend (Node.js + Socket.io). Yahi sabke messages
  sabko turant bhejta hai.
- `public/index.html` — chat ki screen jo browser mein khulti hai.

## Ise FREE mein internet par live karna (taaki dost link se access kar sake)

Sabse aasan tareeka **Render.com** hai (free plan available):

1. https://render.com par jaake free account banao (GitHub se sign up kar sakte ho)
2. Is poore folder ko GitHub par ek naye repository mein upload karo
   (GitHub.com par "New repository" → files upload karo, ya `git push` karo)
3. Render.com par jaake **"New +" → "Web Service"** choose karo
4. Apna GitHub repo select karo
5. Settings:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
6. "Create Web Service" dabao — 2-3 minute mein deploy ho jaayega
7. Render tumhe ek link dega jaise: `https://divesh-chat.onrender.com`
8. **Yehi link apne dost ko bhej do** — dono usi link ko apne-apne phone/laptop
   par kholo, naam daalo, aur baat karna shuru karo!

> Note: Render ka free plan thoda so jaata hai jab koi use nahi kar raha —
> pehla message aane mein 20-30 second lag sakte hain agar app kaafi der se
> band tha. Yeh normal hai, free plan ki limitation hai.

### Doosra option — Railway.app
Same steps, bas Render ki jagah https://railway.app use karo — wahan bhi
free tier milta hai aur process bilkul waisa hi hai.

## Apne computer par test karna (deploy karne se pehle)

Agar Node.js installed hai, to:

```bash
npm install
npm start
```

Phir browser mein `http://localhost:3000` kholo.

## Features

- Real-time messaging (Socket.io se) — koi delay nahi
- Kitne log online hai, dikhta hai
- "Typing..." indicator
- Chat history (last 100 messages) sabko dikhti hai jab wo join karte hain
- Dark/light mode automatic (phone ki setting follow karta hai)

## Aage badhana ho to (ideas)

- Password/room-code daal ke sirf apne dost ke saath private room banao
- Photo/emoji bhejne ka option add karo
- Messages ko database (MongoDB) mein permanently save karo taaki server
  restart hone par bhi history na jaaye

Koi bhi cheez add karwani ho to bata dena — main help kar dunga.
