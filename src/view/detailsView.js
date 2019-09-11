class DetailsView {
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

    render(dishId) {
        this.model.getDish(dishId).then((dish) => {
            var menu = this.model.getFullMenu();
            console.log('THE TEST IS',menu);
      
            console.log(dish);
            const selectDishDiv = this.container.querySelector(".row");

            const leftDetailsDiv = selectDishDiv.appendChild(document.createElement('div'));
            leftDetailsDiv.className = "col-xs-12 col-sm-4 col-md-4 col-lg-4";

            const rightDetailsDiv = selectDishDiv.appendChild(document.createElement('div'));
            rightDetailsDiv.className = "col-xs-12 col-sm-3 col-md-3 col-lg-4 postIt";

            const heading = leftDetailsDiv.appendChild(document.createElement('h4'));
            heading.innerText = dish.title;

            let img = this.get_image_element(dish.image,"100%",200);

            leftDetailsDiv.appendChild(img);
            let descriptionDiv = document.createElement("div");
            descriptionDiv.innerHTML = dish.instructions;
            leftDetailsDiv.appendChild(descriptionDiv);

            let title3P = rightDetailsDiv.appendChild(document.createElement("p"));
            let title3 = title3P.appendChild(document.createElement("h6"));
            let text = "Ingredients for "+this.model.nGuest+" people";
            title3.innerText=text;
            rightDetailsDiv.appendChild(title3P);

            //
            const tableDiv2 = rightDetailsDiv.appendChild(document.createElement('div'));
            const table2 = tableDiv2.appendChild(document.createElement("table"));
            table2.className = "table";
            this.model.customMenu[0].extendedIngredients.forEach(elx => {
                const tbody2 = table2.appendChild(document.createElement("tbody"));
                tbody2.setAttribute("id","dishes");
                const tr22 = tbody2.appendChild(document.createElement("tr"));   
                const td22 = tr22.appendChild(document.createElement("td"));
                td22.className="value-starter-name";
                td22.innerText= elx.measures.metric.amount +" "+ elx.measures.metric.unitShort;
                const td33 = tr22.appendChild(document.createElement("td"));
                td33.className="value-starter-value";
                td33.innerText=elx.name;
            });


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