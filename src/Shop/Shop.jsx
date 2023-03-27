import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/public/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  
  const handleAddtoCart = (product) => {
    const newCart = [...cart, product]
    setCart(newCart);

    
  };
  return (
    <div className="grid grid-cols-5">
      <div className="products col-span-4 grid grid-cols-3 gap-5">
        {products.map((product1) => (
          <Product
            key={product1.id}
            product1={product1}
            handleAddtoCart={handleAddtoCart}
          ></Product>
        ))}
      </div>
      <div className="cards col-span-1 text-center mt-5">
        <h2 className="font-bold">Order summary</h2>
        <h2>Selected Items: {cart.length}</h2>
      </div>
    </div>
  );
};

export default Shop;
