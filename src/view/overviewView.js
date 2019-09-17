class OverviewView {
  constructor(container, model) {
      this.container = container;
      this.model = model;
    model.addObserver(this);
  }

  update(model, changeDetails){
    // redraw just the portion affected by the changeDetails
    // or remove all graphics in the view, read the whole model and redraw
    if(changeDetails.type === "menu"){
      this.loadDishesAndTotal(model);
    }
    if(changeDetails.type === "nGuest"){
      this.changeNumGuests(model);
      this.loadDishesAndTotal(model);
    }
  }

  get_image_element(src, width, height) {
    let image = document.createElement("img");
    image.src = src;
    image.style.width = width;
    image.height = height;
    return image;
  }

  // An example of creating HTML procedurally. Think about the pros and cons of this approach.
  render(id) {

    const mainDiv = this.container.querySelector("#no-row");
    const overViewDiv = mainDiv.appendChild(document.createElement('div'));
    overViewDiv.setAttribute('id',id);
    const headingDiv = overViewDiv.appendChild(document.createElement('div'));


    headingDiv.className ="postIt row";
    const heading = headingDiv.appendChild(document.createElement('h3'));
    const guestsNum = headingDiv.appendChild(document.createElement("h3"));
    guestsNum.className = "value-num-guests";
    heading.innerHTML = "My Dinner: ";
    guestsNum.setAttribute("id","people-title-overview")
    this.changeNumGuests(this.model);
    const heading2 = headingDiv.appendChild(document.createElement('h3'));
    heading2.innerHTML = " people are coming";


    const div3 = overViewDiv.appendChild(document.createElement("div"));
    div3.innerHTML = "You will be eating the following:";

    const divDishes = div3.appendChild(document.createElement("div"));
    divDishes.className = "row";
    divDishes.setAttribute("id","div-dishes")

    let totalDiv = div3.appendChild(document.createElement("div"));
    totalDiv.className="row";
    let totalText = totalDiv.appendChild(document.createElement("h5"));
    totalText.innerText = "Total: SEK";
    let totalPricediv = document.createElement("h5");
    totalPricediv.className = "value-total-price";
    totalPricediv.setAttribute("id","total-price-overview")
    totalDiv.appendChild(totalPricediv);

    this.loadDishesAndTotal(this.model);

    const bottom = div3.appendChild(document.createElement("div"));
    let button = bottom.appendChild(document.createElement("button"));
    button.setAttribute("type","button");
    button.setAttribute("id","toPrintBtn");
    button.className = "btn btn-lg btn-primary";
    button.innerText = "Print Full recipe";

    this.afterRender();

  }

  afterRender() {
    let loadingIndicator = document.getElementById("loader");
    loadingIndicator.style.display = "none";
  }

  changeNumGuests(model){
    const guestsNum = document.getElementById("people-title-overview");
    guestsNum.innerHTML = ""+model.getNumberOfGuests();
  }

  loadDishesAndTotal(model){
    let menu = model.getFullMenu();
    var self = this;
    let totalPrice = 0;

    let divDishes = document.getElementById("div-dishes");

    menu.forEach(function (dish, index) {
      let childElement = document.createElement("div");
      childElement.className = "dish";
      let img;
      img = self.get_image_element(dish.image, 100, 100);
      childElement.appendChild(img);
      let captionElement = document.createElement("figcaption");
      captionElement.className = "value-main-course-name";  //TODO fix so it relates to type of dish
      captionElement.innerText = dish.title;
      childElement.appendChild(captionElement);

      // This part is for displaying the individual Prices.
      let priceElement = document.createElement("div");
      priceElement.className = "value-main-course-price";
      priceElement.innerText = "SEK" + " " +dish.pricePerServing;
      childElement.appendChild(priceElement);
      divDishes.appendChild(childElement);
      totalPrice += dish.pricePerServing;

      let totalPricediv = document.getElementById("total-price-overview");
      totalPricediv.innerText = totalPrice;
    });
  }

}