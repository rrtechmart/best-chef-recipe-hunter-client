import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { name, id, c_image, experience, likes, numRecipes } = chef;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={chef.c_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> Name: {chef.name} </h2>
                    <p> Year of experience : {chef.experience} </p>
                    <p> Numbers of Recipes : {chef.numRecipes} </p>
                    <p> Likes : {chef.likes} </p>
                    <div className="card-actions justify-end">
                        <Link to={``}>
                            <button className="btn btn-primary">View Recipes</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChefCard;