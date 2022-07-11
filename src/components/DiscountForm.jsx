import React, { useState } from 'react'
import MyButton from '../UI/button/MyButton'

const DiscountForm = ({ apply, cancel, ...props }) => {

    const [discount, setDiscount] = useState(0);

    const addDiscount = (event) => {
        event.preventDefault();
        if (discount > 0 && discount <= 100) {
            setDiscount(discount)
            apply(discount);
        }
        return false
    }

    const removeDiscount = (event) => {
        event.preventDefault();
        setDiscount(0);
        cancel();
    }

    return (
        <form>
            <label for="sale">Скидка</label>
            <input {...props}
                value={discount}
                type="number"
                min="0"
                max="100"
                id="sale"
                onChange={event => setDiscount(event.target.value)}
            />
            <MyButton onClick={addDiscount}>Применить скидку</MyButton>
            <MyButton onClick={removeDiscount}>Убрать скидку</MyButton>
        </form>
    )
}

export default DiscountForm