import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import DetailProductPage from "./pages/detailProduct";
import ProductsPage from "./pages/products";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import LoginPage from "./pages/login";

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
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
