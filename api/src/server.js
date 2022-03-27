require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

import express from 'express';

const app = new express();

app.listen(process.env.PORT, () => console.log(process.env.PORT));