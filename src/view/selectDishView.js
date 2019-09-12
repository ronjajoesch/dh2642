class SelectDishView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

    get_image_element(src, width, height) {
        let image = document.createElement("img");
        image.src = src;
        image.width = width;
        image.height = height;
        return image;
    }

    render() {
        const selectDishDiv = this.container.querySelector(".row").appendChild(document.createElement('div'));
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

        //TODO interactions
        let type = "Main Course";
        let query = "Pizza";

        this.model.getAllDishes(type, query).then((data) => {
            console.log(data);
            let imagesSrcs = data.map(function (dish) {
                return " https://spoonacular.com/recipeImages/"+dish.image;

            });

            let titles = data.map(function (dish) {
                return dish.title;
            });

            //add if description is available --> don't delete
            /*let description =  data.map(function (dish) {
                return dish.description;
            });*/


            var self = this;
            titles.forEach(function (title, index) {
                let childElement = document.createElement("div");
                childElement.className = "dish";
                let img;
                img = self.get_image_element(imagesSrcs[index], 100, 100);
                childElement.appendChild(img);
                let captionElement = document.createElement("figcaption");
                captionElement.innerText = title;
                childElement.appendChild(captionElement);

                //add if description is available
                /*let descriptionElement = document.createElement("p");
                descriptionElement.innerText = description[index];
                childElement.appendChild(descriptionElement);*/

                contentDiv.appendChild(childElement);
            });
        });


        this.afterRender();


    }

    afterRender() {

        let loadingIndicator = document.getElementById("loader");
        loadingIndicator.style.display = "none";


    }
}