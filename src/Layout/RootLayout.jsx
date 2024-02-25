import React from 'react';
import Navbar from '../components/Navbar/Navbar';

function RootLayout({ children }) {
    return (
        <div className="p-2 md:p-5">
            <Navbar />
            {children}
        </div>
    )
}

export default RootLayout;