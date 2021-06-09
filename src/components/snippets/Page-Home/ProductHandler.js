import React, { Fragment } from 'react';

export const PriceHandling = (value) => {
    value = value.toString();
    let vformated = value.substr(0, value.length - 2) + ',' + value.substr(-2);
    return vformated
}

export const RatingStars = (rate, pid) => {
    let structure = []
    for (let i = 1; i <= 5; i++) {
        rate >= i ?
            structure[i - 1] = <span key={pid + i}><svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.69478 8.68583L9.21415 10.649L8.28021 6.94899L11.3896 4.45951L7.29501 4.13846L5.69478 0.648987L4.09454 4.13846L0 4.45951L3.10935 6.94899L2.17541 10.649L5.69478 8.68583Z" fill="#F8475F" key={pid + i} /></svg></span> :
            structure[i - 1] = <span key={pid + i}><svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.3896 4.4595L7.29501 4.13318L5.69478 0.648972L4.09454 4.13845L0 4.4595L3.10935 6.94897L2.17541 10.649L5.69478 8.68581L9.21415 10.649L8.2859 6.94897L11.3896 4.4595ZM5.69477 7.70161L3.55353 8.89634L4.12301 6.64371L2.23234 5.12792L4.72666 4.92792L5.69477 2.80687L6.66857 4.93319L9.16289 5.13319L7.27222 6.64897L7.8417 8.90161L5.69477 7.70161Z" fill="#F8475F" /></svg></span>
    }
    return <Fragment >
        {structure}
    </Fragment>
}

export const PriceStructure = (item) => {
    return <Fragment key={item.productId + '-price'}>
        {item.listPrice != null ?
            <Fragment>
                <div className="offer"><span>OFF</span></div>
                <div className="payment_method">
                    <p className="payment_method-old">
                        de R$ {PriceHandling(item.price)}
                    </p>
                    <p className="payment_method-new">
                        por R$ {PriceHandling(item.listPrice)}
                    </p>
                    {item.installments[0] != null ?
                        <p className="payment_method-creditcart">
                            ou em {item.installments[0].quantity}x de R$ {PriceHandling(item.installments[0].value)}
                        </p>
                        : ''
                    }
                </div>
            </Fragment>
            :
            <div className="payment_method">
                <p className="payment_method-price">
                    R$ {PriceHandling(item.price)}
                </p>
                {item.installments[0] != null ?
                    <p className="payment_method-creditcart">
                        ou em {item.installments[0].quantity}x de R$ {PriceHandling(item.installments[0].value)}
                    </p>
                    : ''
                }
            </div>
        }
    </Fragment>
}