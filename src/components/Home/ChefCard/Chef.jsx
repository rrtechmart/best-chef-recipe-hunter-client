import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './ChefCard';


const Chef = () => {
    const [chefs, setChef] = useState([]);
    console.log(chefs);
    useEffect( ()=>{
        fetch('http://localhost:5000/chefs')
        .then(res =>res.json())
        .then(data => setChef(data))
    },[])
    return (
        <div>
            <div className='grid md:grid-cols-3 gap-y-10'>
                
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