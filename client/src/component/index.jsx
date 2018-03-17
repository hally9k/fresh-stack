import React from 'react'
import { css } from 'emotion'
import Hello from 'component/hello.jsx'
import { hot } from 'react-hot-loader'
import Button from 'component/button.jsx'
import Counter from 'component/counter.jsx'

const style = css`
	color: red;
`

const Root = () => (
	<div className={style}>
		<Hello recipient="Hal" />
		<Button text="Switch!" />
		<Counter />
	</div>
)

export default hot(module)(Root)
