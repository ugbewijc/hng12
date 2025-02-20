import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).json({
        "email": "ugbewijc@gmail.com",
        // "current_datetime": new Date().toISOString().split('.')[0] + 'Z',
        // "github_url": "https://github.com/ugbewijc/hng12"
    });
})

app.use((req, res, next) => {
    res.status(404).json({ data: 'Not Found' });
  });

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
}) 
export default app