import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDescription = ({ addToCart, addToWishlist }) => {
    const { id } = useParams(); //How to get id from URL prompt from the GPT
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            
                const response = await fetch('/products.json');
                const data = await response.json();
                const foundProduct = data.find((prod) => prod.id === parseInt(id));
                setProduct(foundProduct);
                setLoading(false);   
        };

        fetchProduct();
    }, [id]);
      //Had to add this otherwise react will not get time to change the state from null to the product id, found that from an article.
    if (loading) {
        return <p>Loading product details...</p>;
    }

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} style={{ width: '300px', height: 'auto' }} />
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={() => addToWishlist(product)}>Add to Wishlist</button> {/* New Wishlist Button */}
            <button onClick={() => alert('Proceed to checkout')}>Buy Now</button>
        </div>
    );
};

export default ProductDescription;


