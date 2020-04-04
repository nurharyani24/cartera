import React from 'react';
import { Card, Col, Row, Avatar } from 'antd';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';

const { Meta } = Card;

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            like: 0
        }
    }
    handleLike = () => {
        this.setState({
            like: this.state.like + 1
        })
    }

    handleDislike = () => {
        if (this.state.like > 0) {
            this.setState({
                like: this.state.like - 1
            })
        }
    }

    render(){
        const { nama, image, ava, job } = this.props;
        return (
            <Card   
                cover={
                  <img
                    src={image}
                  />
                }
                actions={[
                  <LikeOutlined onClick={this.handleLike} />,
                  <p>{this.state.like} likes</p>,
                  <DislikeOutlined onClick={this.handleDislike} />
                ]}
              >
                <Meta
                  avatar={<Avatar src={ava} />} 
                  title={nama}
                  description={job}
                />
              </Card>
        );
    }
}

export default Counter;