import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDescription from './components/ProductDescription';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import Navbar from './components/Navbar';

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);

    // Add item to cart
    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);

        if (existingItem) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 } // Increase quantity if the item already exists
                        : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]); // Add new item with initial quantity 1
        }
    };

    // Update the number of items in the cart
    const updateCartItemNumber = (itemId, newQuantity) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === itemId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    // Remove item from cart
    const removeFromCart = (itemId) => {
        setCartItems(cartItems.filter((item) => item.id !== itemId));
    };

    // Move item from cart to wishlist
    const moveToWishlist = (itemId) => {
        const itemToMove = cartItems.find((item) => item.id === itemId);
        if (itemToMove) {
            setWishlistItems([...wishlistItems, itemToMove]);
            removeFromCart(itemId);
        }
    };

    return (
        <Router>
            <div>
              <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<ProductList addToCart={addToCart} />} />
                    <Route path="/product/:id" element={<ProductDescription addToCart={addToCart} />} />
                    <Route
                        path="/cart"
                        element={
                            <Cart
                                cartItems={cartItems}
                                updateCartItemNumber={updateCartItemNumber}
                                removeFromCart={removeFromCart}
                                moveToWishlist={moveToWishlist}
                            />
                        }
                    />
                    <Route
                        path="/wishlist"
                        element={<Wishlist wishlistItems={wishlistItems} />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;







