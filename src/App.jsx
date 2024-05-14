// react
import { useEffect } from "react";
// rrd
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
// pages  
import { Cart, Checkout, HomeLayout, Landing, Orders, Products, SingleProduct, Login, Register, Error, About } from "./pages"
import { ErrorElement, ProtectedRoutes } from "./components";

// loader
import { loader as LandingLoader } from './pages/Landing'
import { loader as SingleProductLoader } from './pages/SingleProduct'
import { loader as ProductsLoader } from './pages/Products'

// actions
import { action as RegisterAction } from "./pages/Register";

// redux
import { useSelector, useDispatch } from "react-redux";

// firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
// store
import { authReady, login } from "./features/user/userSlice";

function App() {
  const { user, authReadyState } = useSelector((state) => state.userState)
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoutes user={user}>
        <HomeLayout/>
      </ProtectedRoutes>,
      errorElement: <Error/>,
      children:[
        {
          index: true,
          element: <Landing/>,
          errorElement: <ErrorElement/>,
          loader: LandingLoader,
        },
        {
          path: "/products",
          element: <Products/>,
          loader: ProductsLoader,
        },
        {
          path: "/products/:id",
          element: <SingleProduct/>,
          loader: SingleProductLoader,
        },
        {
          path: "/cart",
          element: <Cart/>,
        },
        {
          path: "/checkout",
          element: <Checkout/>
        },
        {
          path: "/orders",
          element: <Orders/>,
        },
        {
          path: "/about",
          element: <About/>
        }
      ]
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login/>,
      errorElement: <Error/>,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> :  <Register/>,
      errorElement: <Error/>,
      action: RegisterAction,
    }
  ]);

  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(login(user))
      dispatch(authReady())
    })
  }, [])

  return <>{ authReady && <RouterProvider router={routes}/> }</>
}

export default App