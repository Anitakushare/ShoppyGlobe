import {createSlice} from '@reduxjs/toolkit';
// Creating a slice named 'Cart'
 const productSlice=createSlice({
    name:"Cart",
    // Initial state for the cart and products
    initialState:{
      // Load cart from localStorage
        items:JSON.parse(localStorage.getItem('cartItems')) || [], 
        products:[], // Stores all fetched products
        filteredProducts:[] // Stores search results or filtered products
    },
    
    reducers:{
       // Add product to cart 
        addProduct:(state,action)=>{
            const product = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
            
        },
        //remove product from cart
        removeProduct:(state,action)=>{
           state.items=state.items.filter((item)=>item.id!==action.payload);
        },
        //Update the product quantity
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item && quantity > 0) {
                item.quantity = quantity;
            }
        },
        // Clear the entire cart and search results
        clearCart:(state,action)=>{
            state.items=[];
            state.filteredProducts = [];
        },
        // Store all fetched products for search and display
        setProducts: (state, action) => {
            state.products = action.payload;
          
        },
        // Filter products based on a search query
        searchProduct:(state,action)=>{
           const searchCategory = action.payload.toLowerCase();
            state.filteredProducts = state.products.filter(product =>
              product.category.toLowerCase().includes(searchCategory)
            )
        }  
    },
   
 });
  // Exporting action 
 export const {addProduct,removeProduct,updateQuantity,clearCart,searchProduct, setProducts}=productSlice.actions;
 export default productSlice.reducer;