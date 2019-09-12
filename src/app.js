window.onload = function () {
  console.log("start");
  //We instantiate our model
  const model = new DinnerModel();
  model.setNumberOfGuests(4); //TODO change when dynamic


 //TODO remove later -> dynamic
 
 // model.getDish(1).then((dish1) =>{
    //model.addDishToMenu(dish1);
    const myJson = [{
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
        "weightWatcherSmartPoints": 1,
        "gaps": "no",
        "lowFodmap": false,
        "ketogenic": false,
        "whole30": false,
        "sourceUrl": "http://www.thekitchn.com/other-two-veg-recipes-notes-85779",
        "spoonacularSourceUrl": "https://spoonacular.com/anchovies-appetizer-with-breadcrumbs-scallions-2",
        "aggregateLikes": 0,
        "spoonacularScore": 32.0,
        "healthScore": 4.0,
        "creditsText": "bla5@bla.com",
        "sourceName": "The Kitchn",
        "pricePerServing": 82.06,
        "extendedIngredients": [
            {
                "id": 15001,
                "aisle": "Seafood",
                "image": "fresh-anchovies.jpg",
                "consitency": "solid",
                "name": "anchovies",
                "original": "6 oz marinated anchovies",
                "originalString": "6 oz marinated anchovies",
                "originalName": "marinated anchovies",
                "amount": 6.0,
                "unit": "oz",
                "meta": [],
                "metaInformation": [],
                "measures": {
                    "us": {
                        "amount": 6.0,
                        "unitShort": "oz",
                        "unitLong": "ounces"
                    },
                    "metric": {
                        "amount": 170.097,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 18064,
                "aisle": "Bakery/Bread",
                "image": "white-bread.jpg",
                "consitency": "solid",
                "name": "bread",
                "original": "2 oz day-old bread",
                "originalString": "2 oz day-old bread",
                "originalName": "day-old bread",
                "amount": 2.0,
                "unit": "oz",
                "meta": [],
                "metaInformation": [],
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
                "original": "1/2 garlic clove",
                "originalString": "1/2 garlic clove",
                "originalName": "garlic clove",
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
                "id": 4053,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "olive-oil.jpg",
                "consitency": "liquid",
                "name": "olive oil",
                "original": "2 tsps olive oil plus 1/4 for drizzling",
                "originalString": "2 tsps olive oil plus 1/4 for drizzling",
                "originalName": "olive oil plus 1/4 for drizzling",
                "amount": 2.0,
                "unit": "tsps",
                "meta": [
                    "for drizzling"
                ],
                "metaInformation": [
                    "for drizzling"
                ],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 2.0,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 11291,
                "aisle": "Produce",
                "image": "spring-onions.jpg",
                "consitency": "solid",
                "name": "scallions",
                "original": "2 whole scallions, julienned",
                "originalString": "2 whole scallions, julienned",
                "originalName": "whole scallions, julienned",
                "amount": 2.0,
                "unit": "",
                "meta": [
                    "whole",
                    "julienned"
                ],
                "metaInformation": [
                    "whole",
                    "julienned"
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
            }
        ],
        "id": 2,
        "title": "Anchovies Appetizer With Breadcrumbs & Scallions",
        "readyInMinutes": 15,
        "servings": 8,
        "image": "https://spoonacular.com/recipeImages/2-556x370.jpg",
        "imageType": "jpg",
        "cuisines": [],
        "dishTypes": [
            "antipasti",
            "starter",
            "snack",
            "appetizer",
            "antipasto",
            "hor d'oeuvre"
        ],
        "diets": [
            "dairy free",
            "pescatarian"
        ],
        "occasions": [],
        "winePairing": {},
        "instructions": "<ol><li>Preheat oven to 400 F.</li><li>Remove crusts from bread and cut into bite-sized croutons.</li><li>Rub garlic in bottom of a small oven-safe skillet, add 2 teaspoons olive oil.</li><li> Rub croutons in oil until they absorb it all. </li><li>Bake for 7-10 minutes or until deep golden brown. </li><li>Remove and set aside.</li><li>Slice anchovies in thirds. </li><li>Toss with scallions. </li><li>Divide into small cups, ramekins or bowls between 4 and 8 ounces and nestle in the croutons.</li></ol>",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Preheat oven to 400 F.",
                        "ingredients": [],
                        "equipment": [
                            {
                                "id": 404784,
                                "name": "oven",
                                "image": "oven.jpg",
                                "temperature": {
                                    "number": 400.0,
                                    "unit": "Fahrenheit"
                                }
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "Remove crusts from bread and cut into bite-sized croutons.Rub garlic in bottom of a small oven-safe skillet, add 2 teaspoons olive oil. Rub croutons in oil until they absorb it all.",
                        "ingredients": [
                            {
                                "id": 4053,
                                "name": "olive oil",
                                "image": "olive-oil.jpg"
                            },
                            {
                                "id": 11215,
                                "name": "garlic",
                                "image": "garlic.png"
                            },
                            {
                                "id": 18064,
                                "name": "bread",
                                "image": "white-bread.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "image": "pan.png"
                            },
                            {
                                "id": 404784,
                                "name": "oven",
                                "image": "oven.jpg"
                            }
                        ]
                    },
                    {
                        "number": 3,
                        "step": "Bake for 7-10 minutes or until deep golden brown.",
                        "ingredients": [],
                        "equipment": [],
                        "length": {
                            "number": 10,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 4,
                        "step": "Remove and set aside.Slice anchovies in thirds. Toss with scallions. Divide into small cups, ramekins or bowls between 4 and 8 ounces and nestle in the croutons.",
                        "ingredients": [
                            {
                                "id": 15001,
                                "name": "anchovies",
                                "image": "anchovies.jpg"
                            },
                            {
                                "id": 11291,
                                "name": "green onions",
                                "image": "spring-onions.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404781,
                                "name": "ramekin",
                                "image": "ramekin.jpg"
                            },
                            {
                                "id": 404783,
                                "name": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "weightWatcherSmartPoints": 6,
        "gaps": "no",
        "lowFodmap": false,
        "ketogenic": false,
        "whole30": false,
        "preparationMinutes": 25,
        "cookingMinutes": 35,
        "sourceUrl": "http://www.epicurious.com/recipes/food/views/Caesar-Salad-with-Sourdough-Croutons-361234",
        "spoonacularSourceUrl": "https://spoonacular.com/caesar-salad-with-sourdough-croutons-670",
        "aggregateLikes": 0,
        "spoonacularScore": 76.0,
        "healthScore": 52.0,
        "creditsText": "Epicurious",
        "sourceName": "Epicurious",
        "pricePerServing": 187.75,
        "extendedIngredients": [
            {
                "id": 15001,
                "aisle": "Seafood",
                "image": "fresh-anchovies.jpg",
                "consitency": "solid",
                "name": "anchovy",
                "original": "4 anchovy fillets, finely chopped",
                "originalString": "4 anchovy fillets, finely chopped",
                "originalName": "anchovy fillets, finely chopped",
                "amount": 4.0,
                "unit": "fillet",
                "meta": [
                    "finely chopped"
                ],
                "metaInformation": [
                    "finely chopped"
                ],
                "measures": {
                    "us": {
                        "amount": 4.0,
                        "unitShort": "fillet",
                        "unitLong": "fillets"
                    },
                    "metric": {
                        "amount": 4.0,
                        "unitShort": "fillet",
                        "unitLong": "fillets"
                    }
                }
            },
            {
                "id": 18242,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "croutons.png",
                "consitency": "solid",
                "name": "croutons",
                "original": "1 1/2 cups sourdough croutons",
                "originalString": "1 1/2 cups sourdough croutons",
                "originalName": "sourdough croutons",
                "amount": 1.5,
                "unit": "cups",
                "meta": [],
                "metaInformation": [],
                "measures": {
                    "us": {
                        "amount": 1.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 354.882,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 1002046,
                "aisle": "Condiments",
                "image": "dijon-mustard.jpg",
                "consitency": "liquid",
                "name": "dijon mustard",
                "original": "1 tablespoon Dijon mustard",
                "originalString": "1 tablespoon Dijon mustard",
                "originalName": "Dijon mustard",
                "amount": 1.0,
                "unit": "tablespoon",
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
                "name": "garlic cloves",
                "original": "2 garlic cloves, minced",
                "originalString": "2 garlic cloves, minced",
                "originalName": "garlic cloves, minced",
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
                "id": 9152,
                "aisle": "Produce",
                "image": "lemon-juice.jpg",
                "consitency": "liquid",
                "name": "lemon juice",
                "original": "1 tablespoon fresh lemon juice",
                "originalString": "1 tablespoon fresh lemon juice",
                "originalName": "fresh lemon juice",
                "amount": 1.0,
                "unit": "tablespoon",
                "meta": [
                    "fresh"
                ],
                "metaInformation": [
                    "fresh"
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
                "original": "1/3 cup extra-virgin olive oil",
                "originalString": "1/3 cup extra-virgin olive oil",
                "originalName": "extra-virgin olive oil",
                "amount": 0.3333333333333333,
                "unit": "cup",
                "meta": [
                    "extra-virgin"
                ],
                "metaInformation": [
                    "extra-virgin"
                ],
                "measures": {
                    "us": {
                        "amount": 0.333,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 78.863,
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
                "original": "3/4 cup grated Parmesan cheese, divided",
                "originalString": "3/4 cup grated Parmesan cheese, divided",
                "originalName": "grated Parmesan cheese, divided",
                "amount": 0.75,
                "unit": "cup",
                "meta": [
                    "divided",
                    "grated"
                ],
                "metaInformation": [
                    "divided",
                    "grated"
                ],
                "measures": {
                    "us": {
                        "amount": 0.75,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 177.441,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 11297,
                "aisle": "Produce",
                "image": "parsley.jpg",
                "consitency": "solid",
                "name": "parsley",
                "original": "Chopped fresh Italian parsley",
                "originalString": "Chopped fresh Italian parsley",
                "originalName": "Chopped fresh Italian parsley",
                "amount": 6.0,
                "unit": "servings",
                "meta": [
                    "fresh",
                    "italian",
                    "chopped"
                ],
                "metaInformation": [
                    "fresh",
                    "italian",
                    "chopped"
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
                "id": 1022068,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "red-wine-vinegar.jpg",
                "consitency": "liquid",
                "name": "red wine vinegar",
                "original": "1 tablespoon red wine vinegar",
                "originalString": "1 tablespoon red wine vinegar",
                "originalName": "red wine vinegar",
                "amount": 1.0,
                "unit": "tablespoon",
                "meta": [
                    "red"
                ],
                "metaInformation": [
                    "red"
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
                "id": 10011251,
                "aisle": "Produce",
                "image": "romaine.jpg",
                "consitency": "solid",
                "name": "romaine hearts",
                "original": "2 large hearts of romaine lettuce, torn into bite-size pieces (about 12 cups)",
                "originalString": "2 large hearts of romaine lettuce, torn into bite-size pieces (about 12 cups)",
                "originalName": "large hearts of romaine lettuce, torn into bite-size pieces (about",
                "amount": 12.0,
                "unit": "cups",
                "meta": [],
                "metaInformation": [],
                "measures": {
                    "us": {
                        "amount": 12.0,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 2.839,
                        "unitShort": "l",
                        "unitLong": "liters"
                    }
                }
            },
            {
                "id": 6971,
                "aisle": "Condiments",
                "image": "dark-sauce.jpg",
                "consitency": "liquid",
                "name": "worcestershire sauce",
                "original": "11/2 teaspoons Worcestershire sauce",
                "originalString": "11/2 teaspoons Worcestershire sauce",
                "originalName": "Worcestershire sauce",
                "amount": 5.5,
                "unit": "teaspoons",
                "meta": [],
                "metaInformation": [],
                "measures": {
                    "us": {
                        "amount": 5.5,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 5.5,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            }
        ],
        "id": 670,
        "title": "Caesar Salad with Sourdough Croutons",
        "readyInMinutes": 60,
        "servings": 6,
        "image": "https://spoonacular.com/recipeImages/670-556x370.jpg",
        "imageType": "jpg",
        "cuisines": [
            "american"
        ],
        "dishTypes": [
            "salad"
        ],
        "diets": [
            "gluten free",
            "pescatarian"
        ],
        "occasions": [],
        "winePairing": {
            "pairedWines": [],
            "pairingText": "",
            "productMatches": []
        },
        "instructions": "Preparation                                                        Whisk first 6 ingredients in small bowl.Gradually whisk in oil, then 1/2 cup cheese.                                                                Toss lettuce, croutons, 1/4 cup cheese,and dressing in bowl. Sprinkle with parsleyand season to taste with pepper.                                                                         Per serving: 258 calories, 19 g fat, 3 g fiber                            Nutritional analysis provided by                                        Bon Appétit",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Whisk first 6 ingredients in small bowl.Gradually whisk in oil, then 1/2 cup cheese.",
                        "ingredients": [],
                        "equipment": [
                            {
                                "id": 404661,
                                "name": "whisk",
                                "image": "whisk.png"
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
                        "step": "Toss lettuce, croutons, 1/4 cup cheese,and dressing in bowl. Sprinkle with parsleyand season to taste with pepper.",
                        "ingredients": [
                            {
                                "id": 18242,
                                "name": "croutons",
                                "image": "croutons.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    },
                    {
                        "number": 3,
                        "step": "Per serving: 258 calories, 19 g fat, 3 g fiber",
                        "ingredients": [],
                        "equipment": []
                    },
                    {
                        "number": 4,
                        "step": "Bon Appétit",
                        "ingredients": [],
                        "equipment": []
                    }
                ]
            }
        ]
    }]

    /*model.customMenu = myJson;
    model.addDishToMenu(myJson[0]); // PASS THE JSON to this functin, and load it in the searchView.js
    model.addDishToMenu(myJson[1]); // PASS THE JSON to this functin, and load it in the searchView.js
    model.addDishToMenu(myJson[2]); // PASS THE JSON to this functin, and load it in the searchView.js
*/

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
        new DetailsView(container, model).render(model.getFullMenu()[0].id); // TODO not static
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