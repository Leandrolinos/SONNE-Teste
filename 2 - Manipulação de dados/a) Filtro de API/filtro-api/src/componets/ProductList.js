import React, { useState, useEffect } from 'react';
import api from '../API/index';
import './ProductList.css';

const ProductList = () => {
    const [produtos, setProdutos] = useState([]);
    const [filtroProduto, setFiltroProduto] = useState('');
    const categorias = [
        'bronzer',
        'blush',
        'lip_liner',
        'foundation',
        'eyeshadow',
        'eyeliner',
        'nail_polish',
        'lipstick',
        'mascara',
    ];

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await api.get('');
            setProdutos(response.data);
        };
        fetchProducts();
    }, []);

    const filterProducts = (event) => {
        setFiltroProduto(event.target.value);
    };

    const submitFiltro = async (event) => {
        event.preventDefault();
        const response = await api.get('', {
            params: {
                product_type: filtroProduto,
            },
        });
        setProdutos(response.data);
    };

    return (
        <div className="product-list">
            <h1 className="title">Product line of beauty</h1>
            <form onSubmit={submitFiltro}>
                <label htmlFor="filtroProduto" className="label">
                    Filter by category:{' '}
                </label>
                <select id="filtroProduto" value={filtroProduto} onChange={filterProducts} className="select">
                    <option value="">All</option>
                    {categorias.map((categoria) => (
                        <option key={categoria} value={categoria}>
                            {categoria}
                        </option>
                    ))}
                </select>
                <button type="submit" className="button">
                    Filter
                </button>
            </form>
            {console.log(produtos)}
            <ul className="list">
                {produtos.map((produto) => (
                    <li key={produto.id} className="list-item">
                        <h4 className="product-name">
                            <strong>Product: </strong>
                            {produto.name}
                        </h4>
                        <p className="product-type">Category: {produto.product_type}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
