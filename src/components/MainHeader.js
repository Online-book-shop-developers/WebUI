import React from 'react';
import NavBar from './NavBar/';
import HomeInfo from './HomeInfo/';

const MainHeader = () => (
    <div style={{ height: '410px' }}>
        <NavBar />
        <HomeInfo />
    </div>
);

export default MainHeader;