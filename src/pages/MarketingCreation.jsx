import React, { useState } from 'react';

export default function MarketingCreation(){
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/generate-marketing', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${import.meta.env.VITE_PUBLIC_APP_ID}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });
            const data = await res.json();
            setResponse(data);
        } catch (error){
            console.error('Error generating marketing material:', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Marketing Creation</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="border p-2 w-full box-border"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter marketing prompt"
                    required 
                />
                <button type="submit" className="mt-2 bg-blue-500 text-white p-2 cursor-pointer" disabled={loading}>
                    {loading ? 'Generating...' : 'Generate'}
                </button>
            </form>
            {response && <div className="mt-4">
                <h2 className="text-xl">Generated Marketing Material:</h2>
                <p>{response.text}</p>
            </div>}
        </div>
    )
}