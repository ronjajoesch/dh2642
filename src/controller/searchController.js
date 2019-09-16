var DishSearchController = function (view, model, mainController) {

    view.container.on('click', '#searchView', function() {
        mainController.currentDishId = $(this).attr('data-dishid');
        mainController.changeTo('dishDetails');
    });
  

    view.searchSubmit.on('click', function() {
      var dishType = view.searchType.val();
      var dishFilter = view.searchFilter.val();
      view.render(dishType, dishFilter);
    });
  }