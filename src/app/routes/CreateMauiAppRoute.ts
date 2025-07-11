

import express, { Router } from 'express';
import CreateMauiAppController from '../controllers/CreateMauiAppController';

const CreateMauiAppRoute = Router();

CreateMauiAppRoute.post('/create-maui-app', CreateMauiAppController.createMauiApp);

export default CreateMauiAppRoute;