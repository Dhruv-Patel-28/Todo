const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./Routes/Routes');

require('dotenv').config()

const app = express();

app.use(express.json());
app.use(cors())

mongoose
    .connect("mongodb+srv://dhruv:dhruv@cluster0.shxu1w8.mongodb.net/")
    .then(() => {console.log("Database connected successfully!!")})
    .catch((err) => {console.log("error---->"+err)})
app.use(routes)

app.listen(5000,() => {
    console.log(`server listening : http://localhost:${PORT}`);
})