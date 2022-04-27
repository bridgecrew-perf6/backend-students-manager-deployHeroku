import userController from './controllers/userController';
import { Router } from 'express';

const routes = Router();

routes.get("/students", userController.index);
routes.post("/students", userController.store);
routes.get("/students/:id/delete", userController.destroy)

export default routes;