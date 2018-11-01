import React from 'react';
import { Button } from 'antd';
import './HomeInfo.css';

const HomeInfo = () => (
    <div className="home">
        <div style={{ flexGrow: '0.5', display: 'flex', paddingLeft: '100px', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }} >
            <strong style={{ color: 'white' ,fontSize: '63px', fontWeight: '700', fontFamily: "Fredericka the Great, cursive", textShadow: "2px 2px 4px black" }}>PEEK  A  BOOK!</strong>
            <p style={{ color: 'white' ,fontSize: '30px', textShadow: '1px 1px 2px black', letterSpacing: '3px', fontFamily: 'Amatic SC, cursive' }}>
                SAVE 30% ON 4+ USED BOOKS
            </p>
            <Button size="large" style={{ backgroundColor: '#f6f6f6', border: '0px solid red' }}><span style={{ color: 'black', fontSize: '18px', fontFamily: "Fredericka the Great, cursive" }}>SHOP NOW</span></Button>
        </div>
        <div style={{ flexGrow: '0.5' }}>

        </div>
    </div>
);

export default HomeInfo;