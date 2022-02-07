//simple midleware
const myLogger = (req, res, next) => {
  console.log("logging.....midleware");
  next();
};

module.exports = myLogger;
