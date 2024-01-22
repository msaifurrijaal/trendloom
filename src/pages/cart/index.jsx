import React, { useEffect, useState } from "react";
import { useCart, useCartDispatch } from "../../context/cartContext";
import { getProducts } from "../../services/product.service";
import Button from "../../components/elements/button";
import { useLogin } from "../../hooks/useLogin";
import { useTotalCart } from "../../context/totalCartContext";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";

const CartPage = () => {
  useLogin();

  const [products, setProducts] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const cart = useCart();
  const cartDispatch = useCartDispatch();
  const { setTotalCart } = useTotalCart();

  useEffect(() => {
    getProducts((response) => {
      if (response.success) {
        setProducts(response.data);
      } else {
        alert(`Error: ${response.error}`);
      }
    });
  }, []);

  useEffect(() => {
    if (
      Array.isArray(products) &&
      Array.isArray(cart) &&
      products.length > 0 &&
      cart.length > 0
    ) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
    }
  }, [products, cart]);

  useEffect(() => {
    const totalQty = cart.reduce((total, item) => total + item.qty, 0);
    setTotalCart(totalQty);
    localStorage.setItem("totalCart", totalQty);
  }, [cart]);

  const addToCart = (id, qty) => {
    cartDispatch({ type: "ADD_TO_CART", payload: { id: id, qty: qty } });
  };

  const removeFromCart = (id) => {
    cartDispatch({ type: "REMOVE_FROM_CART", payload: { id: id } });
  };

  return (
    <>
      <Navbar />
      <div className="container py-6 md:py-12 px-4 md:px-0">
        <h1 className="text-2xl md:text-4xl font-semibold text-center">
          Your Cart
        </h1>
        {products && products.length > 0 ? (
          <div className="table-container overflow-x-auto md:px-4">
            <table className="table-auto w-full mt-4 md:mt-8">
              <thead>
                <tr>
                  <th className="text-start border-b border-slate-300 py-2">
                    Item
                  </th>
                  <th className="border-b border-slate-300 px-4 py-2">Price</th>
                  <th className="border-b border-slate-300 px-4 py-2">
                    Quantity
                  </th>
                  <th className="text-end border-b border-slate-300 py-2">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.length > 0 &&
                  cart.map((item) => {
                    const product = products.find(
                      (product) => product.id === item.id
                    );
                    return (
                      <tr key={product.id}>
                        <td className="p-4 text-start ">
                          <div className="flex flex-wrap sm:flex-nowrap">
                            <div className="min-w-14">
                              <img
                                src={product.image}
                                width="50px"
                                height="50px"
                                alt=""
                              />
                            </div>
                            <div className="flex-grow flex-wrap sm:ps-2">
                              <p className="text-base font-semibold">
                                {product.title}
                              </p>
                              <p className="text-sm mt-1">
                                Category : {product.category}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          {product.price.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </td>
                        <td className="p-4 text-center">
                          <div className="flex justify-center">
                            <button
                              className="py-1 px-2 border rounded-l-md"
                              onClick={() => removeFromCart(product.id)}
                            >
                              -
                            </button>
                            <button className="py-1 px-4 border-y">
                              {item.qty}
                            </button>
                            <button
                              className="py-1 px-2 border rounded-r-md"
                              onClick={() => addToCart(product.id, 1)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="p-4 text-end">
                          {(item.qty * product.price).toLocaleString("id-ID", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>

            {totalPrice && (
              <div className="flex justify-end mt-8">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                  <div className="flex justify-between py-4 border-b">
                    <h1 className="text-base font-bold">Subtotal</h1>
                    <h1 className="text-base">
                      {totalPrice.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </h1>
                  </div>
                  <div className="flex justify-between py-4 border-b">
                    <h1 className="text-base font-bold">Service Fee</h1>
                    <h1 className="text-base">$0,5</h1>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b">
                    <h1 className="text-base font-bold">Grand Total</h1>
                    <h1 className="text-2xl">
                      {" "}
                      {(totalPrice + 0.5).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </h1>
                  </div>
                  <div className="flex justify-end">
                    <Button classname="text-white bg-accent mt-6">
                      CHECK OUT
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="py-40 text-center">
            <h1 className="text-4xl font-bold">Loading....</h1>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
