const express = require('express');
const app = express();

app.use(express.json());
app.use((req,res, next) => {
console.log("Hello from middleware");
})

module.exports = app;