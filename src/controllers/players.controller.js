import { Players } from "../models/players.model.js";

export const findAll = async (req, res) => {
    try {
        let players = await Players.find({});
        let playeresLenght = players.length.toString();
        return res.status(200).json({
            success: true,
            data: players,
            message: "Players retrieved successfully",
            error: null,
            rows: playeresLenght
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const findAllHighest = async (req, res) => {
    try {
        // let players = await Players.find({});
        let players = await Players.find({}).sort({ points: -1 });
        return res.status(200).json({ players });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}


export const create = async (req, res) => {
    try {
        let player = new Players(req.body);
        await player.save();
        return res.status(200).json({
            player,
            message: "Player created successfully"

        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const update = async (req, res) => {
    try {
        const data = req.body
        let player = await Players.findById(req.params.id)
        if (!player) return res.status(404).json({ error: "player not found" })
        let udpateplayer = await Players.findByIdAndUpdate({ _id: req.params.id }, data, { new: true })
        return res.status(200).json({
            udpateplayer,
            message: "Player updated successfully"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const deletePlayer = async (req, res) => {
    try {
        let player = await Players.findById(req.params.id)
        if (!player) return res.status(404).json({ error: "player not found" })
        await Players.findOneAndDelete({ _id: req.params.id })
        return res.status(200).json({ message: `${player.name} Deleted` });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}




