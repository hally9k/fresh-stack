import Products from './products'
import select from 'select'
import { connect } from 'react-redux'
import propGuard from 'component/utility/prop-guard'

const mapStateToProps = (state) => ({
    products: select.product.all(state)
})

export default connect(mapStateToProps)(propGuard(['products'], Products))
