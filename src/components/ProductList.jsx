import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({ products, title, remove }) => {

    if (!products.length) {
        return (
            <h1 style={{ textAlign: 'center' }}>
                Список пуст!
            </h1>
        )
    }

    return (
        <div>
            <h1>{title}</h1>
            {products.map(product =>
                <ProductItem remove={remove} product={product} key={product.id} />
            )}
        </div>
    )
}

export default ProductList