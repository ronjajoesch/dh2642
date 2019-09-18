class HomeController {
    constructor(view, model) {
        this.model = model;
        this.view = view;
    }

     eventListener(view,mainController) {
        console.log(this.view.startBtn);
        view.startBtn.addEventListener('click',function() {
            mainController.currentDishId = null;
            mainController.displayView('selectDishView');
        });


    };
}