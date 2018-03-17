import React from 'react'
import { css } from 'emotion'
import Heading from 'component/heading.jsx'
import { hot } from 'react-hot-loader'
import Button from 'component/button.jsx'
import Counter from 'component/counter.jsx'

const style = css`
	font-family: monospace;
	padding: 4rem 2rem 3rem 2rem;
`

const Root = () => (
	<div className={style}>
		<Heading text="TODO" />
		<Button text="Add" />
		<Counter />
	</div>
)

export default hot(module)(Root)
