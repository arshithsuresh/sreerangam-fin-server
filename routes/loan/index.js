const express = require('express');
const router = express.Router();
const get_assets = require('../../database/assets/get_assets')

router.get("/id/:loan_id", async (req,res,next)=>{
    const loan_id = req.params.loan_id;
    const loan_data = await get_assets.GetAssetsByLoan(loan_id);    
    const interest_data = await get_assets.GetAllInterest(loan_id);
    if(loan_data.length>0 && loan_id.length > 0)
    {
        res.status(200).json(
            {
                "status":"sucess",
                "data":{
                    ...loan_data.at(0),
                    interest_paid:interest_data
                }
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
});

module.exports = router