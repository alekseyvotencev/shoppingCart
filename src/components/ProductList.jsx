import React from 'react'
import ProductItem from './ProductItem'
import classes from './modules/ProductList.module.css'
import empty from '../img/empty.png'

const ProductList = ({ products, title, remove, discount }) => {

    if (!products.length) {
        return (
            <div>
                <h1 className={classes.productsTitle}>
                    Список пуст!
                </h1>
                <img src={empty} alt="Поиск не дал результатов" className={classes.empty} />

            </div>
        )
    }

    return (
        <div className="container">
            <div className={classes.products}>
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
                        <ProductItem remove={remove} product={product} key={product.id} discount={discount} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductList