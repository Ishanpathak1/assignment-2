import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'

const Wishlist = ({ wishlistItems, moveToCart, removeFromWishlist }) => {
    return (
        <div className= "wishlistFrame">
            <h2 className='title'>Your Wishlist</h2>
            {wishlistItems.length === 0 ? (
                <p className='subtitle'>Your wishlist is empty.</p>
            ) : (
                <div>
                    <ul>
                        {wishlistItems.map(item => (
                            <li key={item.id} style={{ marginBottom: '20px' }}>
                                <img src={item.image} alt={item.name} style={{ width: '100px', height: 'auto' }} />
                                <div>
                                    <h4 className='itemName'>{item.name}</h4>
                                    <p className='itemPrice'>Price: ${item.price.toFixed(2)}</p>
                                    <button className='moveToCart' onClick={() => moveToCart(item.id)}>Move to Cart</button>
                                    <button className='removeWishlist' onClick={() => removeFromWishlist(item.id)}>Remove from Wishlist</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
           <button className='backToProduct'><Link to="/">Back to Product List</Link></button> 
        </div>
    );
};

export default Wishlist;


