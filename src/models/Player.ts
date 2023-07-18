import mongoose from "mongoose";

const PlayerSchema = new mongoose.Schema({
  playerOne: {
    type: String,
    required: [true, "Please add Player name"],
    trim: true,
    maxlength: [50, "Name cannot be more than 50 characters"],
  },
  scoreOne: {
    type: Number,
    required: [true, "Please add Player score"],
  },
});

export default mongoose.model("GameSession", PlayerSchema);
