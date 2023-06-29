import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const RecipeCard = ({ recipe }) => {
    const { rec_name, ingredients, cooking_method, rating } = recipe;    

    const handleToast = () => {
        toast('This recipe is my favorite')               

    }
    return (
        <tr>

            <td> {rec_name} </td>
            <td> {ingredients} </td>
            <td> {cooking_method} </td>
            <td> {rating} </td>
            <td>
                <button onClick={handleToast} className="btn btn-sm btn-outline btn-success">Favorite</button> 
                <ToastContainer />               
                
            </td>

        </tr>
    );
};

export default RecipeCard;