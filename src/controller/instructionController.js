class InstructionController {
    constructor(view, model) {
        this.model = model;
        this.view = view;
    }

    eventListener(mainController) {
        this.view.printRecieptButton.addEventListener('click', function () {
            console.log('thissssssss');
            // mainController.currentDishId = null;
            // mainController.displayView('instructionsView');
        });
    };
}