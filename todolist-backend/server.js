const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cors());

connectDB();

app.use("/users", require("./routes/userRoutes"));
app.use("/todos", require("./routes/todoRoutes"));

const PORT = process.env.PORT || 6000;
// app.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

