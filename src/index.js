const express = require("express");

const dotenv = require("dotenv");
const connection = require("./config/db_config");
const router = require("./routers/school.routes");
dotenv.config();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded());

app.use("/school", router);

// Define routes

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
