import React from 'react';
import MyButton from '../UI/button/MyButton';
import classes from './modules/DiscountForm.module.css';

const DiscountForm = ({ discount, setDiscount }) => {

    return (
        <form className={classes.discountForm}>
            <label htmlFor="sale" className={classes.discountLabel}>Скидка:</label>
            <input
                className={classes.discountInput}
                value={discount.value}
                type="number"
                min="0"
                max="100"
                id="sale"
                onChange={event => setDiscount({ ...discount, value: event.target.value })}
            />
            <MyButton
                className={classes.discountButton}
                onClick={(event) => {
                    event.preventDefault();
                    if (discount.value > 0 && discount.value <= 100) {
                        setDiscount({ ...discount, isSet: true })
                    } else return
                }}>
                Применить скидку
            </MyButton>
            <MyButton
                onClick={(event) => {
                    event.preventDefault();
                    setDiscount({ value: '', isSet: false });
                }}>
                Убрать скидку
            </MyButton>
        </form >
    )
}

export default DiscountForm