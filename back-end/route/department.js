const express = require('express');

const router = express.Router()

const Department = require('../model/dp')


router.get('/' , async (req, res)=>{
    try{
        const department = await Department.find()
        res.json(department)
    }catch(e){
        res.status(500).json({message : e.message})
    }
})


router.get('/:id' , async (req, res)=>{
    try{
        dp = await  Department.findOne({"department_id" : req.params.id} , function(err , doc){
            if(err){
                return res.status(404).json({message :'not found'})
            }
            return res.status(202).json({Department : doc})
        });
    }catch(e){
        return res.status(500).json({message : e.message})
    }
    
})



router.post('/' , async(req, res)=>{
    const newDp = new Department({
        department_id: req.body.department_id,
        name: req.body.name,
        teams: req.body.teams,
        inCharge: req.body.inCharge
    })
    try{
        const result = await newDp.save();
        res.status(201).json(result);
    }catch(err){
        res.status(400).json({message : err.message})
    }
})


router.put('/:id' , async (req, res)=>{
    let dp;
    try{
        dp = await  Department.findOne({"department_id" : req.params.id} , function(err , doc){
            if(err){
                return res.status(404).json({message :'not found'})
            }
            dp= doc;
        });
    }catch(e){
        return res.status(500).json({message : e.message})
    }

    dp.department_id =  req.body.department_id;
    dp.name =  req.body.name;
    dp.teams =  req.body.teams;
    dp.inCharge =  req.body.inCharge;
    try{
        const result = await dp.save();
        res.status(201).json(result);
    }catch(err){
        res.status(400).json({message : err.message})
    }
})



module.exports = router


