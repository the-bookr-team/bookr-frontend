import React from 'react';
import '../App.css';
import logoWhite from '../assets/logo-white.svg';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  buttonOrLink = (button = false) => {
    if (button) {
      return(<Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}</Button>)
    };

    return(<a href="#" onClick={this.toggle}>{this.props.buttonLabel}</a>) 
  }

  render() {
    return(
      <div>
      { this.buttonOrLink(this.props.button) }

      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="lg">
        <ModalHeader className="login-header" toggle={this.toggle}>
          <img src={logoWhite} alt="Bookr" />
        </ModalHeader >

        <ModalBody>

          <div className="modal-form">
            <h2>Sign In</h2>
            <form>
              <label for="email">Email</label>
              <input name="email" type="email" placeholder="jane.doe@example.com" />

              <label for="password">Password</label>
              <input name="password" type="password" />

              <Button color="primary">Sign in</Button>
            </form>
          </div>

          <div className="modal-divider"></div>

          <div className="modal-form">
            <h2>Sign Up</h2>
            <form>
              <label for="name">Name</label>
              <input name="name" type="text" placeholder="Jane Doe" />

              <label for="email">Email</label>
              <input name="email" type="email" placeholder="jane.doe@example.com" />

              <label for="password">Password</label>
              <input name="password" type="password" />

              <Button color="primary">Sign up</Button>
            </form>
          </div>

        </ModalBody>
      </Modal>
      </div>
    )
  }
}

export default Login;

