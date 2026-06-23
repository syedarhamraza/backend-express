const dns = require("dns/promises");
dns.setServers(["1.1.1.1"]);

const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

//Db
const uri = process.env.MONGO_DB;
mongoose.connect(uri).then(()=>{
    console.log("MongoDB Connected");
}).catch(err=>{
    console.log("Error:", err);
});

const port = 3000
app.listen(port, () => {
    console.log("Server is running on port " + port);
})