import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
            <h2>Available iPhones and iPads</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id} style={{ marginBottom: '20px' }}>
                        <Link to={`/product/${product.id}`}>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>Price: ${product.price.toFixed(2)}</p>
                            <img src={product.image} alt={product.name} style={{ width: '200px', height: 'auto' }} />
                            <button onClick={() => addToCart(product)}>Add to Cart</button> 
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
