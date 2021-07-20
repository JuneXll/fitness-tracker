const router = require("express").Router();
const Workout = require("../models/exercise");

//Requests for all routes
router.get("api/workouts",(req,res)=>{
    Workout.find()
        .then(dbData=>{
            res.json(dbData);
        })
        .catch(err=>{
            res.status(400).json(err);
        });
})

//Request for range
router.get("api/workouts/range",(req,res)=>{
    Workout.find()
        .then(dbData=>{
            res.json(dbData);
        })
        .catch(err=>{
            res.status(400).json(err);
        })
})

//Post a workout
router.post("api/workouts",({body},res)=>{
    Workout.create(body)
        .then(dbData=>{
            res.json(dbData);
        })
        .catch(err=>{
            res.status(404).json(err);
        })
})