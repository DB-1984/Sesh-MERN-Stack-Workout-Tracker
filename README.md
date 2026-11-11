
# Sesh — Workout Tracker

**A full-stack workout tracking application built with React 19, Redux Toolkit, Node.js, Express 5 and MongoDB.**

Sesh is a self-directed MERN stack project designed to help users record workouts and maintain a structured history of their training.

Rather than treating workouts as isolated sessions, the application provides a way to organise and revisit previous activity, making it easier to follow progress over time.

The project explores full-stack JavaScript development, including React state management, REST API integration, database persistence, authentication and responsive interface design.

[![Watch the Sesh demonstration](https://img.youtube.com/vi/tcK6Q5m7Trk/hqdefault.jpg)](https://www.youtube.com/watch?v=tcK6Q5m7Trk)

---

## Video Demonstration

[![Watch the Sesh demonstration](https://img.youtube.com/vi/QuLKcg9rdjU/hqdefault.jpg)](https://www.youtube.com/watch?v=QuLKcg9rdjU)

*Click the image to watch Sesh in action on YouTube.*

---

## Technology Stack

### Frontend

- **React 19** — Component-based user interface
- **Vite** — Frontend development and build tooling
- **React Router** — Client-side navigation
- **Redux Toolkit** — Application state management
- **Tailwind CSS v4** — Responsive styling
- **Radix UI** — Accessible interface primitives
- **React Hook Form** — Form state management
- **date-fns / react-day-picker** — Date handling and calendar interfaces
- **Toast notifications** — User feedback

### Backend

- **Node.js** — JavaScript runtime
- **Express 5** — HTTP API and backend application logic
- **MongoDB** — Persistent document database
- **Mongoose** — Data modelling and database operations
- **JWT** — Token-based authentication
- **Passport Google OAuth** — Third-party authentication
- **bcryptjs** — Password hashing
- **Resend** — Transactional email integration

The application is written in JavaScript throughout.

---

## Key Features

### Workout Management

Sesh allows users to record and maintain a history of their workouts.

- Structured workout and session records
- Persistent storage using MongoDB
- Interfaces for managing training information
- Date and calendar functionality for navigating sessions

The aim is to make previous workouts easy to revisit rather than leaving training information scattered across individual notes or records.

### User Authentication

Sesh supports both traditional account credentials and Google sign-in.

- Email/password authentication
- Google OAuth through Passport
- JWT-based authentication
- Password hashing using bcryptjs
- Transactional email integration using Resend

The backend handles authentication independently of the React frontend, providing experience with authentication across separate client and server applications.

### React State Management

Redux Toolkit manages application state, while React handles component-level interactions.

This provides experience working with shared state across a multi-component application rather than relying entirely on local component state.

React Router handles navigation between application views.

### Forms and User Interaction

The interface combines React Hook Form with reusable components based on Radix UI primitives.

- Structured form handling
- Calendar and date selection
- Dialogs and interactive controls
- Toast notifications for user feedback
- Responsive layouts using Tailwind CSS

---

## Technical Approach

### MERN Architecture

Sesh uses separate frontend and backend applications.

The frontend is built with React and Vite, while Node.js and Express provide the backend API and application logic.

MongoDB stores the application's data, with Mongoose providing models and database operations.

This separation provides practical experience with communication between a client-side application and a standalone backend.

### Redux Toolkit

Redux Toolkit is used to manage shared application state.

The project explores how centralised state management can help coordinate application data across different React components and views.

It also provides an opportunity to distinguish between state that belongs to an individual component and state that needs to be shared across the application.

### Authentication Across Client and Server

Unlike applications where authentication is handled within a single full-stack framework, Sesh uses a separate Express backend.

JWTs support authenticated access, while Passport provides Google OAuth integration.

This required consideration of how authentication information is passed between the frontend and backend, alongside password verification and persistent account data.

### Database Persistence

MongoDB provides persistent storage for application data.

Mongoose is used to define data models and interact with the database from the Express backend.

This separates database operations from the React interface and provides experience with a document-oriented database architecture.

### Interface Development

The frontend combines React, Tailwind CSS and Radix UI primitives.

React Hook Form manages form interactions, while date-fns and react-day-picker support the date-based functionality associated with logging workouts.

---

## Application Structure

The repository separates the application into two main directories:

```text
Sesh-MERN-Stack-Workout-Tracker/
├── frontend/     # React and Vite application
└── backend/      # Node.js and Express application
```

This separation keeps the user interface and backend application logic in their respective environments.

---

## Local Development

### Requirements

- Node.js and npm
- A MongoDB database
- Environment variables for database connectivity and authentication
- Google OAuth credentials for Google sign-in
- Resend credentials for email functionality

### Installation

Clone the repository:

```bash
git clone https://github.com/DB-1984/Sesh-MERN-Stack-Workout-Tracker.git
```

Navigate into the project:

```bash
cd Sesh-MERN-Stack-Workout-Tracker
npm install
npm --prefix backend install
npm --prefix frontend install
```

Configure the required environment variables for MongoDB, JWT authentication, frontend API connectivity and any external integrations. Start both applications from the repository root:

```bash
npm run dev
```

This runs the backend and frontend together. The terminal output labels each process; if one exits with an error, the other is stopped as well. Open the local URL displayed by Vite.

To run only one application, use the relevant command from the repository root:

```bash
npm --prefix backend run dev
npm --prefix frontend run dev
```

*Google OAuth, transactional email and other external services may require additional configuration for local development.*

---

## Project Context

Sesh is a self-directed full-stack JavaScript project developed to extend my experience beyond commercial WordPress and PHP development.

It provided an opportunity to build a React application with a separate Node.js and Express backend, implement authentication, work with MongoDB and manage application state using Redux Toolkit.

The project reflects my interest in building practical applications around real user workflows, with an emphasis on maintainable application structure and straightforward interaction design.

---

## Links

- **Live Application:** https://sesh-app.onrender.com/
- **Video Demonstration:** https://www.youtube.com/watch?v=QuLKcg9rdjU
- **Source Code:** https://github.com/DB-1984/Sesh-MERN-Stack-Workout-Tracker
- **Developer Portfolio:** https://david-brandon.onrender.com/
- **GitHub Profile:** https://github.com/DB-1984
