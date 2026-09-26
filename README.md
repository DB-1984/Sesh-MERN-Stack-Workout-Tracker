# Sesh — Workout Tracker

**[Try the live app](https://sesh-app.onrender.com/)** (the Render service may take a minute to wake up).

Sesh helps users log workouts and build a clearer picture of their progress over time. It turns individual training sessions into a structured record that is easier to revisit and maintain.

The app uses a **MERN stack**: React 19 and Vite on the frontend, with Node.js, Express 5 and MongoDB on the backend. Redux Toolkit manages application state, React Router handles navigation, and Mongoose provides the database models.

## Interface

The interface is built with Tailwind CSS v4 and components based on Radix UI primitives. React Hook Form manages form input, while `date-fns` and `react-day-picker` support the date and calendar features needed for logging sessions. Toast notifications give users feedback as they use the app.

## Accounts

Sesh supports password-based accounts and Google sign-in. The backend uses JWTs for authentication, Passport’s Google OAuth strategy for social login, and bcryptjs for password hashing. Resend handles transactional email.

## Built with

* React 19, Vite and React Router
* Redux Toolkit
* Node.js, Express 5 and MongoDB
* Mongoose
* Tailwind CSS v4 and Radix UI
* React Hook Form
* `date-fns` and `react-day-picker`
* JWT, Passport Google OAuth and bcryptjs
* Resend

The application is written in **JavaScript** throughout.
