import express from 'express';
import cors from "cors";
import bodyParser from "body-parser";

import LinksRouter from './Routes/LinkRouter.js';
import connectDB from './database.js';
connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/Links', LinksRouter);

const port = 3300;

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});
