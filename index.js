//import stuff
const path = require("path");
const express = require("express");
//imports logger.js file
const logger = require("./middleware/logger");

const { parse } = require("path");

const app = express();

//init middleware
//app.use(logger);

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route, set static folder for html,css files
app.use(express.static(path.join(__dirname, "public")));

//members API Routes with members.js file
app.use("/api/members", require("./routes/api/members"));

//choose default port or port 5000
const PORT = process.env.PORT || 5000;

//init app with port
app.listen(PORT, () => console.log(`server started on port: ${PORT}`));
