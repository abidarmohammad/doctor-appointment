Dental Appointment Booking System
A full-stack MERN web application for managing dental appointments with role-based dashboards for Admins, Doctors, Receptionists, and Patients. Built with modern technologies and designed for performance, analytics, and user experience.

Features

Authentication & Authorization

Secure login/sign-up for Admin, Doctor, Receptionist, and Patient

Role-based access control (RBAC)

Appointments Management

Patients can book appointments by selecting doctor, day & time

Receptionists can update appointment statuses: Approved, Ongoing, Finished, Refused, Cancelled

Dashboard & Analytics

Admin and Doctor dashboards with charts (Appointments, Earnings, Performance)

Visualized with ApexCharts

Stripe Payment Integration

Patients can pay securely for appointments

Doctor Features

Manage appointments & patients



View ratings & working hours

Patient Features

Book and manage appointments



Receptionist Tools

Edit appointment statuses

Extract invoices

General Pages

Home, About, Contact, Services, Case Studies, Articles

Tech Stack

Frontend:

React.js

Tailwind CSS

ApexCharts

React Router

Axios

Backend:

Express.js

Node.js

PostgreSQL with Prisma ORM

JWT for Authentication

Other Tools:

Stripe API

Git & GitHub

Screenshots

Home Page
[Insert image: ./assets/home.png]

Contact page
[Insert image: ./assets/contact.png]

About us page
[Insert image: ./assets/about.png]
Login
[Insert image: ./assets/login.png]

admin dashboard
[Insert image: ./assets/dashboard.png]


Getting Started

Prerequisites:

Node.js & npm

PostgreSQL

Git

Clone the Repo:

bash
Copy
Edit
git clone https://github.com/your-username/dental-appointments.git  
cd dental-appointments
Install Dependencies:

bash
Copy
Edit
# Backend  
cd server  
npm install  

# Frontend  
cd ../client  
npm install
Setup Environment Variables:
Create .env files for both client and server. Example for server/.env:

ini
Copy
Edit
DATABASE_URL=postgresql://your-db-url  
JWT_SECRET=your_jwt_secret  
STRIPE_SECRET_KEY=your_stripe_key
Run the App:

bash
Copy
Edit
# In one terminal for server  
cd server  
npm run dev  

# In another terminal for client  
cd client  
npm run dev
Contributing
Contributions are welcome! Please open issues or pull requests.