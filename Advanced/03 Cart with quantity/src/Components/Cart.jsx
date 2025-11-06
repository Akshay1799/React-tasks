import React, { useState } from "react";

function Cart() {
  const [products] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Grapes" },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 }: item
        ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(
        cart.map((item) =>item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        ).filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-10">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[500px]">
        <h1 className="text-2xl font-bold text-center mb-6">
         Shopping Cart with Quantity
        </h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Products</h2>
          <div className="flex flex-col gap-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center border rounded-lg px-4 py-2"
              >
                <span className="font-medium">{product.name}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white font-medium px-3 py-1 rounded-lg"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            Cart ({totalItems} items)
          </h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty </p>
          ) : (
            <ul className="flex flex-col gap-3">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="border rounded-lg px-4 py-2 flex justify-between items-center"
                >
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-2 py-1 border rounded-lg text-gray-700 hover:bg-gray-100 font-bold"
                    >
                      -
                    </button>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-2 py-1 border rounded-lg text-gray-700 hover:bg-gray-100 font-bold"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 font-semibold ml-2 hover:cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
