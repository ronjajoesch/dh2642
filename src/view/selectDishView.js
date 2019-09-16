class SelectDishView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        model.addObserver(this);
    }

    update(model, changeDetails){
        // redraw just the portion affected by the changeDetails
        // or remove all graphics in the view, read the whole model and redraw

    }

    get_image_element(src, width, height) {
        let image = document.createElement("img");
        image.src = src;
        image.width = width;
        image.height = height;
        return image;
    }

    render(id,type,query) {
        const selectDishDiv = this.container.querySelector(".row").appendChild(document.createElement('div'));
        selectDishDiv.setAttribute('id',id);

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
        selectTypeDiv.innerHTML = '<select class="type-of-dish">' +
            '<option value="Starter">Starter</option>' +
            '<option value="Main Course">Main Course</option>' +
            '<option value="Dessert">Dessert</option></select>';

        contentDiv.setAttribute("id","dishes-select-dish-div")
        this.displayDishesSelection(this.model,type,query);

        this.afterRender();


    }

    displayDishesSelection(model,type,query){
        let contentDiv = document.getElementById("dishes-select-dish-div");
        model.getAllDishes(type, query).then((data) => {
            let imagesSrcs = data.map(function (dish) {
                return " https://spoonacular.com/recipeImages/"+dish.image;

            });

            let titles = data.map(function (dish) {
                return dish.title;
            });

            var self = this;
            titles.forEach(function (title, index) {
                let childElement = document.createElement("div");
                childElement.className = "dish";
                let img;
                img = self.get_image_element(imagesSrcs[index], 100, 100);  // TODO object-fit: cover
                childElement.appendChild(img);
                let captionElement = document.createElement("figcaption");
                captionElement.innerText = ""+title;
                childElement.appendChild(captionElement);

                //add if description is available  --> don't delete
                /*let descriptionElement = document.createElement("p");
                descriptionElement.innerText = description[index];
                childElement.appendChild(descriptionElement);*/

                contentDiv.appendChild(childElement);
            });
        });
    }

    afterRender() {

        let loadingIndicator = document.getElementById("loader");
        loadingIndicator.style.display = "none";
    }

    show = function(id) {
         // try display = 'inline'
        document.getElementById(id).style.display="block"; 
      };

    hide = function(id) {
        document.getElementById(id).style.display="none";;
      };
}