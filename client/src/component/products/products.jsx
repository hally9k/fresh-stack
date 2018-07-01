import React from 'react'

export default class Products extends React.Component {
    render() {
        const { products } = this.props

        return (
            <div>
                {products.map((product, index) => {
                    return <p key={`product-${index}`}>{product.title}</p>
                })}
            </div>
        )
    }
}
