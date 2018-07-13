import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Label, Nav, Navbar, NavItem } from 'react-bootstrap'

import CounterPage from '../counter'
import UserPage from '../user'

const App = () => (
	<div className="container-fluid">
		<Navbar>
			<Navbar.Header >
				<Navbar.Brand>
					<a href="https://github.com/yabeshan/create-react-redux-bootstrap-firebase">
						create-react-redux-bootstrap-firebase
					</a>
				</Navbar.Brand>
			</Navbar.Header>
			<Nav pullRight>
				<NavItem eventKey={1} href="/"> 
					<h4><Label bsStyle="primary">User</Label></h4>
				</NavItem>
				<NavItem eventKey={2} href="/counter"> 
					<h4><Label bsStyle="success">Counter</Label></h4>
				</NavItem>
			</Nav>
		</Navbar>

		<main>
			<Switch>
				<Route path="/" exact component={UserPage} />
				<Route path="/counter" component={CounterPage} />
				<Redirect from="/login" to="/" />
				<Route component={UserPage} />
			</Switch>
		</main>
  	</div>
)

export default App
