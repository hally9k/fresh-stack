import React from 'react'
import { css } from 'emotion'

export default class Button extends React.Component {
	constructor() {
		super()
		this.switchItUp = this.switchItUp.bind(this)

		this.state = {
			style: ``
		}
	}

	componentDidMount() {
		this.switchItUp()
	}

	switchItUp() {
		this.red = Math.floor(Math.random() * 256)
		this.green = Math.floor(Math.random() * 256)
		this.blue = Math.floor(Math.random() * 256)
		this.alpha = Math.random()

		this.setState({
			style: css`
				font-family: 'Helvetica';
				width: 300px;
				height: 100px;
				background-color: rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha});
				&:hover {
					color: green;
				}
			`
		})
	}

	render() {
		const { text } = this.props

		return (
			<button className={this.state.style} onClick={this.switchItUp}>
				{text}
			</button>
		)
	}
}
