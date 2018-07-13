import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
	increment,
	incrementAsync,
	decrement,
	decrementAsync
} from '../../modules/counter'

const CounterPage = props => (
	<div>
		<h1>Counter</h1>
		<p>Count: {props.count}</p>

		<p>
			<button onClick={props.increment}>Increment</button>
			<button onClick={props.incrementAsync} disabled={props.isIncrementing}>
				Increment Async
			</button>
		</p>

		<p>
			<button onClick={props.decrement}>Decrement</button>
			<button onClick={props.decrementAsync} disabled={props.isDecrementing}>
				Decrement Async
			</button>
		</p>

		<p>
			<button onClick={() => props.changePage()}>
				Go to about page via redux
			</button>
		</p>
	</div>
)

const mapStateToProps = ({ counter }) => ({
	count: counter.count,
	isIncrementing: counter.isIncrementing,
	isDecrementing: counter.isDecrementing
})

const mapDispatchToProps = dispatch =>
	bindActionCreators({
		increment,
		incrementAsync,
		decrement,
		decrementAsync,
		changePage: () => push('/go-to-about-page-via-redux')
	}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CounterPage)
