import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDescription = () => {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);
    const navigate = useNavigate(); 

  
    useEffect(() => {
        const fetchProduct = async () => {
            
                const response = await fetch('/products.json');
                const products = await response.json();
                const foundProduct = products.find((prod) => prod.id === parseInt(id));
                setProduct(foundProduct);
             
        };

        fetchProduct();
    }, [id]);

   

   
    

    
    const handleAddToCart = () => {
        alert(`${product.name} has been added to your cart!`);
        // Logic to handle add to cart
    };

    const handleBuyNow = () => {
        alert(`Redirecting to purchase ${product.name}...`);
        
        navigate('/checkout'); 
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} style={{ width: '300px', height: 'auto' }} />
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button onClick={handleAddToCart} style={{ marginRight: '10px' }}>Add to Cart</button>
            <button onClick={handleBuyNow}>Buy Now</button>
        </div>
    );
};

export default ProductDescription;

