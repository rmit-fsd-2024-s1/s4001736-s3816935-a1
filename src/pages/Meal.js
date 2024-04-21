import React, {useState, useEffect} from 'react';

export default function Meal({meal}) {
    const [imageUrl, setImageUrl] = useState("");

    // API Key: c719e3a2585848c6abff65e3176c1287
    // API Key: 69ce649e2e0746459d694c8ba5c021a8
    // API Key: 40d712bba25d4a46b07ec5bc5067646c
    // https://spoonacular.com/food-api/docs#Get-Recipe-Information
    // https://api.spoonacular.com/recipes/{id}/information
    useEffect(() => {
        fetch(
            `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=c719e3a2585848c6abff65e3176c1287&includeNutrition=false`
        )
        .then((response) => response.json())
        .then((data) => {
            setImageUrl(data.image);
        })
        .catch(() => {
            console.log("error");
        })
    }, [meal.id])

    return (
        <article>
            <h2>{meal.title}</h2>
            <img src={imageUrl} alt="recipe" />
            <ul className='instructions'>
                <li>Preparation time: {meal.readyInMinutes} minutes</li>
                <li>Number of servings: {meal.servings}</li>
            </ul>

            <a href={meal.sourceUrl}>Go to Recipe</a>
        </article>
    );
}