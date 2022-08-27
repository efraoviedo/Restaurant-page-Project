const renderMenuPage = (() => {

  const contentContainer = document.querySelector("#content");
    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    menu.setAttribute("data-tab-content", "");
    menu.innerHTML = `
    <div class="hero">
    <h1>Menu</h1>
    <img src="" alt="" />
  </div>
  <div class="menu-container">
    <div class="menu-item">
      <img src="./dist/images/pastaSalad.jpg" alt="" />
      <div class="item-content">
        <h4>Pasta Salad: <span>$15.59</span></h4>
        <p>
          Pasta, tomato, onions, lettuce, and pepper
          recipe.
        </p>
      </div>
    </div>
    <div class="menu-item">
      <img src="./images/pastaSalad.jpg" alt="" width="250" height="250" />
      
      <div class="item-content">
        <h4>Pasta Salad: <span>$12.99</span></h4>
        <p>Pasta with great ingredients.</p>
      </div>
    </div>
    <div class="menu-item">
      <img src="./images/macarrones.png" alt="" />
      <div class="item-content">
        <h4> Macarrons Double Cheese: <span>$15.40</span></h4>
        <p>Some special with our cheese, but with an extra patty.</p>
      </div>
    </div>
    <div class="menu-item">
      <img src="./espageti/Salad.jpg" alt="" />
      <div class="item-content">
        <h4>Spagueti: <span>$14.99</span></h4>
        <p>Pasta steak healthy just how you like it.</p>
      </div>
    </div>
    <div class="menu-item">
      <img src="./images/macarrones.png" alt="" />
      <div class="item-content">
        <h4>delicious Macarrons, tomato sauces and cheese <span>$17.19</span></h4>
        <p>best plate.</p>
      </div>
    </div>
    <div class="menu-item">
      <img src="./images/lasagña.png" alt="" />
      <div class="item-content">
        <h4>Grilled Cheese pasta: <span>$24.20</span></h4>
        <p>
        big grilled cheese lasagña, special
          sauce.
        </p>
      </div>
    </div>
    <div class="menu-item">
      <img src="./images/bologñesa.jpg" alt="" />
      <div class="item-content">
        <h4>Steak pasta: <span>$17.09</span></h4>
        <p>
          Your prefered bologñesa.
        </p>
      </div>
    </div>
    <div class="menu-item">
      <img src="./images/french-fries.png" alt="" />
      <div class="item-content">
        <h4>French Fries: <span>$3.99</span></h4>
        <p>
          spetial receip
        </p>
      </div>

    </div>

  </div>`;
  
    contentContainer.appendChild(menu);
  })();
  
  export { renderMenuPage };