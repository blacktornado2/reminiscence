require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connecDB = require("./config/connectDB");
const postsRoutes = require("./routes/posts.routes");

const app = express();

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: false }));

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

connecDB(DB_URL);
app.use("/posts", postsRoutes);

app.listen(PORT, () => console.log(`Server listeinig on port ${PORT}`));
