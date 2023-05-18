import "reflect-metadata";
import "express-async-errors";
import express from "express";

import { userRoutes } from "./routes/user.routes";
import { movieRoutes } from "./routes/movie.routes";
import { handleError } from "./errors";

const app = express();
app.use(express.json())

app.use("/users", userRoutes)
app.use("/movies", movieRoutes)

app.use(handleError);

export default app;