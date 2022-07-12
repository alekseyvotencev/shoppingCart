import React from 'react'
import ProductItem from './ProductItem'
import classes from './ProductList.module.css';

const ProductList = ({ products, title, remove, discount }) => {

    if (!products.length) {
        return (
            <h1 style={{ textAlign: 'center' }}>
                Список пуст!
            </h1>
        )
    }

    return (
        <div>
            <h1 className={classes.productsTitle}>{title}</h1>
            <div className={classes.productsRow}>
                <div className={classes.productsRow_heading}>
                    ID
                </div>
                <div className={classes.productsRow_heading}>
                    Название товара
                </div>
                <div className={classes.productsRow_heading}>
                    Цена товара
                </div>
                <div className={classes.productsRow_heading}>
                    Действия
                </div>
            </div>
            <div className={classes.productsTable}>
                {products.map(product =>
                    <ProductItem remove={remove} product={product} key={product.id} discount={discount}/>
                )}
            </div>
        </div>
    )
}

export default ProductList