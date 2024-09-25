import React, { useState } from 'react';

const Cart = ({ cartItems, updateCartItemNumber, removeFromCart, moveToWishlist }) => {

    //Tried Using the math Lib, but was not able to update, found out that you cannot use that when you want to "reduce", in one value, you have to use reduce only.
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    
    const handleQuantityChange = (itemId, newQuantity) => {
        if (newQuantity <= 0) return; 
        updateCartItemNumber(itemId, newQuantity);
    };

    
    const handleBuyNow = () => {
        alert("Proceed to buy the selected items");
        
    };

    
    const handleCheckout = () => {
        alert("Proceeding to checkout...");
        
    };

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {cartItems.map(item => (
                            <li key={item.id} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={item.image} alt={item.name} style={{ width: '100px', height: 'auto', marginRight: '20px' }} />
                                    <div>
                                        <h4>{item.name}</h4>
                                        <p>Price: ${item.price.toFixed(2)}</p>
                                        <p>
                                            Quantity: 
                                            <input 
                                                type="number" 
                                                value={item.quantity} 
                                                min="1" 
                                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                                style={{ marginLeft: '10px', width: '50px' }}
                                            />
                                        </p>
                                        <div style={{ marginTop: '10px' }}>
                                            <button onClick={() => removeFromCart(item.id)} style={{ marginRight: '10px', background: '#ff4d4d', border: 'none', padding: '5px 10px', color: '#fff' }}>Remove</button>
                                            <button onClick={() => moveToWishlist(item.id)} style={{ background: '#ffbf00', border: 'none', padding: '5px 10px', color: '#fff' }}>Move to Wishlist</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${calculateTotal()}</h3>

                    <div style={{ marginTop: '20px' }}>
                        <button onClick={handleBuyNow} style={{ marginRight: '10px', background: '#4CAF50', border: 'none', padding: '10px 20px', color: '#fff' }}>Buy Now</button>
                        <button onClick={handleCheckout} style={{ background: '#2196F3', border: 'none', padding: '10px 20px', color: '#fff' }}>Checkout</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;

