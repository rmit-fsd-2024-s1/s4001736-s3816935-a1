import React from 'react';
import Meal from './Meal';

export default function MealList({mealData}) {
    if (Object.keys(mealData).length === 2) {  // If timeFrame is "day", then mealData has two keys "meals" and "nutrients". 
        const nutrients = mealData.nutrients;

        return (
            <main>
                <section className='nutrients'>
                    <h2>Macros</h2>
                    <ul>    
                        <li>Calories: {nutrients.calories.toFixed(0)}</li>
                        <li>Protein: {nutrients.protein.toFixed(0)}</li>
                        <li>Fat: {nutrients.fat.toFixed(0)}</li>
                        <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
                    </ul>
                </section>

                <section className='meals'>
                    {mealData.meals.map((meal) => {
                        return <Meal key={meal.id} meal={meal} />;
                    })}
                </section>
            </main>
        )  
    } else {  // If timeFrame is "week", then mealData has only one key "week".
        const weeklyMealData = mealData.week;

        return (
            <main>
                {Object.entries(weeklyMealData).map(([key,value]) => {
                    return (
                    <section>
                        <section className='nutrients'>
                            <h2>{key}</h2>
                            <h2>Macros</h2>
                            <ul>    
                                <li>Calories: {value.nutrients.calories.toFixed(0)}</li>
                                <li>Protein: {value.nutrients.protein.toFixed(0)}</li>
                                <li>Fat: {value.nutrients.fat.toFixed(0)}</li>
                                <li>Carbohydrates: {value.nutrients.carbohydrates.toFixed(0)}</li>
                            </ul>
                        </section>   
                        <section className='meals'> 
                            {value.meals.map((meal) => {
                                return <Meal key={meal.id} meal={meal} />;
                            })}
                        </section>
                    </section>
                    )
                })}
            </main>
        )          
    }
}