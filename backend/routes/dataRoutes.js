const express = require("express");

const { createData, getData, fileUpload } = require("../Controller/dataController")

const router = express.Router();

// router.route('/create').post(createData);
// router.route('/getData').get(getData);
router.route('/upload').post(fileUpload);

module.exports = router;