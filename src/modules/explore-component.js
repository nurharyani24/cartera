import React, { Component } from 'react';
import { Layout, Row, Col, Modal, Card, Avatar } from 'antd';
import Navbar from '../common/layout/navbar-home';
import Counter from './../common/component/counter';
import './../assets/css/explore.css';

const { Content } = Layout;
const { Meta } = Card;

const gridStyle = {
  width: '50%',
  textAlign: 'center',
};

class ExploreComponent extends Component {
  constructor(probs){
    super(probs);
    this.state =  {
      cardData: [
        {
          nama : "Nur Haryani",
          image : require('../../src/assets/images/portofolio1.jpg'),
          ava : require('../../src/assets/images/nur.jpg'),
          job : "UI Designer at Tokopedia"
        },
        {
          nama : "Clara Putri",
          image : require('../../src/assets/images/portofolio2.jpg'),
          ava : require('../../src/assets/images/clara.jpg'),
          job : "UI Engineer at DOKU"
        },
        {
          nama : "Aninda Cyntia",
          image : require('../../src/assets/images/portofolio3.jpg'),
          ava : require('../../src/assets/images/anin.jpeg'),
          job : "UI Designer at Shopee"
        },
        {
          nama : "Bey Aryo",
          image : require('../../src/assets/images/portofolio4.jpg'),
          ava : require('../../src/assets/images/bey.jpg'),
          job : "UI/UX at Investree"
        },
        {
          nama : "Mochammad Ikram",
          image : require('../../src/assets/images/portofolio5.jpg'),
          ava : require('../../src/assets/images/iqram.jpg'),
          job : "UX Designer at PT ICON+"
        },
        {
          nama : "Ronggo Pradipto",
          image : require('../../src/assets/images/portofolio6.jpg'),
          ava : require('../../src/assets/images/ronggo.jpg'),
          job : "UI/UX at PT PLN"
        } 
      ]
    }
  }

  render(){
    return(
      <Layout className="home-container">
        <Content style={{ overflow: "hidden" }}>
          <Row className="section-container">
          <div class="card"> 
        <div className="site-card-wrapper">
          <Row gutter={[16,16]}>
          { 
            this.state.cardData.map((data,index) =>
            <Col key={index} span={8}>
              <Counter nama={data.nama} job={data.job} image={data.image} ava={data.ava} />
            </Col>
            )
          }
          </Row>
        </div>
      </div>
          </Row>
        </Content>
      </Layout>
      
      
      
    );
  }
}

export default ExploreComponent;