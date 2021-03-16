const fs = require("fs");
const path = require("path");
const express = require("express");

async function sendFileIfExists(req, res, next) {
  const name = req.params.name;
  const file = path.join(__dirname, `../json/${name}.json`);

  try {
    await fs.promises.access(file, fs.constants.R_OK);
    res.sendFile(file);
  } catch (error) {
    next();
  }
}

const router = express.Router();
router.get("/:name", sendFileIfExists);

module.exports = router;
