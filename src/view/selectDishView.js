class SelectDishView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        model.addObserver(this);
        this.dishList = null;
        this.searchButton = null;
        this.query = null;
        this.type = null;
    }

    update(model, changeDetails) {


    }

    get_image_element(src, width, height) {
        let image = document.createElement("img");
        image.src = src;
        image.width = width;
        image.height = height;
        return image;
    }

     async render(id) {
        const selectDishDiv = this.container.querySelector(".row").appendChild(document.createElement('div'));
        selectDishDiv.setAttribute('id', id);

        selectDishDiv.className = "col-xs-12 col-sm-7 col-md-7 col-lg-8";
        const heading = selectDishDiv.appendChild(document.createElement('h4'));
        heading.innerText = "Select Dinner";

        const findDishDiv = selectDishDiv.appendChild(document.createElement('div'));
        findDishDiv.className = "row";
        const contentDiv = selectDishDiv.appendChild(document.createElement('div'));
        contentDiv.className = "row";

        const inputDiv = findDishDiv.appendChild(document.createElement("div"));
        inputDiv.id = "dishSearchView";
        const input = inputDiv.appendChild(document.createElement('input'));
        input.type = "text";
        input.id = "query";

        const selectTypeDiv = findDishDiv.appendChild(document.createElement("div"));
        //TODO check which type of dishes exist. Add all options.
        selectTypeDiv.innerHTML = '<select id ="type" class="type-of-dish">' +
            '<option value="Starter">Starter</option>' +
            '<option value="Main Course">Main Course</option>' +
            '<option value="Dessert">Dessert</option></select>';

        contentDiv.setAttribute("id", "dishes-select-dish-div");

        const buttonDiv = findDishDiv.appendChild(document.createElement('div'));
        buttonDiv.innerHTML = `<button id="searchBtn" type="button" class="btn btn-sm btn-primary">search</button>`;
        this.searchButton = buttonDiv.querySelector("#searchBtn");

        await this.showDishes();

    }

    async showDishes(){
        await this.displayDishesSelection(this.model);
        this.afterRender();
    }

    displayDishesSelection(model) {
        this.query = this.container.querySelector("#query").value;
        this.type = this.container.querySelector("#type").value;

        return new Promise(resolve => {
            let contentDiv = document.getElementById("dishes-select-dish-div");
            contentDiv.innerHTML = "";
            model.getAllDishes(this.type, this.query).then((data) => {
                let imagesSrcs = data.map(function (dish) {
                    return " https://spoonacular.com/recipeImages/" + dish.image;

                });

                let dishes = data.map(function (dish) {
                    return [dish.id, dish.title];
                });

                var self = this;
                dishes.forEach(function (dish, index) {
                    let id = dish[0];
                    let title = dish[1];
                    let childElement = document.createElement("div");
                    childElement.className = "dish-div";
                    childElement.setAttribute("id", id);
                    let childChildElement = document.createElement("div");
                    let img;
                    img = self.get_image_element(imagesSrcs[index], 100, 100);  // TODO object-fit: cover
                    childChildElement.appendChild(img);
                    let captionElement = document.createElement("figcaption");
                    captionElement.innerText = "" + title;
                    childChildElement.appendChild(captionElement);
                    childElement.appendChild(childChildElement);
                    let addButton = document.createElement("button");
                    addButton.innerText="add";
                    addButton.setAttribute("id","AddButton")
                    childElement.appendChild(addButton);
                    contentDiv.appendChild(childElement);
                });

                resolve(data);
            });
        });

    }

    afterRender() {

        let loadingIndicator = document.getElementById("loader");
        loadingIndicator.style.display = "none";

        this.dishList = this.container.querySelectorAll(".dish-div");
    }
}