import React, { useState } from 'react';

const Cart = ({ cartItems, updateCartItemNumber, removeFromCart, moveToWishlist }) => {

    // Calculate total price of the cart
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.number, 0).toFixed(2);
    };

    

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id} style={{ marginBottom: '20px' }}>
                                <img src={item.image} alt={item.name} style={{ width: '100px', height: 'auto' }} />
                                <div>
                                    <h4>{item.name}</h4>
                                    <p>Price: ${item.price.toFixed(2)}</p>
                                    <p>Quantity: 
                                        <input 
                                            type="number" 
                                            value={item.quantity} 
                                            min="1" 
                                            
                                        />
                                    </p>
                                    <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
                                    <button onClick={() => moveToWishlist(item.id)}>Move to Wishlist</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${calculateTotal()}</h3>
                </div>
            )}
        </div>
    );
};

export default Cart;
