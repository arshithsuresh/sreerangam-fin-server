const express = require('express');
const router = express.Router();

router.get("/", (req,res,next)=>{
    res.json({
        alive:true
    })
    return next()
});



module.exports = router