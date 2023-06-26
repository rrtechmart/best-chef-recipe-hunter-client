import React from 'react';
import b1 from '../../../assets/b1.jpg';
import b2 from '../../../assets/b2.jpg';
import b3 from '../../../assets/b3.jpg';


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] mt-20 mb-10">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={b1} className="w-full" />
                <div className='bg-lime-400'>
                    <p className='ml-6 mt-40'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius ullam atque nihil, reprehenderit aliquam magni maiores blanditiis sapiente velit! Eaque eligendi assumenda asperiores quae officiis natus magnam odio deserunt fugiat illum, ipsam esse cumque laboriosam vel quasi veritatis hic itaque qui! Harum, hic neque in totam quo itaque repellendus!</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={b2} className="w-full" />

                <div className='bg-lime-400'>
                    <p className='ml-6 mt-40'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius ullam atque nihil, reprehenderit aliquam magni maiores blanditiis sapiente velit! Eaque eligendi assumenda asperiores quae officiis natus magnam odio deserunt fugiat illum, ipsam esse cumque laboriosam vel quasi veritatis hic itaque qui! Harum, hic neque in totam quo itaque repellendus!</p>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={b3} className="w-full" />

                <div className='bg-lime-400'>
                    <p className='ml-6 mt-40'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius ullam atque nihil, reprehenderit aliquam magni maiores blanditiis sapiente velit! Eaque eligendi assumenda asperiores quae officiis natus magnam odio deserunt fugiat illum, ipsam esse cumque laboriosam vel quasi veritatis hic itaque qui! Harum, hic neque in totam quo itaque repellendus!</p>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={b3} className="w-full" />

                <div className='bg-lime-400'>
                    <p className='ml-6 mt-40'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius ullam atque nihil, reprehenderit aliquam magni maiores blanditiis sapiente velit! Eaque eligendi assumenda asperiores quae officiis natus magnam odio deserunt fugiat illum, ipsam esse cumque laboriosam vel quasi veritatis hic itaque qui! Harum, hic neque in totam quo itaque repellendus!</p>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;