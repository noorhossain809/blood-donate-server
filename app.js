const express = require("express");
const cors = require("cors");
const app = express();
const bloodRequestRouter = require("./routes/v1/requestBlood.routes")
const donnerRouter = require("./routes/v1/donner.routes")

 
// middleware
app.use(express.json());
app.use(cors())

app.use("/api/v1/bloodRequest", bloodRequestRouter)
app.use("/api/v1/donner", donnerRouter)


app.get("/", (req, res) => {
    res.send("Route is working! YaY!")
})

module.exports = app;