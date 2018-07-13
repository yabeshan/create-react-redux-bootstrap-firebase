import React from 'react'
import { Button, Form, FormControl, FormGroup, Col, ControlLabel } from 'react-bootstrap'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
	login,
	logout,
	changeEmail,
	changePassword
} from '../../modules/user'

const UserPage = props => (
	<div>
		<h1>User</h1>

		<Form horizontal>
			<FormGroup controlId="formHorizontalEmail">
				<Col componentClass={ControlLabel} sm={2}>
				Email
				</Col>
				<Col sm={10}>
				<FormControl type="email" placeholder="Email" 
					value={props.email} onChange={props.changeEmail} />
				</Col>
			</FormGroup>

			<FormGroup controlId="formHorizontalPassword">
				<Col componentClass={ControlLabel} sm={2}>
				Password
				</Col>
				<Col sm={10}>
				<FormControl type="password" placeholder="Password"
					value={props.password} onChange={props.changePassword} />
				</Col>
			</FormGroup>

			<FormGroup>
				<Col smOffset={2} sm={10}>
				<Button bsStyle="primary" onClick={props.login}>Login</Button>{' '}
				<Button onClick={props.logout}>Logout</Button>
				</Col>
			</FormGroup>
			<FormGroup>
				<Col componentClass={ControlLabel} sm={2}>
				Token
				</Col>
				<Col sm={10}>
				<FormControl type="token" placeholder="Token" readOnly value={props.token} />
				</Col>
			</FormGroup>
		</Form>
	</div>
)

const mapStateToProps = ({ user }) => ({
	email: user.email,
	password: user.password,
	token: user.token,
	login: user.login,
	logout: user.logout,
	changeEmail: user.changeEmail,
	changePassword: user.changePassword
})

const mapDispatchToProps = dispatch =>
	bindActionCreators({
		login,
		logout,
		changeEmail,
		changePassword
	}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserPage)
