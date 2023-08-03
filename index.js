const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const CORS = require("cors");

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send("All Right");
})

const authenticationRoutes = require("./routes/authenticationRoute");
app.use("/auth", authenticationRoutes);
const passengerRoutes = require("./routes/passengerRoute");
app.use("/passenger", passengerRoutes);
const adminRoutes = require("./routes/adminRoute");
app.use("/admin", adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Started On Port ${PORT}`);
});
