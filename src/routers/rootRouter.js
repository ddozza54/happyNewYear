import express from "express";
import { home, login, join } from "../controllers/controller";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/login", login);
globalRouter.get("/join", join);

export default globalRouter;
