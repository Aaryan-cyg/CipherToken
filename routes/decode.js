const express =require('express');
const router = express.Router();
const decodeJWT = require('../utils/jwtDecoder');

router.post('/',(req,res) => {
    const token = req.body.token;
    try{
        const decode= decodeJWT(token);
        res.json(decode);
    }catch(err){
        res.status(400).json({error:"Invalid Token"})
    }
});

module.exports = router;