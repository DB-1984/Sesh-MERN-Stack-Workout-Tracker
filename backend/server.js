import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import seshRoutes from "./routes/seshRoutes.js";
import connectDB from "./utils/conn.js";
import path from "node:path";
import { fileURLToPath } from "node:url";
import cors from "cors";
import passport from "passport";
import { configurePassport } from "./config/passport.js";
import authGoogleRoutes from "./routes/authGoogle.js";
import { errorHandler } from "./utils/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Resolve relative to this file, regardless of the startup directory.
const frontendPath = fileURLToPath(
  new URL("../frontend/dist/", import.meta.url)
);

connectDB()
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

configurePassport();
app.use(passport.initialize());

// API and authentication routes must precede the React fallback.
app.use("/auth", authGoogleRoutes);
app.use("/api/users", userRoutes);
app.use("/api/seshes", seshRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(frontendPath));

  // Serve React for frontend routes, including /oauth-success.
  // Leave /api and /auth requests to their respective routers.
  app.get(/^(?!\/(?:api|auth)(?:\/|$)).*/, (req, res, next) => {
    res.sendFile(path.join(frontendPath, "index.html"), (err) => {
      if (err) {
        console.error("Frontend fallback failed:", err);
        next(err);
      }
    });
  });
}

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
