import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation(){
    return (
        <nav className="bg-gray-100 p-4">
            <ul className="flex space-x-4">
                <li><Link to="/" className="text-blue-500 hover:underline cursor-pointer">Content Management</Link></li>
                <li><Link to="/marketing" className="text-blue-500 hover:underline cursor-pointer">Marketing Creation</Link></li>
            </ul>
        </nav>
    )
}