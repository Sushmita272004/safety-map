const express = require("express");
const cors = require("cors");
const safetyRoutes = require("./routes/safety");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/safety", safetyRoutes);

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
