export const cloudinaryUploader = {
    upload: async (filename: string) => {
        // upload the file to Cloudinary
        console.log(`Uploading ${filename} to Cloudinary...`);

        return `https://cloudinary.com/${filename}`;
    }
};