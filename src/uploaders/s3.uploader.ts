export const s3Uploader = {
    upload: async (filename: string) => {
        // upload the file to s3 bucket
        console.log(`Uploading ${filename} to s3 bucket...`);

        return `https://s3.aws.com/${filename}`;
    }
};