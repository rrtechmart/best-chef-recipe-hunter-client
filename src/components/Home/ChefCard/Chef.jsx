import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';


const Chef = () => {
    const [chefs, setChef] = useState([]);
    console.log(chefs);
    useEffect( ()=>{
        fetch('https://best-chef-recipe-hunter-server.vercel.app/chefs')
        .then(res =>res.json())
        .then(data => setChef(data))
    },[])
    return (
        <div>
            <div>
                <h2 className='text-5xl mx-auto uppercase mb-6 font-bold'>Our chefs and their special recipes</h2>
                <p className='text-lg'>Our restaurant boasts a culinary team comprised of talented chefs who passionately create extraordinary dishes. With a focus on flavor fusion, our special recipes are carefully crafted to ignite the senses and captivate the palate. From savory seafood delights infused with aromatic spices to succulent cuts of tender meat marinated to perfection, each dish embodies a harmonious blend of traditional and contemporary techniques. Our chefs take pride in their meticulous attention to detail, ensuring every plate is a work of art that transcends mere sustenance. Join us on a gastronomic journey as we present a symphony of flavors that will leave you craving for more.</p>
            </div>
            <div className='grid md:grid-cols-3 gap-y-10 my-12'>
                
                {
                    chefs.map(chef => <ChefCard
                        key={chef.id}
                        chef={chef}
                    ></ChefCard> )
                }
                
            </div>
            

           
                

            
        </div>
    );
};

export default Chef;