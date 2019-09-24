class DetailsView{
    constructor(container, model) {
        this.container = container;
        this.model = model;
        model.addObserver(this);
        this.detailsViewBackButton = null;
    }

    update(model, changeDetails) {
        // redraw just the portion affected by the changeDetails
        // or remove all graphics in the view, read the whole model and redraw

        if (changeDetails.type === "nGuest") {
            this.changeNumGuests(model);
        }

        if(changeDetails.type === "selectedDish"){
            this.changeSelectedDish();
        }

        if(changeDetails.type === "menu"){
            if(!localStorage.menuItems){
            var a = [];
            a.push(JSON.parse(localStorage.getItem('menuItems')));
            localStorage.setItem('menuItems', JSON.stringify(a));
            }
            if(localStorage.menuItems){
            var a = [];
            // Parse the serialized data back into an aray of objects
            a = JSON.parse(localStorage.getItem('menuItems'));
            // Push the new data (whether it be an object or anything else) onto the array
            a.push(model.menu[model.menu.length - 1]);
            console.log(a);
            localStorage.setItem('menuItems', JSON.stringify(a));
        }

        }
        //TODO think if we need more functionality here
    }

    // TODO object-fit: cover
    get_image_element(src, width, height) {
        let image = document.createElement("img");
        image.src = src;
        image.style.width = width;
        image.height = height;
        return image;
    }


    render(divId) {

        var retrievedObject = localStorage.getItem('menuItems');
        console.log(retrievedObject);
        const selectDishDiv = this.container.querySelector(".row");
        const mainDiv = selectDishDiv.appendChild(document.createElement('div'));
        mainDiv.className = "row col-xs-12 col-sm-7 col-md-7 col-lg-8";
        mainDiv.setAttribute('id', divId);

        let buttonDiv = mainDiv.appendChild(document.createElement("div"));
        buttonDiv.className='col-xs-12 col-sm-12 col-md-12 col-lg-12';
        let button = buttonDiv.appendChild(document.createElement("button"));
        button.setAttribute("type", "button");
        button.setAttribute("id", "back");
        button.className = "btn btn-sm btn-primary";
        button.innerText = "back to select dish";

        this.detailsViewBackButton = button;
        let mainDiv1 = mainDiv.appendChild(document.createElement("div"));
        mainDiv1.className="row";
        mainDiv1.setAttribute("id","detailsViewLower");

        this.changeSelectedDish();


        this.afterRender();

       // this.detailsViewBackButton = mainDiv.querySelector("#back"); this doesn't work.
    }

    afterRender() {
        let loadingIndicator = document.getElementById("loader");
        loadingIndicator.style.display = "none";

    }

    changeSelectedDish(){
        const mainDiv = this.container.querySelector('#detailsViewLower');
        mainDiv.innerHTML="";
        let dishId = this.model.selectedDish;

        if (dishId !== undefined && dishId !== null) {
            this.model.getDish(dishId).then((dish) => {

                const leftDetailsDiv = mainDiv.appendChild(document.createElement('div'));
                leftDetailsDiv.className = "col-xs-12 col-sm-12 col-md-6 col-lg-6";

                const rightDetailsDiv = mainDiv.appendChild(document.createElement('div'));
                rightDetailsDiv.className = "col-xs-12 col-sm-12 col-md-6 col-lg-6 postIt";

                const heading = leftDetailsDiv.appendChild(document.createElement('h4'));
                heading.innerText = dish.title;

                let img = this.get_image_element(dish.image, "100%", 200);
                let imgDiv = leftDetailsDiv.appendChild(document.createElement("div"));
                imgDiv.appendChild(img);


                let instructionDiv = leftDetailsDiv.appendChild(document.createElement("div"));

                let instructionsTitle = instructionDiv.appendChild(document.createElement("h6"));
                instructionsTitle.innerText = "Instructions";
                let descriptionDiv = document.createElement("div");
                descriptionDiv.innerHTML = dish.instructions;
                instructionDiv.appendChild(descriptionDiv);

                let title = rightDetailsDiv.appendChild(document.createElement("p"));
                let title3 = title.appendChild(document.createElement("h6"));
                title3.setAttribute("id", "people-title");
                rightDetailsDiv.appendChild(title);
                this.changeNumGuests(this.model);

                const tableDiv = rightDetailsDiv.appendChild(document.createElement('div'));
                const table = tableDiv.appendChild(document.createElement("table"));
                table.className = "table";

                dish.extendedIngredients.forEach(function (ingredient, i) {
                    const tbody_1 = table.appendChild(document.createElement("tbody"));
                    tbody_1.setAttribute("id", "dishes");
                    const tr_2 = tbody_1.appendChild(document.createElement("tr"));
                    const td_2 = tr_2.appendChild(document.createElement("td"));
                    td_2.className = "value-starter-name";
                    td_2.innerText = ingredient.measures.metric.amount + " " + ingredient.measures.metric.unitShort;
                    const td_3 = tr_2.appendChild(document.createElement("td"));
                    td_3.className = "value-starter-value";
                    td_3.innerText = ingredient.name;
                });
                const td44 = table.appendChild(document.createElement("td"));
                td44.innerText = "Total Cost: " + +dish.pricePerServing * this.model.nGuest;
            });
        }
        else{
            console.log("You have not selected a specific dish.");
        }
    }
    changeNumGuests(model) {
        let title3 = document.getElementById("people-title");
        if(title3 != null){
            title3.value = model.getNumberOfGuests();

            title3.innerText = "Ingredients for " + model.getNumberOfGuests() + " people";
        }

    }

}


