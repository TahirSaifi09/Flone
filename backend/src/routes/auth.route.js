import express from "express";
import { router } from "express";
import {register, login} from "../controllers/auth.contoller.js";


router.post("/login", login)
router.post("/register", register)

module.exports = router;