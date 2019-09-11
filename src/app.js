window.onload = function () {
  console.log("start");
  //We instantiate our model
  const model = new DinnerModel();
  model.setNumberOfGuests(3); //TODO change when dynamic


 //TODO remove later -> dynamic
  model.getDish(1).then((dish1) =>{
    model.addDishToMenu(dish1);

  const container = document.getElementsByClassName("page-content")[0];

    //TODO ask how we should do this?
    const view = document.querySelector("script[src = 'src/view/searchView.js']");
    const view1 = document.querySelector("script[src = 'src/view/instructionsView.js']");
    const view2 = document.querySelector("script[src = 'src/view/homeView.js']");
    const view3 = document.querySelector("script[src = 'src/view/detailsView.js']");
    const view4 = document.querySelector("script[src = 'src/view/overviewView.js']");
    const view5 = document.querySelector("script[src = 'src/view/selectDishView.js']");

    if (view != null || view != null) {
        new SearchView(container, model).render();
    }
    if (view1 != null) {
        new InstructionView(container, model).render();
    }
    if (view2 != null) {
        new HomeView(container).render();
    }
    if (view3 != null) {
        new DetailsView(container, model).render(1); // TODO not static
    }
    if (view4 != null) {
        new OverviewView(container, model).render();
    }
    if (view5 != null) {
        new SelectDishView(container, model).render();
    }
    //const view = new OverviewView(container, model);
    //const view = new HomeView(container);
    //const view = new SearchView(container,model);
    //view.render();

    /**
     * IMPORTANT: app.js is the only place where you are allowed to
     * query for elements in the whole document.
     * In other places you should limit the search only to the children
     * of the specific view you're working with (see exampleView.js).
     */

  });

};

