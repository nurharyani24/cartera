import React, { Component } from 'react';
import ProfileComponent from '../modules/profile-component';

class ProfilePage extends Component {
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
            <ProfileComponent
                initialData = {this.state}
                showModal = {this.showModal}
                handleCancel = {this.handleCancel}
                handleOk = {this.handleOk}
            />
        );
    }
}

export default ProfilePage;