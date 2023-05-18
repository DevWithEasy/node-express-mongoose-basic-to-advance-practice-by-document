const User = require("../model/User")

exports.createUser=async(req,res)=>{
    try {

        const newUser = new User({
            ...req.body
        })

        const user = await newUser.save()

        res.status(200).json({
            success : true,
            status : 200,
            message : '',
            data : {
                user
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

exports.getUsers=async(req,res)=>{
    try {

        const users = await User.find()

        res.status(200).json({
            success : true,
            status : 200,
            message : '',
            data : {
                users
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