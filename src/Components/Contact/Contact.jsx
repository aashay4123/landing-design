import React from "react";

function Contact() {
  return (
    <div id="contact">
      <section class="section-book">
        <div class="row">
          <div class="book">
            <div class="book__form">
              <form action="#" class="form">
                <div class="u-margin-bottom-med">
                  <h2 class="heading-secondary">Contact us</h2>
                </div>
                <div class="form__group">
                  <input
                    type="text"
                    placeholder="full name"
                    required
                    class="form__input"
                    id="name"
                  />
                  <label class="form__label" for="name">
                    name
                  </label>
                </div>
                <div class="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    class="form__input"
                    id="email"
                  />
                  <label class="form__label" for="email">
                    email
                  </label>
                </div>

                <div class="form__group">
                  <input
                    type="text"
                    placeholder="Message"
                    required
                    class="form__input"
                    id="name"
                  />
                  <label class="form__label" for="name">
                    Message
                  </label>
                </div>

                <div class="form__group u-margin-bottom-med">
                  <div class="form__radio-group">
                    <input
                      type="radio"
                      class="form__radio-input"
                      id="home"
                      name="custom type"
                    />
                    <label for="home" class="form__radio-label">
                      <span class="form__radio-button"> </span>
                      For home
                    </label>
                  </div>
                  <div class="form__radio-group">
                    <input
                      type="radio"
                      class="form__radio-input"
                      id="building"
                      name="custom type"
                    />
                    <label for="building" class="form__radio-label">
                      <span class="form__radio-button"> </span>
                      For building
                    </label>
                  </div>
                </div>
                <div class="form__group">
                  <button class="btn btn--green"> Next Step &rarr;</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
