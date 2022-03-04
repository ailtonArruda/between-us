import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CretateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CretateTagController();
const authenticateUserController = new AuthenticateUserController;

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);

export { router };
