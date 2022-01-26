
const express = require("express");
const {sequelize,QueryTypes} = require("../../models/mysql/mysql.config.js")
const utility = require("../../common/utility")

module.exports.EndTrip = async(req,res,next)=>{
    // console.log(utility.CalculateDistance(
    //     {latitude:'19.15514575','longitude':'72.83270563'},
    //     {latitude:'19.1561952','longitude':'72.8348894'}
    //     ));
    // console.log(utility.HaversineDistanceFormula('19.15514575','72.83270563','19.1561952','72.8348894'))
    
    try{
        console.log("entered");
        var result = sequelize.query("Select * from tbl_driver_trip_detail Where trip_id=:ids",
            {
                type: QueryTypes.SELECT,
                replacements: {ids: 'locus_14910_0118120335'}
            },
            )
            .then(result=>{
               return result;
            }).catch(e=>{
                console.log("Something went wrong",e);
            var TripIdArray = [];    
            array.forEach(result => {
                TripIdArray.push(result.trip_id);
            });

            console.log(TripIdArray);
      })
    }catch(error){
        console.log("Something went wrong",error)
    }
};