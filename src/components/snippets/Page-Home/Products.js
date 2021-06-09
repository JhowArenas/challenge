import React, { useState, useEffect } from 'react';
import { RatingStars, PriceStructure } from './ProductHandler'
import BuyButton from './BuyButton'

function Products() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://corebiz-test.herokuapp.com/api/v1/products")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        console.log(error.message)
        return <div>Error: Não foi possivel encontrar os produtos!</div>;
    } else if (!isLoaded) {
        return <div>Carregando...</div>;
    } else {
        return (
            <section id="products" className="container">
                <ul className="product__list">
                    {items.map((item, index) => (
                        <li className="product__item" key={index} data-info={index}>
                            <img src={item.imageUrl} alt={item.productName} />
                            <div className="product__info">
                                <h3>{item.productName}</h3>
                                <div className="rate-stars">
                                    {RatingStars(item.stars, index)}
                                </div>
                                {PriceStructure(item)}

                                {item.installments[0] != null ?
                                    <BuyButton />
                                    : ''
                                }
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        );

    }
}

export default Products;
