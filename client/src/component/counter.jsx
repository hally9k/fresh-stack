import React from 'react'
import { css } from 'emotion'

export default class Incrementer extends React.Component {
	constructor() {
		super()

		this.state = { number: 0 }
	}

	style = css`
		color: green;
	`

	componentWillMount = () => this.getNextNumber()

	getNextNumber = () => {
		fetch('/api')
			.then(x => x.json())
			.then(number =>
				this.setState(() => ({
					number
				}))
			)
	}

	render = () => (
		<div className={this.style} onClick={this.getNextNumber}>
			{this.state.number}
		</div>
	)
}
