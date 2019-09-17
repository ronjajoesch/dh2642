window.onload = function () {
    console.log("start");
    //We instantiate our model
    const model = new DinnerModel();

    const container = document.getElementsByClassName("page-content")[0];

    var MainController = {
        currentDishId: null,
        displayView: displayView
      };


    const homeView = new HomeView(container).render();
        const searchView = new SearchView(container, model,MainController).render('searchView'),
        instructionView = new InstructionView(container, model,MainController).render('instructionView'),
        detailsView = new DetailsView(container, model,MainController).render(null, 'detailsView'), // TODO pass actual dishID
        overviewView = new OverviewView(container, model,MainController).render('overviewView'),
        selectDishView = new SelectDishView(container, model,MainController).render('selectDishView');

        /*
    function hideViews() {
        homeView.hide('homeView');
        detailsView.hide('detailsView');
        instructionView.hide('instructionsView');
        overviewView.hide('overviewView');
        searchView.hide('searchView');
        selectDishView.hide('selectDishView');
    }

    function displayView(viewName) {
        //first hide all views.
        hideViews();

        if (viewName === 'detailsView') {
            detailsView.show('detailsView');
        }
        if (viewName === 'homeView') {
            homeView.show('homeView');
        }
        if (viewName === 'instructionsView') {
            instructionView.show('instructionsView');
        }
        if (viewName === 'overviewView') {
            overviewView.show('overviewView');
        }
        if (viewName === 'searchView') {
            searchView.show('searchView');
        }
        if (viewName === 'selectDishView') {
            selectDishView.show('selectDishView');
        }
    }

*/

    show = function (divId) {
        document.getElementById(divId).style.display = "block";
    };

    hide = function (divId) {
        document.getElementById(divId).style.display = "none";
    };

    function hideViews() {
        hide('homeView');
        //hide('detailsView');
        //hide('instructionsView');
        //hide('overviewView');
        //hide('searchView');
        //hide('selectDishView');
    }

    function displayView(viewName) {
        //first hide all views.
        hideViews();

        if (viewName === 'detailsView') {
            show('detailsView');
        }
        if (viewName === 'homeView') {
            show('homeView');
        }
        if (viewName === 'instructionsView') {
            show('instructionsView');
        }
        if (viewName === 'overviewView') {
            show('overviewView');
        }
        if (viewName === 'searchView') {
            show('searchView');
        }
        if (viewName === 'selectDishView') {
            show('selectDishView');
        }
    }


    hideViews();
    //displayView("homeView");
};