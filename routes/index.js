const router = require ("express").Router()

const Customer = require("./customerRouter.js")
const CustomerAdmin = require("./customerAdminRouter.js")

router.use("/api/v1/customers",Customer)
router.use("/customers",CustomerAdmin)

module.exports = router