import React from 'react'

export default class Products extends React.Component {
    render() {
        const { products } = this.props

        return (
            <div>
                {products.map((product, index) => {
                    return (
                        <React.Fragment key={`product-${index}`}>
                            <p>{product.title}</p>
                            <img src={product.image} alt={product.title} />
                            <hidden>{product.id}</hidden>
                        </React.Fragment>
                    )
                })}
            </div>
        )
    }
}
