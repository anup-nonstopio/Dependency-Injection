// Simulating file upload service to learn dependency injection in TypeScript
import express from 'express';
import { port } from '../server';
import { fileController } from './controllers/file.controller';
import { s3Uploader } from './uploaders/s3.uploader';

const app = express();

// Simulating file upload service
app.get('/file-upload', (req, res) => fileController.upload(req, res, { uploader: s3Uploader }));

app.get('/', (req, res) => {
    res.json({ message: `Please go to http://localhost:${port}/file-upload` });
});

export default app;
