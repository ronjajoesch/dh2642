window.onload = async function () {
    console.log("start");
    //We instantiate our model
    const model = new DinnerModel();
    //check if the localstorage is available
    if(localStorage.menuItems){
        var x = JSON.parse(localStorage.menuItems);
        var x2 = x.filter(function(e){return e});
        model.menu = x2;
    }
        const container = document.getElementsByClassName("page-content")[0];

    let mainController = {
        displayView: displayView
    };

    let searchView = 'searchView',
        homeView = 'homeView',
        instructionView = 'instructionView',
        detailsView = 'detailsView',
        overviewView = 'overviewView',
        selectDishView = 'selectDishView';

    let homeViewInstance = new HomeView(container);
    homeViewInstance.render(homeView);
    let searchViewInstance = new SearchView(container, model, mainController)
    searchViewInstance.render(searchView);
    let instructionViewInstance = new InstructionView(container, model, mainController)
    instructionViewInstance.render(instructionView);
    let detailsViewInstance = new DetailsView(container, model, mainController)
    detailsViewInstance.render(detailsView);
    let overviewViewInstance = new OverviewView(container, model, mainController)
    overviewViewInstance.render(overviewView);
    let selectDishViewInstance = new SelectDishView(container, model, mainController)
    await selectDishViewInstance.render(selectDishView);

    //include controllers
    let homeController = new HomeController(homeViewInstance, model);
    homeController.eventListener(mainController);

    let searchController = new SearchController(searchViewInstance, model);
    searchController.eventListener(mainController);

    let selectController = new SelectDishController(selectDishViewInstance, model);
    selectController.eventListener(mainController);

    let overviewController = new OverviewController(overviewViewInstance,model);
    overviewController.eventListener(mainController);

    let instructionController = new InstructionController(instructionViewInstance, model);
    instructionController.eventListener(mainController);

    let detailsController = new DetailsController(detailsViewInstance, model);
    detailsController.eventListener(mainController);

    let show = function (divId) {
        document.getElementById(divId).style.display = "";
    };

    let hide = function (divId) {
        document.getElementById(divId).style.display = "none";
    };

    function hideViews() {
        hide(homeView);
        hide(detailsView);
        hide(instructionView);
        hide(overviewView);
        hide(searchView);
        hide(selectDishView);
    }

    function displayView(viewName) {
        //first hide all views.
        hideViews();
        if(localStorage.menuItems && viewName != overviewView && viewName != instructionView){
            show(searchView);
            show(selectDishView);
            //show(overviewView);
            viewName = '';
        }
        if (viewName === detailsView) {
            show(searchView);
            show(detailsView);
        }
        if (viewName === homeView) {
            show(homeView);
        }
        if (viewName === instructionView) {
            show(instructionView);
        }
        if (viewName === overviewView) {
            show(overviewView);
        }
        if (viewName === searchView) {
            show(searchView);
        }
        if (viewName === selectDishView) {
            show(searchView);
            show(selectDishView);
        }
    }

    displayView(homeView);
    //displayView(selectDishView);
    //displayView(overviewView);
    //displayView(instructionView);
    //displayView(detailsView);
};