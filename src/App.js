import React from 'react';
import MainHeader from './components/MainHeader';
import MainContent from './components/MainContent';
import {Layout} from 'antd';
import 'antd/dist/antd.css';
// import './App.css';

const App = () => (
  <Layout style={{ backgroundColor: 'white' }} className="layout">
    <MainHeader />
    <MainContent />
  </Layout>
);
export default App;
