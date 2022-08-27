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
  
  export { renderContactPage };