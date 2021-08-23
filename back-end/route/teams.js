const express = require('express');

const router = express.Router()

const Team = require('../model/team')


router.get('/' , async (req, res)=>{
    try{
        const team = await Team.find()
        res.json(team)
    }catch(e){
        res.status(500).json({message : e.message})
    }
})


router.get('/:id' , async (req, res)=>{
    try{
        dp = await  Team.findOne({"team_id" : req.params.id} , function(err , doc){
            if(err){
                return res.status(404).json({message :'not found'})
            }
            return res.status(202).json({Team : doc})
        });
    }catch(e){
        return res.status(500).json({message : e.message})
    }
    
})



router.post('/' , async(req, res)=>{
    const newteam = new Team({
        team_id: req.body.team_id,
        people: req.body.people,
        teamLead: req.body.teamLead
    })
    try{
        const result = await newteam.save();
        res.status(201).json(result);
    }catch(err){
        res.status(400).json({message : err.message})
    }
})


router.put('/:id' , async (req, res)=>{
    let team;
    try{
        team = await  Team.findOne({"team_id" : req.params.id} , function(err , doc){
            if(err){
                return res.status(404).json({message :'not found'})
            }
            team= doc;
        });
    }catch(e){
        return res.status(500).json({message : e.message})
    }

    team.team_id =  req.body.team_id;
    team.people =  req.body.people;
    team.teamLead =  req.body.teamLead;
    try{
        const result = await team.save();
        res.status(201).json(result);
    }catch(err){
        res.status(400).json({message : err.message})
    }
})



module.exports = router