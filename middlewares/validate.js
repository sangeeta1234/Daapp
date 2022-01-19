const express = require("express");
const VanDaCommon = require("../common/VanDaCommon");
const lodash = require("lodash");

module.exports.ValidateRequest = async(req,res,next)=>{
    if(lodash.isEmpty(req.body)){
        var error = {}
        error.reponse='failure';
        error.error='1';
        error.errordesc='Data Cannot Be empty';
        next(error);
    }
    next();
}