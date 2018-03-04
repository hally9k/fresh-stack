import React from 'react'
import { css } from 'emotion'
import Hello from 'app/hello.jsx'
import { hot } from 'react-hot-loader'
import Button from 'app/button.jsx'

const style = css`
	color: red;
`

const Root = () => (
	<div className={style}>
		<Hello recipient="Hal" />
		<Button text="Switch!" />
	</div>
)

export default hot(module)(Root)
