import React, { useState } from "react";
import './styles/App.css';
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import MyModal from "./UI/modal/MyModal";
import Statistic from "./components/Statistic";
import Header from "./components/Header";

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
      <Header discount={discount} setDiscount={setDiscount} setModalNewProduct={setModalNewProduct} setModalStatistic={setModalStatistic} />
      <MyModal visible={modalNewProduct} setVisible={setModalNewProduct}>
        <ProductForm create={createProduct} />
      </MyModal>
      <MyModal visible={modalStatistic} setVisible={setModalStatistic}>
        <Statistic products={products} title="Статистика" setVisible={setModalStatistic} discount={discount} />
      </MyModal>
      <ProductList remove={removeProduct} products={products} title="Список товаров" discount={discount} />
    </div>
  );
}

export default App;
