window.onload = function () {
    console.log("start");
    //We instantiate our model
    const model = new DinnerModel();

    const container = document.getElementsByClassName("page-content")[0];

    var MainController = {
        currentDishId: null,
        displayView: displayView
    };

    let searchView = 'searchView',
        homeView = "homeView",
        instructionView = 'instructionView',
        detailsView = 'detailsView',
        overviewView = 'overviewView',
        selectDishView = 'selectDishView';

    new HomeView(container).render(homeView);
    new SearchView(container, model, MainController).render(searchView);
    new InstructionView(container, model, MainController).render(instructionView);
    new DetailsView(container, model, MainController).render(null, detailsView); // TODO pass actual dishID
    new OverviewView(container, model, MainController).render(overviewView);
    new SelectDishView(container, model, MainController).render(selectDishView);


    show = function (divId) {
        document.getElementById(divId).style.display = "block";
    };

    hide = function (divId) {
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
            show(detailsView);
        }
        if (viewName === homeView) {
            show(homeView);
        }
        if (viewName === instructionsView) {
            show(instructionView);
        }
        if (viewName === overviewView) {
            show(overviewView);
        }
        if (viewName === searchView) {
            show(searchView);
        }
        if (viewName === selectDishView) {
            show(selectDishView);
        }
    }


    //hideViews();
    //displayView("homeView");
};