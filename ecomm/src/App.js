import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDescription from './components/ProductDescription';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import Navbar from './components/Navbar';

function App() {
    // State to store items added to the cart
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);

    // Function to add products to the cart
    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);  // Update the cart state
        console.log('Cart Items:', cartItems);  // Log cart items to check if they are updating
    };

    // Function to add products to the wishlist
    const addToWishlist = (product) => {
        setWishlistItems((prevItems) => [...prevItems, product]);
    };

    return (
        <Router>
            <div>
              <Navbar></Navbar>
                <Routes>
                    {/* Route for Product List */}
                    <Route 
                        path="/" 
                        element={<ProductList addToCart={addToCart} />} 
                    />

                    {/* Route for Product Description - pass addToCart */}
                    <Route 
                        path="/product/:id" 
                        element={
                            <ProductDescription 
                                addToCart={addToCart} 
                                addToWishlist={addToWishlist} 
                            />
                        } 
                    />

                    {/* Route for Cart */}
                    <Route path="/cart" element={<Cart cartItems={cartItems} />} />

                    {/* Route for Wishlist */}
                    <Route path="/wishlist" element={<Wishlist wishlistItems={wishlistItems} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;






