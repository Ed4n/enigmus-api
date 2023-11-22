import { Questions } from "../models/questions.model.js";

export const findAll = async (req, res) => {
    try {
        let questions = await Questions.find({});
        let questionsLenght = questions.length.toString();
        return res.status(200).json({
            succes: true,
            questions,
            message: "Questions retrieved successfully",
            questionsLenght
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const findRandomQuestions = async (req, res) => {
    try {
        const randomQuestions = await Questions.aggregate([{ $sample: { size: 10 } }]);
        return res.status(200).json({ questions: randomQuestions });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export const create = async (req, res) => {
    try {
        let question = new Questions(req.body);
        await question.save();
        return res.status(200).json({ question, message: "Question added succesfully!" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const update = async (req, res) => {
    try {
        const data = req.body
        let question = await Questions.findById(req.params.id)
        if (!question) return res.status(404).json({ error: "question not found" })
        let updateQuestion = await Questions.findByIdAndUpdate({ _id: req.params.id }, data, { new: true })
        return res.status(200).json({ updateQuestion, message: "Question updated succesfully!" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const deleteQuestion = async (req, res) => {
    try {
        let question = await Questions.findById(req.params.id)
        if (!question) return res.status(404).json({ error: "Question not found :(" })
        await Questions.findOneAndDelete({ _id: req.params.id })
        return res.status(200).json({ message: `The question: [[${question.question}]]. Was deleted succesfully!` });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}




