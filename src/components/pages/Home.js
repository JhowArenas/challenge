import React, { Fragment } from 'react';

import Banner from '../snippets/Page-Home/Banner';
import Products from '../snippets/Page-Home/Products';
import NewsLetter from '../snippets/Page-Home/NewsLetter';

function Home() {
    return (
        <Fragment>
            <Banner />
            <Products />
            <NewsLetter />
        </Fragment>
    );
}

export default Home;