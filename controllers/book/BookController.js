
const express = require("express");
//const {sequelize,QueryTypes} = require("../../models/mysql/mysql.config.js")
const utility = require("../../common/utility")
const {tblBookDetail} = require("../../models/mongo/mongo.config.js")
const redis = require("redis");
const REDIS_PORT = process.env.REDIS_PORT;
const client = redis.createClient(REDIS_PORT);
const lodash = require("lodash");

module.exports.getBookdetail = async(req,res,next)=>{
    var page = req.query.page || 1;
    var records_per_pag = req.query.limit || 2;
    var offset = ((page-1) * records_per_pag);
    var book_key = parseInt(offset)+parseInt(records_per_pag);
    const connect = await client.connect();
    
    var result  = await client.get("bookdetail_"+book_key);
    if(lodash.isEmpty(result)){
        try{
            var result = await tblBookDetail.find().limit(records_per_pag).skip(offset);
            client.setEx("bookdetail_"+book_key,3600,JSON.stringify(result));
        }catch(err){
            console.log("Error",err);
        }
    }
    
    await client.quit();
    res.send(result);

};


