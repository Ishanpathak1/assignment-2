import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.css'

const ProductList = ({ addToCart }) => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/products.json'); 
            const data = await response.json();
            setProducts(data); 
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2 className='titleIphone'>Available iPhones and iPads</h2>
            <ul>
                {products.map(product => (
                    <li className='productToList' key={product.id}>
                        <div className="productCard">
                            <Link to={`/product/${product.id}`} className="ProductLink">
                                <h3 className='productName'>{product.name}</h3>
                                <p className='productDescription'>{product.description}</p>
                                <p>Price: ${product.price.toFixed(2)}</p>
                                <img className='productImage' src={product.image} alt={product.name} style={{ width: '200px', height: 'auto' }} />
                            </Link>
                            <button className='buttonAddtocart' onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;

