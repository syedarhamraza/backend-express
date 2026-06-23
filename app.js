const express = require('express');
const app = express();
const morgan = require('morgan');
const userRouter = require("./routes/userRoutes");

app.use(express.json());
app.use(morgan('dev'))
app.use((req,res, next) => {
console.log("Hello from middleware");
next()
})

app.use('/api/users', userRouter);
app.use('/api/users/:id', userRouter);


module.exports = app;