import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDescription = ({ addToCart, addToWishlist }) => {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null); 
    const [loading, setLoading] = useState(true);

    // Logic From GPT
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch('/products.json'); 
                const data = await response.json();
                const foundProduct = data.find((prod) => prod.id === parseInt(id)); 
                setProduct(foundProduct); 
                setLoading(false); // Set loading to false once the product is found
            } catch (error) {
                console.error('Error fetching product data:', error);
                setLoading(false); // Set loading to false even on error
            }
        };

        fetchProduct();
    }, [id]);

    
    if (loading) {
        return <p>Loading product details...</p>;
    }

    if (!product) {
        return <p>Product not found.</p>;
    }
    

   
    return (
        <div>
            <h2 className='productNameDes'>{product.name}</h2>
            <img className='productImageDes'src={product.image} alt={product.name} style={{ width: '300px', height: 'auto' }} />
            <p className='productDes'>{product.description}</p>
            <p className='priceDes'>Price: ${product.price.toFixed(2)}</p>
            <div className="buttonContainer">
            <button className='addToCartDes' onClick={() => addToCart(product)}>Add to Cart</button>
            <button className='addToWishlistDes'onClick={() => addToWishlist(product)}>Add to Wishlist</button>
            </div>
        </div>
    );
};

export default ProductDescription;



