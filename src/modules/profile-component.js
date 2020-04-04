import React, { Component } from 'react';
import { Layout, Row, Col, Modal } from 'antd';
import Navbar from '../common/layout/navbar-home';
import '../assets/css/profile.css';
import ButtonProfile from '../common/component/button-profile';

const { Content } = Layout;

class ProfileComponent extends Component {
    render(){
        const img_profile = require('./../assets/images/profile.png');

        return(
            <Layout className="home-container">
                <Content style={{ overflow: "hidden" }}>
                <Row className="section-container">
                    <Col lg={12} md={12} sm={12}>
                        <div className="image-big-container">
                            <img src={img_profile} style={{ maxWidth: '90%' }} />
                        </div>
                    </Col>
                    <Col lg={12} md={12} sm={12}>
                        <Row>
                            <Col span={24}>
                                <div className="title-container">
                                    <span className="text-peach title-big bold">Nur Haryani</span>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className="desc-container desc-medium">
                                    Mahasiswa baru lulus yang pengen mendalami dunia UI/UX
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className="button-section-1-container">
                                <ButtonProfile
                                    text="Linked In"
                                    className="button-profile"
                                    href="https://www.linkedin.com/in/nurharyani/"
                                    />
                                <ButtonProfile
                                    className="button-profile"
                                    text="Dribbble"
                                    href="https://dribbble.com/nurharyani"
                                    background="white"
                                    textColor="#f19292"
                                    border="1px solid #f19292"
                                    marginLeft={16}
                                />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                </Content>
            </Layout>
        );
    }
}

export default ProfileComponent;