import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Navbar = ({ cartQuantity }) => {
    return (
        <nav className='NavBar'>
            <ul>
                <li className='ProductList'>
                    <Link to="/">Product List</Link>
                </li>
                <li className='Cart'>
                    <Link to="/cart">
                        Cart {cartQuantity > 0 && `(${cartQuantity})`} {/* Display cart quantity if greater than 0 */}
                    </Link>
                </li>
                <li className='Wishlist'>
                    <Link to="/wishlist">Wishlist</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

