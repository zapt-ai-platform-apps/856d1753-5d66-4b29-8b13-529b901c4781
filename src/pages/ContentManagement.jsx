import React, { useState, useEffect } from 'react';

export default function ContentManagement(){
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/contents', {
            headers: {
                'Authorization': `Bearer ${import.meta.env.VITE_PUBLIC_APP_ID}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setContents(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching contents:', error);
                setLoading(false);
            });
    }, []);

    if(loading){
        return <div className="p-4">Loading contents...</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Content Management</h1>
            <ul>
                {contents.map(content => (
                    <li key={content.id} className="border p-2 mb-2">
                        <h2 className="text-xl">{content.title}</h2>
                        <p>{content.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}