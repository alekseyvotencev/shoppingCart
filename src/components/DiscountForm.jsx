import React from 'react'
import MyButton from '../UI/button/MyButton'

const DiscountForm = ({ discount, setDiscount }) => {

    return (
        <form>
            <label htmlFor="sale">Скидка</label>
            <input
                value={discount.value}
                type="number"
                min="0"
                max="100"
                id="sale"
                onChange={event => setDiscount({ ...discount, value: event.target.value })}
            />
            <MyButton
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