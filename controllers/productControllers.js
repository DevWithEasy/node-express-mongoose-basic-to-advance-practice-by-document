const crypto = require('crypto')
const Product = require('../model/Product')
const uuid = crypto.randomUUID()

exports.updating=async(req,res,next)=>{
  try{

    // const products = await Product.find()

    // -------update ducuments array of object ---------
    // const {id,comment} = req.query
    // await Product.findOneAndUpdate(
    //   {
    //     _id: id,
    //     'comments._id' : comment
    //   },
    //   {
    //     $set : {
    //       'comments.$.comment' : req.body.update_comment
    //     }
    //   },
    //   {new : true}
    // )
    // const product = await Product.findById(id)
    // .populate('comments.user','-_id name email')


    // -------update ducuments $pull operator---------
    // const {id,comment} = req.query
    // const product = await Product.findByIdAndUpdate(id,{
    //   $pull : {
    //     comments : {
    //       _id : {
    //         $in : comment
    //       }
    //     }
    //   }
    // },{new : true})
    // const product = await Product.findById(id)
    // .populate('comments.user','-_id name email')


    // -------update ducuments $push operator---------
    // const {id} = req.query
    // const product = await Product.findByIdAndUpdate(id,{
    //   $push : {
    //     comments : req.body
    //   }
    // },{new : true})
    // const product = await Product.findById(id)
    // .populate('comments.user','-_id name email')
    

    // -------update ducuments $unset operator---------
    // await Product.updateMany({},{
    //   $unset :{
    //     stock : 1,
    //   }
    // })
    // const products = await Product.find()

    // -------update ducuments $rename operator---------
    // await Product.updateMany({},{
    //   $rename :{
    //     product_name : 'name',
    //   }
    // })
    // const products = await Product.find()

    // -------update ducuments $mul operator---------
    // const {id} = req.query
    // const product = await Product.findByIdAndUpdate(id,{
    //   $mul : {
    //     stock : 2
    //   }
    // },{new : true})

    // -------update ducuments $inc operator---------
    // const {id} = req.query
    // const product = await Product.findByIdAndUpdate(id,{
    //   $inc : {
    //     stock : 10
    //   }
    // },{new : true})


    // -------update many ducuments---------
    //specific many products update
    // const {ids} = req.body
    // await Product.updateMany(
    //   {
    //     _id:{
    //       $in : ids
    //     }
    //   },
    //   {
    //     $set :{
    //       stock : 40
    //     }
    //   }
    // )
    // const products = await Product.find()


    //-------update many ducuments---------
    //set new field all documents and update
    // const products = await Product.updateMany({},{
    //   $set: {
    //     stock : 20
    //   }
    // })
    // const products = await Product.find()


    // -------update single ducuments---------
    // const {id} = req.query
    // const product = await Product.findByIdAndUpdate(id,{
    //   $set : {
    //     price : 1099,
    //     'specification.cpu' : 4.1,
    //     'color.0' : 'black'
    //   }
    // },{new : true})
    res.status(200).json({
      success : true,
      status : 200,
      message : '',
      data : {
        product
      }
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

exports.sortLimit=async(req,res,next)=>{
  try{

    // -------Pagination create with $sort $skip $limit operator---------
    const {page,limit} = req.query
    const total = await Product.countDocuments()
    const pages = Math.ceil(total/limit)
    const products = await Product.find()
    .sort({
      name : -1
    })
    .skip(page > 0 ? (page-1) * limit : 0)
    .limit(limit)

    // -------Find product $sort $limit operator---------
    // const products = await Product.find()
    // .sort({
    //   name : 1
    // })
    // .limit(2)

    // -------Find product $sort operator---------
    // const products = await Product.find({
      
    // }).sort({
    //   name : -1
    // })

    res.status(200).json({
      success : true,
      status : 200,
      message : '',
      data : {
        pages,
        products
      }
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

exports.arrayQuery=async(req,res,next)=>{
  try{
    
    // -------Find product $elemMatch operator---------
    // const products = await Product.find({
    //   storage : {
    //     $elemMatch : { 
    //       $lt : 128
    //     }
    //   }
    // })
    
    // -------Find product $all operator---------
    // const products = await Product.find({
    //   color: {
    //     $all : ['purple', 'black']
    //   }
    // })

    // -------Find product $size operator---------
    // const products = await Product.find({
    //   $or : [
    //     {
    //       color : {
    //         $size : 2
    //       }
    //     },
    //     {
    //       color : {
    //         $size : 3
    //       }
    //     }
    //   ]
    // })

    res.status(200).json({
      success : true,
      status : 200,
      message : '',
      data : {
        total : products.length,
        products
      }
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

exports.elementQuery=async(req,res,next)=>{
  try{
    
    // -------Find product $type operator---------
    const products = await Product.find({
      price : {
        $type : "number"
      }
    })

    res.status(200).json({
      success : true,
      status : 200,
      message : '',
      data : {
        total : products.length,
        products
      }
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


exports.logicalQuery=async(req,res,next)=>{
  try{
    
    // -------Find product $expr operator---------
    const products = await Product.find({
      $expr : {
        $gt : ['$specification.ram',8]
      }
    })

    // -------Find product $nor operator---------
    // const products = await Product.find({
    //   $nor :[
    //     {price : 899},
    //     {color : 'gold'}
    //   ]
    // })

    // -------Find product $not operator---------
    // const products = await Product.find({
    //   price : {
    //     $not : {
    //       $gt : 599
    //     }
    //   }
    // })

    // -------Find product $or operator---------
    // const products = await Product.find({
    //   $or : [
    //     {
    //       price : {$gt : 899}
    //     },
    //     {
    //       color : {$in : ['purple']}
    //     }
    //   ]
    // })

    // -------Find product $and operator---------
    // const products = await Product.find({
    //   $and : [
    //     {
    //       price : {$gte : 699}
    //     },
    //     {
    //       color : {$in : ['black']}
    //     }
    //   ]
    // })


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
