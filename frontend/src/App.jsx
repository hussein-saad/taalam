import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root";
import HomePage from "./pages/Home";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
