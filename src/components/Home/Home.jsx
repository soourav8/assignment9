import React from 'react';

import Header from '../Header/Header';
import Categories from '../Categories/Categories';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <Categories></Categories>
           <Featured></Featured>
        </div>
    );
};

export default Home;