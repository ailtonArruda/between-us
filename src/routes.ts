import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CretateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CretateTagController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);

export { router };
