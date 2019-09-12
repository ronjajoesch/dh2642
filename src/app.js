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
        "pricePerServing": 438.0,
        "id": 3,
        "title": "Carrots, Cauliflower And Anchovies",
        "readyInMinutes": 45,
        "servings": 1,
        "image": "https://spoonacular.com/recipeImages/3-556x370.jpg",
        "imageType": "jpg",
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
                        "unitShort": "gr",
                        "unitLong": "gram"
                    },
                    "metric": {
                        "amount": 0.8,
                        "unitShort": "gr",
                        "unitLong": "gram"
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
        "cuisines": [],},{

    "pricePerServing": 195.59,
    "id": 559251,
    "title": "Breakfast Pizza",
    "readyInMinutes": 25,
    "servings": 6,
    "image": "https://spoonacular.com/recipeImages/559251-556x370.jpg",
    "imageType": "jpg",},{

    "pricePerServing": 217.74,
    "id": 559250,
    "title": "Pork Loin and Pea Stew",
    "readyInMinutes": 65,
    "servings": 6,
    "image": "https://spoonacular.com/recipeImages/559250-556x370.jpg",
    "imageType": "jpg",
  },{
 
    "pricePerServing": 177.28,
    "id": 559249,
    "title": "Creamed Spinach",
    "readyInMinutes": 35,
    "servings": 4,
    "image": "https://spoonacular.com/recipeImages/559249-556x370.jpg",
    "imageType": "jpg",
    "cuisines": [],}]

    model.customMenu = myJson;
    model.addDishToMenu(myJson[0]); // PASS THE JSON to this functin, and load it in the searchView.js
    model.addDishToMenu(myJson[1]); // PASS THE JSON to this functin, and load it in the searchView.js
    model.addDishToMenu(myJson[2]); // PASS THE JSON to this functin, and load it in the searchView.js

    console.log("json:", myJson[0]);
    console.log("json:", myJson[1]);
    console.log(model.menu);
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