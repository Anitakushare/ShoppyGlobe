import React,{ StrictMode,lazy,Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './Utils/appStore.js';
import Error from './Components/Error.jsx'


// Lazy loading components for code-splitting and faster initial load
const ProductList = lazy(() => import('./Components/ProductList.jsx'));
const Product_Detail = lazy(() => import('./Components/Product_Detail.jsx'));
const ProductItem = lazy(() => import('./Components/ProductItem.jsx'));
const Cart = lazy(() => import('./Components/Cart.jsx'));
const CartItem = lazy(() => import('./Components/CartItem.jsx'));
const Checkout = lazy(() => import('./Components/Checkout.jsx'));
const SearchPage = lazy(() => import('./Components/SearchPage.jsx'));

// Defining routes using React Router with lazy-loaded components
const appRoute=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path: '/',
        element: (<Suspense fallback={<div className="text-center p-10">Loading...</div>} ><ProductList /></Suspense>),  // Default route shows ProductList
      },
      {
        path:'/ProductList/:category?',
        element:(<Suspense fallback={<div className="text-center p-10">Loading...</div>}><ProductList /></Suspense>),
      },
      {
        path:'/ProductItem',
        element:(<Suspense fallback={<div className="text-center p-10">Loading...</div>}><ProductItem /></Suspense>),
      },
      {
        path:'/ProductItem/:id',
        element:(<Suspense fallback={<div className="text-center p-10">Loading...</div>}><Product_Detail /></Suspense>),
      },
      {
        path:"/Cart",
        element:(<Suspense fallback={<div className="text-center p-10">Loading...</div>}><Cart/></Suspense>)
      },
      {
        path:"/CartItem",
        element:(<Suspense fallback={<div className="text-center p-10">Loading...</div>}><CartItem /></Suspense>)
      },
      {
        path:"/Checkout",
        element:(<Suspense fallback={<div className="text-center p-10">Loading...</div>}><Checkout /></Suspense>)
      },
      {
        path: '/search',
        element:(<Suspense fallback={<div className="text-center p-10">Loading...</div>}><SearchPage /></Suspense> )
      },
      {
       errorElement:<Error />
      }
    ],
   
  },
 
  
])
// Rendering the app with Redux store and Router provider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
    
    <RouterProvider router={appRoute} />
    
    </Provider>
  </StrictMode>,


)
