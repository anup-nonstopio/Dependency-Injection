import { Request, Response } from "express";
import { s3Uploader } from "./s3.uploader";

export const fileController = {
    upload: async (req: Request, res: Response) => { 
        // upload the file to s3 bucket
        await s3Uploader.upload('file.txt'); // S3 bucket is a Dependency

        res.json({ message: 'File uploaded successfully' });
    },
}