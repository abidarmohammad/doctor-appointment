🦷 Dental Appointment Booking System
A full-stack MERN web application for managing dental appointments with role-based dashboards for Admins, Doctors, Receptionists, and Patients. Built with modern technologies and designed for performance, analytics, and user experience.

✨ Features
🔐 Authentication & Authorization
Secure login/sign-up for Admin, Doctor, Receptionist, and Patient

Role-based access control (RBAC)

📅 Appointments Management
Patients can book appointments by selecting doctor, day, and time

Receptionists can update appointment statuses:
Approved, Ongoing, Finished, Refused, Cancelled

📊 Dashboard & Analytics
Admin and Doctor dashboards with:

Appointment statistics

Earnings

Performance metrics

Visualized using ApexCharts

💳 Stripe Payment Integration
Patients can pay securely for appointments via Stripe

🩺 Doctor Features
Manage appointments & patients

View ratings & working hours

👤 Patient Features
Book and manage appointments

🧾 Receptionist Tools
Edit appointment statuses

Extract invoices

📄 General Pages
Home, About, Contact, Services, Case Studies, Articles

🛠️ Tech Stack
🖥️ Frontend
React.js

Tailwind CSS

ApexCharts

React Router

Axios

🔧 Backend
Express.js

Node.js

PostgreSQL with Prisma ORM

JWT for Authentication

🔗 Other Tools
Stripe API

Git & GitHub

📸 Screenshots
🏠 Home Page

![Home Page](./assets/home.png)




📞 Contact Us Page

![Contact Page](./assets/contact.png)


ℹ️ About Us Page
![About Us Page](./assets/about.png)



🔐 Login Page


![Login Page](./assets/login.png)


🧑‍💼 Admin Dashboard

![Admin Dashboard](./assets/dashboard.png)



🚀 Getting Started
✅ Prerequisites
Node.js & npm

PostgreSQL

Git

📂 Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/dental-appointments.git  
cd dental-appointments
📦 Install Dependencies
bash
Copy
Edit
# Backend  
cd server  
npm install  

# Frontend  
cd ../client  
npm install
🔐 Setup Environment Variables
Create .env files for both client and server.
Example for server/.env:

ini
Copy
Edit
DATABASE_URL=postgresql://your-db-url  
JWT_SECRET=your_jwt_secret  
STRIPE_SECRET_KEY=your_stripe_key
▶️ Run the App
bash
Copy
Edit
# In one terminal for server  
cd server  
npm run dev  

# In another terminal for client  
cd client  
npm run dev
🤝 Contributing
Contributions are welcome!
Please open an issue or pull request if you'd like to help improve this project.
