const express = require('express');

const router = express.Router()

const User = require('../model/user')


router.get('/' , async (req, res)=>{
    try{
        const user = await User.find()
        res.json(user)
    }catch(e){
        res.status(500).json({message : e.message})
    }
})


router.get('/:id' , async (req, res)=>{
    try{
        dp = await  User.findOne({"user_id" : req.params.id} , function(err , doc){
            if(err){
                return res.status(404).json({message :'not found'})
            }
            return res.status(202).json({User : doc})
        });
    }catch(e){
        return res.status(500).json({message : e.message})
    }
    
})



router.post('/' , async(req, res)=>{
    const newUser = new User({
        user_id: req.body.user_id,
        name: req.body.name,
    })
    try{
        const result = await newUser.save();
        res.status(201).json(result);
    }catch(err){
        res.status(400).json({message : err.message})
    }
})


router.put('/:id' , async (req, res)=>{
    let user;
    try{
        user = await  User.findOne({"user_id" : req.params.id} , function(err , doc){
            if(err){
                return res.status(404).json({message :'not found'})
            }
            user= doc;
        });
    }catch(e){
        return res.status(500).json({message : e.message})
    }

    user.user_id =  req.body.user_id;
    user.name =  req.body.name;
    try{
        const result = await user.save();
        res.status(201).json(result);
    }catch(err){
        res.status(400).json({message : err.message})
    }
})



module.exports = router