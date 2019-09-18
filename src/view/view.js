class View{
    constructor() {
    }

    show(divId) {
        document.getElementById(divId).style.display = "block";
    };

    hide(divId) {
        document.getElementById(divId).style.display = "none";
    };
}