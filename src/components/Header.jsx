import React from 'react';
import Nav from './Nav';

const Header = () => {
    return (
        <>
        <div className="header">
            <Nav />
            <div className="title">
                <h1>Au <br />Salon</h1>
            </div>
        </div>
        </>
    );
};

export default Header;