class DetailsController {
    constructor(view, model) {
        this.model = model;
        this.view = view;
    }

    eventListener(mainController) {
        this.view.detailsViewBackButton.addEventListener('click', function () {
            mainController.displayView('selectDishView');
        });

    };
}