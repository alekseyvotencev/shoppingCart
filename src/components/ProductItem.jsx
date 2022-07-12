import React from 'react'
import MyButton from '../UI/button/MyButton'
import classes from './ProductItem.module.css'

const ProductItem = (props) => {

    if (props.discount.isSet) {
        console.log('скидка')
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
                        {props.product.price} рублей
                    </span>
                    <span className={classes.discountedPrice}>
                        {props.product.price * (1 - props.discount.value / 100)} рублей
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
                    {props.product.price} рублей
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