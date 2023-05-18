const router = require("express").Router()
const {sortLimit,arrayQuery,elementQuery,logicalQuery, comparisonQuery, updating} = require("../controllers/productControllers")

router.post("/comparison-query",comparisonQuery)
      .post("/logical-query",logicalQuery)
      .post("/element-query",elementQuery)
      .post("/array-query",arrayQuery)
      .post("/sort-limit",sortLimit)
      .put("/update",updating)

module.exports = router
