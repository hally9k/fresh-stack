import New from './new'
import { add } from 'duck/todo'
import { connect, type MapDispatchToProps, type MapStateToProps } from 'react-redux'

const mapDispatchToProps = dispatch => ({
	add: payload => dispatch(add(payload))
})

export default connect(() => ({}), mapDispatchToProps)(New)
