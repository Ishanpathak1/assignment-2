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
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    // Add item to wishlist
    const addToWishlist = (product) => {
        const existingItem = wishlistItems.find((item) => item.id === product.id);
        if (!existingItem) {
            setWishlistItems([...wishlistItems, product]); // Add product to wishlist if not already present
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

    // Remove item from wishlist
    const removeFromWishlist = (itemId) => {
        setWishlistItems(wishlistItems.filter((item) => item.id !== itemId));
    };

    // Move item from wishlist to cart
    const moveToCart = (itemId) => {
        const itemToMove = wishlistItems.find((item) => item.id === itemId);
        if (itemToMove) {
            addToCart(itemToMove); // Use the existing addToCart function to add to cart
            removeFromWishlist(itemId); // Then remove from wishlist
        }
    };

    // Calculate total cart quantity
    const totalCartQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <Router>
            <div>
                <Navbar cartQuantity={totalCartQuantity} />
                <Routes>
                    <Route path="/" element={<ProductList addToCart={addToCart} />} />
                    <Route
                        path="/product/:id"
                        element={<ProductDescription addToCart={addToCart} addToWishlist={addToWishlist} />}
                    />
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
                        element={
                            <Wishlist
                                wishlistItems={wishlistItems}
                                moveToCart={moveToCart}
                                removeFromWishlist={removeFromWishlist}
                            />
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;










