import axios from 'axios';
import React, { useEffect, useState } from 'react'





function SingleFileUploadWithProgress( {file} ) {
    const [progress, setProgress] = useState(0);

    console.log("files", file)
    const formData = new FormData();
    formData.append("file", file[0]);
    console.log(formData)

    // console.log("files", file)
    // for(let i=0;i<file?.length;i++){
    //     let formData = new FormData();
    //     formData.append("file", file[i]);
    //     console.log(formData)
    // }



    // const uploaders = file?.map(async (files) => {

    //     // Initial FormData
    //     console.log(files)
    //     let formData =new FormData();
    //     formData.append("file", files);

    //     console.log(formData)
        // await axios.post("http://localhost:5000/api/data/upload", formData, {
        //     headers: { "Content-Type": "multipart/form-data", },
        // }).then(response => {
        //     console.log("first")
        //     console.log(response);

        // })
    // }



    // );









    //     const formData = new FormData();

    //     for (let i = 0; i < file?.length; i++) {
    //         let files = file[i];
    //         formData.append("file", files);
    //         formData.append("upload_preset", "docs_upload_example_us_preset");


    //         fetch(url, {
    //             method: "POST",
    //             body: formData
    //         })
    //             .then((response) => {
    //                 return response.text();

    //             })
    //             .then((data) => {
    //                 console.log(data)
    //             });

    //     }


    // useEffect(() => {
    //     const upload = async () => {
    //         const url = await uploadFile(file, setProgress);
    //         console.log('url', url)
    //         console.log('file', file)
    //     }
    //     upload();
    // }, [file])
    const uploadFile = (file, onProgress) => {
        console.log(file)
        const url = "https://api.cloudinary.com/v1_1/demo/image/upload";
        const key = "docs_upload_example_us_preset";

        return new Promise((res, rej) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', url);

            xhr.onload = () => {
                const resp = JSON.parse(xhr.responseText);

                res(resp.secure_url);
            }

            xhr.onerror = (event) => rej(event);

            xhr.upload.onprogress = (event) => {
                if (event.lengthComputable) {
                    const percentage = (event.loaded / event.total) * 100;
                    onProgress(Math.round(percentage));

                }
            };
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', key);

            xhr.send(formData)
        })
    }
    return (
        <div>SingleFileUploadWithProgress</div>
    )
}

export default SingleFileUploadWithProgress

