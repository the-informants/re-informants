import React, {Component} from 'react';
import '../../App.css';
import Iframe from 'react-iframe'
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

export default class Authenticate extends Component {
    constructor() {
        super();
     
        this.state = {
          modalIsOpen: false
        };
     
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }
     
      openModal() {
        this.setState({modalIsOpen: true});
      }
     
      afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
      }
     
      closeModal() {
        this.setState({modalIsOpen: false});
      }

      render() {
        return (
          <div>
            <button className="btn btn-default" onClick={this.openModal}>Login</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
     
              <h2 ref={subtitle => this.subtitle = subtitle}>Login</h2>
              <button onClick={this.closeModal}>close</button>
                <Iframe url="http://localhost:4000/auth"
                width="450px"
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                allowFullScreen/>
            </Modal>
          </div>
        );
      }
    // render (){
    //     return(
    //         <div className="container">
    //             <a href={"http://localhost:4000/auth"}><button className="btn btn-primary" >Sign Up</button></a>
    //                         <a href={"http://localhost:4000/auth"}><button className="btn btn-default" >Login</button></a>
    //                         </div>
    //         </div>
    //     )
    // }
}
