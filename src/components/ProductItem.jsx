import React from 'react';
import MyButton from '../UI/button/MyButton';
import classes from './modules/ProductItem.module.css';

const ProductItem = (props) => {

    if (props.discount.isSet) {
        return (
            <div className={classes.myProduct}>
                <div className={classes.myProductId}>
                    {props.product.id}
                </div>
                <div className={classes.myProductName}>
                    {props.product.name}
                </div>
                <div className={classes.myProductPrice}>
                    <span className={classes.oldPrice}>
                        {props.product.price} р.;
                    </span>
                    <span className={classes.discountedPrice}>
                        {(props.product.price * (1 - props.discount.value / 100)).toFixed(2)} р.
                    </span>
                </div>
                <div className={classes.myProductButton}>
                    <MyButton
                        onClick={() => props.remove(props.product)}>
                        Удалить
                    </MyButton>
                </div>
            </div>
        )
    }

    return (
        <div className={classes.myProduct}>
            <div className={classes.myProductId}>
                {props.product.id}
            </div>
            <div className={classes.myProductName}>
                {props.product.name}
            </div>
            <div className={classes.myProductPrice}>
                <span>
                    {props.product.price} р.
                </span>
            </div>
            <div className={classes.myProductButton}>
                <MyButton
                    onClick={() => props.remove(props.product)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    )
}

export default ProductItem