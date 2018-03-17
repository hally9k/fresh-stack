import React from 'react'
import { css } from 'emotion'
import { COLOR_PRIMARY, COLOR_TERTIARY, COLOR_TERTIARY_2 } from 'style/color'
import Button from 'component/shared/button'

const style = css`
	padding: 0.6rem 2rem;
	border: 1px solid ${COLOR_TERTIARY_2};
	border-radius: 0.5rem;
	color: ${COLOR_PRIMARY};
	background-color: ${COLOR_TERTIARY};
	font-size: 1em;
`

export default class New extends React.Component {
	constructor() {
		super()

		this.state = {
			value: ''
		}
	}

	add = () => {
		this.props.add(this.state.value)
		this.setState({
			value: ''
		})
	}

	change = ({ target: { value } }) => this.setState({ value })

	render() {
		return (
			<div>
				<input value={this.state.value} className={style} onChange={this.change} />
				<Button text="Add" onClick={this.add} />
			</div>
		)
	}
}
