import List from './list'
import select from 'select'
import { get, remove } from 'duck/todo'
import { connect, type MapDispatchToProps, type MapStateToProps } from 'react-redux'

const mapStateToProps = state => ({
	todos: select.todo(state)
})

const mapDispatchToProps = dispatch => ({
	get: () => dispatch(get()),
	remove: payload => dispatch(remove(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
