class SearchController {
    constructor(view, model) {
        this.model = model;
        this.view = view;
    }

    eventListener(mainController) {
        this.view.confirmButton.addEventListener('click', function () {
            mainController.displayView('overviewView');
        });


    };
}