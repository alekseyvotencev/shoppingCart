import React, { useState } from 'react'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'
import classes from './ProductForm.module.css'

const ProductForm = ({ create }) => {

    const [product, setProduct] = useState({ id: '', name: '', price: '' });

    function addNewProduct(event) {
        event.preventDefault();
        const newProduct = { ...product };
        create(newProduct);
        setProduct({ id: '', name: '', price: '' });
    }

    return (
        <form className={classes.myForm}>
            <MyInput
                value={product.id}
                onChange={event => setProduct({ ...product, id: event.target.value })}
                type="text"
                placeholder="Введите ID товара"
            />
            <MyInput
                value={product.name}
                onChange={event => setProduct({ ...product, name: event.target.value })}
                type="text"
                placeholder="Введите название товара"
            />
            <MyInput
                value={product.price}
                onChange={event => setProduct({ ...product, price: event.target.value })}
                type="number"
                placeholder="Введите цену товара"
            />
            <MyButton onClick={addNewProduct}>Добавить</MyButton>
        </form>
    )
}

export default ProductForm