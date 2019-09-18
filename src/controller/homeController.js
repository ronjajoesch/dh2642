class HomeController {
    constructor(view, model) {
        this.model = model;
        this.view = view;
    }

     eventListener(mainController) {
         this.view.startBtn.addEventListener('click',function() {
            mainController.currentDishId = null;
            mainController.displayView('selectDishView');
        });


    };
}