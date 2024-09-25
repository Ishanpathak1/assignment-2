import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProductList from './components/ProductList';
import ProductDescription from './components/ProductDescription';

const App = () => {
    return (
        <Router>
            <div style={{ padding: '20px' }}>
                <h1>Apple Store</h1>
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/product/:id" element={<ProductDescription />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;


