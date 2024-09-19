import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import LoginRoot from "./pages/LoginRoot";
import SignupPage from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "",
    element: <LoginRoot />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
