import React from 'react';
import MyButton from '../UI/button/MyButton';
import classes from './modules/ProductItem.module.css';

const ProductItem = ({ remove, product, discount }) => {

    if (discount.isSet) {
        return (
            <div className={classes.myProduct}>
                <div className={classes.myProductId}>
                    {product.id}
                </div>
                <div className={classes.myProductName}>
                    {product.name}
                </div>
                <div className={classes.myProductPrice}>
                    <span className={classes.oldPrice}>
                        {product.price} р.;
                    </span>
                    <span className={classes.discountedPrice}>
                        {(product.price * (1 - discount.value / 100)).toFixed(2)} р.
                    </span>
                </div>
                <div className={classes.myProductButton}>
                    <MyButton
                        onClick={() => remove(product)}>
                        Удалить
                    </MyButton>
                </div>
            </div>
        )
    }

    return (
        <div className={classes.myProduct}>
            <div className={classes.myProductId}>
                {product.id}
            </div>
            <div className={classes.myProductName}>
                {product.name}
            </div>
            <div className={classes.myProductPrice}>
                <span>
                    {product.price} р.
                </span>
            </div>
            <div className={classes.myProductButton}>
                <MyButton
                    onClick={() => remove(product)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    )
}

export default ProductItem