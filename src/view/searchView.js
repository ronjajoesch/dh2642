class SearchView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
    }


    render() {
      var menu = this.model.getFullMenu();

        const sideMenu = this.container.querySelector(".row").appendChild(document.createElement('div'));
        sideMenu.setAttribute('id','searchView');
        sideMenu.className = "col-xs-12 col-sm-5 col-md-5 col-lg-4";
        sideMenu.setAttribute("id","sideBarView");
        const heading = sideMenu.appendChild(document.createElement('h4'));
        heading.innerText = "My Dinner";

        const people = sideMenu.appendChild(document.createElement('p'));

        let select= '<select id="some_Id" class="value-num-guests">';
        for(let i=1; i<11; i++){
          select += '<option value='+i+'>'+i+'</option>'
        }
        select += '</select>';


        people.innerHTML = select;
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
        let totalPrice = 0;
        const tbody = table.appendChild(document.createElement("tbody"));

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

      const buttonDiv = sideMenu.appendChild(document.createElement('div'));
      buttonDiv.innerHTML = `<button id="startBtn" type="button" class="btn btn-md btn-primary">Confirm dinner</button>`;

      this.afterRender();
      
      let dropObject = document.getElementById("some_Id");
      dropObject.setAttribute("id","value-num-guests");
      dropObject.value = this.model.getNumberOfGuests();
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