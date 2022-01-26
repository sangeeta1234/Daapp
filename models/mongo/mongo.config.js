const mongoose = require('mongoose');
const redis = require("redis");
const dotenv = require('dotenv'); // Include .env file
dotenv.config(); // 

const REDIS_PORT = process.env.REDIS_PORT;
const client = redis.createClient(REDIS_PORT);


console.log(process.env.MONGODB_CONNECTION_STRING);
if (process.env.MONGODB_CONNECTION_STRING) {
  
  const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        //useCreateIndex: true,
        //useFindAndModify: false,
        useUnifiedTopology: true 
      });

      console.log('Mongo Connected');
    } catch (error) {
      console.log('Failed to connect Mongo');
      console.log(error);
    }
  };
  connect();
}



var tblBookDetail =  require('./tblBookDetail');

redistext  = async(req,res,next)=>{
      await client.connect();
    try{
        console.log("entered");
        var result  = await client.get("bookdetail_1");
        console.log(result);
        // var skip = 0;
        // var newresult = [];
        // tblBookDetail.find().limit(2).skip(0).then(result=>{
        //         console.log(JSON.stringify(result));
        //         result.forEach((element) => {
        //             skip=skip+1;
        //             client.setEx("bookdetail_"+skip,3600,JSON.stringify(element));

        //         });
        //         //console.log(result[0]._id);
        //     }).catch(e=>{
        //         console.log("Something went wrong",e)
        //     });

       // console.log(client.setEx("bookdetail",300,"sang3_detail"));

        // client.hmGet()
        // console.log(client.setEx("bookdetail",0,1).then(result=>console.log(result)))
        // //console.log(client.set("bookdetail","sang_book1"));
        // client.get("bookdetail",(err,data)=>{
        //     if(err) throw error
        
        //     if(data!==null){
        //         console.log(setResponse(BookDetail,data))
        //     }else{
        //         tblBookDetail.find().limit(1).skip(0).then(result=>{
        //             console.log(result);
        //             //client.setEx("bookdetail",5,result[0].id);
        //             console.log(result[0].id);
        //         }).catch(e=>{
        //             console.log("Something went wrong",e)
        //         });
        //     }
        
        // });
    }catch(err){
        console.log("Error",{err})
    }
   
}

redistext();

module.exports = {
    tblBookDetail:tblBookDetail,
    redistext:redistext
};
