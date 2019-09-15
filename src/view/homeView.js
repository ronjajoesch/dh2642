class HomeView {
  constructor(container) {
    this.container = container;
    this.startBtn = null;
  }

  // An example of creating HTML declaratively. Think about the pros and cons of this approach.
  render() {
    var content = /* template */ `
    <div class="header d-flex align-items-center justify-content-center" id="homeView">
      <h1>Dinner Planner</h1>
    </div>
        <div id="loader" class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
    </div>
    <div class="container text-center full-vh d-flex align-items-center justify-content-center flex-column">
        <p class="text-center p-max-width">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel laoreet orci. Nullam ut iaculis diam. Aliquam
          magna nulla, congue ut elementum hendrerit, dignissim at mauris. Quisque ac felis sed nibh elementum euismod a sit amet
          arcu. Maecenas a efficitur leo.
        </p>
        <div class="spacing-medium"></div>
        <button id="startBtn" type="button" class="btn btn-lg btn-primary">Create new dinner</button>
      </div>
       <div class="row"></div>
    `;
    this.container.innerHTML = content;
    this.afterRender();
  }

  afterRender() {
    this.startBtn = this.container.getElementsByClassName("#startBtn");
    let loadingIndicator = document.getElementById("loader");
   // loadingIndicator.style.display = "none";
  }

  show = function() {
    this.style.display = 'block'; // try display = 'inline'
  };

hide = function() {
    this.style.display = 'none';
  };
}