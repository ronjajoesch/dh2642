
class Observable {
    constructor() {
        this._observers = [];
    }

    addObserver(observer) {
        this._observers.push(observer);
    }

    //TODO test
    removeObserver(observer) {
        let i;
        this._observers.filter(function (value, index) {
            if (observer === value) {
                i = index;
            }
        });
        this._observers.splice(i, 1)
    }

    notifyObservers(changeDetails) {
        let self = this;
        this._observers.forEach(function (observer) {
            observer.update(self, changeDetails);
        })
    }
}


//DinnerModel class
class DinnerModel extends Observable {
    constructor() {
        super();
        var self = this;

        self.nGuest = 1;
        self.menu = [];
        self.selectedDish=null;
    }

    setSelectedDish(id){
        this.selectedDish=id;
        this.notifyObservers({type: "selectedDish", index: id});
    }

    setNumberOfGuests(num) {
        if (num > 0) {
            this.nGuest = num;
        }
        this.notifyObservers({type: "nGuest", index: this.nGuest});
    }

    getNumberOfGuests() {
        return this.nGuest;
    }

    //Returns the dish that is on the menu for selected type
    getSelectedDish(type) {
        return this.getAllDishes(type);
    }

    //Returns all the dishes on the menu.
    getFullMenu() {
        return this.menu;
    }

    //Returns all ingredients for all the dishes on the menu.
    getAllIngredients() {
        this.menu.map(function (dish) {
            return dish.ingredients;
        })
    }

    //Returns the total price of the menu (all the ingredients multiplied by number of guests).
    getTotalMenuPrice() {
        let total = 0;
        let self = this;
        this.menu.map(function (dish) {
            total += dish.pricePerServing*self.nGuest;
        });
        return total;
    }

    addDishToMenu(dishObject) {
        //Adds the passed dish to the menu. If the dish of that type already exists on the menu
        //it is removed from the menu and the new one added.

        if (dishObject != null && dishObject != undefined) {
            if (this.menu.length == 0) {
                this.menu.push(dishObject);
            } else {
                let item = this.menu.find(function (item) {
                    return item.dishTypes == dishObject.dishTypes;  //TODO check what types there are and maybe adjust code
                });
                if (item != null && item != undefined) {
                    this.removeDishFromMenu(item);
                }
                this.menu.push(dishObject);
            }

        }
        this.notifyObservers({type:"menu", index:this.menu});
    }

    //Removes dish from menu
    removeDishFromMenu(dishObject) {

        let dishObjectIndex = undefined;

        dishObjectIndex = this.menu.findIndex(
            function (dish) {
                return dish.id === dishObject.id;
            }
        );

        this.menu.pop(dishObjectIndex, 1);
        this.notifyObservers({type:"menu", index:this.menu});
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
                    headers: {}
                })
                    .then(response => response.json())
                    .then(function (response) {
                        resolve(response.results);
                    })
                    .catch(console.error);
            });
            return promise;
        } else {

            let promise = new Promise(function (resolve, reject) {
                let Baseurl = "http://localhost:8080/getDish/";
                let corsURL = "https://cors-anywhere.herokuapp.com/";
                let options;

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
            return promise;
        }

    }

    getDish(id) {
        var dId = id;
        let corsURL = "https://cors-anywhere.herokuapp.com/";
        var Baseurl = "http://localhost:8080/getSingleDish/";

        let promise =
            fetch(Baseurl, {
                method: 'GET',
                headers: {
                    dishId: dId
                }
            })
                .then(response => response.json())
                .then(function (response) {
                    return (response);
                })
                .catch(function (err) {
                    console.log(err);
                }).finally();

        return promise;
    }
}

// Deepfreeze
// https://github.com/substack/deep-freeze/blob/master/index.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
function

deepFreeze(o) {
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

