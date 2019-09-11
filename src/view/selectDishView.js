class SelectDishView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

    get_image_element(src, width, height) {
        let image = document.createElement("img");
        image.src = src;
        image.width = width;
        image.height = height;
        return image;
    }

    make(element, type, className, children) {
        if (children instanceof Array) {
            children.forEach(function (child) {
                let childElement = document.createElement(type);
                childElement.className = className;
                childElement.append(child);
                element.appendChild(childElement);
            });
        } else {
            // probably one single string, to create a text Node, or one single Element  
            element.append(children);
        }
        return element;
    }

    // use: document.body.append(make("div", make("ol", ["apple", "mango", "orange"].map(x => make("li", x))))
    makeListTree(type, children) {
        const element = document.createElement(type);
        if (children instanceof Array) {
            element.append(children); // ES6 equivalent to element.append.apply (element, children)  
        } else {
            // probably one single string, to create a text Node, or one single Element  
            element.append(children);
        }
        return element;
    }

    render() {
        const selectDishDiv = this.container.querySelector(".row").appendChild(document.createElement('div'));
        selectDishDiv.className = "col-xs-12 col-sm-7 col-md-7 col-lg-8";
        const heading = selectDishDiv.appendChild(document.createElement('h4'));
        heading.innerText = "My Dinner";

        const findDishDiv = selectDishDiv.appendChild(document.createElement('div'));
        findDishDiv.className = "row";
        const contentDiv = selectDishDiv.appendChild(document.createElement('div'));
        contentDiv.className = "row";

        const inputDiv = findDishDiv.appendChild(document.createElement("div"));
        const input = inputDiv.appendChild(document.createElement('input'))
        input.type = "text";
        input.id = "query";

        const selectTypeDiv = findDishDiv.appendChild(document.createElement("div"));
        //TODO check which type of dished exist. Add all options.
        selectTypeDiv.innerHTML = '<select class="type-of-dish">' +
            '<option value="Starter">Starter</option>' +
            '<option value="Main Course">Main Course</option>' +
            '<option value="Dessert">Dessert</option></select>';




        this.model.getAllDishes().then((data) => {

              let imagesSrcs = data.map(function (dish) {
                //return "images/"+dish.image;  //TODO change to actual images
                return "/dh2642/images/bakedbrie.jpg";
            });

             let titles =  data.map(function (dish) {
                return dish.title;
            });

            var self = this;
            titles.forEach(function (title, index) {
                let childElement = document.createElement("div");
                childElement.className = "dish";
                let img;
                img = self.get_image_element(imagesSrcs[index], 100, 100);
                childElement.appendChild(img);
                let captionElement = document.createElement("figcaption");
                captionElement.innerText = title;
                childElement.appendChild(captionElement);
                contentDiv.appendChild(childElement);
            });
        });


        this.afterRender();


    }

    afterRender() {

        let loadingIndicator = document.getElementById("loader");
        loadingIndicator.style.display = "none";



    }
}