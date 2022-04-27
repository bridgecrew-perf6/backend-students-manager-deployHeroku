import userController from './controllers/userController';
import { Router } from 'express';

const routes = Router();

routes.get("/students", userController.index);

export default routes;