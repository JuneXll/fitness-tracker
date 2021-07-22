const router = require("express").Router();
const db = require("../models/exercise");

//Requests for all routes
router.get("api/workouts", async (req,res)=>{
    try {
        db.find()
        .then((dbData)=>{
            res.json(dbData);
        })
    } catch(err) {
        res.status(400).json(err);
        console.log(err);
    }
})

//Request for range
router.get("api/workouts/range",async (req,res)=>{
    try {
        db.find()
        .then((dbData)=>{
            res.json(dbData);
        })
    }catch(err){
        res.status(400).json(err);
        console.log(err);
    }
})

//Post a workout
router.post("api/workouts", async ({body},res)=>{
    try{
        db.create(body)
        .then((dbData)=>{
            res.json(dbData);
        })
    }catch(err){
        res.status(404).json(err);
    }
})

//Update workout
router.put("api/workout/:id",async ({body,params},res)=>{
    try{
        db.findByIdAndUpdate(params.id,{$push:{exercise:body}})
        .then((dbData)=>{
            res.json(dbData);
        })
    }catch(err){
            res.status(400).json(err);
    }
})

module.exports = router;