const express = require("express")
const router = express.Router()

const operation = require ("./operation")
const user = require ("./user")

router.use("/operation", operation )
router.use("/user", user )

module.exports = router;