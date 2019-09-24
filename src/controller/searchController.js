class SearchController {
    constructor(view, model) {
        this.model = model;
        this.view = view;
    }

    eventListener(mainController) {
        this.view.confirmButton.addEventListener('click', function () {
            mainController.displayView('overviewView');
        });

        let self = this;
        this.view.selectGuests.addEventListener('change', function () {
            let value = self.view.selectGuests.value;
            self.model.setNumberOfGuests(value);

        })
    };
}