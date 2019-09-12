class InstructionView {
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

    render() {
        const headingDiv = this.container.appendChild(document.createElement('div'));
        headingDiv.className ="postIt row";

        const titleDiv = headingDiv.appendChild(document.createElement('div'));
        const heading = titleDiv.appendChild(document.createElement('h3'));
        heading.className = "value-num-guests";
        heading.innerHTML = "My Dinner: "+this.model.nGuest+" people";

        const buttonDiv = headingDiv.appendChild(document.createElement('div'));
        let button = buttonDiv.appendChild(document.createElement("button"));
        button.setAttribute("type","button");
        button.setAttribute("id","back");
        button.className = "btn btn-sm btn-primary";
        button.innerText = "Go Back and edit dinner";

        const bottomDiv = this.container.appendChild(document.createElement('div'));

        var menu = this.model.getFullMenu();

        var self = this;
        menu.forEach(function(dish,i){
            const dishDiv = bottomDiv.appendChild(document.createElement("div"));
            dishDiv.className = "row";

            let img = self.get_image_element(dish.image,"30%",100);
            const imgElement = bottomDiv.appendChild(img);

        });


        this.afterRender();
    }

    afterRender() {
        let loadingIndicator = document.getElementById("loader");
        loadingIndicator.style.display = "none";
    }
}