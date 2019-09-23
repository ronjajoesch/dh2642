class DetailsController {
  constructor(view, model) {
      this.model = model;
      this.view = view;
  }

  eventListener(mainController) {
    console.log(mainController);
      // this.view.detailsViewBackButton.addEventListener('click', function () {
      //   console.log('bing!');
      //     // mainController.displayView('selectDishView');
      // });

  };
}