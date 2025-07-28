import express from "express";
import { router } from "express";
import register from "../controllers/auth.contoller";

router.post("/register", register)