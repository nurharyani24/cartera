import React, { Component } from 'react';
import { Menu, Row, Col } from 'antd';
import {
    HomeOutlined,
    UserOutlined,
    CompassOutlined
  } from '@ant-design/icons';
import '../layout/css/navbar-home.css';
import { Link } from 'react-router-dom';

const { Submenu } = Menu;

class Navbar extends Component {
    state = {
        current: 'home',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
    };

    render(){
        return(
            <div className="menu-container">
                <Row justify="space-between" >
                    <Col span={4}>
                        <Link to="/"><h1 style={{ textAlign: "center" }}>Cartera</h1></Link>
                    </Col>
                    <Col span={8}>
                        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                            <Menu.Item key="home">
                                <HomeOutlined />
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="explore">
                                <CompassOutlined />
                                <Link to="/explore">Explore</Link>
                            </Menu.Item>
                            <Menu.Item key="profile">
                                <UserOutlined />
                                <Link to="/profile">Profile</Link>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Navbar;