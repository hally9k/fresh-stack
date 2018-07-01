import Add from './add'
import { add } from 'duck/product'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => ({
    add: (payload) => dispatch(add(payload))
})

export default connect(() => ({}), mapDispatchToProps)(Add)
