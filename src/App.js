import React, { useState } from "react";
import './styles/App.css';
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import MyModal from "./UI/modal/MyModal";
import MyButton from "./UI/button/MyButton";
import logo from './img/shopping-cart.png'

function App() {

  const productList = JSON.parse(localStorage.getItem('productList')) || [];
  const [products, setProducts] = useState(productList);
  const [modal, setModal] = useState(false);

  const createProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    productList.push(newProduct);
    localStorage.setItem('productList', JSON.stringify(productList));
    setModal(false);
  }

  const removeProduct = (product) => {
    setProducts(products.filter(item => item.id !== product.id));
    const result = productList.filter(item => item.id !== product.id);
    localStorage.setItem('productList', JSON.stringify(result));
  }

  return (
    <div className="App">
      <div className="header">
        <img src={logo} alt="Логотип" className="header__logo"/>
      </div>
      <MyButton onClick={() => setModal(true)}>
        Добавить товар
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <ProductForm create={createProduct} />
      </MyModal>
      <ProductList remove={removeProduct} products={products} title="Список товаров" />
    </div>
  );
}

export default App;
