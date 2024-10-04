import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDescription = ({ addToCart, addToWishlist }) => {
    const { id } = useParams(); // Get product ID from URL params
    const [product, setProduct] = useState(null); // State to store the fetched product
    const [loading, setLoading] = useState(true); // State to manage the loading status

    // Fetch product data from the JSON file
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch('/products.json'); // Fetch data from products.json
                const data = await response.json();
                const foundProduct = data.find((prod) => prod.id === parseInt(id)); // Find the product with the matching ID
                setProduct(foundProduct); // Set the product state
                setLoading(false); // Set loading to false once the product is found
            } catch (error) {
                console.error('Error fetching product data:', error);
                setLoading(false); // Set loading to false even on error
            }
        };

        fetchProduct();
    }, [id]);

    // Handle loading and product not found cases
    if (loading) {
        return <p>Loading product details...</p>;
    }

    if (!product) {
        return <p>Product not found.</p>;
    }
    

    // Render the product details
    return (
        <div>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} style={{ width: '300px', height: 'auto' }} />
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
            <button onClick={() => alert('Proceed to checkout')}>Buy Now</button>
        </div>
    );
};

export default ProductDescription;



