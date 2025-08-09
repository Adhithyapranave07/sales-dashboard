# 📊 Sales Dashboard – Next.js, TypeScript, TailwindCSS, Recharts

## 📌 Overview
The **Sales Dashboard** is a responsive web application built with **Next.js 15**, **TypeScript**, **TailwindCSS**, and **Recharts**.  
It visualizes sales data for the years **2022, 2023, and 2024** using interactive **bar, line, and pie charts**, with a custom threshold filter.

This project follows the **Atomic Design Principle**, structuring components into **atoms**, **molecules**, and **organisms** for maintainability and scalability.

---

## 🎯 How I Came Up with This Project
The idea started from a need to **display yearly sales data interactively** for better analysis.  
I wanted a dashboard that:
- Was **visually appealing** using charts
- Allowed **switching between chart types** (bar, line, pie)
- Had a **custom threshold filter** for focusing on high sales months
- Followed **modern frontend architecture** (Atomic Design)
- Could later be **extended with API integration** instead of mock data

Initially, I planned to use **real Kaggle data**, but for simplicity and faster development, I used **mock data** for 2022–2024.

---

## 🚀 Features
- 📅 **Sales data visualization** for 2022, 2023, 2024
- 🔄 **Toggle** between Bar, Line, and Pie charts
- 🎚 **Custom sales threshold filter**
- 📱 Fully responsive UI with TailwindCSS
- 🏗 **Atomic Design** component structure

---

## 🛠 Technologies Used
- **Next.js 15**
- **React 18**
- **TypeScript**
- **TailwindCSS**
- **Recharts**

---

## 📂 Project Structure (Atomic Design)
components/
atoms/
InputAtom.tsx
ButtonAtom.tsx
molecules/
SalesChart.tsx
organisms/
DashboardChart.tsx
data/
salesData.ts
pages/
dashboard.tsx

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

1️⃣ **Clone the Repository**
```bash
git clone https://github.com/Adhithyapranave07/sales-dashboard.git
cd sales-dashboard
2️⃣ Install Dependencies

bash
Copy
Edit
npm install
3️⃣ Run Development Server

bash
Copy
Edit
npm run dev
4️⃣ View the Dashboard
Open your browser and go to:

bash
Copy
Edit
http://localhost:3000/dashboard
📈 Next Steps / Possible Enhancements
🔗 Integrate real sales data via API

🔒 Add user authentication

🎨 Improve styling & animations

📊 Add more filtering options

🏆 Author
Adhithya Pranave
💼 GitHub: @Adhithyapranave07
