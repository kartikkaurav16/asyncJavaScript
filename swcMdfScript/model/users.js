var mongoose = require('mongoose');
var getUserModel = function() {
    console.log("model requested")
    var user_schema = mongoose.Schema({
        parentContainerId : String,
        ebUserIdLower : String,//saved here too
        partnerAccountId: String

    });

    return mongoose.model('user_rp_containers_p4', user_schema);
    //var subscription_line_model = mongoose.model('lines', subscription_line_schema);
    //return subscription_line_model;
};


 module.exports = getUserModel();



// db.getCollection('user_rp_containers_p4').find({source:"CI",
//     "partnerAccountId" : "2b89525d-d39b-4b8b-8814-2b235d777a10",isPartnerDelegate : "Y"
//     }, {
// "_id" : 0,
// "parentContainerId" : 1,
// "ebUserIdLower" : 1,
// "partnerAccountId" : 1
// })

