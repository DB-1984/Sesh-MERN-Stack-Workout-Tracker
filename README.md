# Sesh — Workout Tracker

**A full-stack workout tracking application built with React 19, Redux Toolkit, Node.js, Express 5 and MongoDB.**

Sesh is a self-directed MERN stack project designed to help users record workouts and maintain a structured history of their training.

The application provides a way to organise and revisit previous activity, making it easier to follow progress over time.

The project explores full-stack JavaScript development, including React state management, REST API integration, database persistence, authentication and responsive interface design.

**[Try the Live App](https://sesh.davidbrandondev.com/)** | **[Source Code](https://github.com/DB-1984/sesh-app.onrender.com)**

## Test Login

Try the app using the shared demo account:

- **Email:** test@email.com
- **Password:** 1234

*This is a shared account. Please avoid entering personal information.*

---

## Video Demonstration

[![Watch the Sesh demonstration](https://img.youtube.com/vi/tcK6Q5m7Trk/hqdefault.jpg)](https://www.youtube.com/watch?v=tcK6Q5m7Trk)

*Click the image to watch Sesh in action on YouTube.*

---

## Technology Stack

### Frontend

- **React 19** — Component-based user interface
- **Vite** — Frontend development and build tooling
- **React Router** — Client-side navigation
- **Redux Toolkit / RTK Query** — Shared state, API requests and cached server data
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

The aim is to make previous workouts easy to revisit and keep training information organised.

### User Authentication

Sesh supports both traditional account credentials and Google sign-in.

- Email/password authentication
- Google OAuth through Passport
- JWT-based authentication
- Password hashing using bcryptjs
- Transactional email integration using Resend

The Express backend handles authentication and account data, while the React frontend provides the account interfaces.

### React State Management

Redux Toolkit manages shared application state, while RTK Query handles API requests and cached server data.

Query hooks provide data and request states to components. Mutations and cache invalidation help keep displayed information current after changes.

React handles component-level interactions, and React Router manages navigation between application views.

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

Sesh separates its frontend and backend code.

The frontend is built with React and Vite, while Node.js and Express provide the backend API and application logic.

MongoDB stores the application's data, with Mongoose providing models and database operations.

This separation keeps interface development and backend logic in their respective parts of the application.

### Redux Toolkit and RTK Query

Redux Toolkit provides centralised state management for information shared across components.

RTK Query manages the API data lifecycle, including fetching, caching, loading states and updates following mutations.

The project explores the distinction between local component state, shared client state and data retrieved from the backend.

### Authentication Across Client and Server

JWTs support authenticated access, while Passport provides Google OAuth integration.

The implementation connects frontend account interactions with backend authentication, password verification and persistent user records.

### Database Persistence

MongoDB provides persistent storage for application data.

Mongoose defines data models and handles database operations from the Express backend, keeping database access separate from the React interface.

### Interface Development

The frontend combines React, Tailwind CSS and Radix UI primitives.

React Hook Form manages form interactions, while date-fns and react-day-picker support the date-based functionality associated with logging workouts.

---

## Application Structure

The repository separates the application into two main directories:

```text
sesh-app.onrender.com/
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
git clone https://github.com/DB-1984/sesh-app.onrender.com.git
```

Navigate into the project and install dependencies:

```bash
cd sesh-app.onrender.com
npm install
npm --prefix backend install
npm --prefix frontend install
```

Configure the required environment variables for MongoDB, JWT authentication, frontend API connectivity and any external integrations.

Start both applications from the repository root:

```bash
npm run dev
```

This runs the backend and frontend together. The terminal output labels each process; if one exits with an error, the other is stopped as well. Open the local URL displayed by Vite.

To run only one application, use the relevant command from the repository root:

```bash
npm --prefix backend run dev
npm --prefix frontend run dev
```

*Google OAuth, transactional email and other external services require their corresponding credentials and configuration for local development.*

---

## Project Context

Sesh is a self-directed full-stack JavaScript project developed to extend my experience beyond commercial WordPress and PHP development.

It provided an opportunity to build a React application with a Node.js and Express backend, implement authentication, work with MongoDB and manage application state using Redux Toolkit and RTK Query.

The project reflects my interest in building practical applications around real user workflows, with an emphasis on maintainable application structure and straightforward interaction design.

---

## Links

- **Live Application:** https://sesh.davidbrandondev.com/
- **Video Demonstration:** https://www.youtube.com/watch?v=tcK6Q5m7Trk
- **Source Code:** https://github.com/DB-1984/sesh-app.onrender.com
- **Developer Portfolio:** https://davidbrandondev.com/
- **GitHub Profile:** https://github.com/DB-1984
