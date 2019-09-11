window.onload = function () {
  console.log("start");
  //We instantiate our model
  const model = new DinnerModel();
  model.setNumberOfGuests(4); //TODO change when dynamic


 //TODO remove later -> dynamic
 
 // model.getDish(1).then((dish1) =>{
    //model.addDishToMenu(dish1);
    const myJson = [
        {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": true,
        "veryHealthy": true,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "weightWatcherSmartPoints": 33,
        "gaps": "no",
        "lowFodmap": false,
        "ketogenic": false,
        "whole30": false,
        "sourceUrl": "http://saladpride.blogspot.com/2011/06/carrots-cauliflower-and-anchovies.html",
        "spoonacularSourceUrl": "https://spoonacular.com/carrots-cauliflower-and-anchovies-3",
        "aggregateLikes": 0,
        "spoonacularScore": 82.0,
        "healthScore": 63.0,
        "pricePerServing": 438.0,
        "extendedIngredients": [
            {
                "id": 93647,
                "aisle": "Pasta and Rice",
                "image": "pastina.jpg",
                "consitency": "solid",
                "name": "acini di pepe",
                "original": "Sale e pepe",
                "originalString": "Sale e pepe",
                "originalName": "Sale e pepe",
                "amount": 1.0,
                "unit": "serving",
                "meta": [],
                "metaInformation": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    }
                }
            },
            {
                "id": 12061,
                "aisle": "Nuts",
                "image": "almonds.jpg",
                "consitency": "solid",
                "name": "almonds",
                "original": "A handful of almonds",
                "originalString": "A handful of almonds",
                "originalName": "A of almonds",
                "amount": 1.0,
                "unit": "handful",
                "meta": [],
                "metaInformation": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "handful",
                        "unitLong": "handful"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "handful",
                        "unitLong": "handful"
                    }
                }
            },
            {
                "id": 15001,
                "aisle": "Seafood",
                "image": "fresh-anchovies.jpg",
                "consitency": "solid",
                "name": "anchovies",
                "original": "4/5 Anchovies (or Sardines)",
                "originalString": "4/5 Anchovies (or Sardines)",
                "originalName": "Anchovies (or Sardines)",
                "amount": 0.8,
                "unit": "",
                "meta": [
                    "(or Sardines)"
                ],
                "metaInformation": [
                    "(or Sardines)"
                ],
                "measures": {
                    "us": {
                        "amount": 0.8,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 0.8,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 11124,
                "aisle": "Produce",
                "image": "sliced-carrot.png",
                "consitency": "solid",
                "name": "carrots",
                "original": "2 raw pealed carrots",
                "originalString": "2 raw pealed carrots",
                "originalName": "raw pealed carrots",
                "amount": 2.0,
                "unit": "",
                "meta": [
                    "raw"
                ],
                "metaInformation": [
                    "raw"
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
                "id": 11135,
                "aisle": "Produce",
                "image": "cauliflower.jpg",
                "consitency": "solid",
                "name": "cauliflower",
                "original": "A quarter of a raw cauliflower",
                "originalString": "A quarter of a raw cauliflower",
                "originalName": "A quarter of a raw cauliflower",
                "amount": 1.0,
                "unit": "serving",
                "meta": [
                    "raw"
                ],
                "metaInformation": [
                    "raw"
                ],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    }
                }
            },
            {
                "id": 1034053,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "olive-oil.jpg",
                "consitency": "liquid",
                "name": "extra virgin olive oil",
                "original": "Extra virgin olive oil",
                "originalString": "Extra virgin olive oil",
                "originalName": "Extra virgin olive oil",
                "amount": 1.0,
                "unit": "serving",
                "meta": [],
                "metaInformation": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    }
                }
            },
            {
                "id": 1034053,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "olive-oil.jpg",
                "consitency": "liquid",
                "name": "extra-virgin olive oil",
                "original": "Dressing: Extra virgin olive oil, Salt and pepper, 3 Tbs Lemon juice",
                "originalString": "Dressing: Extra virgin olive oil, Salt and pepper, 3 Tbs Lemon juice",
                "originalName": "Dressing: Extra virgin olive oil, Salt and pepper, Lemon juice",
                "amount": 3.0,
                "unit": "Tbs",
                "meta": [],
                "metaInformation": [],
                "measures": {
                    "us": {
                        "amount": 3.0,
                        "unitShort": "Tbs",
                        "unitLong": "Tbs"
                    },
                    "metric": {
                        "amount": 3.0,
                        "unitShort": "Tbs",
                        "unitLong": "Tbs"
                    }
                }
            },
            {
                "id": 9152,
                "aisle": "Produce",
                "image": "lemon-juice.jpg",
                "consitency": "liquid",
                "name": "lemon juice",
                "original": "3 Tbs Lemon juice",
                "originalString": "3 Tbs Lemon juice",
                "originalName": "Lemon juice",
                "amount": 3.0,
                "unit": "Tbs",
                "meta": [],
                "metaInformation": [],
                "measures": {
                    "us": {
                        "amount": 3.0,
                        "unitShort": "Tbs",
                        "unitLong": "Tbs"
                    },
                    "metric": {
                        "amount": 3.0,
                        "unitShort": "Tbs",
                        "unitLong": "Tbs"
                    }
                }
            },
            {
                "id": 11959,
                "aisle": "Produce",
                "image": "arugula-or-rocket-salad.jpg",
                "consitency": "solid",
                "name": "rocket",
                "original": "Rocket (arugula) 50gr",
                "originalString": "Rocket (arugula) 50gr",
                "originalName": "Rocket (arugula)",
                "amount": 50.0,
                "unit": "gr",
                "meta": [
                    "(arugula)"
                ],
                "metaInformation": [
                    "(arugula)"
                ],
                "measures": {
                    "us": {
                        "amount": 1.764,
                        "unitShort": "oz",
                        "unitLong": "ounces"
                    },
                    "metric": {
                        "amount": 50.0,
                        "unitShort": "gr",
                        "unitLong": "grs"
                    }
                }
            },
            {
                "id": 1102047,
                "aisle": "Spices and Seasonings",
                "image": "salt-and-pepper.jpg",
                "consitency": "solid",
                "name": "salt and pepper",
                "original": "Salt and pepper",
                "originalString": "Salt and pepper",
                "originalName": "Salt and pepper",
                "amount": 1.0,
                "unit": "serving",
                "meta": [],
                "metaInformation": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    }
                }
            }
        ],
        "id": 3,
        "title": "Carrots, Cauliflower And Anchovies",
        "readyInMinutes": 45,
        "servings": 1,
        "image": "https://spoonacular.com/recipeImages/3-556x370.jpg",
        "imageType": "jpg",
        "cuisines": [],
        "dishTypes": [
            "lunch",
            "main course",
            "main dish",
            "dinner"
        ],
        "diets": [
            "dairy free",
            "pescatarian"
        ],
        "occasions": [],
        "winePairing": {},
        "instructions": null,
        "analyzedInstructions": [],
        "sourceName": null,
        "creditsText": null
},{
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
        "main dish",
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
        "pairingText": "Breakfast Pizza can be paired with Sangiovese, Barbera Wine, and Shiraz. The best wine for pizza depends on the toppings! Red sauce pizza will call for a red wine with some acidity, such as a barberan or sangiovese. Add pepperoni or sausage and you can go bolder with a syrah. You could try Fonterutoli Chianti Classico. Reviewers quite like it with a 4.3 out of 5 star rating and a price of about 24 dollars per bottle.",
        "productMatches": [
            {
                "id": 440954,
                "title": "Fonterutoli Chianti Classico",
                "description": "Color: Deep purplish-red but bright and exceptionally concentrated.Bouquet: Extremely intense and complex with scents of cherries and raspberries accompanied by light toasty and spicy shadings.Flavor: The impact in the mouth is incisive but soft due to a substantial structure of tannins in which those that are soft and well rounded stand out. Acidity is fused with the wine's body and aids the transmission of pleasant sensations of warmth and strength. The wine features a long finish that is unusual for a regular Chianti Classico.Conclusions: Those who argue that Chianti Classico is a prickly and rough wine will change their minds after tasting this 1999, which is ready to drink now but will improve for at least five years more.Alcohol: 13.5% by volume",
                "price": "$24.49",
                "imageUrl": "https://spoonacular.com/productImages/440954-312x231.jpg",
                "averageRating": 0.86,
                "ratingCount": 6.0,
                "score": 0.8073684210526315,
                "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Ffonterutoli-chianti-classico-1998%2F12434"
            }
        ]
    },
    "instructions": "<ul><li>Preheat oven to 500 F degrees.</li><li>Spray a baking sheet (15.25 x 10.25 inches) with cooking spray.</li><li>Roll out the pizza dough and place it on the pizza baking dish. Drizzle the dough with a bit of olive oil.</li><li>Arrange the mozzarella cheese evenly over the dough. Sprinkle with Parmesan cheese.</li><li>Top with bacon and tomato. Crack 6 eggs on the pizza.</li><li>Bake for 10 to 15 minutes or until the edge is golden brown.</li><li>Garnish with chives and parsley.</li></ul>",
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
                    "step": "Roll out the pizza dough and place it on the pizza baking dish.",
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
},{
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 5,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": false,
    "preparationMinutes": 20,
    "cookingMinutes": 45,
    "sourceUrl": "http://www.jocooks.com/healthy-eating/pork-loin-and-pea-stew/",
    "spoonacularSourceUrl": "https://spoonacular.com/pork-loin-and-pea-stew-559250",
    "aggregateLikes": 38,
    "spoonacularScore": 97.0,
    "healthScore": 80.0,
    "creditsText": "Jo Cooks",
    "sourceName": "Jo Cooks",
    "pricePerServing": 217.74,
    "extendedIngredients": [
        {
            "id": 2004,
            "aisle": "Produce;Spices and Seasonings",
            "image": "bay-leaves.jpg",
            "consitency": "solid",
            "name": "bay leaves",
            "original": "2 bay leaves",
            "originalString": "2 bay leaves",
            "originalName": "bay leaves",
            "amount": 2.0,
            "unit": "",
            "meta": [],
            "metaInformation": [],
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
            "id": 11143,
            "aisle": "Produce",
            "image": "celery.jpg",
            "consitency": "solid",
            "name": "celery",
            "original": "2 stalks of celery, chopped",
            "originalString": "2 stalks of celery, chopped",
            "originalName": "celery, chopped",
            "amount": 2.0,
            "unit": "stalks",
            "meta": [
                "chopped"
            ],
            "metaInformation": [
                "chopped"
            ],
            "measures": {
                "us": {
                    "amount": 2.0,
                    "unitShort": "stalks",
                    "unitLong": "stalks"
                },
                "metric": {
                    "amount": 2.0,
                    "unitShort": "stalks",
                    "unitLong": "stalks"
                }
            }
        },
        {
            "id": 2045,
            "aisle": "Produce;Spices and Seasonings",
            "image": "dill.jpg",
            "consitency": "solid",
            "name": "dill",
            "original": "1/4 cup dill, chopped",
            "originalString": "1/4 cup dill, chopped",
            "originalName": "dill, chopped",
            "amount": 0.25,
            "unit": "cup",
            "meta": [
                "chopped"
            ],
            "metaInformation": [
                "chopped"
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
            "id": 11215,
            "aisle": "Produce",
            "image": "garlic.jpg",
            "consitency": "solid",
            "name": "garlic",
            "original": "7 cloves garlic, minced",
            "originalString": "7 cloves garlic, minced",
            "originalName": "garlic, minced",
            "amount": 7.0,
            "unit": "cloves",
            "meta": [
                "minced"
            ],
            "metaInformation": [
                "minced"
            ],
            "measures": {
                "us": {
                    "amount": 7.0,
                    "unitShort": "cloves",
                    "unitLong": "cloves"
                },
                "metric": {
                    "amount": 7.0,
                    "unitShort": "cloves",
                    "unitLong": "cloves"
                }
            }
        },
        {
            "id": 11282,
            "aisle": "Produce",
            "image": "brown-onion.png",
            "consitency": "solid",
            "name": "onion",
            "original": "1 medium onion, chopped",
            "originalString": "1 medium onion, chopped",
            "originalName": "onion, chopped",
            "amount": 1.0,
            "unit": "medium",
            "meta": [
                "chopped"
            ],
            "metaInformation": [
                "chopped"
            ],
            "measures": {
                "us": {
                    "amount": 1.0,
                    "unitShort": "medium",
                    "unitLong": "medium"
                },
                "metric": {
                    "amount": 1.0,
                    "unitShort": "medium",
                    "unitLong": "medium"
                }
            }
        },
        {
            "id": 11297,
            "aisle": "Produce",
            "image": "parsley.jpg",
            "consitency": "solid",
            "name": "parsley",
            "original": "1/4 cup parsley, chopped",
            "originalString": "1/4 cup parsley, chopped",
            "originalName": "parsley, chopped",
            "amount": 0.25,
            "unit": "cup",
            "meta": [
                "chopped"
            ],
            "metaInformation": [
                "chopped"
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
            "id": 11304,
            "aisle": "Produce",
            "image": "peas.jpg",
            "consitency": "solid",
            "name": "peas",
            "original": "1 1/2 lb frozen peas",
            "originalString": "1 1/2 lb frozen peas",
            "originalName": "frozen peas",
            "amount": 1.5,
            "unit": "lb",
            "meta": [
                "frozen"
            ],
            "metaInformation": [
                "frozen"
            ],
            "measures": {
                "us": {
                    "amount": 1.5,
                    "unitShort": "lb",
                    "unitLong": "pounds"
                },
                "metric": {
                    "amount": 680.389,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 10111333,
            "aisle": "Produce",
            "image": "green-pepper.jpg",
            "consitency": "solid",
            "name": "peppers",
            "original": "1/4 cup pickled hot peppers",
            "originalString": "1/4 cup pickled hot peppers",
            "originalName": "pickled hot peppers",
            "amount": 0.25,
            "unit": "cup",
            "meta": [
                "hot"
            ],
            "metaInformation": [
                "hot"
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
            "id": 10225,
            "aisle": "Meat",
            "image": "pork-loin.jpg",
            "consitency": "solid",
            "name": "pork loin",
            "original": "1 1/2 lb pork loin, cut in 1 inch pieces",
            "originalString": "1 1/2 lb pork loin, cut in 1 inch pieces",
            "originalName": "pork loin, cut in 1 inch pieces",
            "amount": 1.5,
            "unit": "lb",
            "meta": [
                "cut in 1 inch pieces"
            ],
            "metaInformation": [
                "cut in 1 inch pieces"
            ],
            "measures": {
                "us": {
                    "amount": 1.5,
                    "unitShort": "lb",
                    "unitLong": "pounds"
                },
                "metric": {
                    "amount": 680.389,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 1102047,
            "aisle": "Spices and Seasonings",
            "image": "salt-and-pepper.jpg",
            "consitency": "solid",
            "name": "salt and pepper",
            "original": "salt and pepper to taste",
            "originalString": "salt and pepper to taste",
            "originalName": "salt and pepper to taste",
            "amount": 6.0,
            "unit": "servings",
            "meta": [
                "to taste"
            ],
            "metaInformation": [
                "to taste"
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
            "id": 11887,
            "aisle": "Pasta and Rice",
            "image": "tomato-paste.jpg",
            "consitency": "solid",
            "name": "tomato paste",
            "original": "1/2 cup tomato paste",
            "originalString": "1/2 cup tomato paste",
            "originalName": "tomato paste",
            "amount": 0.5,
            "unit": "cup",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 0.5,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 118.294,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 4513,
            "aisle": "Oil, Vinegar, Salad Dressing",
            "image": "vegetable-oil.jpg",
            "consitency": "liquid",
            "name": "vegetable oil",
            "original": "2 tbsp vegetable oil",
            "originalString": "2 tbsp vegetable oil",
            "originalName": "vegetable oil",
            "amount": 2.0,
            "unit": "tbsp",
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
            "id": 14412,
            "aisle": "Beverages",
            "image": "water.png",
            "consitency": "liquid",
            "name": "water",
            "original": "2 cups water, more as needed",
            "originalString": "2 cups water, more as needed",
            "originalName": "water, more as needed",
            "amount": 2.0,
            "unit": "cups",
            "meta": [
                "as needed"
            ],
            "metaInformation": [
                "as needed"
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
        }
    ],
    "id": 559250,
    "title": "Pork Loin and Pea Stew",
    "readyInMinutes": 65,
    "servings": 6,
    "image": "https://spoonacular.com/recipeImages/559250-556x370.jpg",
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
    "occasions": [
        "fall",
        "winter"
    ],
    "winePairing": {},
    "instructions": "In a pot heat the vegetable oil and add the chopped onion and celery. Saute for about 5 minutes until the onions become translucent.Add the garlic and cook for another minute.Add the pork to the pot and stir. Cook the pork until it's no longer pink.In a bowl mix the tomato paste with 2 cups of water and add it to the pot. Add the peas, the hot peppers and the bay leaves.Add more water as needed, the water needs to fully cover the peas and pork. Add salt and pepper to taste. Cover the pot and let it cook for 30 minutes. After 30 minutes and the chopped dill and parsley. Stir well and serve.",
    "analyzedInstructions": [
        {
            "name": "",
            "steps": [
                {
                    "number": 1,
                    "step": "In a pot heat the vegetable oil and add the chopped onion and celery.",
                    "ingredients": [
                        {
                            "id": 4513,
                            "name": "vegetable oil",
                            "image": "vegetable-oil.jpg"
                        },
                        {
                            "id": 11143,
                            "name": "celery",
                            "image": "celery.jpg"
                        },
                        {
                            "id": 11282,
                            "name": "onion",
                            "image": "brown-onion.png"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404752,
                            "name": "pot",
                            "image": "stock-pot.jpg"
                        }
                    ]
                },
                {
                    "number": 2,
                    "step": "Saute for about 5 minutes until the onions become translucent.",
                    "ingredients": [
                        {
                            "id": 11282,
                            "name": "onion",
                            "image": "brown-onion.png"
                        }
                    ],
                    "equipment": [],
                    "length": {
                        "number": 5,
                        "unit": "minutes"
                    }
                },
                {
                    "number": 3,
                    "step": "Add the garlic and cook for another minute.",
                    "ingredients": [
                        {
                            "id": 11215,
                            "name": "garlic",
                            "image": "garlic.png"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 4,
                    "step": "Add the pork to the pot and stir. Cook the pork until it's no longer pink.In a bowl mix the tomato paste with 2 cups of water and add it to the pot.",
                    "ingredients": [
                        {
                            "id": 11887,
                            "name": "tomato paste",
                            "image": "tomato-paste.jpg"
                        },
                        {
                            "id": 14412,
                            "name": "water",
                            "image": "water.png"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404783,
                            "name": "bowl",
                            "image": "bowl.jpg"
                        },
                        {
                            "id": 404752,
                            "name": "pot",
                            "image": "stock-pot.jpg"
                        }
                    ]
                },
                {
                    "number": 5,
                    "step": "Add the peas, the hot peppers and the bay leaves.",
                    "ingredients": [
                        {
                            "id": 2004,
                            "name": "bay leaves",
                            "image": "bay-leaves.jpg"
                        },
                        {
                            "id": 11304,
                            "name": "peas",
                            "image": "peas.jpg"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 6,
                    "step": "Add more water as needed, the water needs to fully cover the peas and pork.",
                    "ingredients": [
                        {
                            "id": 14412,
                            "name": "water",
                            "image": "water.png"
                        },
                        {
                            "id": 11304,
                            "name": "peas",
                            "image": "peas.jpg"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 7,
                    "step": "Add salt and pepper to taste. Cover the pot and let it cook for 30 minutes. After 30 minutes and the chopped dill and parsley. Stir well and serve.",
                    "ingredients": [
                        {
                            "id": 1102047,
                            "name": "salt and pepper",
                            "image": "salt-and-pepper.jpg"
                        },
                        {
                            "id": 11297,
                            "name": "parsley",
                            "image": "parsley.jpg"
                        },
                        {
                            "id": 2045,
                            "name": "dill",
                            "image": "dill.jpg"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404752,
                            "name": "pot",
                            "image": "stock-pot.jpg"
                        }
                    ],
                    "length": {
                        "number": 60,
                        "unit": "minutes"
                    }
                }
            ]
        }
    ]
},{
    "vegetarian": true,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": false,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": true,
    "sustainable": false,
    "weightWatcherSmartPoints": 3,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": false,
    "preparationMinutes": 15,
    "cookingMinutes": 20,
    "sourceUrl": "http://www.jocooks.com/healthy-eating/creamed-spinach/",
    "spoonacularSourceUrl": "https://spoonacular.com/creamed-spinach-559249",
    "aggregateLikes": 727,
    "spoonacularScore": 100.0,
    "healthScore": 100.0,
    "creditsText": "Jo Cooks",
    "sourceName": "Jo Cooks",
    "pricePerServing": 177.28,
    "extendedIngredients": [
        {
            "id": 20081,
            "aisle": "Baking",
            "image": "flour.png",
            "consitency": "solid",
            "name": "flour",
            "original": "1 tbsp flour",
            "originalString": "1 tbsp flour",
            "originalName": "flour",
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
            "id": 11215,
            "aisle": "Produce",
            "image": "garlic.jpg",
            "consitency": "solid",
            "name": "garlic",
            "original": "4 cloves garlic, minced",
            "originalString": "4 cloves garlic, minced",
            "originalName": "garlic, minced",
            "amount": 4.0,
            "unit": "cloves",
            "meta": [
                "minced"
            ],
            "metaInformation": [
                "minced"
            ],
            "measures": {
                "us": {
                    "amount": 4.0,
                    "unitShort": "cloves",
                    "unitLong": "cloves"
                },
                "metric": {
                    "amount": 4.0,
                    "unitShort": "cloves",
                    "unitLong": "cloves"
                }
            }
        },
        {
            "id": 1077,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "milk.png",
            "consitency": "liquid",
            "name": "milk",
            "original": "1/2 cup milk",
            "originalString": "1/2 cup milk",
            "originalName": "milk",
            "amount": 0.5,
            "unit": "cup",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 0.5,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 118.294,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 4053,
            "aisle": "Oil, Vinegar, Salad Dressing",
            "image": "olive-oil.jpg",
            "consitency": "liquid",
            "name": "olive oil",
            "original": "2 tbsp olive oil",
            "originalString": "2 tbsp olive oil",
            "originalName": "olive oil",
            "amount": 2.0,
            "unit": "tbsp",
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
            "id": 11282,
            "aisle": "Produce",
            "image": "brown-onion.png",
            "consitency": "solid",
            "name": "onion",
            "original": "1 onion, minced",
            "originalString": "1 onion, minced",
            "originalName": "onion, minced",
            "amount": 1.0,
            "unit": "",
            "meta": [
                "minced"
            ],
            "metaInformation": [
                "minced"
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
            "id": 1102047,
            "aisle": "Spices and Seasonings",
            "image": "salt-and-pepper.jpg",
            "consitency": "solid",
            "name": "salt and pepper",
            "original": "Salt and freshly ground black pepper",
            "originalString": "Salt and freshly ground black pepper",
            "originalName": "Salt and freshly ground black pepper",
            "amount": 4.0,
            "unit": "servings",
            "meta": [
                "black",
                "freshly ground"
            ],
            "metaInformation": [
                "black",
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
            "id": 10011457,
            "aisle": "Produce",
            "image": "spinach.jpg",
            "consitency": "solid",
            "name": "spinach",
            "original": "2 bunches spinach, stemmed and chopped",
            "originalString": "2 bunches spinach, stemmed and chopped",
            "originalName": "spinach, stemmed and chopped",
            "amount": 2.0,
            "unit": "bunches",
            "meta": [
                "stemmed",
                "chopped"
            ],
            "metaInformation": [
                "stemmed",
                "chopped"
            ],
            "measures": {
                "us": {
                    "amount": 2.0,
                    "unitShort": "bunches",
                    "unitLong": "bunches"
                },
                "metric": {
                    "amount": 2.0,
                    "unitShort": "bunches",
                    "unitLong": "bunches"
                }
            }
        }
    ],
    "id": 559249,
    "title": "Creamed Spinach",
    "readyInMinutes": 35,
    "servings": 4,
    "image": "https://spoonacular.com/recipeImages/559249-556x370.jpg",
    "imageType": "jpg",
    "cuisines": [],
    "dishTypes": [
        "side dish"
    ],
    "diets": [
        "lacto ovo vegetarian"
    ],
    "occasions": [],
    "winePairing": {},
    "instructions": "In a pot with boiling water add the cleaned spinach and leave it in there for no more than 30 seconds, you just want to scald it. Take out the spinach and drain the water. Add the spinach to a food processor and pulse it only a couple times, you don't want it to turn into a puree.In a medium pan over medium-high heat, heat the olive oil. Mix in the onions and garlic; cook for 2 minutes until soft. Add the flour and mix well. Add the milk, mix well and Add the chopped spinach and warm through. Add the salt and pepper. Mix well. Cook until liquid reduces by half, roughly 3 to 4 minutes.Serve with some freshly grated Parmesan cheese, if desired.",
    "analyzedInstructions": [
        {
            "name": "",
            "steps": [
                {
                    "number": 1,
                    "step": "In a pot with boiling water add the cleaned spinach and leave it in there for no more than 30 seconds, you just want to scald it. Take out the spinach and drain the water.",
                    "ingredients": [
                        {
                            "id": 10011457,
                            "name": "spinach",
                            "image": "spinach.jpg"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404752,
                            "name": "pot",
                            "image": "stock-pot.jpg"
                        }
                    ]
                },
                {
                    "number": 2,
                    "step": "Add the spinach to a food processor and pulse it only a couple times, you don't want it to turn into a puree.In a medium pan over medium-high heat, heat the olive oil.",
                    "ingredients": [
                        {
                            "id": 4053,
                            "name": "olive oil",
                            "image": "olive-oil.jpg"
                        },
                        {
                            "id": 10011457,
                            "name": "spinach",
                            "image": "spinach.jpg"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404771,
                            "name": "food processor",
                            "image": "food-processor.png"
                        },
                        {
                            "id": 404645,
                            "name": "frying pan",
                            "image": "pan.png"
                        }
                    ]
                },
                {
                    "number": 3,
                    "step": "Mix in the onions and garlic; cook for 2 minutes until soft.",
                    "ingredients": [
                        {
                            "id": 11215,
                            "name": "garlic",
                            "image": "garlic.png"
                        },
                        {
                            "id": 11282,
                            "name": "onion",
                            "image": "brown-onion.png"
                        }
                    ],
                    "equipment": [],
                    "length": {
                        "number": 2,
                        "unit": "minutes"
                    }
                },
                {
                    "number": 4,
                    "step": "Add the flour and mix well.",
                    "ingredients": [
                        {
                            "id": 20081,
                            "name": "all purpose flour",
                            "image": "flour.png"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 5,
                    "step": "Add the milk, mix well and",
                    "ingredients": [
                        {
                            "id": 1077,
                            "name": "milk",
                            "image": "milk.png"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 6,
                    "step": "Add the chopped spinach and warm through.",
                    "ingredients": [
                        {
                            "id": 10011457,
                            "name": "spinach",
                            "image": "spinach.jpg"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 7,
                    "step": "Add the salt and pepper.",
                    "ingredients": [
                        {
                            "id": 1102047,
                            "name": "salt and pepper",
                            "image": "salt-and-pepper.jpg"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 8,
                    "step": "Mix well. Cook until liquid reduces by half, roughly 3 to 4 minutes.",
                    "ingredients": [],
                    "equipment": [],
                    "length": {
                        "number": 3,
                        "unit": "minutes"
                    }
                },
                {
                    "number": 9,
                    "step": "Serve with some freshly grated Parmesan cheese, if desired.",
                    "ingredients": [],
                    "equipment": []
                }
            ]
        }
    ]
}]

    model.addDishToMenu(myJson); // PASS THE JSON to this functin, and load it in the searchView.js
   // console.log("test",dish1,dish2);
   // console.log(model.getFullMenu());

  const container = document.getElementsByClassName("page-content")[0];

    //TODO ask how we should do this?
    const view = document.querySelector("script[src = 'src/view/searchView.js']");
    const view1 = document.querySelector("script[src = 'src/view/instructionsView.js']");
    const view2 = document.querySelector("script[src = 'src/view/homeView.js']");
    const view3 = document.querySelector("script[src = 'src/view/detailsView.js']");
    const view4 = document.querySelector("script[src = 'src/view/overviewView.js']");
    const view5 = document.querySelector("script[src = 'src/view/selectDishView.js']");

    if (view != null || view != null) {
        new SearchView(container, model).render();
    }
    if (view1 != null) {
        new InstructionView(container, model).render();
    }
    if (view2 != null) {
        new HomeView(container).render();
    }
    if (view3 != null) {
        new DetailsView(container, model).render(1); // TODO not static
    }
    if (view4 != null) {
        new OverviewView(container, model).render();
    }
    if (view5 != null) {
        new SelectDishView(container, model).render();
    }
    //const view = new OverviewView(container, model);
    //const view = new HomeView(container);
    //const view = new SearchView(container,model);
    //view.render();

    /**
     * IMPORTANT: app.js is the only place where you are allowed to
     * query for elements in the whole document.
     * In other places you should limit the search only to the children
     * of the specific view you're working with (see exampleView.js).
     */


 // });
};