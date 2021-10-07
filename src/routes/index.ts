import { Router } from "express";
import { UrlController } from "../controllers/UrlController";

const routes = Router();
const urlController = new UrlController();

routes.post("/shorten", urlController.execute);
routes.get("/:hash", urlController.handleRedirect);

export { routes };