//DinnerModel class
class DinnerModel {

    constructor() {
        var self = this;

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
            total += ingredient.price * this.nGuest;
        });

        return total;

    }


    //Adds the passed dish to the menu. If the dish of that type already exists on the menu
    //it is removed from the menu and the new one added.
    addDishToMenu(dishObject) {
        //TODO Lab 0

        if (dishObject != null && dishObject != undefined) {


            if (this.menu.length == 0) {
                this.menu.push(dishObject);
            }
            else {
                let item = this.menu.find(function (item) {
                    return item.type == dishObject.type;
                });
                if (item != null && item != undefined) {
                    this.removeDishFromMenu(item);
                }
                this.menu.push(dishObject);
            }
        }
    }

    //Removes dish from menu
    removeDishFromMenu(dishObject) {
        //TODO Lab 0
        let dishObjectIndex = undefined;

        dishObjectIndex = this.menu.findIndex(
            function (dish) {
                return dish.id === dishObject.id;
            }
        );

        this.menu.pop(dishObjectIndex, 1);
    }

    //Returns all dishes of specific type (i.e. "starter", "main dish" or "dessert").
    //query argument, text, if passed only returns dishes that contain the query in name or one of the ingredients.
    //if you don't pass any query, all the dishes will be returned
    getAllDishes(type, query) {

        let promise = new Promise(function (resolve, reject) {
            let Baseurl = "http://localhost:8080/getDish/";
            let corsURL = "https://cors-anywhere.herokuapp.com/";
            let options;

            if (type == null && query == null || type == undefined && query == undefined) {
                options={};
            }
            else {
                console.log('the tpye issss', type);
                console.log('the query issss', query);
                options = {
                    "stype" : type,
                    "squery" : query
                }
            }
            fetch(Baseurl, {
                method: 'GET', 
                headers: {
                    options
                }
            })
                .then(response => response.json())
                .then(function (response) {
                    resolve(response.results);
                })
                .catch(console.error);
        });
        finishedLoading(promise);
        return promise;

    }

    //Returns a dish of specific ID
    getDish(id) {

        let promise = new Promise(function (resolve, reject) {
            let corsURL = "https://cors-anywhere.herokuapp.com/";
            var Baseurl = corsURL+"http://sunset.nada.kth.se:8080/iprog/group/15/recipes/" + id + "/information";
            fetch(Baseurl, {
                method: 'GET',
                headers: {
                    'X-Mashape-Key': key
                }
            })

                .then(response => response.json())
                .then(function (response) {
                    resolve(response);
                })
                .catch(console.error);

        });

        finishedLoading(promise);
        return promise;

    }

    /*
    getAllDishesfromAPI(callback) {
        let URL = "http://sunset.nada.kth.se:8080/iprog/group/15/recipes/search";
        let xhr = new XMLHttpRequest();
        xhr.open("GET", URL, true);
        xhr.setRequestHeader("X-Mashape-Key", key);
        xhr.send();
        xhr.onload = function () {
            if (xhr.status != 200) { // analyze HTTP status of the response
                callback(xhr.status, null);

            } else { // show the result
                callback(null, xhr.response);
            }
        };
        xhr.onerror = function () {
            callback(xhr.status, null);
        };
    }*/

}

async function finishedLoading(promise) {
    let loadingIndicator = document.getElementById("loader");
    loadingIndicator.style.display = "";
    await promise;
    loadingIndicator.style.display = "none";
}


/*var apiResult = [];
var config = require('./tsconfig.json');*/
var key = '3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767';

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
