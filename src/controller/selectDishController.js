class SelectDishController {
    constructor(view, model) {
        this.model = model;
        this.view = view;
    }

    eventListener(mainController) {
        console.log(this.view);
        let dish = this.view.container.querySelector(".dish");
            /*dish.addEventListener('click', function () {
            mainController.currentDishId = dish.id;
            mainController.displayView('overviewView');
        });*/


    };
}