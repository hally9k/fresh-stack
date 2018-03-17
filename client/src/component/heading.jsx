import React from 'react'
import { css } from 'emotion'

const style = css`
	letter-spacing: 0.6rem;
	font-weight: 900;
`

export default ({ text }) => <h1 className={style}>{text}</h1>
