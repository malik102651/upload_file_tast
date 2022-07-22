const express = require('express')
const dotenv = require("dotenv");
const connectDB = require("./Config/db")
const dataRoutes = require("./routes/dataRoutes")
const multer = require("multer");
const fs = require("fs");
// const {promisify} = require('util');
// const unlinkAsync = promisify(fs.unlink);

const cors = require('cors');
const File = require('./Models/dataModel');

const app = express();
dotenv.config();
connectDB()
app.use(express.json())

const corsOptions = {
    origin: 'http://localhost:3000',
    //origin: 'https://react-node-note-app1.herokuapp.com',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));




var Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './files')
    },
    filename: (req, file, cb) => {
        // cb(null, Date.now() + '-' + file.originalname)
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: Storage }).array('file')
app.post('/api/data/upload', (req, res) => {
    //console.log(req.files)
    upload(req, res, err => {
        if (err) {
            return res.send(err);
        }
        //console.log(req)
        console.log(req.files)
        req.files.map(async (files) => {
            var filename = files.originalname;
            const file = new File({ fileName: filename })
            // const uploadedFiles = await file.save();
            await file.save();

            //res.status(201).json(uploadedFiles);
            //console.log(filename)
        })
        //console.log(req.files)

        return res.send('file uploaded successfully');
    });
});

app.delete('/api/data/delete/:file_Name', async (req, res) => {
    console.log(req.params)
    const file = await File.findOne(req.params)
    if (file) {
        await file.remove();
    }
    console.log(file)
    try {
        fs.rm(`./files/${req.params.file_Name}`, (res) => {
            console.log("Removed file.....");
        });
    } catch (error) {
        console.log(error);
    }


})

// upload single files


// var upload = multer({ storage: Storage }).single('file')
// app.post('/api/data/upload', (req, res) => {
//     upload(req, res, err => {
//         if (err) {
//             return res.send(err);
//         }
//         console.log(req.file)
//         return res.send('file uploaded successfully');
//     });
// });


// upload single files



app.get('/', (req, res) => {
    res.send("API is running........")
})


// app.get("/api/data/getData",(req,res)=>{
//     console.log(data)
// })

// app.use("/api/data", dataRoutes)

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server started on port ${PORT}`));