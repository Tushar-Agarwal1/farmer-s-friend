import express from "express";
 import {login,logout,signin} from "../controllers/auth.controller.js";
const router = express.Router();

// router.get("/api/auth/login",login);
// router.get("/api/auth/signup",signin);
// router.get("/api/auth/logout",logout);
router.post("/login", login);
router.post("/signup", signin);
router.post("/logout", logout);


export default router;
