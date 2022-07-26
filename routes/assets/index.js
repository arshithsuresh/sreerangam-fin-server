const express = require('express');
const get_assets = require('../../database/assets/get_assets')
const router = express.Router();

router.get("/all", (req,res,next)=>{
    console.log("GET :: All Assets ")
    get_assets.GetAllAssets();
    res.send("All assets")
})

router.get("/id/:assetid", (req,res,next)=>{
    console.log("GET :: Assets by ID")

    res.send("Assets by id")
})

router.get("/date",(req,res,next)=>{
    console.log("GET :: Assets by date")
    console.log(req.query)
    res.status(200)
    res.send("Assets by date")
})

router.get("/*", (req,res,next)=>{
    res.json({
        alive:true
    })
    return next()
});

module.exports = router