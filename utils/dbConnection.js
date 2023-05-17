const mongoose = require('mongoose')

const dbConnection = ()=>{
  mongoose.connect(process.env.DATABASE_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(()=>{
    console.log('Database connection established')
  })
  .catch((error)=>{
    console.log('Database connection error')
  })
}

module.exports = dbConnection;
