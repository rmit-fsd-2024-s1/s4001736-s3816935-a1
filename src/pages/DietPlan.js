import React, {useState} from "react";
import MealList from "./MealList";

export default function DietPlan() {
  const [mealData, setMealData] = useState(null);
  const [timeFrame, setTimeFrame] = useState("day");
  const [calories, setCalories] = useState(2000);
  const [diet, setDiet] = useState("Whole30");
  const [exclude, setExclude] = useState("");

  function handleTimeFrameChange(e) {
    setTimeFrame(e.target.value);
  }
  function handleCaloriesChange(e) {
    setCalories(e.target.value);
  }
  function handleDietChange(e) {
    setDiet(e.target.value);
  }
  function handleExcludeChange(e) {
    setExclude(e.target.value);
  }
  // https://spoonacular.com/food-api/docs#Authentication
  // Once registered from spoonacular, you can find your api key under MY CONSOLE > Profile.
  // https://spoonacular.com/food-api/console#Profile
  // API Key: c719e3a2585848c6abff65e3176c1287
  // API Key: 69ce649e2e0746459d694c8ba5c021a8
  // API Key: 40d712bba25d4a46b07ec5bc5067646c
  // https://spoonacular.com/food-api/docs#Generate-Meal-Plan
  // https://api.spoonacular.com/mealplanner/generate
  // "message": "Your daily points limit of 150 has been reached. Please upgrade your plan to continue using the API."
  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=c719e3a2585848c6abff65e3176c1287&timeFrame=${timeFrame}&targetCalories=${calories}&diet=${diet}&exclude=${exclude}`
    )
    .then((response) => response.json())
    .then((data) => {
        setMealData(data);
    })
    .catch(() => {
      console.log("error");
    })
  }

  return (
    <div className='App'>
      <h1>Diet Plan</h1>
      <section className='controls'> 
        <label>Time Frame
          <select value={timeFrame} onChange={handleTimeFrameChange}>
            <option value="day">day</option>
            <option value="week">week</option>
          </select>
        </label>
        <label>Target Calories
          <input type="number" placeholder="Calories (e.g. 2000)" onChange={handleCaloriesChange} />
        </label>     
        <label>Diet
          <select value={diet} onChange={handleDietChange}>
            <option value="Gluten Free">Gluten Free</option>
            <option value="Ketogenic">Ketogenic</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
            <option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Pescetarian">Pescetarian</option>
            <option value="Paleo">Paleo</option>
            <option value="Primal">Primal</option>
            <option value="LOW FODMAP">LOW FODMAP</option>
            <option value="Whole30">Whole30</option>
          </select>
        </label>
        <label>Exclude
          <input type="string" placeholder="Exclude (e.g. shellfish, olives)" onChange={handleExcludeChange} />
        </label>     
      </section>
      <button className="getmealBtn" onClick={getMealData}>Get Meal Plan</button>
      {mealData && <MealList mealData={mealData}/>}
    </div>
  );
}

/*
const mealsDay = {
    "meals": [
        {
            "id": 655219,
            "title": "Peanut Butter And Chocolate Oatmeal",
            "imageType": "jpg",
            "readyInMinutes": 45,
            "servings": 1,
            "sourceUrl": "https://spoonacular.com/recipes/peanut-butter-and-chocolate-oatmeal-655219"
        },
        {
            "id": 649931,
            "title": "Lentil Salad With Vegetables",
            "imageType": "jpg",
            "readyInMinutes": 45,
            "servings": 4,
            "sourceUrl": "https://spoonacular.com/recipes/lentil-salad-with-vegetables-649931"
        },
        {
            "id": 632854,
            "title": "Asian Noodles",
            "imageType": "jpg",
            "readyInMinutes": 45,
            "servings": 4,
            "sourceUrl": "https://spoonacular.com/recipes/asian-noodles-632854"
        }
    ],
    "nutrients": {
        "calories": 1735.81,
        "carbohydrates": 235.17,
        "fat": 69.22,
        "protein": 55.43
    }
  }

  const mealsWeek = 
  {
    "week": {
        "monday": {
            "meals": [
                {
                    "id": 641047,
                    "imageType": "jpg",
                    "title": "Curious George's Gluten-Free Banana Nut Bread",
                    "readyInMinutes": 45,
                    "servings": 8,
                    "sourceUrl": "https://spoonacular.com/curious-georges-gluten-free-banana-nut-bread-641047"
                },
                {
                    "id": 1098240,
                    "imageType": "jpg",
                    "title": "Lemon Fresh Spaghetti with Garden Sauce & Pumpkin Flowers",
                    "readyInMinutes": 30,
                    "servings": 4,
                    "sourceUrl": "https://spoonacular.com/lemon-fresh-spaghetti-with-garden-sauce-pumpkin-flowers-1098240"
                },
                {
                    "id": 1697697,
                    "imageType": "jpg",
                    "title": "One-Pan Butternut Squash Risotto with Mushrooms",
                    "readyInMinutes": 70,
                    "servings": 4,
                    "sourceUrl": "https://spoonacular.com/one-pan-butternut-squash-risotto-with-mushrooms-1697697"
                }
            ],
            "nutrients": {
                "calories": 1938.71,
                "protein": 55.41,
                "fat": 69.15,
                "carbohydrates": 281.75
            }
        },
        "tuesday": {
            "meals": [
                {
                    "id": 639637,
                    "imageType": "jpg",
                    "title": "Classic scones",
                    "readyInMinutes": 45,
                    "servings": 4,
                    "sourceUrl": "https://spoonacular.com/classic-scones-639637"
                },
                {
                    "id": 157018,
                    "imageType": "jpg",
                    "title": "Couscous with fried vegetables",
                    "readyInMinutes": 30,
                    "servings": 1,
                    "sourceUrl": "https://spoonacular.com/couscous-with-fried-vegetables-157018"
                },
                {
                    "id": 641687,
                    "imageType": "jpg",
                    "title": "Dry Mee Siam",
                    "readyInMinutes": 45,
                    "servings": 3,
                    "sourceUrl": "https://spoonacular.com/dry-mee-siam-641687"
                }
            ],
            "nutrients": {
                "calories": 1895.31,
                "protein": 51.07,
                "fat": 58.8,
                "carbohydrates": 290.94
            }
        },
        "wednesday": {
            "meals": [
                {
                    "id": 471334,
                    "imageType": "jpg",
                    "title": "Cheese and Corn Scones",
                    "readyInMinutes": 45,
                    "servings": 16,
                    "sourceUrl": "https://spoonacular.com/cheese-and-corn-scones-471334"
                },
                {
                    "id": 649988,
                    "imageType": "jpg",
                    "title": "Light and Easy Alfredo",
                    "readyInMinutes": 15,
                    "servings": 2,
                    "sourceUrl": "https://spoonacular.com/light-and-easy-alfredo-649988"
                },
                {
                    "id": 648460,
                    "imageType": "jpg",
                    "title": "Japanese Chicken Donburi",
                    "readyInMinutes": 45,
                    "servings": 4,
                    "sourceUrl": "https://spoonacular.com/japanese-chicken-donburi-648460"
                }
            ],
            "nutrients": {
                "calories": 1973.94,
                "protein": 58.89,
                "fat": 65.63,
                "carbohydrates": 282.07
            }
        },
        "thursday": {
            "meals": [
                {
                    "id": 644914,
                    "imageType": "jpg",
                    "title": "Glutinous Rice Poppy Muffins",
                    "readyInMinutes": 45,
                    "servings": 10,
                    "sourceUrl": "https://spoonacular.com/glutinous-rice-poppy-muffins-644914"
                },
                {
                    "id": 653251,
                    "imageType": "jpg",
                    "title": "Noodles and Veggies With Peanut Sauce",
                    "readyInMinutes": 30,
                    "servings": 4,
                    "sourceUrl": "https://spoonacular.com/noodles-and-veggies-with-peanut-sauce-653251"
                },
                {
                    "id": 641687,
                    "imageType": "jpg",
                    "title": "Dry Mee Siam",
                    "readyInMinutes": 45,
                    "servings": 3,
                    "sourceUrl": "https://spoonacular.com/dry-mee-siam-641687"
                }
            ],
            "nutrients": {
                "calories": 1895.39,
                "protein": 52.81,
                "fat": 59.96,
                "carbohydrates": 286.65
            }
        },
        "friday": {
            "meals": [
                {
                    "id": 640337,
                    "imageType": "jpg",
                    "title": "Cracked Wheat Cereal",
                    "readyInMinutes": 45,
                    "servings": 8,
                    "sourceUrl": "https://spoonacular.com/cracked-wheat-cereal-640337"
                },
                {
                    "id": 1697625,
                    "imageType": "jpg",
                    "title": "Light and Tasty Tomato Basil Mozzarella Pasta for a Hot Summer Evening",
                    "readyInMinutes": 25,
                    "servings": 2,
                    "sourceUrl": "https://spoonacular.com/light-and-tasty-tomato-basil-mozzarella-pasta-for-a-hot-summer-evening-1697625"
                },
                {
                    "id": 633093,
                    "imageType": "jpg",
                    "title": "Autumn Fried Rice with Buffalo Nuts®",
                    "readyInMinutes": 45,
                    "servings": 8,
                    "sourceUrl": "https://spoonacular.com/autumn-fried-rice-with-buffalo-nuts-633093"
                }
            ],
            "nutrients": {
                "calories": 1973.82,
                "protein": 56.27,
                "fat": 60.9,
                "carbohydrates": 302.62
            }
        },
        "saturday": {
            "meals": [
                {
                    "id": 1100990,
                    "imageType": "jpg",
                    "title": "Blueberry, Chocolate & Cocao Superfood Pancakes - Gluten-Free/Paleo/Vegan",
                    "readyInMinutes": 30,
                    "servings": 2,
                    "sourceUrl": "https://spoonacular.com/blueberry-chocolate-cocao-superfood-pancakes-gluten-free-paleo-vegan-1100990"
                },
                {
                    "id": 1070648,
                    "imageType": "jpg",
                    "title": "Easy Tomato Basil Chicken – One Pot Meal",
                    "readyInMinutes": 30,
                    "servings": 6,
                    "sourceUrl": "https://spoonacular.com/easy-tomato-basil-chicken-one-pot-meal-1070648"
                },
                {
                    "id": 633093,
                    "imageType": "jpg",
                    "title": "Autumn Fried Rice with Buffalo Nuts®",
                    "readyInMinutes": 45,
                    "servings": 8,
                    "sourceUrl": "https://spoonacular.com/autumn-fried-rice-with-buffalo-nuts-633093"
                }
            ],
            "nutrients": {
                "calories": 1950.38,
                "protein": 49.76,
                "fat": 67.91,
                "carbohydrates": 286.02
            }
        },
        "sunday": {
            "meals": [
                {
                    "id": 644800,
                    "imageType": "jpg",
                    "title": "Gluten Free Blueberry Muffins",
                    "readyInMinutes": 45,
                    "servings": 12,
                    "sourceUrl": "https://spoonacular.com/gluten-free-blueberry-muffins-644800"
                },
                {
                    "id": 1697625,
                    "imageType": "jpg",
                    "title": "Light and Tasty Tomato Basil Mozzarella Pasta for a Hot Summer Evening",
                    "readyInMinutes": 25,
                    "servings": 2,
                    "sourceUrl": "https://spoonacular.com/light-and-tasty-tomato-basil-mozzarella-pasta-for-a-hot-summer-evening-1697625"
                },
                {
                    "id": 633093,
                    "imageType": "jpg",
                    "title": "Autumn Fried Rice with Buffalo Nuts®",
                    "readyInMinutes": 45,
                    "servings": 8,
                    "sourceUrl": "https://spoonacular.com/autumn-fried-rice-with-buffalo-nuts-633093"
                }
            ],
            "nutrients": {
                "calories": 1919.65,
                "protein": 54.28,
                "fat": 68.29,
                "carbohydrates": 271.59
            }
        }
    }
  }
  */
