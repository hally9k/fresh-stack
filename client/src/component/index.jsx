import React from 'react'
import { hot } from 'react-hot-loader'
import Heading from 'component/shared/heading'
import New from 'component/new'
import List from 'component/list'
import { css } from 'emotion'

const style = css`
	font-family: sans-serif;
	padding: 4rem 2rem 3rem 2rem;
`

const Root = () => (
	<div className={style}>
		<Heading text="TODO" />
		<New />
		<List />
	</div>
)

export default hot(module)(Root)
