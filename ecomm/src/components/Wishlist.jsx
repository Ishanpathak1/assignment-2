import React from 'react';
import { Link } from 'react-router-dom';


const Wishlist = ({ wishlistItems, moveToCart, removeFromWishlist }) => {
    return (
        <div>
            <h2>Your Wishlist</h2>
            {wishlistItems.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <div>
                    <ul>
                        {wishlistItems.map(item => (
                            <li key={item.id} style={{ marginBottom: '20px' }}>
                                <img src={item.image} alt={item.name} style={{ width: '100px', height: 'auto' }} />
                                <div>
                                    <h4>{item.name}</h4>
                                    <p>Price: ${item.price.toFixed(2)}</p>
                                    <button onClick={() => moveToCart(item.id)}>Move to Cart</button>
                                    <button onClick={() => removeFromWishlist(item.id)}>Remove from Wishlist</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
           <button><Link to="/">Back to Product List</Link></button> 
        </div>
    );
};

export default Wishlist;
