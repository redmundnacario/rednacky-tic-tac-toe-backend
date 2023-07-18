import express from "express";
import {
  addGameSession,
  getGameSessionList,
} from "../controllers/gameSessions";

const router = express.Router();

router.route("/").get(getGameSessionList).post(addGameSession);

export default router;
