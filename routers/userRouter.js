const router = require("express").Router()
const { createUser, getUsers } = require("../controllers/userControllers")

router.post("/",createUser)
      .get("/",getUsers)


module.exports = router
