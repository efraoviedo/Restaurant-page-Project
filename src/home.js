const renderHomePage = (() => {

  const contentContainer = document.querySelector("#content");
  
    const home = document.createElement("div");
    home.classList.add("tab-content")
    home.innerHTML = `<div id="home" class="active" data-tab-content>
    <div class="hero">
      <h1>Restaurant Gourmet Italian Food!</h1>
      <p>The best in the World!</p>
      <div class="btn-container">
        <a data-tab-target="#menu" class="order-now">Order Now</a>
      </div>
    </div>
    <div class="info">
      <div class="address">
        <span><i class="fi-xnsuxl-map-marker-solid"></i></span>
        <p>Carr.11 # 82 Ave<br />Bogota. Colombia</p>
      </div>
      <div class="hours">
        <span><i class="fi-cnsuhl-clock-solid"></i></span>
        <p>
          <span>Mon-Thurs:</span>10 am-10 pm<br /><span>Weekends:</span
          >10 am-1 am
        </p>
      </div>
    </div>
  </div>`;
  
    contentContainer.appendChild(home);
  })();
  
  export { renderHomePage };