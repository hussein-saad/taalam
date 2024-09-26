import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RequireAuth from "@auth-kit/react-router/RequireAuth";

import Root from "./pages/Root";
import HomePage from "./pages/Home";
import ResourcesPage from "./pages/Resources";
import Login from "./pages/Login";
import NotFoundPage from "./pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "resources",
        element: (
          <RequireAuth fallbackPath="/login">
            <ResourcesPage />
          </RequireAuth>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
