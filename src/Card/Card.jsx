import React from "react";

const Card = ({ cart }) => {
    let total = 0;
    let totalshipping= 0
    for (const product of cart) {
        total= total+ product.price
        totalshipping += product.shipping
    }
    let tax= total * 7 /100;
    let grandTotal = total + totalshipping + tax;

  return (
    <div className="sticky top-0">
      <div className=" text-xl font-bold space-y-3 py-6 bg-orange-200 rounded-bl-lg">
        <h2 className="font-bold">Order summary</h2>
        <h2>Selected Items: {cart.length}</h2>
        <h2>Total Price: ${total.toFixed(2)}</h2>
        <h2>Total Shipping Charge: ${totalshipping}</h2>
        <h2>Tax: ${tax}</h2>
        <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Card;
