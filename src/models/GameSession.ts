import mongoose from "mongoose";

const GameSessionSchema = new mongoose.Schema(
  {
    playerOne: {
      type: String,
      required: [true, "Please add Player 1 name"],
      trim: true,
      maxlength: [50, "Name cannot be more than 50 characters"],
    },
    playerTwo: {
      type: String,
      required: [true, "Please add Player 2 name"],
      trim: true,
      maxlength: [50, "Name cannot be more than 50 characters"],
    },
    scoreOne: {
      type: Number,
      required: [true, "Please add Player 1 score"],
    },
    scoreTwo: {
      type: Number,
      required: [true, "Please add Player 2 score"],
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("GameSession", GameSessionSchema);
