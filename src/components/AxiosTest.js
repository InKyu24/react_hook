import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AxiosTest.css';

function AxiosTest() {
    const [bbsList, setBbsList] = useState([]);

    useEffect(() => {
        // getbbsListPromise(); 
        getBbsListAsync();
    }, []);

    const getBbsListPromise = () => {
        const response = axios.get('http://localhost:3000/bbslist');
        response.then((response) => {
            console.log(response.data);
            setBbsList(response.data);
        });
    }

    const getBbsListAsync = async () => {
        const response = await axios.get('http://localhost:3000/bbslist');
        console.log(response.data.bbslist);
        setBbsList(response.data.bbslist);
    }

    const addPost = async () => {
        const newPost = {
            "id": "kbs",
            "title": "태풍소식",
            "content": "위험"
        };
        try {
            const response = await axios.post('http://localhost:3000/bbswrite', newPost);
            setBbsList([...bbsList, newPost]);
        } catch (error) {
            console.error('Error adding member:', error);
        }
    }


    return (
        <div className="container">
            <h1>AxiosTest</h1>
            <button onClick={() => addPost()}>Add post</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>title</th>
                        <th>content</th>
                        <th>writer</th>
                    </tr>
                </thead>
                <tbody>
                    {bbsList && bbsList.map((post, idx) => (
                        <tr key={idx}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.content}</td>
                            <td>{post.id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AxiosTest;