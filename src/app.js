window.onload = function () {
    console.log("start");
    //We instantiate our model
    const model = new DinnerModel();

    const container = document.getElementsByClassName("page-content")[0];

    var mainController = {
        currentDishId: null,
        displayView: displayView
    };

    let searchView = 'searchView',
        homeView = 'homeView',
        instructionView = 'instructionView',
        detailsView = 'detailsView',
        overviewView = 'overviewView',
        selectDishView = 'selectDishView';

    let homeViewInstance = new HomeView(container).render(homeView);
    new SearchView(container, model, mainController).render(searchView);
    new InstructionView(container, model, mainController).render(instructionView);
    new DetailsView(container, model, mainController).render(null, detailsView); // TODO pass actual dishID
    new OverviewView(container, model, mainController).render(overviewView);
    new SelectDishView(container, model, mainController).render(selectDishView);

    //include controllers
    //new HomeController(model, container).eventListener(homeViewInstance,model,mainController);

    let show = function (divId) {
        document.getElementById(divId).style.display = "block";
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