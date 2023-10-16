import { Router } from "express";
import { create, deletePlayer, findAll, update } from "../controllers/players.controller.js";

const router = Router();

router.get("/", findAll);
router.post("/", create);
router.patch("/:id", update);
router.delete("/:id", deletePlayer);



export default router;
