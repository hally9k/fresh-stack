import React from 'react'
import { css } from 'emotion'
import { COLOR_PRIMARY, COLOR_TERTIARY, COLOR_TERTIARY_2 } from 'style/color'

const style = css`
	padding: 0.6rem 2rem;
	border: 1px solid ${COLOR_TERTIARY_2};
	border-radius: 0.5rem;
	color: ${COLOR_PRIMARY};
	background-color: ${COLOR_TERTIARY};
	font-size: 1em;
`

export default class Button extends React.Component {
	render() {
		const { text, onClick } = this.props

		return (
			<button className={style} onClick={onClick}>
				{text}
			</button>
		)
	}
}
