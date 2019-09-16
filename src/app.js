window.onload = function () {
    console.log("start");
    //We instantiate our model
    const model = new DinnerModel();
    model.setNumberOfGuests(4); //TODO change when dynamic


    //TODO remove later -> dynamic
    const myJson = [];

    model.addDishToMenu(myJson[0]); // PASS THE JSON to this functin, and load it in the searchView.js
    model.addDishToMenu(myJson[1]); // PASS THE JSON to this functin, and load it in the searchView.js
    model.addDishToMenu(myJson[2]); // PASS THE JSON to this functin, and load it in the searchView.js


    const container = document.getElementsByClassName("page-content")[0];

    var MainController = {
        currentDishId: null,
        displayView: displayView
      };


    const homeView = new HomeView(container).render(),
        searchView = new SearchView(container, model,MainController).render('searchView'),
        instructionView = new InstructionView(container, model,MainController).render('instructionView'),
        detailsView = new DetailsView(container, model,MainController).render(1, 'detailsView'), //pass actual dishID
        overviewView = new OverviewView(container, model,MainController).render('overviewView'),
        selectDishView = new SelectDishView(container, model,MainController).render('selectDishView');

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

};