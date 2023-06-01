import "reflect-metadata";
import "express-async-errors";
import express from "express";

import { userRoutes } from "./routes/user.routes";
import { authRoutes } from "./routes/auth.routes";
import { movieRoutes } from "./routes/movie.routes";
import { handleError } from "./errors";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/movies", movieRoutes);

app.use(handleError);

export default app;
