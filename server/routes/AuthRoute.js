import express from "express";
import { Login, Register } from "../controllers/Auth";

const router = express.Router();

router.post("/login", Login);
router.post("/register", Register);
router.delete("/logout", logOut);

export default router;