import React from 'react'
import { css } from 'emotion'
import Button from 'component/shared/button'
import { COLOR_PRIMARY2, COLOR_TERTIARY_2 } from 'style/color'

const style = css`
	padding: 0.4rem 0.8rem;
	color: ${COLOR_PRIMARY2};
	border: 1px ${COLOR_TERTIARY_2} solid;
	border-radius: 0.5rem;
`

export default class List extends React.Component {
	componentWillMount() {
		this.props.get()
	}

	remove = index => this.props.remove(index)

	render() {
		const { todos } = this.props

		return (
			<div className={style}>
				{todos.map((task, index) => (
					<p key={`todo-${index}`}>
						{task} <Button text="x" onClick={() => this.remove(index)} />
					</p>
				))}
			</div>
		)
	}
}
