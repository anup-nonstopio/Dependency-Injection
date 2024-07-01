import { Request, Response } from "express";

export const fileController = {
    upload: (req: Request, res: Response) => { 
        res.json({ message: 'File uploaded successfully' });
    },
}