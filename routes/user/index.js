const express = require('express');
const get_assets = require('../../database/assets/get_assets')
const router = express.Router();

router.get("/", (req,res,next)=>{
    res.json({
        alive:true
    })
    return next();
});

router.get("/assets", async (req,res,next)=>{
    const assets = await get_assets.GetAssetsOfUser(1001);
    res.status(200).json(
        {
            "status":"sucess",
            "data":assets
        }
    )
    return next()
});

module.exports = router