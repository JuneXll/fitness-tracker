const router = require("express").Router();
const path = 

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname + "/index.html"));
});

router.get("/exercise",(req,res)=>{
    res.sendFile(path.join(__dirname + "../public/js/exercise.html"));
});

router.get("/stats",(req,res)=>{
    res.sendFile(path.join(__dirname + "../stats/js/exercise.html"));
});

module.exports = router;