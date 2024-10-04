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
            <h2 className="CartTitle">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className="CartSubtitle">Your cart is empty.</p>
            ) : (
                <div>
                    <ul className="CartList">
                        {cartItems.map(item => (
                            <li className="CartListItem" key={item.id}>
                                <div className="CartItem">
                                    <img className="ImagesCart" src={item.image} alt={item.name} />
                                    <div>
                                        <h4 className="CartItemName">{item.name}</h4>
                                        <p>Price: ${item.price.toFixed(2)}</p>
                                        <p>
                                            Quantity: 
                                            <input
                                                className="CartInputQuantity"
                                                type="number"
                                                value={item.quantity}
                                                min="1"
                                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                            />
                                        </p>
                                        <div className="CartActions">
                                            <button className="RemoveButton" onClick={() => removeFromCart(item.id)}>Remove</button>
                                            <button className="MoveToWishlistButton" onClick={() => moveToWishlist(item.id)}>Move to Wishlist</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${totalPrice.toFixed(2)}</h3>
                </div>
            )}
        </div>
    );
};

export default Cart;



