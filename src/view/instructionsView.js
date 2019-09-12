class InstructionView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
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
        buttonDiv.setAttribute("float", "right");
        button.innerText = "Go Back and edit dinner";


        this.afterRender();
    }

    afterRender() {
        let loadingIndicator = document.getElementById("loader");
        loadingIndicator.style.display = "none";
    }
}