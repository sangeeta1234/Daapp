const mongoose = require('mongoose');
if (process.env.MONGODB_CONNECTION_STRING_CALLBACK) {
  
  const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_CONNECTION_STRING_CALLBACK, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
      });

      console.log('Mongo Connected');
    } catch (error) {
      console.log('Failed to connect Mongo');
      console.log(error);
    }
  };
  connect();
}

module.exports = {
  tblConsumerLogs: require('./tblConsumerLogs'),
  tblLogs: require('./tblLogs')
};
