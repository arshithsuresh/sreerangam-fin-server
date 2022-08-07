const express = require('express');
const router = express.Router();

const assets_routes = require("./assets/index")
const user_routes = require("./user/index")
const loan_routes = require("./loan/index")
const auth_routes = require("./auth/index");

router.get("/", (req,res,next)=>{
    res.json({
        alive:true
    })
    return next();
});

router.use("/assets", assets_routes)
router.use("/loan", loan_routes)
router.use("/user", user_routes)
router.use("/auth", auth_routes)


module.exports = router;