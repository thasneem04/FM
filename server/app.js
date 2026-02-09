import express from 'express';
import cors from 'cors';
import enquiryRoutes from './routes/enquiryRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ success: true });
});

app.use('/api', enquiryRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

export default app;
