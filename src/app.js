window.onload = function () {
  console.log("start");
  //We instantiate our model
  const model = new DinnerModel();
  model.setNumberOfGuests(4); //TODO change when dynamic


 //TODO remove later -> dynamic
 
 // model.getDish(1).then((dish1) =>{
    //model.addDishToMenu(dish1);
    const myJson = [
        {
        "pricePerServing": 438.0,
        "id": 3,
        "title": "Carrots, Cauliflower And Anchovies",
        "readyInMinutes": 45,
        "servings": 1,
        "image": "https://spoonacular.com/recipeImages/3-556x370.jpg",
        "imageType": "jpg",
        "cuisines": [],},{

    "pricePerServing": 195.59,
    "id": 559251,
    "title": "Breakfast Pizza",
    "readyInMinutes": 25,
    "servings": 6,
    "image": "https://spoonacular.com/recipeImages/559251-556x370.jpg",
    "imageType": "jpg",},{

    "pricePerServing": 217.74,
    "id": 559250,
    "title": "Pork Loin and Pea Stew",
    "readyInMinutes": 65,
    "servings": 6,
    "image": "https://spoonacular.com/recipeImages/559250-556x370.jpg",
    "imageType": "jpg",
  },{
 
    "pricePerServing": 177.28,
    "id": 559249,
    "title": "Creamed Spinach",
    "readyInMinutes": 35,
    "servings": 4,
    "image": "https://spoonacular.com/recipeImages/559249-556x370.jpg",
    "imageType": "jpg",
    "cuisines": [],}]

    model.addDishToMenu(myJson); // PASS THE JSON to this functin, and load it in the searchView.js
   // console.log("test",dish1,dish2);
   // console.log(model.getFullMenu());

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


 // });
};