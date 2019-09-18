class HomeController {
    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

     eventListener(divId, model, mainController) {

         document.getElementById('startBtn').addEventListener('onclick',function() {
            mainController.currentDishId = null;
            console.log("click");
            mainController.displayView('selectDishView');
        });

    };
}