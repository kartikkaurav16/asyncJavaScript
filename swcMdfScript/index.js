const express = require('express');
const app = express()
var mongodb = require('mongodb');
MongoClient = require('mongodb').MongoClient;
let db = require('./model/db') 
let getAuditModel = require('./model/getAudit')
let reverseMappingObjsModel= require('./model/reverseMappingObjs')
let mongoose = require('mongoose');
var xl = require('excel4node');
var wb = new xl.Workbook();
// Create a new instance of a Workbook class

 
// Add Worksheets to the workbook
var workSheet = wb.addWorksheet('auditLogReport');
var style = wb.createStyle({
  font: {
    color: '#000000',
    size: 12,
    bold: true 
  },
  numberFormat: '$#,##0.00; ($#,##0.00); -',
});
 
// Set value of cell A1 to 100 as a number type styled with paramaters of style
workSheet.cell(1, 1)
  .string('ccoUserId')
  .style(style);
 
workSheet.cell(1, 2)
  .string('createdDate')
  .style(style);
 
workSheet.cell(1, 3)
  .string('mdfLeafNodeId')
  .style(style);
 
workSheet.cell(1, 5)
.string('reasonCode')
.style(style);





app.listen(3000); 



var getRecords = function(Id, callback) {
  console.log("query data")
 getAuditModel.find({"reasonCode": 172, "createdDate": { $gte:new Date("2018-08-29T00:00:00.000Z"), 
 $lte: new Date("2018-08-30T00:00:00.000Z")}}).exec({ 
   allowDiskUse: true
},function(err, response) {
   console.log('executing');
   console.log("query executed without error ")
   if (err) {
     console.log("got error " + err)
     callback(err,null);
   }else
   console.log("processing data  " +  response)
   callback(null, response);
 });
}



getRecords(172, function(err,response) {
	if (err) {
		console.log("err: "+ err);
		return ;
	}else{
    console.log(response)
   // writeDatatoFile(response)
  }
});

function writeDatatoFile(data){
  for (let i = 6; i < data.length; i += 1) {
    workSheet.cell(i + 2, 1).string(data[i].ccoUserId);
    workSheet.cell(i + 2, 2).date(data[i].createdDate);
    workSheet.cell(i + 2, 3).number(data[i].mdfLeafNodeId);
    workSheet.cell(i + 2, 5).number(data[i].reasonCode);
    wb.write('swcReport172Aug29.xlsx');
  }
}











 





    





