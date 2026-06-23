const app = require("./app");
const express = require("express/lib/express");
const userRouter = require("./routes/userRoutes");
const port = 3000

app.listen(port, () => {
    console.log("Server is running on port " + port);

})

app.use('/api/users', userRouter);
app.use('/api/users/:id', userRouter);