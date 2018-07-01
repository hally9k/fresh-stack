import Search from './search'
import { search } from 'duck/product'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => ({
    search: (payload) => dispatch(search(payload))
})

export default connect(() => ({}), mapDispatchToProps)(Search)
