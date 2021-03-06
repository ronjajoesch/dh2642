class Observable {
    constructor() {
        this._observers = [];
    }

    addObserver(observer) {
        this._observers.push(observer);
    }

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
export default class DinnerModel extends Observable {
    constructor() {
        super();
        var self = this;

        self.nGuest = 1;
        self.menu = [];
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

    getFullMenu() {
        
        //case first time opening the website. we create localStorage.
        if(!localStorage.menuItems){
            localStorage.setItem('menuItems',JSON.stringify(this.menu));
            return this.menu;
        }
        //case localStorage exist, but model is empty. in this case the user has added something to localStorage in the past.
        else if(localStorage.menuItems && this.menu.length == 0){
            var localStorageValue = localStorage.getItem('menuItems');
            this.menu = JSON.parse(localStorageValue);
            return this.menu;
        }
        //regular case, when both model and local storage are present.
        else if(localStorage.menuItems){
            localStorage.setItem('menuItems',JSON.stringify(this.menu));
            var localStorageValue = localStorage.getItem('menuItems');
            this.menu = JSON.parse(localStorageValue);
            return this.menu;
        }
        return this.menu;
    }

    //Returns all ingredients for all the dishes on the menu.
    getAllIngredients() {
        this.menu.map(function (dish) {
            return dish.ingredients;
        })
    }

    getDishPriceForNGuests(dishObject) {
        return Math.round((dishObject.pricePerServing * this.getNumberOfGuests()) * 100) / 100;
    }

    //Returns the total price of the menu (all the ingredients multiplied by number of guests).
    getTotalMenuPrice() {
        let total = 0;
        let self = this;
        this.menu.map(function (dish) {
            total += dish.pricePerServing * self.nGuest;
        });
        return Math.round(total * 100) / 100;
    }

    addDishToMenu(dishObject) {
        //Adds the passed dish to the menu. If dish of that type already exists in menu
        //it is removed from the menu and the new dish is added

        if (dishObject != null) {
            if (this.menu.length === 0) {
                this.menu.push(dishObject);
            } else {
                let item = this.menu.find(function (item) {
                    return item.id === dishObject.id;
                });
                if (item == null) {
                    this.menu.push(dishObject);
                }
            }

        }
        this.notifyObservers({type: "menu", index: this.menu});
    }

    //Removes dish from menu
    removeDishFromMenu(item) {
        this.menu = this.menu.filter(element => element.id !== item.id);

        this.notifyObservers({type: "menu", index: this.menu});
    }

}

