class SelectDishController {
    constructor(view, model) {
        this.model = model;
        this.view = view;
    }

    eventListener(mainController) {
            this.view.dishList.forEach(function (dish) {
                addEventListener('click', function () {
                    mainController.currentDishId = dish.id;
                    mainController.displayView('overviewView');
                });
            });



    };
}