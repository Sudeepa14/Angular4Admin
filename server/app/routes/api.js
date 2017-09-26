const express=require('express');
const router=express.Router();

router.get('/',function(req,res){
    res.send("The API works");
});

module.exports = router;