class SearchView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

    makeTree(type, children) {
        const element = document.createElement(type);
        if (children instanceof Array) {
            element.append(...children); // ES6 equivalent to element.append.apply (element, children)  
        } else {
            // probably one single string, to create a text Node, or one single Element  
            element.append(children);
        }
        return element;
    }


    render() {
      var menu = this.model.getFullMenu();
      console.log('THE TEST IS',menu);
        const sideMenu = this.container.querySelector(".row").appendChild(document.createElement('div'));
        sideMenu.className = "col-xs-12 col-sm-5 col-md-5 col-lg-4";
        const heading = sideMenu.appendChild(document.createElement('h4'));
        heading.innerText = "My Dinner";

        const people = sideMenu.appendChild(document.createElement('p'));

        let select= '<select id="some_Id" class="value-num-guests">';
        for(let i=1; i<11; i++){
          select += '<option value='+i+'>'+i+'</option>'
        }
        select += '</select>';

        // select.value = this.model.nGuest;

        people.innerHTML = select;
        const tableDiv = sideMenu.appendChild(document.createElement('div'));
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
          td2.className="value-starter-name";
          td2.innerText=el.title;
          const td3 = tr2.appendChild(document.createElement("td"));
          td3.className="value-starter-value";
          td3.innerText="SEK " + el.pricePerServing;
          totalPrice += el.pricePerServing;
        });
         const tr3 = tbody.appendChild(document.createElement("tr"));   
         const td4 = tr3.appendChild(document.createElement("td"));
        var displayPrice = parseInt(totalPrice, 10);
         td4.innerText="Total Cost: "+ +displayPrice;

      const buttonDiv = sideMenu.appendChild(document.createElement('div'));
      buttonDiv.innerHTML = `<button id="startBtn" type="button" class="btn btn-md btn-primary">Confirm dinner</button>`;

      this.afterRender();
      
      let dropObject = document.getElementById("some_Id");
      dropObject.value = this.model.nGuest;
  }
  
  afterRender() {
      let loadingIndicator = document.getElementById("loader");
      loadingIndicator.style.display = "none";
  }
}