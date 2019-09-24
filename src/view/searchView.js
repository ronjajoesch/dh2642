class SearchView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        model.addObserver(this);
        this.confirmButton = null;
        this.selectGuests = null;
    }

    update(model, changeDetails) {
        // redraw just the portion affected by the changeDetails
        // or remove all graphics in the view, read the whole model and redraw
        if (changeDetails.type === "nGuest") {
            this.changeNumGuests(model);
        }
        if (changeDetails.type === "menu") {
            this.displayMenuSelected(model);

        }
    }


    render(id) {
        let menu = this.model.getFullMenu();

        const sideMenu = this.container.querySelector(".row").appendChild(document.createElement('div'));
        sideMenu.setAttribute('id', id);
        sideMenu.className = "col-xs-12 col-sm-5 col-md-5 col-lg-4";
        const heading = sideMenu.appendChild(document.createElement('h4'));
        heading.innerText = "My Dinner";

        const people = sideMenu.appendChild(document.createElement('p'));

        let select = '<select id="num-guests" class="value-num-guests">';
        for (let i = 1; i < 11; i++) {
            select += '<option value=' + i + '>' + i + '</option>'
        }
        select += '</select>';
        people.innerHTML = select;

        const tableDiv = sideMenu.appendChild(document.createElement('div'));
        tableDiv.setAttribute("id", "dishItems");
        const table = tableDiv.appendChild(document.createElement("table"));
        table.className = "table";
        const thead = table.appendChild(document.createElement("thead"));
        const tr1 = thead.appendChild(document.createElement("tr"));
        const th1 = tr1.appendChild(document.createElement("th"));
        th1.innerText = "Dish Name";
        const th2 = tr1.appendChild(document.createElement("th"));
        th2.innerText = "Cost";

        const tbody = table.appendChild(document.createElement("tbody"));
        tbody.setAttribute("id", "tbodyMenu");

        const totalDiv = sideMenu.appendChild(document.createElement("div"));
        totalDiv.setAttribute("id","total-price-side-menu")

        this.displayMenuSelected(this.model);
        this.changeNumGuests(this.model);

        const buttonDiv = sideMenu.appendChild(document.createElement('div'));
        buttonDiv.innerHTML = `<button id="confirmBtn" type="button" class="btn btn-md btn-primary">Confirm dinner</button>`;

        this.confirmButton = buttonDiv.querySelector("#confirmBtn");
        this.afterRender();
    }

    changeNumGuests(model) {
        let dropObject = document.getElementById("num-guests");
        this.selectGuests = dropObject;
        dropObject.value = model.getNumberOfGuests();
        this.displayMenuSelected(model);
    }

    displayMenuSelected(model) {
        let menu = model.getFullMenu();
        const tbody = document.getElementById("tbodyMenu");
        tbody.innerHTML = "";
        menu.forEach(el => {
            const tr2 = tbody.appendChild(document.createElement("tr"));
            const td2 = tr2.appendChild(document.createElement("td"));
            td2.className = "value-main-course-name"; //TODO change to actual type
            td2.innerText = el.title;
            const td3 = tr2.appendChild(document.createElement("td"));
            td3.className = "value-starter-value"; //TODO change to actual type
            td3.innerText = "SEK " + el.pricePerServing*model.getNumberOfGuests();
        });

        this.displayTotal(model);
    }

    displayTotal(model) {
        const totalDiv = this.container.querySelector("#total-price-side-menu");
        totalDiv.innerHTML="";
        const totalText = totalDiv.appendChild(document.createElement("h5"));
        totalText.innerText = "Total Cost: SEK";
        const totalValue = totalDiv.appendChild(document.createElement("h5"));
        totalValue.className = "value-total-price";
        totalValue.innerText = "" + model.getTotalMenuPrice();
    }

    afterRender() {
        let loadingIndicator = document.getElementById("loader");
        loadingIndicator.style.display = "none";
    }
}