import React, { Component } from 'react';
import ExploreComponent from '../modules/explore-component';

class ExplorePage extends Component {
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
            <ExploreComponent
                initialData = {this.state}
                showModal = {this.showModal}
                handleCancel = {this.handleCancel}
                handleOk = {this.handleOk}
            />
        );
    }
}

export default ExplorePage;
