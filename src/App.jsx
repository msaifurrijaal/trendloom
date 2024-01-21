import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import DetailProductPage from "./pages/detailProduct";
import ProductsPage from "./pages/products";
import AboutPage from "./pages/about";

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
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
