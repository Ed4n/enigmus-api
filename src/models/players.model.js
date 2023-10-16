import mongoose from "mongoose";
const { Schema, model } = mongoose;

const playerSchema = new Schema({
    carnet: {
        type: String,
        trim: true,
        required: true,
    },

    name: {
        type: String,
        trim: true,
        required: true,

    },

    points: {
        type: Number,
        trim: true,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
}
)

export const Players = model("players", playerSchema);