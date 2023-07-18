import { asyncHandler } from "../middleware/asyncHandler";
import GameSession from "../models/GameSession";

// @desc        Get all GameSession
// @route       GET /api/v1/game-sessions
// @access      Public
export const getGameSessionList = asyncHandler(async (req, res) => {
  const data = await GameSession.find({}, null, {
    limit: 10,
    sort: { createdAt: -1 },
  });
  res.status(200).json({ data });
});

// @desc        Create a GameSession
// @route       POST /api/v1/game-sessions
// @access      Public
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const addGameSession = asyncHandler(async (req, res, next) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Missing request body");
  }

  const gameSession = await GameSession.create(req.body);
  res.status(201).json({ success: true, data: gameSession });
});
