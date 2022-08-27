/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (() => {

const pageLoad = (() => {

  const contentContainer = document.querySelector("#content");
  
    const header = document.createElement("header");
    header.innerHTML = `
    <nav>
    <h2>Italian...° healthy Food</h2>
    <a href="#" class="hamburger">
      <span class="line line1"></span>
      <span class="line line2"></span>
      <span class="line line3"></span>
    </a>
    <ul class="links">
      <li data-tab-target="#home" class="tab red">Home</li>
      <li data-tab-target="#menu" class="tab">Menu</li>
      <li data-tab-target="#contact" class="tab">Contact us</li>
    </ul>
  </nav>`;
  
      contentContainer.appendChild(header)
  })();

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHomePage": () => (/* binding */ renderHomePage)
/* harmony export */ });
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
  
  

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderMenuPage": () => (/* binding */ renderMenuPage)
/* harmony export */ });
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
  
  

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderContactPage": () => (/* binding */ renderContactPage)
/* harmony export */ });
const renderContactPage = (() => {

  const contentContainer = document.querySelector("#content");
    const contact = document.createElement("div");
    contact.setAttribute("id", "contact");
    contact.setAttribute("data-tab-content", "");
    contact.innerHTML = `
      <div class="hero">
      <h1>Contact us</h1>
    </div>
    <div class="contact-container">
      <div class="info">
        <div class="address">
          <p>
            <i class="fi-xnsuxl-map-marker-solid"></i>Carr.11 # 82 Ave<br />
            Bogota. Colombia
          </p>
        </div>
        <div class="hours">
          <p>
            <i class="fi-cnsuhl-clock-solid"></i
            ><span>Mon-Thurs:</span> 10 am-10 pm<br /><span>Weekends:</span
            >10 am-1 am
          </p>
        </div>
        <div class="phone">
          <p><i class="fi-xnsrxl-phone-solid"></i>(57)-320 2948053</p>
        </div>
        <div class="contact-form">
          <form onsubmit="return false">
            <h3><i class="fi-xwsuxl-envelope-solid"></i>Message us</h3>
            <div class="input-box">
              <input type="text" required />
              <span>Full Name</span>
            </div>
            <div class="input-box">
              <input type="text" required />
              <span>Email</span>
            </div>
            <div class="input-box">
              <textarea required></textarea>
              <span>Type your message...</span>
            </div>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
      <iframe
        src="<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m8!1m3!1d7953.168507931215!2d-74.0597101!3d4.6679677!3m2!1i1024!2i768!4f13.1!4m12!3e3!4m4!1s0x8e3f9af5539e0589%3A0x58f8536449f01c72!3m2!1d4.666848!2d-74.05257259999999!4m5!1s0x8e3f9af5539e0589%3A0x58f8536449f01c72!2sAndino%20Shopping%20Mall%2C%20Bogot%C3%A1%2C%20Colombia!3m2!1d4.666848!2d-74.05257259999999!5e0!3m2!1sen!2sco!4v1661573632849!5m2!1sen!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>"
        width="600"
        height="450"
        frameborder="0"
        style="border: 0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>`;
  
    contentContainer.appendChild(contact);
  })();
  
  

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pageload__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);





const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
const burger = document.querySelector(".hamburger");

burger.addEventListener("click", () => {
  document.querySelector("ul").classList.toggle("active");
  burger.classList.toggle("toggle");
});

tabs.forEach((tab) =>
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("red");
    });
    tab.classList.add("red");
    target.classList.add("active");
  })
);

document.querySelector(".order-now").addEventListener("click", () => {
  document.querySelector(`[data-tab-target="#menu"]`).classList.add("red");
});

document.querySelector(`[type="submit"]`).addEventListener("click", () => {
  document.querySelector("form").reset();
});

console.log(`Today is ${new Date().toUTCString()}. Very nice.`);
})();

/******/ })()
;