import express from 'express';
import { createEnquiry, createCollaboration } from '../controllers/enquiryController.js';

const router = express.Router();

router.post('/enquiry', createEnquiry);
router.post('/collaborate', createCollaboration);

export default router;
