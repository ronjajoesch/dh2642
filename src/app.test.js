var assert = chai.assert;
var expect = chai.expect;

describe("DinnerPlanner App", () => {
  let model = null;
  let homeView = null;
  let searchView = null;
  let overviewView = null;

// added because we don't hand over ids but dish objects
  let dish1 = {
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
  };


  beforeEach(() => {
    model = new DinnerModel();
    homeView = new HomeView(document.querySelector("#page-content"));
    searchView = new SearchView(document.querySelector("#page-content"), model);
    overviewView = new OverviewView(document.querySelector("#page-content"), model);


  });

  describe("Home View", () => {
    it("has the start button", () => {
      homeView.render();
      const button = document.getElementById("startBtn");
      expect(button).to.not.be.a("null");
    });
  });


  describe("Search view", () => {
    beforeEach(() => {
      model.addDishToMenu(dish1);
      searchView.render();
    });

    it("has a sidebar", () => {
      const sidebar = document.getElementById("selectDishView");
      expect(sidebar).to.not.be.a("null");
    });

    it("has a dish search container", () => {
      //added because search container is in this view
      const selectDishView = new SelectDishView(document.querySelector("#page-content"), model);
      selectDishView.render();

      const dishSearch = document.getElementById("dishSearchView");
      expect(dishSearch).to.not.be.a("null");
    });

    it("displays a loading message", (done) => {
      const loader = document.getElementById("loader");
      expect(loader).to.not.be.a("null");
        done();
    }).timeout(3000);

    it("displays dishes", (done) => {
      const dishes = document.getElementById("dishItems");
      expect(dishes).to.not.be.a("null");
      done();
    }).timeout(3000);

    it("Has a number of guests value", () => {
      const valueHolders = document.getElementsByClassName("value-num-guests");
      expect(valueHolders.length).to.be.above(0);
      for (let v of valueHolders) {
        expect(v).to.not.be.a("null");
        expect(v.value).to.equal(""+model.getNumberOfGuests()); // changed because we have a drop down menu
      }
    });

    it("Has data on current dishes", () => {
      const valueHolders = document.getElementsByClassName("value-main-course-name");
      expect(valueHolders.length).to.be.above(0);
      for (let v of valueHolders) {
        expect(v).to.not.be.a("null");
        expect(v.innerHTML).to.equal("Breakfast Pizza");
      }
    });

    it("Displays the total price correctly", () => {
      const valueHolders = document.getElementsByClassName("value-total-price");
      expect(valueHolders.length).to.be.above(0);
      for (let v of valueHolders) {
        expect(v).to.not.be.a("null");
        expect(v.innerHTML).to.equal(""+model.getTotalMenuPrice());
      }
    });
  });



  describe("Confirmation page", () => {
    beforeEach(() => {
      model.addDishToMenu(dish1);
      overviewView.render();
    });

    it("exists", () => {
      const overviewContainer = document.getElementById("overviewView");
      expect(overviewView).to.not.be.a("null");
    });

    it("has a print button", () => {
      const printBtn = document.getElementById("toPrintBtn");
      expect(printBtn).to.not.be.a("null");
    });


    it("Has a number of guests value", () => {
      const valueHolders = document.getElementsByClassName("value-num-guests");
      expect(valueHolders.length).to.be.above(0);
      for (let v of valueHolders) {
        expect(v).to.not.be.a("null");
        expect(v.innerHTML).to.equal(""+model.getNumberOfGuests());
      }
    });

    it("Has data on current dishes", () => {
      const valueHolders = document.getElementsByClassName("value-main-course-name");
      expect(valueHolders.length).to.be.above(0);
      for (let v of valueHolders) {
        expect(v).to.not.be.a("null");
        expect(v.innerHTML).to.equal("Breakfast Pizza");
      }
    });

    it("Displays the total price correctly", () => {
      const valueHolders = document.getElementsByClassName("value-total-price");
      expect(valueHolders.length).to.be.above(0);
      for (let v of valueHolders) {
        expect(v).to.not.be.a("null");
        expect(v.innerHTML).to.equal(""+model.getTotalMenuPrice());
      }
    });
  });

  describe("Select dish View", () => {
    beforeEach(() => {
      model.addDishToMenu(dish1);
      searchView.render();
    });
    it("has a dish search container", () => {
      //added because search container is in this view
      const selectDishView = new SelectDishView(document.querySelector("#page-content"), model);
      selectDishView.render();

      const dishSearch = document.getElementById("dishSearchView");
      expect(dishSearch).to.not.be.a("null");
    });
  })
});