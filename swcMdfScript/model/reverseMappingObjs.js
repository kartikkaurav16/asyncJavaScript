
var mongoose = require('mongoose');

var reverseMappingObjsModel = function() {
    //var entitlementSchema = mongoose.Schema({entitlementDisplayName: String, entitlementName: String,entitlementTag: String,entitlementDescription:String,tagId:Number});
    var mapping_objects = mongoose.Schema({
        entitlementAuditId : Number,
        reverseMappingObjects : Array,//saved here too
        itemFamilyName: String,
       itemName: String,
       inventoryItemId : String
    });

    return mongoose.model('reverse_mapping_audit_objects', mapping_objects);
    //var subscription_line_model = mongoose.model('lines', subscription_line_schema);
    //return subscription_line_model;
};

module.exports = reverseMappingObjsModel();






