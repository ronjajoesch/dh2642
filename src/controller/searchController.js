var DishSearchController = function (view, model, mainController) {

  // attach an event listener to the button
    view.container.on('click', '#searchView', function() {
        //TODO check this
        mainController.currentDishId = $(this).attr('data-dishid');
        mainController.changeTo('dishDetails');
    });
  

    view.searchSubmit.on('click', function() {
      var dishType = view.searchType.val();
      var dishFilter = view.searchFilter.val();
      view.render(dishType, dishFilter);
    });
  }