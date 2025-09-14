# KrishiMitra

Empowering farmers with AI-driven technology for smart agriculture.

## Project Overview
KrishiMitra is a full-stack platform designed to help farmers increase yield and profitability using modern technology. It provides weather forecasting, plant disease detection, crop recommendations, agricultural news, and an AI chatbot for instant advice. The platform consists of:
- **Backend (Django):** REST APIs for user management, crop info, and plant disease prediction.
- **Frontend (React + Vite):** Modern web UI for farmers to access all features.
- **Login Microservice (Node.js):** OTP-based authentication using Twilio SMS.

---

## Features
- **User Registration & Login:** Secure OTP-based login via mobile number.
- **Weather Forecast:** Accurate weather predictions for farming decisions.
- **Plant Disease Detection:** Upload or capture crop images for AI-powered disease identification.
- **Crop Recommendation through Chatbot:** Info on best crops, soil types, and harvest periods.
- **AI Chatbot:** 24/7 farming advice and support.
- **Agricultural News:** Latest updates and market prices.
- **Profile & Dashboard:** Manage user info, crops, and preferences.
- **Goverment schemes:** Gives information about current state & central goverment schemes
- **Agriculture Info Vidoes:** Provide Agriculture related Youtube videos in Hindi 


---

## Folder Structure
```
krishimitrabackend/      # Django backend (REST API)
krishimitrafrontend/     # React + Vite frontend
krishimitraloginnode/    # Node.js OTP login microservice
```

---

## Setup Instructions

### 1. Backend (Django)
- Install dependencies: `pip install -r requirements.txt`
- Configure `.env` for secrets (DB, etc.)
- Run migrations: `python manage.py migrate`
- Start server: `python manage.py runserver`

### 2. Frontend (React + Vite)
- Install dependencies: `npm install`
- Start dev server: `npm run dev`

### 3. Login Microservice (Node.js)
- Install dependencies: `npm install`
- Configure `.env` with Twilio credentials
- Start server: `node server.js`

---

## API Endpoints
- **Backend:** `/api/` (user, crops, disease prediction)
- **Login Service:** `/send-sms`, `/verify-otp`

---

## Usage
1. Register/login with mobile OTP.
2. Access dashboard for weather, crop info, disease prediction, and chatbot.
3. Upload crop images for disease detection.
4. Get weather forecasts and farming news.
5. Get Government Schemes 
6. Get Education Videos realted to Agriculture
---

## Tech Stack
- **Backend:** Django, Django REST Framework, PyTorch (for plant disease model)
- **Frontend:** React, Vite, Lucide Icons
- **Login Service:** Node.js, Express, Twilio (For SMS)
- **Streamlit:** For AI CHATBOT


---

## Contributors
- Rohit Yadav
- Parth Patel 
- Ganpat Kumawat
- Team HackovateLJ 2025

---

## License
This project is for educational and demonstration purposes.
