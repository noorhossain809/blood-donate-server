const mongoose = require("mongoose");
const dotenv = require("dotenv").config();


const app = require("./app");

// database connection
mongoose.connect(process.env.Database_Local).then(() => {
  console.log('Database connect successfully');
})


// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
