

const express = require
const users =(req,res,next)=>{

    console.log("users middleware ");
    next();
    
}

module.exports = users;