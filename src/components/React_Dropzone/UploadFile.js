import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import Container from 'react-bootstrap/Container';
import SingleFileUploadWithProgress from './SingleFileUploadWithProgress';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from '@mui/material';


function UploadFile() {

    const [progress, setProgress] = useState(0);
    //const [storeStatus, setStoreStatus] = useState({});
    //const [prog, SetProg] = useState({});
    const [images, setImages] = useState([])

    const onDrop = useCallback(acceptedFiles => {
        let user_temp = [...images];
        for (var i = 0; i < acceptedFiles.length; i++) {
            user_temp.push({ status: "queue", file: acceptedFiles[i] })
        }
        console.log(user_temp)
        setImages(user_temp)
        console.log(images)
    }, [images])



    const { acceptedFiles, getRootProps, getInputProps, fileRejections, } = useDropzone(
        {
            onDrop,
            multiple: true,
            // onDrop: async (acceptedFiles) => {

            //     console.log(acceptedFiles)


            //     for (let i = 0; i < acceptedFiles.length; i++) {

            //         const formData = new FormData();
            //         formData.append("file", acceptedFiles[i]);
            //         console.log(acceptedFiles[i])
            //         SetProg({
            //             ...prog, [acceptedFiles[i].name]: {
            //                 status: 'uploading',
            //             },

            //         })
            //         await axios.post("http://localhost:5000/api/data/upload", formData, {

            //             headers: { "Content-Type": "multipart/form-data", },
            //             onUploadProgress: data => {
            //                 //Set the progress value to show the progress bar
            //                 setProgress(Math.round((100 * data.loaded) / data.total))
            //                 // console.log("the status is", status)
            //             },

            //         }).then(response => {
            //             console.log(response)

            //             SetProg({
            //                 ...prog, [acceptedFiles[i].name]: {
            //                     status: 'Success',
            //                 },
            //             })
            //         })

            //     }

            // },

        }
    );


    const uploadFiles = async () => {

        console.log(acceptedFiles)


        for (var i = 0; i < images.length; i++) {
            if (images[i].status != "uploaded" || images[i].status != "uploading")
                await uploadSingleFile(i)
        }


        // for (let i = 0; i < acceptedFiles.length; i++) {





        // const formData = new FormData();
        // formData.append("file", acceptedFiles[i]);
        // //setStoreStatus({...storeStatus, [acceptedFiles[i].name]:{status: "queued"}})
        // console.log(acceptedFiles[i])
        // SetProg({
        //     ...prog, [acceptedFiles[i].name]: {
        //         status: 'uploading',
        //     },

        // })
        // await axios.post("http://localhost:5000/api/data/upload", formData, {

        //     headers: { "Content-Type": "multipart/form-data", },
        //     onUploadProgress: data => {
        //         //Set the progress value to show the progress bar
        //         setProgress(Math.round((100 * data.loaded) / data.total))
        //         // console.log("the status is", status)
        //     },

        // }).then(response => {
        //     console.log(response)

        //     SetProg({
        //         ...prog, [acceptedFiles[i].name]: {
        //             status: 'Success',
        //         },
        //     })
        // })

        //  }

        //console.log(images)


    }
    const uploadSingleFile = async (index) => {
        const formData = new FormData();
        formData.append("file", images[index].file)

        updateStatus(index, "uploading")



        await axios.post("https://upload-file-task.herokuapp.com/api/data/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            onUploadProgress: data => {
                //Set the progress value to show the progress bar
                setProgress(Math.round((100 * data.loaded) / data.total))
                // console.log("the status is", status)
            },
        }).then((response) => {
            updateStatus(index, "uploaded")

        }, (error) => {
            updateStatus(index, "error")
        });
    }
    const updateStatus = (index, status) => {
        let temp_imgs = [...images]
        temp_imgs[index].status = status
        setImages(temp_imgs)
    }
    console.log(images)

    const deleteFile = async (fileName, index) => {
        console.log(fileName)

        if (images[index].status !== "uploaded") {
            let temp_images = [...images];
            console.log("before",temp_images)
            temp_images = temp_images.filter(item => item.file.name !== fileName);
            setImages(temp_images)
            console.log("after",temp_images)
        }
        console.log(images)

        // for(let i=0;i<images.length;i++){
        //     if(images[i].file_)
        // }

    //     await axios.post(          // any call like get
    //     "http://localhost:3001/api/users/userData",         // your URL
    //     {                                     // data if post, put
    //       usertoken: userToken,
    //     }
    //   );



        await axios.delete(`http://localhost:5000/api/data/delete/${fileName}`).then((res)=>{
            console.log("file removed.....")
        })
        
        // {

        
          
            // onUploadProgress: data => {
            //     //Set the progress value to show the progress bar
            //     setProgress(Math.round((100 * data.loaded) / data.total))
            //     // console.log("the status is", status)
            // },
       // })
        // .then((response) => {
        //     updateStatus(index, "uploaded")

        // }, (error) => {
        //     updateStatus(index, "error")
        // });

    }
    // useEffect(() => {

    //     let user_temp = [...images];

    //     for (let i = 0; i < acceptedFiles.length; i++) {

    //         user_temp.push({ status: "queue", file: acceptedFiles[i] })
    //     }
    //     console.log(user_temp)
    //     setImages(user_temp)

    // }, [acceptedFiles])





    return (
        <>
            <Container >
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div {...getRootProps()}
                        style={{
                            height: "200px",
                            width: "500px",
                            display: "flex",
                            justifyContent: 'center',
                            alignItems: "center",
                            backgroundColor: "rgb(203,203,203)",
                            border: "dotted 3px",
                            borderColor: "#555",
                            marginTop: "20px",
                        }}>
                        <input {...getInputProps()} />

                        <p
                        >Drag 'n' drop some files here, or click to select files</p>

                    </div>

                </div>
                <div>
                    <Button variant="contained" onClick={() => uploadFiles()} color="primary" style={{ marginTop: "15px" }}>
                        Upload Files
                    </Button>
                </div>
                <aside>
                    <h4>Files</h4>
                    
                        <div style={{ display: "flex", flexDirection: "column", }}>


                            {images?.map((item, index) => {
                                return (
                                    <>
                                        <div key={index} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                            <div>
                                                <li >
                                                    {item.file.name} - {item.file.size} bytes

                                                </li>
                                            </div>


                                            <div>

                                                {
                                                    // prog[file.name] !== undefined ?
                                                    //     prog[file.name].status : "queued"
                                                    //    Object.keys(prog).map(name=>console.log(name,file.name))
                                                    // console.log("first")
                                                    item.status

                                                }

                                            </div>
                                            <Button variant="contained" onClick={() => deleteFile(item.file.name, index)} color="primary" style={{ marginTop: "15px" }}>
                                                Delete File
                                            </Button>



                                            <div>
                                                <CircularProgress variant="determinate" value={progress} />
                                            </div>
                                        </div>
                                    </>
                                )

                            })}


                        </div>
                    
                    {/* <ul>{files}</ul> */}
                    {/* {progress} */}
                    {/* <ul>
                        <SingleFileUploadWithProgress file={files} />
                    </ul> */}
                    {/* <h4>Accepted files</h4>
                    <ul>{files}</ul> */}
                    {/* <h4>Rejected files</h4>
                    <ul>{fileRejectionItems}</ul> */}
                </aside>
                {/* <StandardUploader/> */}
            </Container>
        </>
    )
}

export default UploadFile