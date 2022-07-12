import React, { useState } from "react";
import './styles/App.css';
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import MyModal from "./UI/modal/MyModal";
import MyButton from "./UI/button/MyButton";
import logo from './img/shopping-cart.png'
import Statistic from "./components/Statistic";
import DiscountForm from "./components/DiscountForm";

function App() {

  const productList = JSON.parse(localStorage.getItem('productList')) || [];
  const [products, setProducts] = useState(productList);
  const [modalNewProduct, setModalNewProduct] = useState(false);
  const [modalStatistic, setModalStatistic] = useState(false);
  const [discount, setDiscount] = useState({ value: '', isSet: false });

  const createProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    productList.push(newProduct);
    localStorage.setItem('productList', JSON.stringify(productList));
    setModalNewProduct(false);
  }

  const removeProduct = (product) => {
    setProducts(products.filter(item => item.id !== product.id));
    const result = productList.filter(item => item.id !== product.id);
    localStorage.setItem('productList', JSON.stringify(result));
  }

  return (
    <div className="App">
      <div className="header">
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
      </div>
      <MyModal visible={modalNewProduct} setVisible={setModalNewProduct}>
        <ProductForm create={createProduct} />
      </MyModal>
      <MyModal visible={modalStatistic} setVisible={setModalStatistic}>
        <Statistic products={products} title="Статистика" setVisible={setModalStatistic} discount={discount} />
      </MyModal>
      <div className="container">
        <ProductList remove={removeProduct} products={products} title="Список товаров" discount={discount} />
      </div>
    </div>
  );
}

export default App;
