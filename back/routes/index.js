const express = require("express")
const router = express.Router()

const operation = require ("./operation")

router.use("/operation", operation )

module.exports = router;