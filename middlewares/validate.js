const express = require("express");
const VanDaCommon = require("../common/VanDaCommon");
const {tblBookDetail} = require("../models/mongo/mongo.config.js")
const redis = require("redis");
const REDIS_PORT = process.env.REDIS_PORT;
const client = redis.createClient(REDIS_PORT);
//const lodash = require("lodash");

module.exports.ValidateRequest = async(req,res,next)=>{
    var page = req.query.page || 1;
    var records_per_pag = req.query.limit || 2;
    var offset = ((page-1) * records_per_pag);
    var book_key = offset+limit;
    var result  = await client.get("bookdetail"+book_key);
    if(lodash.isEmpty(result)){
        var error = {}
        error.reponse='failure';
        error.error='1';
        error.errordesc='Data Cannot Be empty';
        next(error);
    }
    next();
}
