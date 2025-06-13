# कल्पचित्रण (KalpChitran) 🖌️
**AI Image Generator Web App powered by Gemini 2.0**

KalpChitran (Hindi: *कल्पना + चित्रण*) is a full-stack AI-powered web application that generates creative, high-quality images from user prompts using **Gemini 2.0 Flash**. Built with the **MERN stack** and deployed on Render, it allows users to create, view, and share their artistic creations with the community.

🌐 **Live App**: [कल्पचित्रण](https://imagegenerator-ai-1.onrender.com)  
<br/>

![Screenshot 1](https://github.com/user-attachments/assets/985cb6fd-ee07-4be3-8452-9e373f0ac1c6)
![Screenshot 2](https://github.com/user-attachments/assets/11f22f8c-4817-49d9-bd9f-d70b634f16e1)

---

## 📸 Features

- ✨ Generate creative images using prompts via **Gemini 2.0**
- 📤 Publish generated images to the community dashboard
- 🖼️ View user-generated artwork in a clean, responsive gallery
- 🧠 Hover to reveal the creator’s name and the prompt used
- 🔐 Secure image uploads using **Cloudinary**
- 🚀 Deployed with **Render (Backend)** and **React Router (Frontend)**

---

## 🧱 Tech Stack

| Frontend       | Backend       | AI Model        | Deployment       | Storage          |
|----------------|---------------|-----------------|------------------|------------------|
| React.js       | Node.js       | Gemini 2.0 Flash| Render           | Cloudinary       |
| Tailwind CSS   | Express.js    | Google GenAI API|                  | MongoDB Atlas    |
| React Router   | Mongoose      |                 |                  |                  |

---

## 🗂️ Project Structure

```bash
KalpChitran/
├── client/          # React frontend
│   ├── src/         # Components & pages (Home, CreatePost)
│   └── public/      # Static assets
├── server/          # Node.js backend
│   ├── routes/      # API routes for Dalle (Gemini) & Post
│   ├── models/      # MongoDB schema
│   ├── mongodb/     # DB connection
│   └── index.js     # Main backend entry point
└── README.md        # You're here!
```

---

## 🚀 How It Works

### 🔧 Prompt → Image (via Gemini API)
1. User enters a creative prompt.
2. Request is sent to `/api/v1/dalle/` on backend.
3. Gemini 2.0 Flash generates an image (base64 format).
4. Image is sent back and shown on UI.

### 📤 Publish Post (Cloudinary + MongoDB)
1. User enters name (optional) and clicks **Publish**.
2. Image is uploaded to **Cloudinary**.
3. Post data (name, prompt, image URL) saved to **MongoDB Atlas**.
4. Image is added to community **Dashboard** (`/` route).

---

## 🛠️ Installation & Setup

### 📦 Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Cloudinary account
- Gemini API key ([Generate via Google GenAI](https://makersuite.google.com/app))

---

### 🔌 Clone the Repo

```bash
git clone https://github.com/TiwariAry/ImageGenerator_AI.git
cd ImageGenerator_AI
```

---

### ⚙️ Setup Instructions

#### 1. Configure Backend
```bash
cd server
npm install
```

Create a `.env` file in `server/` with:
```
GEMINI_API_KEY=your_gemini_api_key
MONGODB_URL=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start backend:
```bash
npm start
```
OR
```bash
npm run dev
```

---

#### 3. Configure Frontend
```bash
cd ../client
npm install
```

Update **API URLs** in:
> `src/pages/CreatePost.jsx`  
Replace lines 31 and 59 with:
```js
'https://localhost:5000/api/v1/dalle'
'https://localhost:5000/api/v1/post'
```

Then:
```bash
npm run dev
```

Visit: `http://localhost:5173`

---

## 🧠 Learnings & Highlights

- Integrated Gemini 2.0 API for AI image generation
- Designed and deployed a full-stack app using the MERN stack
- Learned image streaming, async request handling, and cloud image hosting
- Managed backend APIs, error boundaries, and real-time frontend rendering

---

## 📣 Future Enhancements

- 🗑️ Delete/Edit published posts
- 🧾 User authentication and personalized gallery
- 🔍 Prompt search and filter
- 📥 Image download option

---

## 🤝 Contributing

Pull requests are welcome! For major changes, open an issue first.  
Let’s improve **KalpChitran** together.

---

## 📄 License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).  
Feel free to fork, modify, and build on it.

---

## 👨‍💻 Author

**Aryan Tiwari**  
📫 [LinkedIn](https://www.linkedin.com/in/aryan-tiwari-6844a9250)  
💻 [GitHub](https://github.com/TiwariAry)

---
