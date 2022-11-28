const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const db = require("../db");
var cors = require('cors')

router.get("/groups", cors(), (req, res) => {
  let sql = fs
    .readFileSync(path.resolve(process.env.BASEDIR, "sql/groups.sql"))
    .toString();

  db(sql)
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

router.get("/metrics", cors(), (req, res) => {
  let sql = fs
    .readFileSync(path.resolve(process.env.BASEDIR, "sql/metrics.sql"))
    .toString();
  db(sql)
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

module.exports = router;
