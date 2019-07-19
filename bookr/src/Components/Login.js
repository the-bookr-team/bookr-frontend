import React from 'react';
import '../App.css';
import logoWhite from '../assets/logo-white.svg';
import {
  Alert,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap';

import { connect } from 'react-redux'
import { login, register } from '../actions'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      registrationInitiated: false,
      loginUsername: '',
      loginPassword: '',
      registerUsername: '',
      registerPassword: '',
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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e, authType) => {
    e.preventDefault()
    if (authType === 'login') {
      const authData = {
        username: this.state.loginUsername,
        password: this.state.loginPassword
      }
      this.props.login(authData)
    } else {
      this.setState({ registrationInitiated: true })
      const authData = {
        username: this.state.registerUsername,
        password: this.state.registerPassword
      }
      this.props.register(authData)
    }
  }

  render() {
    return(
      <div>
      { this.buttonOrLink(this.props.button) }

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          size="lg"
        >
          <ModalHeader className="login-header" toggle={this.toggle}>
            <img src={logoWhite} alt="Bookr" />
          </ModalHeader >

          <ModalBody>
            <div className="modal-form">
              <h2>Sign In</h2>
              {this.props.wasRegistrationSuccessful && !this.props.isRegistering &&
                this.state.registrationInitiated && (
                <Alert color="success">Account created! Please login.</Alert>
              )}
              <Form onSubmit={(e => this.handleSubmit(e, 'login'))}>
                <FormGroup>
                  <Label for="loginUsername">Username</Label>
                  <Input
                    type="text"
                    name="loginUsername"
                    placeholder="lambdarockz"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="loginPassword">Password</Label>
                  <Input
                    type="password"
                    name="loginPassword"
                    placeholder="********"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <Button color="primary">Login</Button>
              </Form>
            </div>

            <div className="modal-divider"></div>

            <div className="modal-form">
              <h2>Join the global narrative.</h2>
              {!this.props.wasRegistrationSuccessful && !this.props.isRegistering &&
                  this.state.registrationInitiated && (
                <Alert color="danger">Account creation failed! Please try again.</Alert>
              )}
              <Form onSubmit={(e => this.handleSubmit(e, 'register'))}>
                <FormText>
                  By creating a Bookr account, you can discover, critique, and
                  recommend books from a wide variety of authors and genres.
                </FormText>
                <FormText>Sign up in just seconds.</FormText>
                <FormGroup>
                  <Label for="registerUsername">Username</Label>
                  <Input
                    type="text"
                    name="registerUsername"
                    placeholder="lambdarockz"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="registerPassword">Password</Label>
                  <Input
                    type="password"
                    name="registerPassword"
                    placeholder="password"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <Button color="primary">Register</Button>
              </Form>
            </div>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  wasRegistrationSuccessful: state.wasRegistrationSuccessful,
  isLoggingIn: state.isLoggingIn,
  isRegistering: state.isRegistering,
})

export default connect(mapStateToProps, {
  login,
  register
})(Login);
