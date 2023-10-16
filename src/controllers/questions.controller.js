import { Questions } from "../models/questions.model.js";

export const findAll = async (req, res) => {
    try {
        let questions = await Questions.find({});
        return res.status(200).json({ questions });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const create = async (req, res) => {
    try {
        let player = new Questions(req.body);
        await player.save();
        return res.status(200).json({ player });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const update = async (req, res) => {
    try {
        const data = req.body
        let player = await Questions.findById(req.params.id)
        if (!player) return res.status(404).json({ error: "player not found" })
        let udpateplayer = await Questions.findByIdAndUpdate({ _id: req.params.id }, data, { new: true })
        return res.status(200).json({ udpateplayer });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const deleteQuestion = async (req, res) => {
    try {
        let player = await Questions.findById(req.params.id)
        if (!player) return res.status(404).json({ error: "Question not found :(" })
        await Questions.findOneAndDelete({ _id: req.params.id })
        return res.status(200).json({ message: "Question deleted!" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}




