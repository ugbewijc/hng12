/**
 * 
 */

import express from 'express';
import ClassifyNumberController from '../controllers/ClassifyNumberController.js';

const classifyNumberRouter = express.Router();

classifyNumberRouter.get('/', ClassifyNumberController.classifyNumber);

export default classifyNumberRouter;
