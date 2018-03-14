import React from 'react'
import { css } from 'emotion'
import Hello from 'app/hello.jsx'
import { hot } from 'react-hot-loader'
import Button from 'app/button.jsx'
import Kitten from 'app/kitten.jsx'

const style = css`
	color: red;
`

const Root = () => (
	<div className={style}>
		<Hello recipient="Hal" />
		<Button text="Switch!" />
		<Kitten />
	</div>
)

export default hot(module)(Root)
