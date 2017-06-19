import { Router } from 'express';
import * as AdminController from  './controller';

const routes = new Router();

routes.get('/', AdminController.showAdminPage);


export default routes;
