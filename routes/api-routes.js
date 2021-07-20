const router = require("express").Router();
const Workout = require("../models/exercise");

//Requests for all routes
router.get("api/workouts", async (req,res)=>{
    try {
        Workout.find()
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
        Workout.find()
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
        Workout.create(body)
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
        Workout.findByIdAndUpdate(params.id,{$push:{exercise:body}})
        .then((dbData)=>{
            res.json(dbData);
        })
    }catch(err){
            res.status(400).json(err);
    }
})

module.exports = router;