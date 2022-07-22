const mongoose = require("mongoose");

const fileSchema = mongoose.Schema(
    {
        fileName: {
            type: String,
            required: true,
        },
    },
        {
            timestamps: true,
        }
    
);
const File = mongoose.model("File",fileSchema)
module.exports = File;

// const dataSchema = mongoose.Schema(
//     {
//         title: {
//             type: String,
//             required: true,
//         },
//         name: {
//             fname: {
//                 type: String,
//                 required: true,
//             },
//             lname: {
//                 type: String,
//                 required: true,
//             }
//         },
//         pic: {
//             type: String,
//             requried: true,
//             default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
//         },
        

//     },
//     {
//         timestamps: true,
//     }
// );
// const Data = mongoose.model("Data", dataSchema)

// module.exports = Data;