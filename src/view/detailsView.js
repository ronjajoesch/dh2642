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

            const selectDishDiv = this.container.querySelector(".row");
            const mainDiv = selectDishDiv.appendChild(document.createElement('div'));
            mainDiv.className = "row col-xs-12 col-sm-7 col-md-7 col-lg-8";
            mainDiv.setAttribute('id','detailsView');
            const leftDetailsDiv = mainDiv.appendChild(document.createElement('div'));
            leftDetailsDiv.className = "col-xs-12 col-sm-12 col-md-6 col-lg-6";

            const rightDetailsDiv = mainDiv.appendChild(document.createElement('div'));
            rightDetailsDiv.className = "col-xs-12 col-sm-12 col-md-6 col-lg-6 postIt";

            const heading = leftDetailsDiv.appendChild(document.createElement('h4'));
            heading.innerText = dish.title;

            let img = this.get_image_element(dish.image,"100%",200);
            let imgDiv = leftDetailsDiv.appendChild(document.createElement("div"));
            imgDiv.appendChild(img);

            let buttonDiv = leftDetailsDiv.appendChild(document.createElement("div"));
            let button = buttonDiv.appendChild(document.createElement("button"));
            button.setAttribute("type","button");
            button.setAttribute("id","back");
            button.className = "btn btn-sm btn-primary";
            button.innerText = "back to select dish";

            let instructionDiv = leftDetailsDiv.appendChild(document.createElement("div"));

            let instructionsTitle = instructionDiv.appendChild(document.createElement("h6"));
            instructionsTitle.innerText = "Instructions";
            let descriptionDiv = document.createElement("div");
            descriptionDiv.innerHTML = dish.instructions;
            instructionDiv.appendChild(descriptionDiv);

            let title = rightDetailsDiv.appendChild(document.createElement("p"));
            let title3 = title.appendChild(document.createElement("h6"));
            let text = "Ingredients for "+this.model.nGuest+" people";
            title3.innerText=text;
            rightDetailsDiv.appendChild(title);
            
            const tableDiv = rightDetailsDiv.appendChild(document.createElement('div'));
            const table = tableDiv.appendChild(document.createElement("table"));
            table.className = "table";

            menu.forEach(function(elx,i) {
                const tbody_1 = table.appendChild(document.createElement("tbody"));
                tbody_1.setAttribute("id","dishes");
                const tr_2 = tbody_1.appendChild(document.createElement("tr"));   
                const td_2 = tr_2.appendChild(document.createElement("td"));
                td_2.className="value-starter-name";
                td_2.innerText= elx.extendedIngredients[i].measures.metric.amount +" "+ elx.extendedIngredients[i].measures.metric.unitShort;
                const td_3 = tr_2.appendChild(document.createElement("td"));
                td_3.className="value-starter-value";
                td_3.innerText=elx.extendedIngredients[i].name;    
            });
            const td44 = table.appendChild(document.createElement("td"));    
            td44.innerText="Total Cost: "+ +menu[0].pricePerServing;
        });
        this.afterRender();
    }

    afterRender() {
        let loadingIndicator = document.getElementById("loader");
        loadingIndicator.style.display = "none";

    }

    show = function() {
        this.style.display = 'block'; // try display = 'inline'
      };

    hide = function() {
        this.style.display = 'none';
      };
}