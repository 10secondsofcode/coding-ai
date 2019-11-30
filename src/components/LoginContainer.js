import React, { Component } from 'react';
import Login from './Login';

const displayModal = {
    display: 'block',
    backgroundColor : '#FFF'
};

const hideModal = {
    display: 'none'
};

const themeBackground = {
    backgroundColor : '#6e60cc'
};

class LoginContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            isOpenLoginModal : false
        };

    }    

    toggleModal = () =>  {

        this.setState({
            isOpenLoginModal: !this.state.isOpenLoginModal
        });

    }

  render() {
    return (
        <React.Fragment>
        <button onClick={this.toggleModal} className="btn btn-login ml-2 whiteColor">Login</button>
        <div style={this.state.isOpenLoginModal ? displayModal : hideModal } className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header" style={themeBackground}>
                    <h4 className="modal-title">Login</h4>
                        <button onClick={this.toggleModal} type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div className="modal-body" style={themeBackground}>
                        <Login 
                            closeModal = {this.toggleModal}
                        />
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
    )
  }
}

export default LoginContainer
