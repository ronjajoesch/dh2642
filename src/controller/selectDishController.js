class SelectDishController {
    constructor(view, model) {
        this.model = model;
        this.view = view;
    }

    eventListener(mainController) {
        let self = this;

        this.addDishesListener(mainController);

        this.view.searchButton.addEventListener('click', async function () {
            await self.view.showDishes();
            self.addDishesListener(mainController);

        })

    };

    addDishesListener(mainController) {
        let self = this;
        this.view.dishList.forEach(function (dish) {
            //picture & figcaption
            dish.firstChild.addEventListener('click', function () {
                self.model.setSelectedDish(dish.id);
                mainController.displayView('detailsView');

            });
            //add button
            dish.lastChild.addEventListener('click', function () {
                self.model.getDish(dish.id).then((dishObject) => {
                    self.model.addDishToMenu(dishObject);
                    //handle local Storage HERE
                    if (!localStorage.menuItems) {
                        var a = [];
                        a.push(JSON.parse(localStorage.getItem('menuItems')));
                        localStorage.setItem('menuItems', JSON.stringify(a));
                    }
                    if (localStorage.menuItems) {
                        var a = [];

                        self.model.menu.forEach(function (el) {
                            a.push(el);
                        })
                        console.log(a);
                        localStorage.setItem('menuItems', JSON.stringify(a));
                    }
                    //
                });
            });
        });
    }

}