import React from "react";

function Contact() {
  return (
    <section id="contact">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4496.287911945966!2d49.811703064253464!3d40.369889741890134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dc397c01f75%3A0xf0294b9a0b29a77f!2z0JDQt9C10YDQsdCw0LnQtNC20LDQvdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LDRgNGF0LjRgtC10LrRgtGD0YDRiyDQuCDRgdGC0YDQvtC40YLQtdC70YzRgdGC0LLQsA!5e0!3m2!1sru!2saz!4v1701631700019!5m2!1sru!2saz"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="contact-content">
        <div className="contacts">
          <div className="contact-item">
            <i className="fa-light fa-house"></i>
            <div className="contact-item-text">
              <span>California, United States</span>
              <p>Santa monica bullevard</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fa-light fa-phone"></i>
            <div className="contact-item-text">
              <span>00 (440) 9865 562</span>
              <p>Mon to Fri 9am to 6 pm</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fa-light fa-envelope"></i>
            <div className="contact-item-text">
              <span>support@colorlib.com</span>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
        <form>
          <div>
            <input type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Enter email address" />
            <input type="text" placeholder="Enter Subject" />
          </div>
          <div>
            <textarea
              placeholder="Enter Message"
              cols="30"
              rows="10"
            ></textarea>
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
