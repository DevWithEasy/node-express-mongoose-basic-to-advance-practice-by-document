const router = require("express").Router()
const {logicalQuery, comparisonQuery} = require("../controllers/productControllers")

router.post("/comparison-query",comparisonQuery)
      .post("/logical-query",logicalQuery)

module.exports = router
