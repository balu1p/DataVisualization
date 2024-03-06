import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDb } from './DB/db.js';
import getDataRouter from './routes/data.route.js';

const app = express();
dotenv.config();

connectDb()

const port = process.env.PORT || 5050

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/data', getDataRouter);

app.listen(port, ()=>{
    console.log(`App running on ${port}`)
})