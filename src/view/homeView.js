class HomeView {
    constructor(container) {
        this.container = container;
        this.startBtn = null;
    }

    // An example of creating HTML declaratively. Think about the pros and cons of this approach.
    render(id) {
        const selectDishDiv = this.container.querySelector("#no-row");
        const mainDiv = selectDishDiv.appendChild(document.createElement('div'));
        mainDiv.setAttribute("id", id);

        const insideDiv = mainDiv.appendChild(document.createElement('div'));
        insideDiv.className = "container text-center full-vh d-flex align-items-center justify-content-center flex-column";
        const p = insideDiv.appendChild(document.createElement("p"));
        p.innerText = "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus " +
            "vel laoreet orci. Nullam ut iaculis diam. Aliquam\n          " +
            "magna nulla, congue ut elementum hendrerit, dignissim at mauris. Quisque ac felis " +
            "sed nibh elementum euismod a sit amet\n          arcu. Maecenas a efficitur leo.";

        const buttonDiv = insideDiv.appendChild(document.createElement('div'));
        buttonDiv.className="text-center p-max-width";
        const button = buttonDiv.appendChild(document.createElement("button"));
        button.setAttribute("id","startBtn");
        button.setAttribute("type","button");
        button.className="btn btn-lg btn-primary";
        button.innerText="Create new dinner";

        this.afterRender();
        this.startBtn = button;
        return this;
    }

    afterRender() {
        let loadingIndicator = document.getElementById("loader");
        loadingIndicator.style.display = "none";
    }

}