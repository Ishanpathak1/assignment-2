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
            <h2 className='TitleIphone'>Available iPhones and iPads</h2>
            <ul>
                {products.map(product => (
                    <li className='ProducttoList'key={product.id} style={{ marginBottom: '20px' }}>
                        <Link to={`/product/${product.id}`}>
                            <h3 className='ProductName'>{product.name}</h3>
                            <p className='ProductDescription'>{product.description}</p>
                            <p>Price: ${product.price.toFixed(2)}</p>
                            <img className='ProductImage' src={product.image} alt={product.name} style={{ width: '200px', height: 'auto' }} />
                             
                        </Link>
                        <button className='ButtonAddtocart' onClick={() => addToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
