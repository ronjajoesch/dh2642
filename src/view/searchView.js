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
        const sideMenu = this.container.querySelector(".row").appendChild(document.createElement('div'));
        sideMenu.className = "col-xs-12 col-sm-5 col-md-5 col-lg-4";
        const heading = sideMenu.appendChild(document.createElement('h4'));
        heading.innerText = "My Dinner";

        const people = sideMenu.appendChild(document.createElement('p'));

        let select= '<text>People</text><select class="value-num-guests">';
        for(let i=1; i<11; i++){
          select += '<option value='+i+'>'+i+'</option>'
        }
        select += '</select>';

        people.innerHTML = select;

        const tableDiv = sideMenu.appendChild(document.createElement('div'));

        tableDiv.innerHTML = `
          <table class="table">
            <thead>
              <tr>
                <th>Dish Name</th>
                <th >Cost</th>
              </tr>
            </thead>
            <tbody id="dishes">
              <tr>
                <td class="value-starter-name">XXX</td>
                <td class="value-starter-value">Kr 100</td>
              </tr>
              <tr>
                <td class="value-main-course-name">YYY</td>
                <td class="value-main-course-value">Kr 100</td>
              </tr>
              <tr>
                <td class="value-dessert-name">ZZZ</td>
                <td class="value-dessert-value">Kr 400</td>
              </tr>
              <tr>
                <td></td>
                <td class="value-total-price">Kr 400</td>
              </tr>
            </tbody>
          </table>`;


      const buttonDiv = sideMenu.appendChild(document.createElement('div'));
      buttonDiv.innerHTML = `<button id="startBtn" type="button" class="btn btn-md btn-primary">Confirm dinner</button>`;

      this.afterRender();
  }
  
  afterRender() {
      let loadingIndicator = document.getElementById("loader");
      loadingIndicator.style.display = "none";
  }
}