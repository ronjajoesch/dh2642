class SelectDishController {
    constructor(view, model) {
        this.model = model;
        this.view = view;
    }

    eventListener(mainController) {
            let self = this;
            this.view.dishList.forEach(function (dish) {
                dish.addEventListener('click', function () {
                    mainController.currentDishId = dish.id;
                    self.model.setSelectedDish(dish.id);
                    mainController.displayView('detailsView');
                });
            });



    };
}