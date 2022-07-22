const asyncHandler = require('express-async-handler');
const Data = require("../Models/dataModel");
const multer = require('multer');

const fileUpload = asyncHandler (async(req,res)=>{

    var Storage = multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null,"/images");
        },
        filename: (req, file, callback) => {
            callback(null,file.fieldname);
        }
    });


console.log(req)



})
// const createData = asyncHandler(async (req, res) => {

//     //console.log(req.body);
//     // console.log(req)
//    // console.log(req.body.userData)
//     const title= req.body.title
//     const fname=req.body.name.fname
//     const lname=req.body.name.lname
//     //const { title, fname, lname } = req.body
//     if (!title || !fname || !lname) {
//         res.status(400);
//         throw new Error("Please write the title")
//     }
//     const data = new Data({title,name:{fname,lname}})
//     const createdData = await data.save();
//     res.status(201).json(createdData);

// })
// const getData = asyncHandler(async (req, res) => {
//     const alldata = await Data.find();
//     //console.log(alldata)
//     res.status(201).json(alldata);

// })
module.exports = { 
    fileUpload
    // createData, 
    // getData 
};