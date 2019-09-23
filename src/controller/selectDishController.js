class SelectDishController {
    constructor(view, model) {
        this.model = model;
        this.view = view;
    }

     async eventListener(mainController) {
            let self = this;
            //TODO -> does not work on reload
            this.view.dishList.forEach(function (dish) {
                dish.addEventListener('click', function () {
                    self.model.setSelectedDish(dish.id);
                    mainController.displayView('detailsView');
                });
            });

            this.view.searchButton.addEventListener('click', async function(){
                await self.view.showDishes();

                self.view.dishList.forEach(function (dish) {
                    dish.addEventListener('click', function () {
                        self.model.setSelectedDish(dish.id);
                        mainController.displayView('detailsView');
                    });
                });
            })

    };

}