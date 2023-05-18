const productRouter = require("./productRouter")
const userRouter = require("./userRouter")

const routes = [
  {
    path: "/api/user",
    handler : userRouter
  },
  {
    path: "/api/product",
    handler : productRouter
  },
  {
    path: "/",
    handler : (req, res) =>{
      res.send("Alhamdulillah.Server is ready !")
    }
  }
]

const applyRoutes = (app)=>{
  routes.map(r=>{
    if(r.path === "/"){
      app.get(r.path,r.handler)
    }else{
      app.use(r.path,r.handler)
    }
  })
}

module.exports = applyRoutes
