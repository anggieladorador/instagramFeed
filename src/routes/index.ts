import { getMyFeed } from "controller/instagram";
import { Router } from "express";
const router: Router = Router();

router.get("/getFeed", getMyFeed);

export default router;
