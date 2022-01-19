
const express = require("express");
const {sequelize,QueryTypes} = require("../../models/mysql/mysql.config.js")

module.exports.EndTrip = async(req,res,next)=>{
    try{
        sequelize.query("Select * from tbl_driver_trip_detail Where trip_id=:ids",
            {
                type: QueryTypes.SELECT,
                replacements: {ids: 'locus_14910_0118120335'}
            },
            )
            .then(result=>{
                console.log(result);
            }).catch(e=>{
                console.log("Something went wrong",e)
      })
    }catch(error){
        console.log("Something went wrong",error)
    }
};