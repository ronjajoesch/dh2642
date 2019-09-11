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
        
        menu[0].forEach(el => {
          
          const tbody = table.appendChild(document.createElement("tbody"));
          tbody.setAttribute("id","dishes");
          const tr2 = tbody.appendChild(document.createElement("tr"));   
          const td2 = tr2.appendChild(document.createElement("td"));
          td2.className="value-starter-name";
          td2.innerText=el.title;
          const td3 = tr2.appendChild(document.createElement("td"));
          td3.className="value-starter-value";
          td3.innerText=el.pricePerServing;
        });




        // const tbody = table.appendChild("tbody");
        // tbody.setAttribute = ('id','dishes');
        // const tr3 = table.appendChild(document.createElement("tr"));
        // const td1 = tr3.appendChild(document.createElement("td"));
        // td1.innerText = "something";

 
        // tableDiv.innerHTML = `
        //   <table class="table">
        //     <thead>
        //       <tr>
        //         <th>Dish Name</th>
        //         <th >Cost</th>
        //       </tr>
        //     </thead>
        //     <tbody id="dishes">
        //       <tr>
        //         <td class="value-starter-name">++</td>
        //         <td class="value-starter-value">Kr 100</td>
        //       </tr>
        //       <tr>
        //         <td class="value-main-course-name">YYY</td>
        //         <td class="value-main-course-value">Kr 100</td>
        //       </tr>
        //       <tr>
        //         <td class="value-dessert-name">ZZZ</td>
        //         <td class="value-dessert-value">Kr 400</td>
        //       </tr>
        //       <tr>
        //         <td></td>
        //         <td class="value-total-price">Kr 400</td>
        //       </tr>
        //     </tbody>
        //   </table>`;


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