const express = require('express');
const path = require('path');
const helmet = require('helmet');
const limit = require("express-rate-limit");

const port = process.env.PORT || 8080;
const app = express();
const limiter = new limit({
  windowMs: 20 * 60 * 1000, // 15 minutes
  max: 200, // limit each IP to 100 requests per windowMs
  delayMs: 0, // disable delaying - full speed until the max limit is reached
});

app.use(limiter);

const forceSsl = function (req, res, next) {
  if (req.headers["x-forwarded-proto"] !== "https") {
    return res.redirect(["https://", req.get("Host"), req.url].join(""));
  }
  return next();
};

app.use(helmet({
  contentSecurityPolicy: false,
}));

app.use(forceSsl);

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(port);