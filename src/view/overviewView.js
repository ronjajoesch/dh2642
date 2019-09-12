class OverviewView {
  constructor(container, model) {
      this.container = container;
      this.model = model;
  }

  get_image_element(src, width, height) {
    let image = document.createElement("img");
    image.src = src;
    image.style.width = width;
    image.height = height;
    return image;
  }

  // An example of creating HTML procedurally. Think about the pros and cons of this approach.
  render() {

    const headingDiv = this.container.appendChild(document.createElement('div'));
    headingDiv.className ="postIt row";
    const heading = headingDiv.appendChild(document.createElement('h3'));
    const guestsNum = headingDiv.appendChild(document.createElement("h3"));
    guestsNum.className = "value-num-guests";
    heading.innerHTML = "My Dinner: ";
    guestsNum.innerHTML = ""+this.model.getNumberOfGuests();
    const heading2 = headingDiv.appendChild(document.createElement('h3'));
    heading2.innerHTML = " people are coming";



    const div3 = this.container.appendChild(document.createElement("div"));
    div3.setAttribute("id","overviewView");
    div3.innerHTML = "You will be eating the following:";

    const divDishes = div3.appendChild(document.createElement("div"));
    divDishes.className = "row";

    let menu = this.model.getFullMenu();
    

    var self = this;
    console.log(menu[0]);
    let totalPrice = 0;
    menu.forEach(function (dish, index) {
      let childElement = document.createElement("div");
      childElement.className = "dish";
      //childElement.className = "";
      let img;
      img = self.get_image_element(dish.image, 100, 100);
      childElement.appendChild(img);
      let captionElement = document.createElement("figcaption");
      captionElement.className = "value-main-course-name";  //TODO fix so it relates to type of dish
      captionElement.innerText = dish.title;
      childElement.appendChild(captionElement);

      // Fr displaying the individual Prices.
      let priceElement = document.createElement("div");
      priceElement.className = "value-main-course-price"; 
      priceElement.innerText = "SEK" + " " +dish.pricePerServing;
      childElement.appendChild(priceElement);
      divDishes.appendChild(childElement);
      totalPrice += dish.pricePerServing;
    });

    let totalPricediv = document.createElement("div");
    totalPricediv.innerText = "SEK" + " " + totalPrice;
    divDishes.appendChild(totalPricediv);


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
}