# ShoppyGlobe — React + Redux E-Commerce App
 A simple and functional e-commerce web application built with React, Redux Toolkit, React - Router, and Tailwind CSS.
 This app demonstrates modern React patterns, Redux for state management, routing, and fetching  real data from APIs.
## Features
 Functional Component-Based Architecture
 Fetch product list & details from https://dummyjson.com/products
 Redux-powered Cart management (Add, Remove, Update Quantity)
 Search products with URL-based query handling
 Responsive Design using Tailwind CSS
 Code Splitting with React.lazy and Suspense
 Error handling for API calls
 Smooth Navigation using React Router
 Clean UI and reusable components

## Component Structure
App-Main root component, sets up routes and layout.
Header-	Displays navigation menu, search bar, and shopping cart icon.
ProductList-Fetches and displays products using useEffect. Uses custom hook.
ProductItem-Represents a single product with an “Add to Cart” button.
ProductDetail-Fetches product details based on route parameters using useEffect.
Cart-Displays all items added to the cart, allows modifying/removing items.
CartItem-Represents a single cart item with quantity and remove controls.
Error-A 404 page for unknown routes.

## State Management (Redux)
Cart State: Add, Remove, Update Quantities.
Product State: Store and filter products using a search query.
Actions and Reducers for managing cart and product logic.
Selectors for extracting and optimizing state usage.
Search filtering updates filteredProducts in Redux store.

## Data Fetching
ProductList:
Uses useEffect and a custom hook to fetch product data on mount. Handles errors gracefully.
ProductDetail:
Fetches product detail using route parameters.

## Routing
React Router used for page navigation.
/ → Home (ProductList)
/productlist/:category? → Category filtered list.
/productitem/:id → Product Detail page.
/cart → Cart page.
/checkout → Checkout page.
/search?q=query → Search Result page.
Unknown route → NotFound page.

## Performance Optimization
Code-splitting and lazy loading done with React.lazy and Suspense

## Styling
Responsive layout with Tailwind CSS.

## Installation and project setup
 npm create vite@latest
 cd vite-project
 npm install-install all dependancies 
 npm run dev -create local server for us
 install tailwind -npm install tailwindcss @tailwindcss/vite
 install react icons:npm i react-icon
 install slick-slider:npm install react-slick slick-carousel
 redux toolkit:npm install @reduxjs/toolkit react-redux
 react-router-dom:npm install react-router-dom
