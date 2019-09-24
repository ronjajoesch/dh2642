class HomeView {
    constructor(container) {
        this.container = container;
        this.startBtn = null;
    }
    // An example of creating HTML declaratively. Think about the pros and cons of this approach.
    render(id) {
            
        var defaultmessage = getCookie('homeMessage');
        if(defaultmessage == null || defaultmessage == undefined){
            setCookie('homeMessage',welcomeMessage,7);
            defaultmessage = getCookie('homeMessage');
        }
        const selectDishDiv = this.container.querySelector("#no-row");
        const mainDiv = selectDishDiv.appendChild(document.createElement('div'));
        mainDiv.setAttribute("id", id);

        const insideDiv = mainDiv.appendChild(document.createElement('div'));
        insideDiv.className = "container text-center full-vh d-flex align-items-center justify-content-center flex-column";
        const p = insideDiv.appendChild(document.createElement("p"));
        //
        p.innerText = defaultmessage;
        console.log('the default message that comes from cookie is', defaultmessage);
        //
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

    // for manging cookies
function setCookie(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }
function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
const welcomeMessage = "Welcome to our app, this message has been stored in your browser cookie for 7 days!";