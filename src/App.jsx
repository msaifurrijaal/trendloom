import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import DetailProductPage from "./pages/detailProduct";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/product/:id",
      element: <DetailProductPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
