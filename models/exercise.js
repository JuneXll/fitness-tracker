const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Workout Schema
const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            name:{
                type:String,
                trim: true,
                require: "Enter Exercise name"
            },
            type:{
                type:String,
                trim: true,
                require:"Enter exercise type"
            },
            weight:{
                type:Number
            },
            sets:{
                type:Number
            },
            reps:{
                type:Number
            },
            duration:{
                type:String,
                trim:true,
                require:"Enter duration"
            }
        }
    ]
})

//Creates mongoose workout model and applies workout schema to that model
const Workout = mongoose.model("workout",WorkoutSchema);

module.exports = Workout;