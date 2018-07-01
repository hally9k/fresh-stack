import React from 'react'
import { hot } from 'react-hot-loader'
import Add from 'component/add'
import Heading from 'component/shared/heading'
import Search from 'component/search'
import Products from 'component/products'

const Root = () => (
    <div>
        <Heading text="Search for products" />
        <Search />
        <Add />
        <Products />
    </div>
)

export default hot(module)(Root)
