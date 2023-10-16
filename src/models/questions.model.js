import mongoose from "mongoose";
const { Schema, model } = mongoose;

const questionSchema = new Schema({
    question: {
        type: String,
        trim: true,
        required: true,
    },

    answer: {
        type: Boolean,
        trim: true,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
}
)

export const Questions = model("questions", questionSchema);