import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDescription from './components/ProductDescription';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';

const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);

    // Function to add product to the cart
    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
        // Optionally remove from wishlist if it's in the wishlist
        setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== product.id));
    };

    // Function to add product to the wishlist
    const addToWishlist = (product) => {
        setWishlistItems((prevItems) => [...prevItems, product]);
    };

    // Function to remove product from the wishlist
    const removeFromWishlist = (product) => {
        setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== product.id));
    };

    // Function to move product from wishlist to cart
    const moveToCart = (product) => {
        addToCart(product); // This will also remove from wishlist automatically
    };

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route
                        path="/product/:id"
                        element={
                            <ProductDescription
                                addToCart={addToCart}
                                addToWishlist={addToWishlist}
                            />
                        }
                    />
                    <Route path="/cart" element={<Cart cartItems={cartItems} />} />
                    <Route
                        path="/wishlist"
                        element={
                            <Wishlist
                                wishlistItems={wishlistItems}
                                removeFromWishlist={removeFromWishlist}
                                moveToCart={moveToCart}
                            />
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;




