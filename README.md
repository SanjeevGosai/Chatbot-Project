# 🤖 AI Chatbot with Gemini API Integration- MERN Stack Project

A full-stack AI chatbot application built using the **MERN stack** and **Google Gemini API**, designed to provide intelligent, real-time conversational responses with secure authentication and a modern UI.

🔗 **GitHub Repository:**
[https://github.com/SanjeevGosai/Chatbot-Project](https://github.com/SanjeevGosai/Chatbot-Project)

---

## 🚀 Features

* 🤖 AI-powered chatbot using **Gemini API**
* 🔐 Secure authentication using **JWT**
* 📧 Email support via **Nodemailer**
* ⚡ Real-time API communication
* 🌐 RESTful backend architecture
* 🎨 Responsive and modern React UI
* 🔔 Toast notifications for better UX
* 🔄 Seamless frontend–backend integration

---

## 🛠 Tech Stack

### **Frontend**

* React.js (18)
* React Router DOM
* Axios
* React Hot Toast
* React Icons

### **Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Nodemailer

### **Other Tools**

* CORS
* Dotenv
* Gemini API

---

## 📦 Backend Dependencies

```json
{
  "cors": "^2.8.5",
  "dotenv": "^16.4.5",
  "express": "^4.19.2",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^8.5.2",
  "nodemailer": "^6.9.14"
}
```

---

## 📦 Frontend Dependencies

```json
{
  "axios": "^1.7.2",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-hot-toast": "^2.4.1",
  "react-icons": "^5.2.1",
  "react-router-dom": "^6.25.1"
}
```

---

## ⚙️ Environment Variables

Create a `.env` file in the **backend** directory and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

---

## 🧑‍💻 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/SanjeevGosai/Chatbot-Project.git
cd Chatbot-Project
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm start
```

Server will run on `http://localhost:5000`

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend will run on `http://localhost:3000`

---

## 📂 Project Structure

```
Chatbot-Project/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── App.js
│
└── README.md
```

---

## 🔐 Authentication Flow

* User registers/logs in
* JWT token is generated on successful authentication
* Token is stored and sent with API requests
* Protected routes validate the token

---

## 🎯 Use Cases

* AI chat assistant
* Learning chatbot
* Customer support bot
* Gemini API experimentation
* Full-stack MERN practice project

---

## 📈 Future Enhancements

* Chat history persistence
* Role-based authentication
* Voice input support
* Dark mode
* Rate limiting & analytics
* Multi-language support

---

## 👨‍💻 Author

**Sanjeev Gosai**
Full Stack Developer
GitHub: [https://github.com/SanjeevGosai](https://github.com/SanjeevGosai)

---

## ⭐ Support

If you like this project, please consider giving it a **star ⭐** on GitHub — it really helps!


