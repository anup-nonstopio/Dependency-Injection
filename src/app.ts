// Simulating file upload service to learn dependency injection in TypeScript
import express from 'express';
import { port } from '../server';
import { fileController } from './file.controller';

const app = express();

// Simulating file upload service
app.get('/file-upload', fileController.upload);

app.get('/', (req, res) => {
    res.json({ message: `Please go to http://localhost:${port}/file-upload` });
});

export default app;
