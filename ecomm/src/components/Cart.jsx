import React, { useState, useEffect } from 'react';
import '../style.css'

const Cart = ({ cartItems, updateCartItemNumber, removeFromCart, moveToWishlist }) => {
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const calculateTotal = () => {
            const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
            setTotalPrice(total);
        };

        calculateTotal();
    }, [cartItems]);

    const handleQuantityChange = (itemId, newQuantity) => {
        if (newQuantity <= 0) return;
        updateCartItemNumber(itemId, newQuantity);
    };

    return (
        <div>
            <h2 className="cartTitle">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className="cartSubtitle">Your cart is empty.</p>
            ) : (
                <div>
                    <ul className="cartList">
                        {cartItems.map(item => (
                            <li className="cartListItem" key={item.id}>
                                <div className="cartItem">
                                    <img className="imagesCart" src={item.image} alt={item.name} />
                                    <div>
                                        <h4 className="cartItemName">{item.name}</h4>
                                        <p>Price: ${item.price.toFixed(2)}</p>
                                        <p>
                                            Quantity: 
                                            <input
                                                className="cartInputQuantity"
                                                type="number"
                                                value={item.quantity}
                                                min="1"
                                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                            />
                                        </p>
                                        <div className="cartActions">
                                            <button className="removeButton" onClick={() => removeFromCart(item.id)}>Remove</button>
                                            <button className="moveToWishlistButton" onClick={() => moveToWishlist(item.id)}>Move to Wishlist</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3 className='totalAmount'>Total: ${totalPrice.toFixed(2)}</h3>
                </div>
            )}
        </div>
    );
};

export default Cart;



