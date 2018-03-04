import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'app'
import { hot } from 'react-hot-loader'

const App = hot(module)(Root)

ReactDOM.render(<App />, document.getElementById('root'))
