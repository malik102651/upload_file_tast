import React from 'react'
import Dropzone from 'react-dropzone'

const StandardUploader = () => {

    const getUploadParams = () => {
        return { url: '' }
    }

    const handleChangeStatus = ({ meta }, status) => {
        console.log(status, meta)
    }

    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }
    return (
        <>
            <Dropzone
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
            />
        </>
    )
}

export default StandardUploader