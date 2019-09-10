class SelectDishView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

    render() {
        const menu = this.container.querySelector(".row").appendChild(document.createElement('div'));
        menu.className = "col-xs-1 col-sm-1 col-md-1 col-lg-1";
        const heading = menu.appendChild(document.createElement('h4'));
        heading.innerText = "My Dinner";
    }

    afterRender() {
    }
}