import { Request, Response } from "express";
// import { s3Uploader } from "../uploaders/s3.uploader";
// import { cloudinaryUploader } from "../uploaders/cloudinary.uploader";

// gives safety to the code to make sure that the uploader has the upload method
interface Uploader {
    upload: (filename: string) => Promise<string>;
}

export const fileController = {
    upload: async (req: Request, res: Response, { uploader }: { uploader: Uploader}) => { 
        // upload the file to s3 bucket
        // await s3Uploader.upload('file.txt'); // S3 bucket is a Dependency
        // await cloudinaryUploader.upload('file.txt'); // Cloudinary is a Dependency

        // common uploader // injected when file.controller.upload() is called
        await uploader.upload('file.txt');

        res.json({ message: 'File uploaded successfully' });
    },
}