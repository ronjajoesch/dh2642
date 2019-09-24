class OverviewController {
    constructor(view, model) {
        this.model = model;
        this.view = view;
    }

    eventListener(mainController) {
        this.view.printButton.addEventListener('click', function () {
            mainController.displayView('instructionView');

        });

    };
}