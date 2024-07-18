import CleanUpThemeProvider from "./context/themeContext";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import Problemset from "./pages/Problemset";
import Problem from "./pages/Problem";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: (
      <Layout>
        <Signup />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/problemset",
    element: (
      <Layout>
        <Problemset />
      </Layout>
    ),
  },
  {
    path: "/problem/:id",
    element: (
      <Layout>
        <Problem />
      </Layout>
    ),
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <div className="App">
      <CleanUpThemeProvider>
        <RecoilRoot>
          <RouterProvider router={router} />
        </RecoilRoot>
      </CleanUpThemeProvider>
    </div>
  );
}

export default App;
