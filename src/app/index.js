import React from 'react'
import { css } from 'emotion'
import Hello from './hello'

const style = css`
	color: red;
`

export default () => (
	<div className={style}>
		<Hello recipient="Hal" />
	</div>
)
