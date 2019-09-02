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
        //
        if (type == null && query == null || type == undefined && query == undefined) {
            let promise = new Promise(function (resolve, reject) {
                let Baseurl = "http://localhost:8080/getDish/";
                let corsURL = "https://cors-anywhere.herokuapp.com/";
                let options;

                fetch(Baseurl, {
                    method: 'GET', 
                    headers: {
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
        else{

            let promise = new Promise(function (resolve, reject) {
                let Baseurl = "http://localhost:8080/getDish/";
                let corsURL = "https://cors-anywhere.herokuapp.com/";
                let options;
                    console.log('the tpye issss', type);
                    console.log('the query issss', query);
    
                fetch(Baseurl, {
                    method: 'GET', 
                    headers: {
                        'stype': type,
                        'squery': query
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

    }

    //Returns a dish of specific ID
    getDish(id) {
        var dId = id;
        let promise = new Promise(function (resolve, reject) {
            let corsURL = "https://cors-anywhere.herokuapp.com/";
            // var Baseurl = corsURL+"http://sunset.nada.kth.se:8080/iprog/group/15/recipes/" + id + "/information";
            var Baseurl = "http://localhost:8080/getSingleDish/";

            fetch(Baseurl, {
                method: 'GET',
                headers: {
                    dishId: dId
                }
            })
                .then(response => response.json())
                .catch(function(err){
                    console.log(err);
                })
                .then(function (response) {
                    resolve(response);
                })
                .catch(function(err){
                    console.log(err);
                });
        }).catch(function(error){
            console.log(error)}
            )

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
