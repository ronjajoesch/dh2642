class DetailsView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

    render(dishId) {
        this.model.getDish(dishId).then((dish) => {

            console.log(dish);

            const detailsDiv = this.container.querySelector(".row").appendChild(document.createElement('div'));
            detailsDiv.className = "col-xs-12 col-sm-7 col-md-7 col-lg-8";

            const heading = detailsDiv.appendChild(document.createElement('h4'));
            heading.innerText = dish.title;

        });


        /*
        const findDishDiv = detailsDiv.appendChild(document.createElement('div'));
        findDishDiv.className = "row";
        const contentDiv = detailsDiv.appendChild(document.createElement('div'));
        contentDiv.className = "row";

        const inputDiv = findDishDiv.appendChild(document.createElement("div"));
        const input = inputDiv.appendChild(document.createElement('input'))
        input.type = "text";
        input.id = "query";
*/
        this.afterRender();

    }

    afterRender() {
        let loadingIndicator = document.getElementById("loader");
        loadingIndicator.style.display = "none";

    }
}