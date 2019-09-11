class DetailsView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

    render() {
    }

    afterRender() {
        let loadingIndicator = document.getElementById("loader");
        loadingIndicator.style.display = "none";
    }
}