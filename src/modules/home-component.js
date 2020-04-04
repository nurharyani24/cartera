import React, { Component } from 'react';
import { Layout, Row, Col, Modal, Card } from 'antd';
import Navbar from '../common/layout/navbar-home';
import './../assets/css/home.css';

const { Content } = Layout;
const { Meta } = Card;

const carteraPoint = [
    {
        image : require('../assets/images/point1.png'),
        title : "Tanpa Batas",
        desc : "Hanya registrasi saja, kamu sudah bebas upload portofoliomu tanpa batas"
    },
    {
        image : require('../assets/images/point2.png'),
        title : "Komunitas Desainer",
        desc : "Gabung dengan berbagai komunitas desainer handal di sini"
    },
    {
        image : require('../assets/images/point3.png'),
        title : "Credit",
        desc : "Tambahkan credit sebagai tanda terima kasih atau copyright berupa pekerjaan tim atau dibantu orang lain"
    }
]

class HomeComponent extends Component {
    render(){
        return(
            <Layout className="home-container">
                <Content style={{ overflow: "hidden" }}>
                    <Row className="section-container">
                        <Col lg={24}>
                            <div className="text-peach title-big about-container bold">
                                Apa itu Cartera?
                            </div>
                        </Col>
                        <Col lg={24}>
                            <hr className="line-home"/>
                        </Col>
                        <Col lg={24}>
                            <div className="about-desc">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </div>
                        </Col>
                        <Col lg={24}>
                            <div className="text-peach title-medium about-container">
                                Benefits
                            </div>
                        </Col>
                        <Col lg={24} style={{ marginTop: 20 }}>
                            <div>
                            <Row gutter={16}>
                                {
                                    carteraPoint.map ((data, index) => 
                                        <Col lg={8} style={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Card 
                                            hoverable
                                            style={{ width: 240, minHeight: 340 }}
                                            cover={<img src={data.image}/>}
                                            >
                                            <Meta title={data.title} description={data.desc}/>
                                        </Card>
                                        </Col>
                                    )
                                }
                            </Row>
                            </div>
                            
                        </Col>
                    </Row>
                </Content>
            </Layout>
        );
    }
}

export default HomeComponent;