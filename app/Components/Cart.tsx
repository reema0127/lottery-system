"use client";

import { ShoppingCart } from "lucide-react";

const Cart = () => {
 
  return (
    <div className="fixed right-0 top-10 h-full w-1/4 bg-white text-gray-700 shadow-xl flex flex-col items-center py-6 overflow-y-auto max-h-screen">
      <h2 className="text-lg mt-5 font-bold mb-4 flex items-center gap-2">
      <ShoppingCart size={30} />CART 
      </h2>

      {/* Delivery Options */}
      <div className="w-full flex justify-center gap-40 mb-4 text-lg">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="deliveryOption"
            className="form-radio h-5 w-5 text-blue-500"
          />
          <span className="text-gray-700">Self Pick</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="deliveryOption"
            className="form-radio h-5 w-5 text-blue-500"
          />
          <span className="text-gray-700">Dispatch</span>
        </label>
      </div>

      {/* Cart Items (Replace with dynamic content) */}
      <div className="flex-1 w-full px-4 overflow-y-auto max-h-screen">
        {/* Cart items go here */}
      </div>

      {/* Footer Section */}
      <div className="w-full bg-white  p-4 mt-auto shadow-inner flex flex-col">
        <div className="flex justify-between text-lg font-semibold">
          <span>Subtotal:</span>
          <span>$XX.XX</span>
        </div>
        <div className="flex justify-between text-md text-gray-600 mt-2">
          <span>Total Commission:</span>
          <span>$XX.XX</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4 mb-5">
          <button className="flex-1 bg-[#3361E0] text-white py-2 rounded-lg hover:bg-red-600 transition">
            Clear
          </button>
          <button className="flex-1 bg-[#3361E0] text-white py-2 rounded-lg hover:bg-blue-600 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
