//TODO: implement and export a class
//named ProgressBar that renders a Bootstrap
//progress bar with a width matching the value
//passed to the class constructor
//https://getbootstrap.com/docs/4.0/components/progress/
//<div class="progress">
//  <div class="progress-bar progress-bar-striped progress-bar-animated"></div>
//</div>

export default class ProgressBar {
    constructor(value) {
        this.value = value || 100;
    }
    render() {
        let divProg = document.createElement("div");
        divProg.classList.add("progress");

        let divBar = divProg.appendChild(document.createElement("div"));
        divBar.classList.add("progress-bar", "progress-bar-striped", "progress-bar-animated");
        divBar.style.width = this.value + "%";

        return divProg;
    }
}