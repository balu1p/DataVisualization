import express from 'express';
import { filteredAllData, filteredByAny, filteredByYear, getData } from '../controllers/data.controller.js';

const router = express.Router();


router.get('/all',getData);
router.get('/year/:year', filteredByYear);
router.get('/filterdata', filteredAllData);
router.get('/any/:search', filteredByAny);

export default router;