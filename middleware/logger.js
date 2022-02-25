//library to get real time
const moment = require("moment");

//middleware AKA code that runs after request/response operation
const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
    }: ${moment().format()}`
  );
  next();
};

module.exports = logger;
