import { Router } from "express";
import { listDisciplinas, showNewDisciplina, createDisciplina, deleteDisciplina } from "../controllers/DisciplinaController";
import { listTurmas, showNewTurma, createTurma, requestDeleteTurma, confirmDeleteTurma } from "../controllers/TurmaController";

const router = Router();

router.get("/disciplinas", listDisciplinas);
router.get("/disciplinas/new", showNewDisciplina);
router.post("/disciplinas", createDisciplina);
router.post("/disciplinas/:id/delete", deleteDisciplina);

router.get("/disciplinas/:disciplinaId/turmas", listTurmas);
router.get("/disciplinas/:disciplinaId/turmas/new", showNewTurma);
router.post("/disciplinas/:disciplinaId/turmas", createTurma);
router.post("/turmas/:id/request-delete", requestDeleteTurma);
router.get("/turmas/:id/confirm-delete/:token", confirmDeleteTurma);

export default router;
