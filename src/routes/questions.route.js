import { Router } from "express";
import { create, deleteQuestion, findAll, findRandomQuestions, update } from "../controllers/questions.controller.js";

const router = Router();

router.get("/", findAll);
router.get("/randomQuestions", findRandomQuestions);
router.post("/", create);
router.patch("/:id", update);
router.delete("/:id", deleteQuestion);


export default router;
