# कल्पचित्रण (KalpChitran) 🖌️
**AI Image Generator Web App powered by FLUX.1-schnell**

KalpChitran (Hindi: *कल्पना + चित्रण*) is a full-stack AI-powered web application that generates creative, high-quality images from user prompts using **FLUX.1-schnell**. Built with the **MERN stack** and deployed on Render, it allows users to create, view, and share their artistic creations with the community.

🌐 **Live App**: [कल्पचित्रण](https://imagegenerator-ai-1.onrender.com)
<br/>

<img width="1892" height="950" alt="image" src="https://github.com/user-attachments/assets/518c133a-c3e9-469d-aa5e-cc64c8ac9f0c" />
<img width="1887" height="933" alt="image" src="https://github.com/user-attachments/assets/eb50d8f0-654d-4f41-9bb3-4ed9c7cf2d5e" />

---

## 📸 Features

- ✨ Generate creative images using prompts via **FLUX.1-schnell**
- 📤 Publish generated images to the community dashboard
- 🖼️ View user-generated artwork in a clean, responsive gallery
- 🧠 Hover to reveal the creator’s name and the prompt used
- 🔐 Secure image uploads using **Cloudinary**
- 🚀 Deployed with **Render**

---

## 🧱 Tech Stack

| Frontend       | Backend       | AI Model        | Deployment       | Storage          |
|----------------|---------------|-----------------|------------------|------------------|
| React.js       | Node.js       | FLUX.1-schnell  | Render           | Cloudinary       |
| Tailwind CSS   | Express.js    |                 |                  | MongoDB Atlas    |
| React Router   | Mongoose      |                 |                  |                  |

---

## 🌿 System Overview

![Screenshot 2025-06-13 234045](https://github.com/user-attachments/assets/f52503d3-6659-45ab-9758-644350fc3e5f)


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
2. Request is sent to `/api/v1/hugging-face` on backend.
3. FLUX.1-schnell generates an image (base64 format).
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
- Hugging Face API key ([Generate API here](https://huggingface.co/settings/tokens))

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
HUGGINGFACE_API_KEY=your_huggingface_api_key
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
'https://localhost:5000/api/v1/hugging-face'
'https://localhost:5000/api/v1/post'
```

Then:
```bash
npm run dev
```

Visit: `http://localhost:5173`

---

## 🧠 Learnings & Highlights

- Integrated FLUX.1-schnell for AI image generation
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

This project is licensed under the [MIT License](https://github.com/TiwariAry/ImageGenerator_AI/blob/main/LICENSE).
Feel free to fork, modify, and build on it.

---

## 👨‍💻 Author

**Aryan Tiwari**  
📫 [LinkedIn](https://www.linkedin.com/in/aryan-tiwari-6844a9250)  
💻 [GitHub](https://github.com/TiwariAry)

---
