import React from 'react'
import MyButton from '../UI/button/MyButton';
import classes from './Statistic.module.css'

const Statistic = ({ products, title, setVisible }) => {

    let totalPrice = 0;
    for (const key in products) {
        totalPrice += Number(products[key].price);
    }

    const closeModal = () => {
        setVisible(false);
    }

    if (products[0].discountedPrice) {

        let totalDiscounted = 0;

        for (const key in products) {
            totalDiscounted += Number(products[key].discountedPrice);
        }

        return (
            <div className={classes.statistic}>
                <h4 className={classes.statisticTitle}>{title}</h4>
                <p className={classes.statisticCount}>Количество добавленных в данный момент товаров: {products.length}</p>
                <p className={classes.statisticPrice}>Цена текущего списка товаров: <span className={classes.oldPrice}>{totalPrice}</span> {totalDiscounted} рублей</p>
                <MyButton onClick={closeModal}>Закрыть</MyButton>
            </div>
        )
    }

    return (
        <div className={classes.statistic}>
            <h4 className={classes.statisticTitle}>{title}</h4>
            <p className={classes.statisticCount}>Количество добавленных в данный момент товаров: {products.length} рублей</p>
            <p className={classes.statisticPrice}>Цена текущего списка товаров: {totalPrice}</p>
            <MyButton onClick={closeModal}>Закрыть</MyButton>
        </div>
    )
}

export default Statistic