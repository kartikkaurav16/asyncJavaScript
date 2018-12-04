var mongoose = require('mongoose');
var getAuditModel = function() {
    console.log("model requested")
    var audit_log_schema = mongoose.Schema({
        entitlementAuditId : Number,
        ccoUserId : String,//saved here too
        reasonCode: Array,
        createdDate: Date, 
        mdfLeafNodeId: Number,
        entitlementAuditId : Number,
        reverseMappingObjects : Array,//saved here too
        itemFamilyName: String,
       itemName: String,
       inventoryItemId : String
    });

    return mongoose.model('audit_log_objects', audit_log_schema);
    //var subscription_line_model = mongoose.model('lines', subscription_line_schema);
    //return subscription_line_model;
};

module.exports = getAuditModel();

