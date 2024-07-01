import app from './src/app';

export const port = 3000;

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
