import React from "react";

const Product = (props) => {
  const { name, id, price, seller, img, quantity, ratings } = props.product1;
  const handleAddtoCart= props.handleAddtoCart
  

  return (
    <div className="mt-4 mx-4">
      <div className="card w-full bg-base-100 shadow-xl border-slate-400 border-2">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="mt-4">
          <h2 className="card-title px-4">{name}</h2>
          <h1 className="px-4 text-xl font-semibold">Price: ${price}</h1>
          <p className="px-4">Manufacturer : {seller}</p>
          <p className="px-4">Rating : {ratings}</p>
          <div
            onClick={() => handleAddtoCart(props.product1)}
            className="py-5 mt-4 border-slate-400 border-t-2 rounded-b-xl  bg-amber-100 p-3 flex justify-center gap-4 cursor-pointer hover:bg-orange-200"
          >
            <h1>Add to Cart</h1>
            <svg
              className="w-5"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;