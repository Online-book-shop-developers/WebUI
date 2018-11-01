import React from 'react';
import { Dropdown, Button, Icon, Menu, Input } from 'antd';
import './NavBar.css';

const Search = Input.Search;

const menu = (
  <Menu>
    <Menu.Item key="1"><Icon type="user" />1st menu item</Menu.Item>
    <Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
    <Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
  </Menu>
)

const NavBar = () => (
    <div className="outerNav">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={{ color: 'white', marginBottom: '0px', marginRight: '5px' }}>Book Shop</h1>
        <Dropdown overlay={menu}>
          <Button ghost size="large" style={{ marginLeft: 8 }}>
            <span style={{ fontSize: '17px' }}>Categories</span> <Icon type="down" />
          </Button>
        </Dropdown>
        <div style={{ marginLeft: '30px', minWidth: '250px', width: '500px' }}>
          <Search
            size="large"
            placeholder="Search by Title, Author"
            onSearch={value => console.log(value)}
            enterButton
          />
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button size="large" style={{ marginRight: '10px' ,backgroundColor: '#f6f6f6', border: '0px solid red' }}>Login</Button>
        <Button size="large" type="primary">Sign Up</Button>
      </div>
    </div>
);

export default NavBar;