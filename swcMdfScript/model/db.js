let mongoose =  require('mongoose'); 

console.log('mongoose connection')
//const dbUrl = 'mongodb://eds_auditlog_user:cisco123@mngdb-ebf-prd1-002.cisco.com:27048,mngdb-ebf-prd2-004.cisco.com:27048,mngdb-ebf-prd1-001.cisco.com:27048,mngdb-ebf-prd2-003.cisco.com:27048,mngdb-ebf-prd3-005.cisco.com:27048/eds_auditlog_db?replicaSet=com-prd-rep'

// const sbpDbUrl = 'mongodb://subscription_user:cisco123@mngdb-ebf-stg-01.cisco.com:27048/subscription_db'

const dbUrl = 'mongodb://user_user:Cisco123@mngdb-ebf-prd1-002:27048/user_db'




// var options = {server: {socketOptions: {}}};

mongoose.connect(dbUrl,  {useNewUrlParser: true,socketTimeoutMS: 600000, readPreference : "secondaryPreferred"}); 



// mongoose.connect(sbpDbUrl,  { useNewUrlParser: true }); 

// When successfully connected
mongoose.connection.on('connected', function () {  
    console.log('Mongoose default connection open to ' + dbUrl);
  }); 


  // mongoose.connection.on('connected', function () {  
  //   console.log('Mongoose default connection open to ' + sbpDbUrl);
  // }); 
  
  // If the connection throws an error
  mongoose.connection.on('error',function (err) {  
    console.log('Mongoose default connection error: ' + err);
  }); 
  
  // When the connection is disconnected
  mongoose.connection.on('disconnected', function () {  
    console.log('Mongoose default connection disconnected'); 
  });
  
  // If the Node process ends, close the Mongoose connection 
  process.on('SIGINT', function() {  
    mongoose.connection.close(function () { 
      console.log('Mongoose default connection disconnected through app termination'); 
      process.exit(0); 
    }); 
  }); 