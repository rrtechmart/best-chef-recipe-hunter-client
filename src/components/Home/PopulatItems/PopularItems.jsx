import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import p1 from '../../../assets/p1.jpg';
import p2 from '../../../assets/p2.jpg';
import p3 from '../../../assets/p3.jpg';
import p4 from '../../../assets/p4.jpg';
import p5 from '../../../assets/p5.jpg';

const PopularItems = () => {
    return (
        <div>
            <div>

                <h2 className='text-5xl mx-auto uppercase mb-6 font-bold'>Our popular items</h2>
                <p className='text-lg mb-10'>Indulge in the culinary delights that have made our restaurant a beloved destination. Our popular items are a testament to our commitment to exceptional taste and quality. From the sizzling sashimi platter, featuring the freshest catch from the sea, to the mouthwatering steak au poivre, perfectly seared and accompanied by a rich peppercorn sauce, each bite is a revelation of flavors. Don't miss our signature soup, the heavenly molten lava cake, oozing with velvety chocolate decadence. Immerse yourself in a culinary adventure as you savor these beloved creations that have earned their place in the hearts of our loyal patrons.</p>

            </div>
            <Carousel>
                <div>
                    <img className='rounded-2xl' src={p1} />

                </div>
                <div>
                    <img className='rounded-2xl' src={p2} />

                </div>
                <div>
                    <img className='rounded-2xl' src={p3} />

                </div>
                <div>
                    <img className='rounded-2xl' src={p4} />

                </div>
                <div>
                    <img className='rounded-2xl' src={p5} />

                </div>
            </Carousel>
        </div>

    );
};

export default PopularItems;