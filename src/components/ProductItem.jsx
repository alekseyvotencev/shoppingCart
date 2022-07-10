import React from 'react'
import MyButton from '../UI/button/MyButton'

const ProductItem = (props) => {
    return (
        <div classname="product">
            <strong>{props.product.id}. {props.product.name}</strong>
            <div>{props.product.price} рублей</div>
            <div className="product__btn">
                <MyButton
                    onClick={() => props.remove(props.product)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    )
}

export default ProductItem