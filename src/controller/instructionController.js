class InstructionController {
    constructor(view, model) {
        this.model = model;
        this.view = view;
    }


    eventListener(mainController) {
        this.view.backButton.addEventListener('click', function () {
            mainController.displayView('selectDishView');

        });

    };
}