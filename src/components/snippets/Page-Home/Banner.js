import React from 'react';

function Banner() {
    let bannerimg = '';
    window.innerWidth > 910 ?
        bannerimg = '/asset/img/bannerimg.jpeg' :
        bannerimg = '/asset/img/bannermobile.jpg'

    return (
        <div className="banner-home">
            <ul className="banner-list">
                <li className="banner-item">
                    <img src={bannerimg} alt="Criar ou migrar seu e-commerce?" />
                </li>
                <li className="banner-item">
                    <img src={bannerimg} alt="Criar ou migrar seu e-commerce?" />
                </li>
                <li className="banner-item">
                    <img src={bannerimg} alt="Criar ou migrar seu e-commerce?" />
                </li>
            </ul>
        </div>
    );
}

export default Banner;