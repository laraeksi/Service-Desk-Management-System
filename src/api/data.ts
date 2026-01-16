import axios from 'axios';
import type { Request, Response } from 'express';
import type { SampleData } from './types.js';

const DATA_URL = 'https://sampleapi.squaredup.com/integrations/v1/service-desk?datapoints=30';

export const GET = async (req: Request, res: Response) => {
    const { data } = await axios.get<SampleData>(DATA_URL)
    res.send(data);
};

// Create Express router and export as default
import express from 'express';
const router = express.Router();
router.get('/', GET);
export default router;