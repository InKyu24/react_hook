import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [uploadFile, setUploadFile] = useState(null);

    const onFileChange = (e) => {
        setUploadFile(e.target.files[0]);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('number', number);
        formData.append('name', name);
        formData.append('address', address);
        formData.append('uploadFile', uploadFile);

        axios.post('http://localhost:3000/fileupload', formData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className="container">
            <h3>파일 업로드</h3>

            <form name="frm" onSubmit={onSubmit} encType="multipart/form-data">
                <label>
                    Number:
                    <input type="text" name="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder='number' />
                </label>
                <br />
                <label>
                    Name:
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='name' />
                </label>
                <br />
                <label>
                    Address:
                    <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='address' />
                </label>
                <br />
                <label>
                    Choose a File:
                    <input type="file" name="uploadFile" onChange={onFileChange} />
                </label>
                <br/>
                <br/>
                <input type="submit" value="업로드" />
            </form>
        </div>
    );
}

export default FileUpload;