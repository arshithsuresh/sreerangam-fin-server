const express = require('express');
const get_assets = require('../../database/assets/get_assets')
const router = express.Router();

router.get("/all/:page", async (req,res,next)=>{
    console.log("GET :: All Assets ")
    const page = req.params.page;
    const data = await get_assets.GetAllAssets(page);
    res.status(200).json(
        {
            "status":"sucess",
            "data":data
        }
    )
    return next();
})

router.get("/id/:assetid", async (req,res,next)=>{
    const asset_id = req.params.assetid;
    const data = await get_assets.GetAssetDetails(asset_id);
    if(data.length > 0)
    {
        res.status(200).json(
            {
                "status":"sucess",
                "data":data.at(0)
            }
        )
    }
    else{
        res.status(204).json(
            {
                "status":"failed",
                "message":"No Data Found!"
            }
        )
    }
    
    return next();
})

router.get("/date", async (req,res,next)=>{
    console.log("GET :: Assets by date")
    console.log(req.query)
    res.status(200)
    res.send("Assets by date")
})

router.get("/", async (req,res,next)=>{
    res.json({
        alive:true
    })
    return next()
});

module.exports = router