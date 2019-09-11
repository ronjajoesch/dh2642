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
    headingDiv.className ="postIt";
    const heading = headingDiv.appendChild(document.createElement('h3'));
    heading.innerHTML = "My Dinner: "+this.model.nGuest+" people";

    const div3 = this.container.appendChild(document.createElement("div"));
    div3.innerHTML = "You will be eating the following:";

    const divDishes = div3.appendChild(document.createElement("div"));
    divDishes.className = "row";

    let menu = this.model.getFullMenu();
    console.log(menu);

    var self = this;
    menu.forEach(function (dish, index) {
      let childElement = document.createElement("div");
      childElement.className = "dish";
      let img;
      img = self.get_image_element(dish.image, 100, 100);
      childElement.appendChild(img);
      let captionElement = document.createElement("figcaption");
      captionElement.innerText = dish.title;
      childElement.appendChild(captionElement);

      divDishes.appendChild(childElement);
    });



    this.afterRender();
  }

  afterRender() {
    let loadingIndicator = document.getElementById("loader");
    loadingIndicator.style.display = "none";
  }
}