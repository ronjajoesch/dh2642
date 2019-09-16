
 var detailsController = function (view, model, mainController) {
//verify the id in the view.
    view.container.on('click', '#back-edit', function() {
        mainController.currentDishId = null;
        mainController.displayView('searchView');
    });
  
//change the id in the view.
    view.container.on('click', '#add-item-to-cart', function() {
      var dishId = $(this).attr('data-dishid');
      mainController.currentDishId = dishId;
      model.addDishToMenu(dishId);
    });
  }