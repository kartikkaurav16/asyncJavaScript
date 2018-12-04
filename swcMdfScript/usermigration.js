const express = require('express');
const app = express()
var mongodb = require('mongodb');
MongoClient = require('mongodb').MongoClient;
let db = require('./model/db') 
let getUserModel = require('./model/users')
let reverseMappingObjsModel= require('./model/reverseMappingObjs')
let mongoose = require('mongoose');
var xl = require('excel4node');
var wb = new xl.Workbook();
// Create a new instance of a Workbook class

 
// Add Worksheets to the workbook
var workSheet = wb.addWorksheet('userLogReport');
var style = wb.createStyle({
  font: {
    color: '#000000',
    size: 12,
    bold: true 
  },
  numberFormat: '$#,##0.00; ($#,##0.00); -',
});
 
//Set value of cell A1 to 100 as a number type styled with paramaters of style
workSheet.cell(1, 1)
  .string('parentContainerId')
  .style(style);
 
workSheet.cell(1, 2)
  .string('ebUserIdLower')
  .style(style);
 
workSheet.cell(1, 3)
  .string('partnerAccountId')
  .style(style);
 
// workSheet.cell(1, 4)
//   .string('itemName')
//   .style(style);
 
// workSheet.cell(1, 5)
// .string('reasonCode')
// .style(style);

// workSheet.cell(1, 6)
// .string('itemFamilyName')
// .style(style);



app.listen(3000); 


// var getRecords = function(Id, callback) {
//   console.log("query data")
//  getAuditModel.find({"reasonCode": 174, "createdDate": { $gte:new Date("2018-09-21T00:00:00.000Z"), $lte:new Date("2018-09-21T00:10:00.000Z")}})
//  .exec(function(err, response) {
//    console.log('executing');
//    console.log("query executed without error ")
//    if (err) {
//      console.log("got error " + err)
//      callback(err,null);
//    }else
//    console.log("processing data  " +  response)
//    callback(null, response);
//  });
// }


var getAggregateRecords = function(Id, callback) {
  console.log("query data")
  getUserModel.find({source:"CI",
  "partnerAccountId" : "2b89525d-d39b-4b8b-8814-2b235d777a10","isPartnerDelegate" : "Y"
  }, {
"_id" : 0,
"parentContainerId" : 1,
"ebUserIdLower" : 1,
"partnerAccountId" : 1
}).exec(function(err, response) {
   console.log('executing');
   console.log("query executed without error")
   if (err) {
     console.log("got error " + err)
     callback(err,null);
   }else
   console.log("processing data  " +  response)
   console.log('data')
   callback(null, response);
 });
}



// getRecords("dehollow", function(err,response) {
//   console.log('')
// 	if (err) {
// 		console.log("err: "+ err);
// 		return ;
// 	}else{
//     console.log(response)
//    // writeDatatoFile(response)
//   }
// });

getAggregateRecords("dehollow", function(err,response) {
  console.log('')
	if (err) {
		console.log("err: "+ err);
		return ;
	}else{
    console.log(response)
    writeDatatoFile(response)
    console.log('process completed')
  }
});

function writeDatatoFile(data){
  for (let i = 2; i < data.length; i += 1) {
    workSheet.cell(i + 2, 1).string(data[i].parentContainerId);
    workSheet.cell(i + 2, 2).string(data[i].ebUserIdLower);
    workSheet.cell(i  + 2, 3).string(data[i].partnerAccountId);
    wb.write('userRepo.xlsx');
  }
}











 





    





