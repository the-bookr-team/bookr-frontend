import React from 'react';
import logo from '../../assets/logo.svg';
import modalImage from '../../assets/modal-img.jpg';
import { Alert, Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody } from 'reactstrap';

import { connect } from 'react-redux';
import { login, register } from '../../actions';

import './login.css';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loginOpened: false,
			registerOpened: false,
			registrationInitiated: false,
			loginUsername: '',
			loginPassword: '',
			registerUsername: '',
			registerPassword: ''
		};
	}

	openModal = (modalType) => () => {
		if (modalType === 'sign-in') {
			this.setState({
				loginOpened: true,
				registerOpened: false
			});
		} else if (modalType === 'register') {
			this.setState({
				loginOpened: false,
				registerOpened: true
			});
		}
	};

	closeModal = (modalType) => () => {
		if (modalType === 'sign-in') {
			this.setState({
				loginOpened: false
			});
		} else if (modalType === 'register') {
			this.setState({
				registerOpened: false
			});
		}
	};

	// buttonOrLink = (button = false) => {
	// 	if (button) {
	// 		return (
	// 			<Button color="primary" onClick={this.openModal('login')}>
	// 				{this.props.buttonLabel}
	// 			</Button>
	// 		);
	// 	}

	// 	return (
	// 		<a className="nav-item" href="#" onClick={this.toggle}>
	// 			{this.props.buttonLabel}
	// 		</a>
	// 	);
	// };

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = (e, authType) => {
		e.preventDefault();
		if (authType === 'login') {
			const authData = {
				username: this.state.loginUsername,
				password: this.state.loginPassword
			};
			this.props.login(authData);
			this.closeModal('sign-in');
		} else {
			this.setState({ registrationInitiated: true });
			const authData = {
				username: this.state.registerUsername,
				password: this.state.registerPassword
			};
			this.props.register(authData);
		}
	};

	render() {
		const { loginOpened, registerOpened } = this.state;
		return (
			<div>
				{/* {this.buttonOrLink(this.props.button)} */}

				<Modal className="sign-in" isOpen={loginOpened} onRequestClose={this.closeModal('sign-in')} size="lg">
					<ModalBody>
						<div className="modal-container">
							<img src={modalImage} />
							<div className="modal-info">
								<div>
									<button className="close" onClick={this.closeModal('sign-in')}>
										×
									</button>
								</div>
								<img className="modal-img" src={logo} alt="Bookr" />
								<div className="modal-form">
									<h2>Sign In</h2>
									{this.props.wasRegistrationSuccessful &&
									!this.props.isRegistering &&
									this.state.registrationInitiated && (
										<Alert color="success">Account created! Please login.</Alert>
									)}
									<Form onSubmit={(e) => this.handleSubmit(e, 'login')}>
										<FormGroup>
											<Label for="loginUsername" />
											<Input
												type="text"
												name="loginUsername"
												placeholder="Username"
												onChange={this.handleChange}
											/>
										</FormGroup>
										<FormGroup>
											<Label for="loginPassword" />
											<Input
												type="password"
												name="loginPassword"
												placeholder="Password"
												onChange={this.handleChange}
											/>
										</FormGroup>
										<Button type="submit" onClick={this.closeModal('login')} color="primary">
											Login
										</Button>
									</Form>
									<div className="register-portal">
										<span>
											New to Bookr?{'  '}
											<a onClick={this.openModal('register')}>Create an account.</a>
										</span>
									</div>
								</div>

								{/* <div className="modal-divider" />

								<div className="modal-form">
									<h2>Join the global narrative.</h2>
									{!this.props.wasRegistrationSuccessful &&
									!this.props.isRegistering &&
									this.state.registrationInitiated && (
										<Alert color="danger">Account creation failed! Please try again.</Alert>
									)}
									<Form onSubmit={(e) => this.handleSubmit(e, 'register')}>
										<FormText>
											By creating a Bookr account, you can discover, critique, and recommend books
											from a wide variety of authors and genres.
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
              */}
							</div>
						</div>
					</ModalBody>
				</Modal>
				<Modal
					className="register"
					isOpen={registerOpened}
					onRequestClose={this.closeModal('register')}
					size="lg"
				>
					<ModalBody>
						<div className="modal-container">
							<img src={modalImage} />
							<div className="modal-info">
								<div>
									<button className="close" onClick={this.closeModal('register')}>
										×
									</button>
								</div>
								<img className="modal-img" src={logo} alt="Bookr" />
								<div className="modal-register-form">
									<h2>Join the global narrative.</h2>
									{!this.props.wasRegistrationSuccessful &&
									!this.props.isRegistering &&
									this.state.registrationInitiated && (
										<Alert color="danger">Account creation failed! Please try again.</Alert>
									)}
									<Form id="register-form" onSubmit={(e) => this.handleSubmit(e, 'register')}>
										<FormText>
											By creating a Bookr account, you can discover, critique, and recommend books
											from a wide variety of authors and genres.
										</FormText>
										<br />
										<FormText>Sign up in just seconds.</FormText>
										<FormGroup>
											<Label for="registerUsername" />
											<Input
												id="register-input"
												type="text"
												name="registerUsername"
												placeholder="Username"
												onChange={this.handleChange}
											/>
										</FormGroup>
										<FormGroup>
											<Label for="registerPassword" />
											<Input
												id="register-input"
												type="password"
												name="registerPassword"
												placeholder="Password"
												onChange={this.handleChange}
											/>
										</FormGroup>

										<Button type="submit" color="primary" onClick={this.openModal('sign-in')}>
											{/* onClick={this.openModal('login')} */}
											Register
										</Button>
									</Form>
									<div className="redirect">
										<span>
											Already have an account? {'  '}{' '}
											<a onClick={this.openModal('sign-in')}>Sign in.</a>
										</span>
									</div>
								</div>
							</div>
						</div>
					</ModalBody>
				</Modal>
				<div className="nav-buttons">
					<button onClick={this.openModal('sign-in')}>Login</button>
					<button onClick={this.openModal('register')}>Lets Get Started</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	wasRegistrationSuccessful: state.wasRegistrationSuccessful,
	isLoggingIn: state.isLoggingIn,
	isRegistering: state.isRegistering
});

export default connect(mapStateToProps, {
	login,
	register
})(Login);
