import { Router } from "express";
import { create, deletePlayer, findAll, findAllHighest, update } from "../controllers/players.controller.js";

const router = Router();

router.get("/", findAll);
router.get("/highest", findAllHighest);
router.post("/", create);
router.patch("/:id", update);
router.delete("/:id", deletePlayer);

export default router;
