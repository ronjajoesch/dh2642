<template>
    <div id="app" class="margin">
        <Header/>
        <Article/>
        <div class="row">
            <SideMenu v-bind:menu="menu" v-bind:nGuests="nGuests" class=" col-xs-12 col-sm-5 col-md-5 col-lg-4"/>
            <SelectDish class="col-xs-12 col-sm-7 col-md-7 col-lg-8"/>
        </div>

    </div>
</template>

<script>
    import Header from './components/header/header.vue'
    import SelectDish from './components/selectDish/selectDish.vue'
    import SideMenu from './components/sideMenu/sideMenu.vue'

    export default {
        name: 'app',
        components: {
            Header,
            SelectDish,
            SideMenu,
        },
        data() {
            return {
                //TODO API CALL
                menu: [{
                "vegetarian": false,
                "vegan": false,
                "glutenFree": true,
                "dairyFree": true,
                "veryHealthy": true,
                "cheap": false,
                "veryPopular": false,
                "sustainable": false,
                "weightWatcherSmartPoints": 50,
                "gaps": "no",
                "lowFodmap": false,
                "ketogenic": false,
                "whole30": false,
                "sourceUrl": "http://bapstory.blogspot.com/2011/08/stir-fried-anchovies-myulchi-bokkeum.html",
                "spoonacularSourceUrl": "https://spoonacular.com/bap-story-stir-fried-anchovies-myulchi-bokkeum-4",
                "aggregateLikes": 11,
                "spoonacularScore": 94.0,
                "healthScore": 70.0,
                "pricePerServing": 811.22,
                "extendedIngredients": [
                    {
                        "id": 15001,
                        "aisle": "Seafood",
                        "image": "anchovies.jpg",
                        "consitency": "solid",
                        "name": "anchovies",
                        "original": "150g tiny dried anchovies",
                        "originalString": "150g tiny dried anchovies",
                        "originalName": "tiny dried anchovies",
                        "amount": 150.0,
                        "unit": "g",
                        "meta": [
                            "dried"
                        ],
                        "metaInformation": [
                            "dried"
                        ],
                        "measures": {
                            "us": {
                                "amount": 5.291,
                                "unitShort": "oz",
                                "unitLong": "ounces"
                            },
                            "metric": {
                                "amount": 150.0,
                                "unitShort": "g",
                                "unitLong": "grams"
                            }
                        }
                    },
                    {
                        "id": 10192,
                        "aisle": "Meat",
                        "image": "baby-back-ribs.jpg",
                        "consitency": "solid",
                        "name": "baby-back ribs",
                        "original": "4. Turn the heat back on and stir for another 3-4 minutes.",
                        "originalString": "4. Turn the heat back on and stir for another 3-4 minutes.",
                        "originalName": "Turn the heat back on and stir for another 3-4 minutes.",
                        "amount": 4.0,
                        "unit": "",
                        "meta": [
                            "for another 3-4 minutes."
                        ],
                        "metaInformation": [
                            "for another 3-4 minutes."
                        ],
                        "measures": {
                            "us": {
                                "amount": 4.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 4.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 4582,
                        "aisle": "Oil, Vinegar, Salad Dressing",
                        "image": "vegetable-oil.jpg",
                        "consitency": "liquid",
                        "name": "cooking oil",
                        "original": "2 T cooking oil",
                        "originalString": "2 T cooking oil",
                        "originalName": "cooking oil",
                        "amount": 2.0,
                        "unit": "T",
                        "meta": [],
                        "metaInformation": [],
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
                        "id": 4513,
                        "aisle": "Oil, Vinegar, Salad Dressing",
                        "image": "vegetable-oil.jpg",
                        "consitency": "liquid",
                        "name": "frying oil",
                        "original": "1. Heat a frying pan with the oil on medium heat. Add the anchovies and mix around for a couple minutes.",
                        "originalString": "1. Heat a frying pan with the oil on medium heat. Add the anchovies and mix around for a couple minutes.",
                        "originalName": "Heat a frying pan with the oil on medium heat. Add the anchovies and mix around for a couple minutes.",
                        "amount": 1.0,
                        "unit": "",
                        "meta": [
                            "with the oil on medium heat. add the anchovies and mix around for a couple minutes."
                        ],
                        "metaInformation": [
                            "with the oil on medium heat. add the anchovies and mix around for a couple minutes."
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 11215,
                        "aisle": "Produce",
                        "image": "garlic.jpg",
                        "consitency": "solid",
                        "name": "garlic",
                        "original": "2. Add garlic slices, ginger, toasted nuts. Mix for another minute until the garlic and ginger is fragrant.",
                        "originalString": "2. Add garlic slices, ginger, toasted nuts. Mix for another minute until the garlic and ginger is fragrant.",
                        "originalName": "Add garlic slices, ginger, toasted nuts. Mix for another minute until the garlic and ginger is fragrant.",
                        "amount": 2.0,
                        "unit": "",
                        "meta": [
                            "toasted",
                            "for another minute until the garlic and ginger is fragrant."
                        ],
                        "metaInformation": [
                            "toasted",
                            "for another minute until the garlic and ginger is fragrant."
                        ],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 11215,
                        "aisle": "Produce",
                        "image": "garlic.jpg",
                        "consitency": "solid",
                        "name": "garlic",
                        "original": "2 T sliced garlic",
                        "originalString": "2 T sliced garlic",
                        "originalName": "sliced garlic",
                        "amount": 2.0,
                        "unit": "T",
                        "meta": [
                            "sliced"
                        ],
                        "metaInformation": [
                            "sliced"
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
                        "id": 2021,
                        "aisle": "Spices and Seasonings",
                        "image": "ginger.png",
                        "consitency": "solid",
                        "name": "ground ginger",
                        "original": "1/2 ground ginger",
                        "originalString": "1/2 ground ginger",
                        "originalName": "ground ginger",
                        "amount": 0.5,
                        "unit": "",
                        "meta": [],
                        "metaInformation": [],
                        "measures": {
                            "us": {
                                "amount": 0.5,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 0.5,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 12147,
                        "aisle": "Produce;Baking",
                        "image": "pine-nuts.png",
                        "consitency": "solid",
                        "name": "pine nuts",
                        "original": "2 T toasted pine nuts (we substituted with chopped walnuts and pumpkin seed and it was yummy)",
                        "originalString": "2 T toasted pine nuts (we substituted with chopped walnuts and pumpkin seed and it was yummy)",
                        "originalName": "toasted pine nuts (we substituted with chopped walnuts and pumpkin seed and it was yummy)",
                        "amount": 2.0,
                        "unit": "T",
                        "meta": [
                            "with chopped walnuts and pumpkin seed and it was yummy)",
                            "toasted"
                        ],
                        "metaInformation": [
                            "with chopped walnuts and pumpkin seed and it was yummy)",
                            "toasted"
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
                        "id": 9279,
                        "aisle": "Produce",
                        "image": "plum.jpg",
                        "consitency": "solid",
                        "name": "plum",
                        "original": "1.5 t plum extract",
                        "originalString": "1.5 t plum extract",
                        "originalName": "plum extract",
                        "amount": 1.5,
                        "unit": "t",
                        "meta": [],
                        "metaInformation": [],
                        "measures": {
                            "us": {
                                "amount": 1.5,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            },
                            "metric": {
                                "amount": 1.5,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            }
                        }
                    },
                    {
                        "id": 93784,
                        "aisle": "Health Foods;Baking",
                        "image": "corn-syrup.png",
                        "consitency": "solid",
                        "name": "rice syrup",
                        "original": "1 T Korean cooking syrup",
                        "originalString": "1 T Korean cooking syrup",
                        "originalName": "Korean cooking syrup",
                        "amount": 1.0,
                        "unit": "T",
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
                        "id": 93784,
                        "aisle": "Health Foods;Baking",
                        "image": "corn-syrup.png",
                        "consitency": "solid",
                        "name": "rice syrup",
                        "original": "3. Turn off the heat. Add the cooking syrup, sugar and plum extract. Mix it around.",
                        "originalString": "3. Turn off the heat. Add the cooking syrup, sugar and plum extract. Mix it around.",
                        "originalName": "Turn off the heat. Add the cooking syrup, sugar and plum extract. Mix it around.",
                        "amount": 3.0,
                        "unit": "",
                        "meta": [],
                        "metaInformation": [],
                        "measures": {
                            "us": {
                                "amount": 3.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 3.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 12023,
                        "aisle": "Ethnic Foods;Spices and Seasonings",
                        "image": "sesame-seeds.png",
                        "consitency": "solid",
                        "name": "sesame seeds",
                        "original": "2 T toasted sesame seeds",
                        "originalString": "2 T toasted sesame seeds",
                        "originalName": "toasted sesame seeds",
                        "amount": 2.0,
                        "unit": "T",
                        "meta": [
                            "toasted"
                        ],
                        "metaInformation": [
                            "toasted"
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
                        "id": 19335,
                        "aisle": "Baking",
                        "image": "sugar-in-bowl.png",
                        "consitency": "solid",
                        "name": "sugar",
                        "original": "1 T sugar",
                        "originalString": "1 T sugar",
                        "originalName": "sugar",
                        "amount": 1.0,
                        "unit": "T",
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
                        "id": null,
                        "aisle": "?",
                        "image": null,
                        "consitency": null,
                        "name": "sprinkle",
                        "original": "5. Sprinkle with sesame seeds.",
                        "originalString": "5. Sprinkle with sesame seeds.",
                        "originalName": "Sprinkle with sesame seeds.",
                        "amount": 5.0,
                        "unit": "",
                        "meta": [
                            "with sesame seeds."
                        ],
                        "metaInformation": [
                            "with sesame seeds."
                        ],
                        "measures": {
                            "us": {
                                "amount": 5.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 5.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    }
                ],
                "id": 4,
                "title": "Bap Story: Stir Fried Anchovies (Myulchi Bokkeum)",
                "readyInMinutes": 45,
                "servings": 2,
                "image": "https://spoonacular.com/recipeImages/4-556x370.jpg",
                "imageType": "jpg",
                "cuisines": [],
                "dishTypes": [
                    "lunch",
                    "main course",
                    "main dish",
                    "dinner"
                ],
                "diets": [
                    "gluten free",
                    "dairy free"
                ],
                "occasions": [],
                "winePairing": {},
                "instructions": null,
                "analyzedInstructions": [],
                "sourceName": null,
                "creditsText": null
            },
                {
                    "vegetarian": false,
                    "vegan": false,
                    "glutenFree": false,
                    "dairyFree": true,
                    "veryHealthy": false,
                    "cheap": false,
                    "veryPopular": false,
                    "sustainable": false,
                    "weightWatcherSmartPoints": 4,
                    "gaps": "no",
                    "lowFodmap": false,
                    "ketogenic": false,
                    "whole30": false,
                    "sourceUrl": "http://www.foodandwine.com/recipes/anchovy-and-piquillo-pepper-bruschetta",
                    "spoonacularSourceUrl": "https://spoonacular.com/anchovy-and-piquillo-pepper-bruschetta-54",
                    "aggregateLikes": 0,
                    "spoonacularScore": 20.0,
                    "healthScore": 2.0,
                    "creditsText": "Food and Wine",
                    "sourceName": "Food and Wine",
                    "pricePerServing": 83.51,
                    "extendedIngredients": [
                        {
                            "id": 15001,
                            "aisle": "Seafood",
                            "image": "anchovies.jpg",
                            "consitency": "solid",
                            "name": "anchovies",
                            "original": "6 anchovies, rinsed and chopped",
                            "originalString": "6 anchovies, rinsed and chopped",
                            "originalName": "anchovies, rinsed and chopped",
                            "amount": 6.0,
                            "unit": "",
                            "meta": [
                                "rinsed",
                                "chopped"
                            ],
                            "metaInformation": [
                                "rinsed",
                                "chopped"
                            ],
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
                            "id": 18064,
                            "aisle": "Bakery/Bread",
                            "image": "white-bread.jpg",
                            "consitency": "solid",
                            "name": "bread",
                            "original": "6 1/2-inch-thick slices Tuscan bread",
                            "originalString": "6 1/2-inch-thick slices Tuscan bread",
                            "originalName": "-thick slices Tuscan bread",
                            "amount": 6.5,
                            "unit": "inch",
                            "meta": [],
                            "metaInformation": [],
                            "measures": {
                                "us": {
                                    "amount": 6.5,
                                    "unitShort": "inch",
                                    "unitLong": "inches"
                                },
                                "metric": {
                                    "amount": 6.5,
                                    "unitShort": "inch",
                                    "unitLong": "inches"
                                }
                            }
                        },
                        {
                            "id": 1002054,
                            "aisle": "Canned and Jarred",
                            "image": "caper-berries.jpg",
                            "consitency": "solid",
                            "name": "caperberries",
                            "original": "12 caperberries, stemmed and sliced crosswise",
                            "originalString": "12 caperberries, stemmed and sliced crosswise",
                            "originalName": "caperberries, stemmed and sliced crosswise",
                            "amount": 12.0,
                            "unit": "",
                            "meta": [
                                "stemmed",
                                "sliced"
                            ],
                            "metaInformation": [
                                "stemmed",
                                "sliced"
                            ],
                            "measures": {
                                "us": {
                                    "amount": 12.0,
                                    "unitShort": "",
                                    "unitLong": ""
                                },
                                "metric": {
                                    "amount": 12.0,
                                    "unitShort": "",
                                    "unitLong": ""
                                }
                            }
                        },
                        {
                            "id": 11215,
                            "aisle": "Produce",
                            "image": "garlic.jpg",
                            "consitency": "solid",
                            "name": "garlic clove",
                            "original": "1 large garlic clove, halved",
                            "originalString": "1 large garlic clove, halved",
                            "originalName": "garlic clove, halved",
                            "amount": 1.0,
                            "unit": "large",
                            "meta": [
                                "halved"
                            ],
                            "metaInformation": [
                                "halved"
                            ],
                            "measures": {
                                "us": {
                                    "amount": 1.0,
                                    "unitShort": "large",
                                    "unitLong": "large"
                                },
                                "metric": {
                                    "amount": 1.0,
                                    "unitShort": "large",
                                    "unitLong": "large"
                                }
                            }
                        },
                        {
                            "id": 4053,
                            "aisle": "Oil, Vinegar, Salad Dressing",
                            "image": "olive-oil.jpg",
                            "consitency": "liquid",
                            "name": "olive oil",
                            "original": "Extra-virgin olive oil",
                            "originalString": "Extra-virgin olive oil",
                            "originalName": "Extra-virgin olive oil",
                            "amount": 6.0,
                            "unit": "servings",
                            "meta": [
                                "extra-virgin"
                            ],
                            "metaInformation": [
                                "extra-virgin"
                            ],
                            "measures": {
                                "us": {
                                    "amount": 6.0,
                                    "unitShort": "servings",
                                    "unitLong": "servings"
                                },
                                "metric": {
                                    "amount": 6.0,
                                    "unitShort": "servings",
                                    "unitLong": "servings"
                                }
                            }
                        },
                        {
                            "id": 98841,
                            "aisle": "Ethnic Foods",
                            "image": "piquillo-peppers.jpg",
                            "consitency": "solid",
                            "name": "piquillo peppers",
                            "original": "1 8-ounce jar piquillo peppers, drained and cut into strips",
                            "originalString": "1 8-ounce jar piquillo peppers, drained and cut into strips",
                            "originalName": "piquillo peppers, drained and cut into strips",
                            "amount": 8.0,
                            "unit": "ounce",
                            "meta": [
                                "drained",
                                "cut into strips"
                            ],
                            "metaInformation": [
                                "drained",
                                "cut into strips"
                            ],
                            "measures": {
                                "us": {
                                    "amount": 8.0,
                                    "unitShort": "oz",
                                    "unitLong": "ounces"
                                },
                                "metric": {
                                    "amount": 226.796,
                                    "unitShort": "g",
                                    "unitLong": "grams"
                                }
                            }
                        },
                        {
                            "id": 1012047,
                            "aisle": "Spices and Seasonings",
                            "image": "salt.jpg",
                            "consitency": "solid",
                            "name": "sea-salt",
                            "original": "Sea salt and freshly ground pepper",
                            "originalString": "Sea salt and freshly ground pepper",
                            "originalName": "Sea salt and freshly ground pepper",
                            "amount": 6.0,
                            "unit": "servings",
                            "meta": [
                                "freshly ground"
                            ],
                            "metaInformation": [
                                "freshly ground"
                            ],
                            "measures": {
                                "us": {
                                    "amount": 6.0,
                                    "unitShort": "servings",
                                    "unitLong": "servings"
                                },
                                "metric": {
                                    "amount": 6.0,
                                    "unitShort": "servings",
                                    "unitLong": "servings"
                                }
                            }
                        }
                    ],
                    "id": 54,
                    "title": "Anchovy and Piquillo Pepper Bruschetta",
                    "readyInMinutes": 45,
                    "servings": 6,
                    "image": "https://spoonacular.com/recipeImages/54-556x370.jpg",
                    "imageType": "jpg",
                    "cuisines": [
                        "mediterranean",
                        "european",
                        "italian"
                    ],
                    "dishTypes": [
                        "side dish"
                    ],
                    "diets": [
                        "dairy free",
                        "pescatarian"
                    ],
                    "occasions": [],
                    "winePairing": {},
                    "instructions": "Preheat the broiler. Toast the bread until golden, then lightly brush with olive oil. Rub the toasts on 1 side with the garlic clove. In a small bowl, toss the piquillos with the anchovies and caperberries. Spoon the topping on the toasts. Drizzle with olive oil, sprinkle with salt and pepper and serve.",
                    "analyzedInstructions": [
                        {
                            "name": "",
                            "steps": [
                                {
                                    "number": 1,
                                    "step": "Preheat the broiler. Toast the bread until golden, then lightly brush with olive oil. Rub the toasts on 1 side with the garlic clove. In a small bowl, toss the piquillos with the anchovies and caperberries. Spoon the topping on the toasts.",
                                    "ingredients": [
                                        {
                                            "id": 1002054,
                                            "name": "caper berries",
                                            "image": "caper-berries.jpg"
                                        },
                                        {
                                            "id": 11215,
                                            "name": "whole garlic cloves",
                                            "image": "garlic.jpg"
                                        },
                                        {
                                            "id": 15001,
                                            "name": "anchovies",
                                            "image": "anchovies.jpg"
                                        },
                                        {
                                            "id": 4053,
                                            "name": "olive oil",
                                            "image": "olive-oil.jpg"
                                        },
                                        {
                                            "id": 98841,
                                            "name": "piquillo pepper",
                                            "image": "piquillo-peppers.jpg"
                                        },
                                        {
                                            "id": 18064,
                                            "name": "bread",
                                            "image": "white-bread.jpg"
                                        }
                                    ],
                                    "equipment": [
                                        {
                                            "id": 405914,
                                            "name": "broiler",
                                            "image": "oven.jpg"
                                        },
                                        {
                                            "id": 404783,
                                            "name": "bowl",
                                            "image": "bowl.jpg"
                                        }
                                    ]
                                },
                                {
                                    "number": 2,
                                    "step": "Drizzle with olive oil, sprinkle with salt and pepper and serve.",
                                    "ingredients": [
                                        {
                                            "id": 1102047,
                                            "name": "salt and pepper",
                                            "image": "salt-and-pepper.jpg"
                                        },
                                        {
                                            "id": 4053,
                                            "name": "olive oil",
                                            "image": "olive-oil.jpg"
                                        }
                                    ],
                                    "equipment": []
                                }
                            ]
                        }
                    ]
                },
                    {
                        "vegetarian": false,
                        "vegan": false,
                        "glutenFree": true,
                        "dairyFree": true,
                        "veryHealthy": false,
                        "cheap": false,
                        "veryPopular": false,
                        "sustainable": false,
                        "weightWatcherSmartPoints": 12,
                        "gaps": "no",
                        "lowFodmap": false,
                        "ketogenic": false,
                        "whole30": true,
                        "sourceUrl": "http://www.foodandwine.com/recipes/pan-seared-skirt-steak-with-anchovies-and-lime",
                        "spoonacularSourceUrl": "https://spoonacular.com/pan-seared-skirt-steak-with-anchovies-and-lime-100",
                        "aggregateLikes": 0,
                        "spoonacularScore": 62.0,
                        "healthScore": 24.0,
                        "creditsText": "Food and Wine",
                        "sourceName": "Food and Wine",
                        "pricePerServing": 441.27,
                        "extendedIngredients": [
                            {
                                "id": 15002,
                                "aisle": "Canned and Jarred",
                                "image": "anchovies.jpg",
                                "consitency": "solid",
                                "name": "canned anchovy fillets",
                                "original": "1 2-ounce can anchovy fillets packed in oil, drained and minced",
                                "originalString": "1 2-ounce can anchovy fillets packed in oil, drained and minced",
                                "originalName": "anchovy fillets packed in oil, drained and minced",
                                "amount": 2.0,
                                "unit": "ounce",
                                "meta": [
                                    "packed in oil, drained and minced",
                                    "canned"
                                ],
                                "metaInformation": [
                                    "packed in oil, drained and minced",
                                    "canned"
                                ],
                                "measures": {
                                    "us": {
                                        "amount": 2.0,
                                        "unitShort": "oz",
                                        "unitLong": "ounces"
                                    },
                                    "metric": {
                                        "amount": 56.699,
                                        "unitShort": "g",
                                        "unitLong": "grams"
                                    }
                                }
                            },
                            {
                                "id": 11215,
                                "aisle": "Produce",
                                "image": "garlic.jpg",
                                "consitency": "solid",
                                "name": "garlic clove",
                                "original": "1 large garlic clove, minced",
                                "originalString": "1 large garlic clove, minced",
                                "originalName": "garlic clove, minced",
                                "amount": 1.0,
                                "unit": "large",
                                "meta": [
                                    "minced"
                                ],
                                "metaInformation": [
                                    "minced"
                                ],
                                "measures": {
                                    "us": {
                                        "amount": 1.0,
                                        "unitShort": "large",
                                        "unitLong": "large"
                                    },
                                    "metric": {
                                        "amount": 1.0,
                                        "unitShort": "large",
                                        "unitLong": "large"
                                    }
                                }
                            },
                            {
                                "id": 1082047,
                                "aisle": "Spices and Seasonings",
                                "image": "salt.jpg",
                                "consitency": "solid",
                                "name": "kosher salt",
                                "original": "Kosher salt and freshly ground pepper",
                                "originalString": "Kosher salt and freshly ground pepper",
                                "originalName": "Kosher salt and freshly ground pepper",
                                "amount": 4.0,
                                "unit": "servings",
                                "meta": [
                                    "freshly ground"
                                ],
                                "metaInformation": [
                                    "freshly ground"
                                ],
                                "measures": {
                                    "us": {
                                        "amount": 4.0,
                                        "unitShort": "servings",
                                        "unitLong": "servings"
                                    },
                                    "metric": {
                                        "amount": 4.0,
                                        "unitShort": "servings",
                                        "unitLong": "servings"
                                    }
                                }
                            },
                            {
                                "id": 9160,
                                "aisle": "Produce",
                                "image": "lime-juice.png",
                                "consitency": "liquid",
                                "name": "lime juice",
                                "original": "1 tablespoon fresh lime juice, plus lime wedges for serving",
                                "originalString": "1 tablespoon fresh lime juice, plus lime wedges for serving",
                                "originalName": "fresh lime juice, plus lime wedges for serving",
                                "amount": 1.0,
                                "unit": "tablespoon",
                                "meta": [
                                    "fresh",
                                    "for serving"
                                ],
                                "metaInformation": [
                                    "fresh",
                                    "for serving"
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
                            },
                            {
                                "id": 4053,
                                "aisle": "Oil, Vinegar, Salad Dressing",
                                "image": "olive-oil.jpg",
                                "consitency": "liquid",
                                "name": "olive oil",
                                "original": "1 tablespoon extra-virgin olive oil",
                                "originalString": "1 tablespoon extra-virgin olive oil",
                                "originalName": "extra-virgin olive oil",
                                "amount": 1.0,
                                "unit": "tablespoon",
                                "meta": [
                                    "extra-virgin"
                                ],
                                "metaInformation": [
                                    "extra-virgin"
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
                            },
                            {
                                "id": 11291,
                                "aisle": "Produce",
                                "image": "spring-onions.jpg",
                                "consitency": "solid",
                                "name": "scallions",
                                "original": "2 scallions, minced",
                                "originalString": "2 scallions, minced",
                                "originalName": "scallions, minced",
                                "amount": 2.0,
                                "unit": "",
                                "meta": [
                                    "minced"
                                ],
                                "metaInformation": [
                                    "minced"
                                ],
                                "measures": {
                                    "us": {
                                        "amount": 2.0,
                                        "unitShort": "",
                                        "unitLong": ""
                                    },
                                    "metric": {
                                        "amount": 2.0,
                                        "unitShort": "",
                                        "unitLong": ""
                                    }
                                }
                            },
                            {
                                "id": 23232,
                                "aisle": "Meat",
                                "image": "ribeye-raw.jpg",
                                "consitency": "solid",
                                "name": "steaks",
                                "original": "4 6-ounce skirt steaks",
                                "originalString": "4 6-ounce skirt steaks",
                                "originalName": "skirt steaks",
                                "amount": 24.0,
                                "unit": "ounce",
                                "meta": [],
                                "metaInformation": [],
                                "measures": {
                                    "us": {
                                        "amount": 24.0,
                                        "unitShort": "oz",
                                        "unitLong": "ounces"
                                    },
                                    "metric": {
                                        "amount": 680.389,
                                        "unitShort": "g",
                                        "unitLong": "grams"
                                    }
                                }
                            },
                            {
                                "id": 14412,
                                "aisle": "Beverages",
                                "image": "water.png",
                                "consitency": "liquid",
                                "name": "water",
                                "original": "1/4 cup water",
                                "originalString": "1/4 cup water",
                                "originalName": "water",
                                "amount": 0.25,
                                "unit": "cup",
                                "meta": [],
                                "metaInformation": [],
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
                            }
                        ],
                        "id": 100,
                        "title": "Pan-Seared Skirt Steak with Anchovies and Lime",
                        "readyInMinutes": 30,
                        "servings": 4,
                        "image": "https://spoonacular.com/recipeImages/100-556x370.jpg",
                        "imageType": "jpg",
                        "cuisines": [],
                        "dishTypes": [
                            "lunch",
                            "main course",
                            "main dish",
                            "dinner"
                        ],
                        "diets": [
                            "gluten free",
                            "dairy free",
                            "paleolithic",
                            "primal",
                            "whole 30"
                        ],
                        "occasions": [
                            "valentine's day",
                            "father's day"
                        ],
                        "winePairing": {
                            "pairedWines": [
                                "merlot",
                                "cabernet sauvignon",
                                "pinot noir"
                            ],
                            "pairingText": "Merlot, Cabernet Sauvignon, and Pinot Noir are great choices for Steak. After all, beef and red wine are a classic combination. Generally, leaner steaks go well with light or medium-bodied reds, such as pinot noir or merlot, while fattier steaks can handle a bold red, such as cabernet sauvingnon. You could try Osprey's Dominion Merlot. Reviewers quite like it with a 4 out of 5 star rating and a price of about 18 dollars per bottle.",
                            "productMatches": [
                                {
                                    "id": 430916,
                                    "title": "Osprey's Dominion Merlot",
                                    "description": "Osprey's Dominion Merlot offers classic dark plum aromas with blackberry preserves, sweet cedar, smoke and vanilla. And while the nose is rather fruity, the palate isn't overly so with rich flavors of chocolate, mint and tobacco joining the party. The medium tannins are there, but not overly aggressive. With another year or so in bottle they should integrate even more. Overall, this wine is medium on body but full on flavor",
                                    "price": "$18.0",
                                    "imageUrl": "https://spoonacular.com/productImages/430916-312x231.jpg",
                                    "averageRating": 0.8,
                                    "ratingCount": 1.0,
                                    "score": 0.55,
                                    "link": "https://www.amazon.com/2012-Ospreys-Dominion-Merlot-750/dp/B00GMP1JDY?tag=spoonacular-20"
                                }
                            ]
                        },
                        "instructions": "Rub the steaks with the lime juice and salt and pepper. Let stand for 10 minutes.                                                        In a skillet, heat the olive oil. Add the steaks and cook over moderately high heat, turning once, until medium-rare, 4 minutes; transfer to plates and keep warm.                                              Add the anchovies, scallions and garlic to the skillet and cook over moderate heat, stirring, 30 seconds. Add the water and simmer until the sauce has thickened, scraping up the browned bits from the bottom, 30 seconds. Pour the sauce over the steaks and serve with lime wedges.",
                        "analyzedInstructions": [
                            {
                                "name": "",
                                "steps": [
                                    {
                                        "number": 1,
                                        "step": "Rub the steaks with the lime juice and salt and pepper.",
                                        "ingredients": [
                                            {
                                                "id": 1102047,
                                                "name": "salt and pepper",
                                                "image": "salt-and-pepper.jpg"
                                            },
                                            {
                                                "id": 9160,
                                                "name": "lime juice",
                                                "image": "lime-juice.png"
                                            },
                                            {
                                                "id": 23232,
                                                "name": "steak",
                                                "image": "ribeye-raw.jpg"
                                            }
                                        ],
                                        "equipment": []
                                    },
                                    {
                                        "number": 2,
                                        "step": "Let stand for 10 minutes.",
                                        "ingredients": [],
                                        "equipment": [],
                                        "length": {
                                            "number": 10,
                                            "unit": "minutes"
                                        }
                                    },
                                    {
                                        "number": 3,
                                        "step": "In a skillet, heat the olive oil.",
                                        "ingredients": [
                                            {
                                                "id": 4053,
                                                "name": "olive oil",
                                                "image": "olive-oil.jpg"
                                            }
                                        ],
                                        "equipment": [
                                            {
                                                "id": 404645,
                                                "name": "frying pan",
                                                "image": "pan.png"
                                            }
                                        ]
                                    },
                                    {
                                        "number": 4,
                                        "step": "Add the steaks and cook over moderately high heat, turning once, until medium-rare, 4 minutes; transfer to plates and keep warm.",
                                        "ingredients": [
                                            {
                                                "id": 23232,
                                                "name": "steak",
                                                "image": "ribeye-raw.jpg"
                                            }
                                        ],
                                        "equipment": [],
                                        "length": {
                                            "number": 4,
                                            "unit": "minutes"
                                        }
                                    },
                                    {
                                        "number": 5,
                                        "step": "Add the anchovies, scallions and garlic to the skillet and cook over moderate heat, stirring, 30 seconds.",
                                        "ingredients": [
                                            {
                                                "id": 11291,
                                                "name": "green onions",
                                                "image": "spring-onions.jpg"
                                            },
                                            {
                                                "id": 11215,
                                                "name": "garlic",
                                                "image": "garlic.png"
                                            }
                                        ],
                                        "equipment": [
                                            {
                                                "id": 404645,
                                                "name": "frying pan",
                                                "image": "pan.png"
                                            }
                                        ]
                                    },
                                    {
                                        "number": 6,
                                        "step": "Add the water and simmer until the sauce has thickened, scraping up the browned bits from the bottom, 30 seconds.",
                                        "ingredients": [
                                            {
                                                "id": 14412,
                                                "name": "water",
                                                "image": "water.png"
                                            }
                                        ],
                                        "equipment": []
                                    },
                                    {
                                        "number": 7,
                                        "step": "Pour the sauce over the steaks and serve with lime wedges.",
                                        "ingredients": [
                                            {
                                                "id": 23232,
                                                "name": "steak",
                                                "image": "ribeye-raw.jpg"
                                            }
                                        ],
                                        "equipment": []
                                    }
                                ]
                            }
                        ]
                    }],
                nGuests: 1,
            }
        }
    }
</script>

<style scoped>
    .row {
        margin: 0px;
    }
    .margin{
        margin: 20px;
    }
</style>