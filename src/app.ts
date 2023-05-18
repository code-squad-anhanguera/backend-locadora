import "reflect-metadata";
import "express-async-errors";
import express from "express";

import { userRoutes } from "./routes/user.routes";
import { movieRoutes } from "./routes/movie.routes";

const app = express();
app.use(express.json())

app.use("/users", userRoutes)
app.use("/movies", movieRoutes)

export default app;