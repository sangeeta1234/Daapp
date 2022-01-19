const { Sequelize, Op, QueryTypes } = require('sequelize');
const dotenv = require('dotenv'); // Include .env file
dotenv.config(); // 
const dateTime = require('node-datetime');
var dt = dateTime.create();
var formatted = dt.format('Y-m-d');

let sequelize = null;
const db = {};

if (process.env.MYSQL_DBNAME && process.env.MYSQL_USERNAME && process.env.MYSQL_PASSWORD && process.env.MYSQL_HOST) {
    sequelize = new Sequelize(process.env.MYSQL_DBNAME, process.env.MYSQL_USERNAME, process.env.MYSQL_PASSWORD, {
        host: process.env.MYSQL_HOST,
        dialect: 'mysql',
        logging: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
        // query: {
        //     raw: true
        // },
        // dialectOptions: {
        //     dateStrings: true,
        //     typeCast: true,
        //     ssl: {}
        // },
        // logging: console.log, // Comment to hide query on console.log
        // for writing to database
        timezone: '+05:30'
    });

    (async () => {
        try {
            await sequelize.authenticate();

            console.log('MySQL connected');
        } catch (error) {
            console.error('MySQL Connection Error : ', error);
            // process.exit(1);
        }
    })();
}


db.sequelize = sequelize;
db.Op = Op;
db.QueryTypes = QueryTypes;

db.tblDriverTripDetail = require('./tblDriverTripDetail')(sequelize, Sequelize);
// console.log(db.sequelize.query("Select * from tbl_driver_trip_detail Where trip_id=:ids",{replacements: {ids: 'SLP_5518_0111161255',type: QueryTypes.SELECT}}).then(result=>{
//     console.log(result);
// }).catch(e=>{
//     console.log("Something went wrong",e)
// }))
// console.log(db.tblDriverTripDetail.findAll(
//     {
//     where:{
//         created_time:{[Op.between]:[formatted,formatted]}
//     },raw:true, logging: console.log
// }
// ).then(result=>{
//     console.log(result);
// }).catch(e=>{
//     console.log("Something went wrong",e)
// }))
module.exports = db;