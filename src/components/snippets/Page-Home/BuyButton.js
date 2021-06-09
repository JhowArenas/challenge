import React, { Fragment } from 'react';

const BuyButton = () => {
    // const [buyitems, setBuyItems] = React.useState(['']);

    function BuyProd() {
        let qtdprods = localStorage.getItem('qtdCart') || 0;
        qtdprods = parseInt(qtdprods) + 1;
        document.getElementById('minicart__qtdproducts').innerHTML = qtdprods;
        localStorage.setItem('qtdCart', qtdprods);
    }

    return (
        <Fragment>
            <button className="buy-button" onClick={BuyProd}>Comprar</button>
        </Fragment>
    );
}

export default BuyButton;

