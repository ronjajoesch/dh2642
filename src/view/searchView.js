class SearchView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        model.addObserver(this);
    }

    update(model, changeDetails){
        // redraw just the portion affected by the changeDetails
        // or remove all graphics in the view, read the whole model and redraw
        if(changeDetails.type === "nGuest"){
            this.changeNumGuests(model);
        }
        if(changeDetails.type === "menu"){
            this.displayMenuSelected(model);

        }
    }


    render(id) {
      let menu = this.model.getFullMenu();

        const sideMenu = this.container.querySelector(".row").appendChild(document.createElement('div'));
        sideMenu.setAttribute('id',id);
        sideMenu.className = "col-xs-12 col-sm-5 col-md-5 col-lg-4";
        sideMenu.setAttribute("id","sideBarView");
        const heading = sideMenu.appendChild(document.createElement('h4'));
        heading.innerText = "My Dinner";

        const people = sideMenu.appendChild(document.createElement('p'));

        let select= '<select id="num-guests" class="value-num-guests">';
        for(let i=1; i<11; i++){
          select += '<option value='+i+'>'+i+'</option>'
        }
        select += '</select>';
        people.innerHTML = select;

        this.changeNumGuests(this.model);

        const tableDiv = sideMenu.appendChild(document.createElement('div'));
        tableDiv.setAttribute("id","dishItems");
        const table = tableDiv.appendChild(document.createElement("table"));
        table.className = "table";
        const thead = table.appendChild(document.createElement("thead"));
        const tr1 = thead.appendChild(document.createElement("tr"));     
        const th1 = tr1.appendChild(document.createElement("th"));   
        th1.innerText="Dish Name";
        const th2 = tr1.appendChild(document.createElement("th"));
        th2.innerText = "Cost";

        const tbody = table.appendChild(document.createElement("tbody"));
        tbody.setAttribute("id","tbodyMenu");
        this.displayMenuSelected(this.model);

      const buttonDiv = sideMenu.appendChild(document.createElement('div'));
      buttonDiv.innerHTML = `<button id="startBtn" type="button" class="btn btn-md btn-primary">Confirm dinner</button>`;


        this.afterRender();
  }

  changeNumGuests(model){
      let dropObject = document.getElementById("num-guests");
      dropObject.value = model.getNumberOfGuests();
  }

  displayMenuSelected(model){
      let totalPrice = 0;
      let menu = model.getFullMenu();
      const tbody = document.getElementById("tbodyMenu");

      menu.forEach(el => {
          tbody.setAttribute("id","dishes");
          const tr2 = tbody.appendChild(document.createElement("tr"));
          const td2 = tr2.appendChild(document.createElement("td"));
          td2.className="value-main-course-name"; //TODO change to actual type
          td2.innerText=el.title;
          const td3 = tr2.appendChild(document.createElement("td"));
          td3.className="value-starter-value"; //TODO change to actual type
          td3.innerText="SEK " + el.pricePerServing;
          totalPrice += el.pricePerServing;
      });
      const tr3 = tbody.appendChild(document.createElement("tr"));
      const td4 = tr3.appendChild(document.createElement("td"));
      const totalDiv = td4.appendChild(document.createElement("div"));
      const totalText =totalDiv.appendChild(document.createElement("h5"));
      totalText.innerText="Total Cost: SEK";
      const totalValue = totalDiv.appendChild(document.createElement("h5"));
      totalValue.className="value-total-price";
      totalValue.innerText = ""+totalPrice;
  }
  
  afterRender() {
      let loadingIndicator = document.getElementById("loader");
      loadingIndicator.style.display = "none";
  }

  show = function(id) {
    document.getElementById(id).style.display="block"; 
  };

hide = function(id) {
  document.getElementById(id).style.display="none";;
  };
}