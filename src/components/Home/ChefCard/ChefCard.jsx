import React from 'react';
import { useLoaderData } from 'react-router-dom';


const ChefCard = () => {

    const chefs = useLoaderData();
    const {id, name, c_image} = chefs
    console.log(id, name,);
    
    


    return (
        <div>
            <div>
                <h3>this is chef card</h3>
                <p>{name}</p>
                
            </div>
            

           
                

            
        </div>
    );
};

export default ChefCard;