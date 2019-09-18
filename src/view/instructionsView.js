class InstructionView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        model.addObserver(this);
        this.printRecieptButton = null;

    }

    update(model, changeDetails){
        // redraw just the portion affected by the changeDetails
        // or remove all graphics in the view, read the whole model and redraw
        if(changeDetails.type === "menu"){
            this.displayDishes(model);
        }
        if(changeDetails.type === "nGuest"){
            this.changeNumGuests(model);
        }
    }

    get_image_element(src, width, height) {
        let image = document.createElement("img");
        image.src = src;
        image.style.width = width;
        image.height = height;
        return image;
    }


    render(id) {
        const mainDiv = this.container.querySelector("#no-row");
        const instructionDiv = mainDiv.appendChild(document.createElement('div'));
        instructionDiv.setAttribute('id',id);

        const headingDiv = instructionDiv.appendChild(document.createElement('div'));

        headingDiv.className ="postIt row";

        const titleDiv = headingDiv.appendChild(document.createElement('div'));
        const heading = titleDiv.appendChild(document.createElement('h3'));
        heading.className = "value-num-guests";
        heading.setAttribute("id","people-title-instruction");
        this.changeNumGuests(this.model);

        const buttonDiv = headingDiv.appendChild(document.createElement('div'));
        let button = buttonDiv.appendChild(document.createElement("button"));
        button.setAttribute("type","button");
        button.setAttribute("id","back");
        button.className = "btn btn-sm btn-primary";
        button.innerText = "Go Back and edit dinner";

        const bottomDiv = instructionDiv.appendChild(document.createElement('div'));
        bottomDiv.setAttribute("id","dishes-instructions")
        this.displayDishes(this.model);

        this.afterRender();
        // this.printRecieptButton= buttonDiv.querySelector("#toPrintBtn");
        this.printRecieptButton = button;
        return this;
    }

    displayDishes(model){
        var menu = model.getFullMenu();
        var self = this;
        let bottomDiv = document.getElementById("dishes-instructions");

        menu.forEach(function(dish,i){
            const dishDiv = bottomDiv.appendChild(document.createElement("div"));
            dishDiv.className = "row";

            const imgDiv = dishDiv.appendChild(document.createElement('div'));
            imgDiv.className = "col-sm-8 col-md-4 col-lg-4";
            let img = self.get_image_element(dish.image,"100%",100);
            const imgElement = imgDiv.appendChild(img);
            const instructionTextDiv = dishDiv.appendChild(document.createElement('div'));
            instructionTextDiv.className = "col-sm-8 col-md-8 col-lg-8";
            const instruction = instructionTextDiv.appendChild(document.createElement("p"));

            let html = "<h6>Instructions: </h6><ol>";
            dish.analyzedInstructions[0].steps.forEach(function(step,i){
                html += "<li>"+step.step+"</li>";
            });
            html += "</ol>";
            instruction.innerHTML = html;

        });
    }

    changeNumGuests(model){
        const heading = document.getElementById("people-title-instruction");
        heading.innerHTML = "My Dinner: "+model.getNumberOfGuests()+" people";
    }

    afterRender() {
        let loadingIndicator = document.getElementById("loader");
        loadingIndicator.style.display = "none";
    }
}