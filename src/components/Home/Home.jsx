import React from 'react';
import Banner from './Banner/Banner';
import ChefCard from './ChefCard/Chef';
import { useNavigation } from 'react-router-dom';
import PopularItems from './PopulatItems/PopularItems';

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Banner></Banner>
            <div className='text-center'> {navigation.state === 'loading' && <span className="loading loading-spinner text-success"></span> }</div>
            <ChefCard></ChefCard>
            <PopularItems></PopularItems>

        </div>
    );
};

export default Home;