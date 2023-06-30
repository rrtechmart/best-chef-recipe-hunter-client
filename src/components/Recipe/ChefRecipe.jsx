import React from 'react';
import { useLoaderData, useLocation, useNavigate, useParams } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const ChefRecipe = () => {

    const chef = useLoaderData();
    const { name, c_image, bio_data, experience, likes, numRecipes, recipes } = chef;
    console.log(chef);

    
    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl mx-auto my-4">
                <figure className="px-10 pt-10">
                    <img src={c_image} alt="chef" className="rounded-xl" />
                </figure>
                <div className="card-body items-center bg-blue-600 mx-10 my-4 text-white rounded-2xl">
                    <h2 className="card-title">Name: {name} </h2>
                    <p>Bio/description: {bio_data} </p>
                    <p>Likes: {likes} </p>
                    <p>Number of Recipes: {numRecipes} </p>
                    <p>Year of experiences: {experience} </p>

                </div>
            </div>


            <div className="overflow-x-auto w-full">
                <table className=" table w-full">
                    <thead>
                        <tr>
                            
                            <th className='text-xl'>Recipe name</th>
                            <th className='text-xl'>Ingredients</th>
                            <th className='text-xl'>Cooking method</th>
                            <th className='text-xl'>Rating</th>
                            <th className='text-xl'>Favorite </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            recipes.map(recipe => <RecipeCard
                                key={chef.id}
                                recipe={recipe}
                            ></RecipeCard>)
                        }
                    </tbody>

                </table>
            </div>



        </div>
    );
};

export default ChefRecipe;