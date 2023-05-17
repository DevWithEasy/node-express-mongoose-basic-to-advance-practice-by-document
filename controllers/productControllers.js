const crypto = require('crypto')
const Product = require('../model/Product')
const uuid = crypto.randomUUID()

exports.logicalQuery=async(req,res,next)=>{
  try{
    
    // -------Find product $nin operator---------
    const products = await Product.find({
      price : {
        $nin : [699,799]
      },
      color : {
        $nin : ['purple']
      }
    })


    res.status(200).json({
      success : true,
      status : 200,
      message : '',
      data : {products}
    })

  }catch(err){
    console.log(err)
    res.status(500).json({
      success : true,
      status : 500,
      message : '',
      data : {err}
    })
  }
}


exports.comparisonQuery=async(req,res,next)=>{
  try{
    
    // -------Find product $nin operator---------
    const products = await Product.find({
      price : {
        $nin : [699,799]
      },
      color : {
        $nin : ['purple']
      }
    })

    // -------Find product $in operator---------
    // const products = await Product.find({
    //   storage : {
    //     $in : [128]
    //   },
    //   color : {
    //     $in : ['purple']
    //   }
    // })

    // -------Find product $ne operator---------
    // const products = await Product.find({
    //   price : {
    //     $ne : 899
    //   },
    //   "specification.ram" : {
    //     $ne : 4
    //   }
    // })

    // -------Find product $lte operator---------
    // const products = await Product.find({
    //   price: {
    //     $lte : 999
    //   },
    //   storage : {
    //     $lte : 256
    //   },
    //   "specification.screen" : {
    //     $lte : 9.5
    //   }
    // })

    // -------Find product $lt operator---------
    // const products = await Product.find({
    //   price: {
    //     $lt : 899
    //   },
    //   storage : {
    //     $lt : 128
    //   },
    //   "specification.ram" : {
    //     $lt : 8
    //   }
    // })

    // -------Find product $gte operator---------
    // const products = await Product.find({
    //   price: {
    //     $gte : 799
    //   },
    //   storage : {
    //     $gte : 128
    //   },
    //   "specification.screen" : {
    //     $gte : 8
    //   }
    // })

    // -------Find product $gt operator---------
    // const products = await Product.find({
    //   price: {
    //     $gt : 700
    //   },
    //   storage : {
    //     $gt : 128
    //   },
    //   "specification.ram" : {
    //     $gt : 4
    //   }
    // })

    // -------Find product $eq operator---------
    // const products = await Product.find({
    //   color : {
    //     $eq : 'black'
    //   },
    //   "specification.ram" : {
    //     $eq : 4
    //   }
    // })

    // -------Insert many items--------
    // await Product.insertMany(
    //   [
    //     { "name" : "xPhone", "price" : 799, "releaseDate": "2011-05-14", "specification" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
    //     { "name" : "xTablet", "price" : 899, "releaseDate": "2011-09-01" , "specification" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
    //     {  "name" : "SmartTablet", "price" : 899, "releaseDate": "2015-01-14", "specification" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
    //     {  "name" : "SmartPad", "price" : 699, "releaseDate": "2020-05-14","specification" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
    //     {  "name" : "SmartPhone", "price" : 599,"releaseDate": "2022-09-14", "specification" : { "ram" : 4, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
    //  ]
    // )

    res.status(200).json({
      success : true,
      status : 200,
      message : '',
      data : {products}
    })

  }catch(err){
    console.log(err)
    res.status(500).json({
      success : true,
      status : 500,
      message : '',
      data : {err}
    })
  }
}
