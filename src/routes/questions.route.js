import { Router } from "express";
import { create, deleteQuestion, findAll, update } from "../controllers/questions.controller.js";

const router = Router();

router.get("/", findAll);
router.post("/", create);
router.patch("/:id", update);
router.delete("/:id", deleteQuestion);



export default router;
