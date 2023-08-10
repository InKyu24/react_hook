import React from "react";

function FileDownload() {
    const download = async () => {
        let fileName = "1691395330678.pdf";
        const url = "http://localhost:3000/filedownload?filename=" + fileName;
        
        // const downloadLink = document.createElement("a");
        // downloadLink.href = url;
        // downloadLink.type = "application/json";
        // downloadLink.download = fileName;
        // downloadLink.click();

        window.location.href = url;
    }

    return (
        <div className="container">
            <h3>파일 다운로드</h3>
            <button onClick={download}>다운로드</button>
        </div>
    );
}

export default FileDownload;