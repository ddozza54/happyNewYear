import express from "express";
import {
  home,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
} from "../controllers/controller";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.route("/login").get(getLogin).post(postLogin);
globalRouter.route("/join").get(getJoin).post(postJoin);

export default globalRouter;
