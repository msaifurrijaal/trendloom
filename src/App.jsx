import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import DetailProductPage from "./pages/detailProduct";
import ProductsPage from "./pages/products";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import { IsLoginContextProvider } from "./context/isLogin";
import { CartContextProvider } from "./context/cartContext";
import CartPage from "./pages/cart";
import { TotalCartContextProvider } from "./context/totalCartContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/products",
      element: <ProductsPage />,
    },
    {
      path: "/product/:id",
      element: <DetailProductPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
  ]);

  return (
    <>
      <IsLoginContextProvider>
        <CartContextProvider>
          <TotalCartContextProvider>
            <RouterProvider router={router} />
          </TotalCartContextProvider>
        </CartContextProvider>
      </IsLoginContextProvider>
    </>
  );
}

export default App;
