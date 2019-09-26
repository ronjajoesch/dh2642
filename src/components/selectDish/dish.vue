<template>
    <div class="dishBox card text-center">
        <div class="card-header">
            <img :src="imgSource" class="img-fluid rounded">
        </div>
        <div class="card-body">
                <div class="autoText">{{imgTitle}}</div>
                <button class="btn btn-outline-dark btn-sm">{{buttonText}}</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dish",

        props: {
            dishObject: {
                type: Array,
                default: () => [{
                    "vegetarian": false,
                    "vegan": false,
                    "glutenFree": false,
                    "dairyFree": false,
                    "veryHealthy": false,
                    "cheap": false,
                    "veryPopular": true,
                    "sustainable": false,
                    "weightWatcherSmartPoints": 13,
                    "gaps": "no",
                    "lowFodmap": false,
                    "ketogenic": false,
                    "whole30": false,
                    "preparationMinutes": 10,
                    "cookingMinutes": 15,
                    "sourceUrl": "http://www.jocooks.com/breakfast-2/breakfast-pizza/",
                    "spoonacularSourceUrl": "https://spoonacular.com/breakfast-pizza-559251",
                    "aggregateLikes": 4235,
                    "spoonacularScore": 51.0,
                    "healthScore": 5.0,
                    "creditsText": "Jo Cooks",
                    "sourceName": "Jo Cooks",
                    "pricePerServing": 195.59,
                    "extendedIngredients": [
                        {
                            "id": 93610,
                            "aisle": "Refrigerated",
                            "image": "pizza-dough.jpg",
                            "consitency": "solid",
                            "name": "pizza dough",
                            "original": "1 lb pizza dough",
                            "originalString": "1 lb pizza dough",
                            "originalName": "pizza dough",
                            "amount": 1.0,
                            "unit": "lb",
                            "meta": [],
                            "metaInformation": [],
                            "measures": {
                                "us": {
                                    "amount": 1.0,
                                    "unitShort": "lb",
                                    "unitLong": "pound"
                                },
                                "metric": {
                                    "amount": 453.592,
                                    "unitShort": "g",
                                    "unitLong": "grams"
                                }
                            }
                        },
                        {
                            "id": 4053,
                            "aisle": "Oil, Vinegar, Salad Dressing",
                            "image": "olive-oil.jpg",
                            "consitency": "liquid",
                            "name": "olive oil",
                            "original": "1 tbsp olive oil",
                            "originalString": "1 tbsp olive oil",
                            "originalName": "olive oil",
                            "amount": 1.0,
                            "unit": "tbsp",
                            "meta": [],
                            "metaInformation": [],
                            "measures": {
                                "us": {
                                    "amount": 1.0,
                                    "unitShort": "Tbsp",
                                    "unitLong": "Tbsp"
                                },
                                "metric": {
                                    "amount": 1.0,
                                    "unitShort": "Tbsp",
                                    "unitLong": "Tbsp"
                                }
                            }
                        },
                        {
                            "id": 1001026,
                            "aisle": "Cheese",
                            "image": "shredded-cheese-white.jpg",
                            "consitency": "solid",
                            "name": "shredded mozzarella cheese",
                            "original": "2 cups mozzarella cheese shredded",
                            "originalString": "2 cups mozzarella cheese shredded",
                            "originalName": "mozzarella cheese shredded",
                            "amount": 2.0,
                            "unit": "cups",
                            "meta": [
                                "shredded"
                            ],
                            "metaInformation": [
                                "shredded"
                            ],
                            "measures": {
                                "us": {
                                    "amount": 2.0,
                                    "unitShort": "cups",
                                    "unitLong": "cups"
                                },
                                "metric": {
                                    "amount": 473.176,
                                    "unitShort": "ml",
                                    "unitLong": "milliliters"
                                }
                            }
                        },
                        {
                            "id": 1033,
                            "aisle": "Cheese",
                            "image": "parmesan.jpg",
                            "consitency": "solid",
                            "name": "parmesan cheese",
                            "original": "1/4 cup Parmesan cheese freshly grated",
                            "originalString": "1/4 cup Parmesan cheese freshly grated",
                            "originalName": "Parmesan cheese freshly grated",
                            "amount": 0.25,
                            "unit": "cup",
                            "meta": [
                                "freshly grated"
                            ],
                            "metaInformation": [
                                "freshly grated"
                            ],
                            "measures": {
                                "us": {
                                    "amount": 0.25,
                                    "unitShort": "cups",
                                    "unitLong": "cups"
                                },
                                "metric": {
                                    "amount": 59.147,
                                    "unitShort": "ml",
                                    "unitLong": "milliliters"
                                }
                            }
                        },
                        {
                            "id": 10311529,
                            "aisle": "Produce",
                            "image": "cherry-tomatoes.png",
                            "consitency": "solid",
                            "name": "cherry tomatoes",
                            "original": "1 cup cherry tomatoes halved",
                            "originalString": "1 cup cherry tomatoes halved",
                            "originalName": "cherry tomatoes halved",
                            "amount": 1.0,
                            "unit": "cup",
                            "meta": [
                                "halved"
                            ],
                            "metaInformation": [
                                "halved"
                            ],
                            "measures": {
                                "us": {
                                    "amount": 1.0,
                                    "unitShort": "cup",
                                    "unitLong": "cup"
                                },
                                "metric": {
                                    "amount": 236.588,
                                    "unitShort": "ml",
                                    "unitLong": "milliliters"
                                }
                            }
                        },
                        {
                            "id": 10862,
                            "aisle": "Meat",
                            "image": "cooked-bacon.jpg",
                            "consitency": "solid",
                            "name": "fried bacon",
                            "original": "6 slices bacon fried and roughly chopped",
                            "originalString": "6 slices bacon fried and roughly chopped",
                            "originalName": "bacon fried and roughly chopped",
                            "amount": 6.0,
                            "unit": "slices",
                            "meta": [
                                "roughly chopped"
                            ],
                            "metaInformation": [
                                "roughly chopped"
                            ],
                            "measures": {
                                "us": {
                                    "amount": 6.0,
                                    "unitShort": "slices",
                                    "unitLong": "slices"
                                },
                                "metric": {
                                    "amount": 6.0,
                                    "unitShort": "slices",
                                    "unitLong": "slices"
                                }
                            }
                        },
                        {
                            "id": 1123,
                            "aisle": "Milk, Eggs, Other Dairy",
                            "image": "egg.png",
                            "consitency": "solid",
                            "name": "eggs",
                            "original": "6 eggs",
                            "originalString": "6 eggs",
                            "originalName": "eggs",
                            "amount": 6.0,
                            "unit": "",
                            "meta": [],
                            "metaInformation": [],
                            "measures": {
                                "us": {
                                    "amount": 6.0,
                                    "unitShort": "",
                                    "unitLong": ""
                                },
                                "metric": {
                                    "amount": 6.0,
                                    "unitShort": "",
                                    "unitLong": ""
                                }
                            }
                        },
                        {
                            "id": 11156,
                            "aisle": "Produce",
                            "image": "fresh-chives.jpg",
                            "consitency": "solid",
                            "name": "fresh chives",
                            "original": "2 tbsp chives fresh, chopped",
                            "originalString": "2 tbsp chives fresh, chopped",
                            "originalName": "chives fresh, chopped",
                            "amount": 2.0,
                            "unit": "tbsp",
                            "meta": [
                                "fresh",
                                "chopped"
                            ],
                            "metaInformation": [
                                "fresh",
                                "chopped"
                            ],
                            "measures": {
                                "us": {
                                    "amount": 2.0,
                                    "unitShort": "Tbsps",
                                    "unitLong": "Tbsps"
                                },
                                "metric": {
                                    "amount": 2.0,
                                    "unitShort": "Tbsps",
                                    "unitLong": "Tbsps"
                                }
                            }
                        },
                        {
                            "id": 11297,
                            "aisle": "Produce",
                            "image": "parsley.jpg",
                            "consitency": "solid",
                            "name": "fresh parsley",
                            "original": "1 tbsp parsley fresh, chopped",
                            "originalString": "1 tbsp parsley fresh, chopped",
                            "originalName": "parsley fresh, chopped",
                            "amount": 1.0,
                            "unit": "tbsp",
                            "meta": [
                                "fresh",
                                "chopped"
                            ],
                            "metaInformation": [
                                "fresh",
                                "chopped"
                            ],
                            "measures": {
                                "us": {
                                    "amount": 1.0,
                                    "unitShort": "Tbsp",
                                    "unitLong": "Tbsp"
                                },
                                "metric": {
                                    "amount": 1.0,
                                    "unitShort": "Tbsp",
                                    "unitLong": "Tbsp"
                                }
                            }
                        }
                    ],
                    "id": 559251,
                    "title": "Breakfast Pizza",
                    "readyInMinutes": 25,
                    "servings": 6,
                    "image": "https://spoonacular.com/recipeImages/559251-556x370.jpg",
                    "imageType": "jpg",
                    "cuisines": [
                        "mediterranean",
                        "european",
                        "italian"
                    ],
                    "dishTypes": [
                        "lunch",
                        "main course",
                        "morning meal",
                        "brunch",
                        "main selectDish",
                        "breakfast",
                        "dinner"
                    ],
                    "diets": [],
                    "occasions": [],
                    "winePairing": {
                        "pairedWines": [
                            "sangiovese",
                            "barbera wine",
                            "shiraz"
                        ],
                        "pairingText": "Breakfast Pizza works really well with Sangiovese, Barbera Wine, and Shiraz. The best wine for pizza depends on the toppings! Red sauce pizza will call for a red wine with some acidity, such as a barberan or sangiovese. Add pepperoni or sausage and you can go bolder with a syrah. The Madsen Family Cellars Sangiovese Wine with a 5 out of 5 star rating seems like a good match. It costs about 26 dollars per bottle.",
                        "productMatches": [
                            {
                                "id": 431618,
                                "title": "Madsen Family Cellars Sangiovese Wine",
                                "description": "This wine has a pronounced nose with a hint of coffee while your mouth is invaded with spices; clove, licorice, and cinnamon.The palate features cherries and notes of clove which continue on to a smooth, long finish with subtle oak, slight pepper and berry flavors. The tartness of the wine works well with food as Sangiovese is a food wine, but can be enjoyed on its own as well. Columbia Valley AVA from the vineyards of Jordan Reed.",
                                "price": "$26.0",
                                "imageUrl": "https://spoonacular.com/productImages/431618-312x231.jpg",
                                "averageRating": 1.0,
                                "ratingCount": 1.0,
                                "score": 0.75,
                                "link": "https://www.amazon.com/2009-Madsen-Family-Cellars-Sangiovese/dp/B00I0F3FJA?tag=spoonacular-20"
                            }
                        ]
                    },
                    "instructions": "<ul><li>Preheat oven to 500 F degrees.</li><li>Spray a baking sheet (15.25 x 10.25 inches) with cooking spray.</li><li>Roll out the pizza dough and place it on the pizza baking selectDish. Drizzle the dough with a bit of olive oil.</li><li>Arrange the mozzarella cheese evenly over the dough. Sprinkle with Parmesan cheese.</li><li>Top with bacon and tomato. Crack 6 eggs on the pizza.</li><li>Bake for 10 to 15 minutes or until the edge is golden brown.</li><li>Garnish with chives and parsley.</li></ul>",
                    "analyzedInstructions": [
                        {
                            "name": "",
                            "steps": [
                                {
                                    "number": 1,
                                    "step": "Preheat oven to 500 F degrees.Spray a baking sheet (15.25 x 10.25 inches) with cooking spray.",
                                    "ingredients": [],
                                    "equipment": [
                                        {
                                            "id": 404727,
                                            "name": "baking sheet",
                                            "image": "baking-sheet.jpg"
                                        },
                                        {
                                            "id": 404784,
                                            "name": "oven",
                                            "image": "oven.jpg",
                                            "temperature": {
                                                "number": 500.0,
                                                "unit": "Fahrenheit"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "number": 2,
                                    "step": "Roll out the pizza dough and place it on the pizza baking selectDish.",
                                    "ingredients": [
                                        {
                                            "id": 93610,
                                            "name": "pizza dough",
                                            "image": "pizza-dough.jpg"
                                        }
                                    ],
                                    "equipment": [
                                        {
                                            "id": 404646,
                                            "name": "baking pan",
                                            "image": "roasting-pan.jpg"
                                        }
                                    ]
                                },
                                {
                                    "number": 3,
                                    "step": "Drizzle the dough with a bit of olive oil.Arrange the mozzarella cheese evenly over the dough. Sprinkle with Parmesan cheese.Top with bacon and tomato. Crack 6 eggs on the pizza.",
                                    "ingredients": [
                                        {
                                            "id": 1026,
                                            "name": "mozzarella",
                                            "image": "mozzarella.png"
                                        },
                                        {
                                            "id": 1033,
                                            "name": "parmesan",
                                            "image": "parmesan.jpg"
                                        },
                                        {
                                            "id": 4053,
                                            "name": "olive oil",
                                            "image": "olive-oil.jpg"
                                        },
                                        {
                                            "id": 1123,
                                            "name": "egg",
                                            "image": "egg.png"
                                        }
                                    ],
                                    "equipment": []
                                },
                                {
                                    "number": 4,
                                    "step": "Bake for 10 to 15 minutes or until the edge is golden brown.",
                                    "ingredients": [],
                                    "equipment": [],
                                    "length": {
                                        "number": 10,
                                        "unit": "minutes"
                                    }
                                },
                                {
                                    "number": 5,
                                    "step": "Garnish with chives and parsley.",
                                    "ingredients": [
                                        {
                                            "id": 11297,
                                            "name": "parsley",
                                            "image": "parsley.jpg"
                                        },
                                        {
                                            "id": 11156,
                                            "name": "chives",
                                            "image": "fresh-chives.jpg"
                                        }
                                    ],
                                    "equipment": []
                                }
                            ]
                        }
                    ]
                }],
                //required: true
            }
        },

        data() {
            return {
                buttonText: "add"
            }

        },

        methods: {},
        computed: {
            imgSource() {
                return this.dishObject[0].image;
            },
            imgTitle() {
                return this.dishObject[0].title;
            }
        }
    }
</script>

<style scoped>
    .dishBox{
        max-width: 250px;
        max-height: 250px;
        margin: 10px;
    }

.card-body{
    padding: 5px;
}

</style>