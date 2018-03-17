import React from 'react'
import { css } from 'emotion'
import { COLOR_PRIMARY, COLOR_TERTIARY, COLOR_TERTIARY_2 } from 'style/color'

const style = css`
	padding: 0.6rem 2rem;
	border: 1px solid ${COLOR_TERTIARY_2};
	border-radius: 1rem;
	color: ${COLOR_PRIMARY};
	background-color: ${COLOR_TERTIARY};
`

export default class Button extends React.Component {
	render = () => {
		const { text } = this.props

		return <button className={style}>{text}</button>
	}
}
