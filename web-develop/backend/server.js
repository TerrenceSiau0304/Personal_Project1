import express from 'express';
import cors from 'cors';
import moongoose from 'mongoose';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
moongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true }
);
const connnection = moongoose.connection;
connnection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`);
}); 