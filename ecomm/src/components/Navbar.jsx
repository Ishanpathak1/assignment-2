import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Navbar = ({ cartQuantity }) => {
    return (
        <nav className='navbar'>
            <ul>
                <li className='productList'>
                    <Link to="/">Product List</Link>
                </li>
                <li className='cart'>
                    <Link to="/cart">
                        Cart {cartQuantity > 0 && `(${cartQuantity})`} {/* Display cart quantity if greater than 0 */}
                    </Link>
                </li>
                <li className='wishlist'>
                    <Link to="/wishlist">Wishlist</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

