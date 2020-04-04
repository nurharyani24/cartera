import React, { Component } from 'react';
import HomeComponent from '../modules/home-component';

class HomePage extends Component {
    state={
        visible: false,
    }

    // function untuk ubah state -> agar keluar modalnya
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    // untuk close modal
    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render(){
        return(
            <HomeComponent
                initialData = {this.state}
                showModal = {this.showModal}
                handleCancel = {this.handleCancel}
                handleOk = {this.handleOk}
            />
        );
    }
}

export default HomePage;