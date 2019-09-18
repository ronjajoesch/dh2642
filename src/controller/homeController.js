class HomeController {
    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

     eventListener(view, model, mainController) {

        view.container.on('click', '#startBtn', function() {
            mainController.currentDishId = null;
            mainController.displayView('selectDishView');
        });

    };
}