import React from 'react';
import MyButton from '../UI/button/MyButton';
import DiscountForm from './DiscountForm';
import logo from '../img/shopping-cart.png';

const Header = ({ discount, setDiscount, setModalNewProduct, setModalStatistic }) => {
    return (
        < div className="header" >
            <div className="container">
                <img src={logo} alt="Логотип" className="header__logo" />
                <DiscountForm discount={discount} setDiscount={setDiscount} />
                <MyButton onClick={() => setModalNewProduct(true)} className="header__button">
                    Добавить товар
                </MyButton>
                <MyButton onClick={() => setModalStatistic(true)}>
                    Статистика
                </MyButton>
            </div>
        </div >
    )
}

export default Header