const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

//dot config
dotenv.config();

//database connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan(`dev`));

const PORT = process.env.PORT || 3334;

//routes
//test route
app.use("/api/v1/test", require("./routes/testRoute"));

//auth route
app.use("/api/v1/auth", require("./routes/authRoute"));

//inventory
app.use("/api/v1/inventory", require("./routes/inventoryRoute"));

//analytics route
app.use("/api/v1/analytics", require("./routes/analyticsRoute"));

//admin route
app.use("/api/v1/admin", require("./routes/adminRoute"));

//static folder
app.use(express.static(path.join(__dirname, "./client/build")));

//static routes
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.DEV_MODE} mode on port:${PORT}`.bgBlack
      .white
  );
});
