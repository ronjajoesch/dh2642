//DinnerModel class
class DinnerModel {

    constructor() {
    var self = this;
    if(apiResult.length < 1){

        this.getAllDishesfromAPI(function(err,result){
            if(err){
                console.log(err);
            }
            else{
                console.log(result);
                if(apiResult.length < 1){
                    self.dishes = result;
                    apiResult = JSON.parse(self.dishes).results;
                }
            }
          });
      }

      self.nGuest = 0;
      self.menu = [];
    }

    setNumberOfGuests(num) {
        //TODO Lab 0
        if (num > 0) {
            this.nGuest = num;
        }
    }

    getNumberOfGuests() {
        //TODO Lab 0
        return this.nGuest;
    }

    //Returns the dish that is on the menu for selected type
    getSelectedDish(type) {
        //TODO Lab 0
        return this.getAllDishes();
    }

    //Returns all the dishes on the menu.
    getFullMenu() {
        //TODO Lab 0
        return this.menu;
    }

    //Returns all ingredients for all the dishes on the menu.
    getAllIngredients() {
        //TODO Lab 0
        this.menu.map(function (dish) {
            return dish.ingredients;
        })
    }

    //Returns the total price of the menu (all the ingredients multiplied by number of guests).
    getTotalMenuPrice() {
        //TODO Lab 0
        let total = 0;

        let ingredients;
        this.menu.map(function (dish) {
            ingredients = dish.ingredients;
        });

        ingredients.map(function (ingredient) {
            total += ingredient.price*this.nGuest;
        });

        return total;

    }


    //Adds the passed dish to the menu. If the dish of that type already exists on the menu
    //it is removed from the menu and the new one added.
    addDishToMenu(id) {
        //TODO Lab 0

        if (id != null && id != undefined) {

            let dishObject = this.getDish(id);

            if (this.menu.length == 0) {
                this.menu.push(dishObject);
            }
            else {
                let item = this.menu.find(function (item) {
                    return item.type == dishObject.type;
                });
                if (item != null && item != undefined) {
                    this.removeDishFromMenu(item.id);
                }
                this.menu.push(dishObject);
            }
        }
    }

    //Removes dish from menu
    removeDishFromMenu(id) {
        //TODO Lab 0
        let dishObjectIndex = undefined;

        dishObjectIndex = this.menu.findIndex(
            function (dish) {
                return dish.id === id;
            }
        );

        this.menu.pop(dishObjectIndex, 1);
    }

    //Returns all dishes of specific type (i.e. "starter", "main dish" or "dessert").
    //query argument, text, if passed only returns dishes that contain the query in name or one of the ingredients.
    //if you don't pass any query, all the dishes will be returned
    getAllDishes(type, query) {
        if (type == null && query == null || type == undefined && query == undefined) {
            return this.dishes;
        }
        return this.dishes.filter(function (dish) {
            let found = true;
            if (query) {
                found = false;
                dish.ingredients.forEach(function (ingredient) {
                    if (ingredient.name.indexOf(query) !== -1) {
                        found = true;
                    }
                });
                if (dish.name.indexOf(query) !== -1) {
                    found = true;
                    return dish.name;
                }
            }
            return dish.type === type && found;
        });
    }

    //Returns a dish of specific ID
    getDish(id) {

        return new Promise(function (resolve, reject) {
            var Baseurl = "http://sunset.nada.kth.se:8080/iprog/group/15/recipes/" + id + "/information";
            fetch(Baseurl, {
                method: 'GET',
                headers: {
                    'X-Mashape-Key': '3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767'
                }
            })

                //.then(handleHTTPError)
                .then(response => response.json())
                .then(function (response) {
                    resolve(response);
                    console.log(response);
                })
                .catch(console.error);

        });

    }

    getAllDishesfromAPI(callback){
           let URL = "http://sunset.nada.kth.se:8080/iprog/group/15/recipes/search";
           let xhr = new XMLHttpRequest();
           xhr.open("GET", URL, true);
           xhr.setRequestHeader("X-Mashape-Key", "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767");
           xhr.send();
           xhr.onload = function() {
               if (xhr.status != 200) { // analyze HTTP status of the response
                callback(xhr.status,null);
    
               } else { // show the result
                  // this.dishes = xhr.response;
                  callback(null,xhr.response);
               }
             };
             xhr.onerror = function() {
             callback(xhr.status,null);
             };
    }
}

var apiResult = [];

// Deepfreeze
// https://github.com/substack/deep-freeze/blob/master/index.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
function deepFreeze(o) {
    Object.freeze(o);
    Object.getOwnPropertyNames(o).forEach(function (prop) {
        if (o.hasOwnProperty(prop)
            && o[prop] !== null
            && (typeof o[prop] === "object" || typeof o[prop] === "function")
            && !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
        }
    });
}

//deepFreeze(dishesConst);

