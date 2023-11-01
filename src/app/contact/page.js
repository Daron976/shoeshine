"use client";
import styles from "./contact.module.css";
import { useState } from "react";

export default function Contact() {
  const [fillMsg, setFillMsg] = useState(false);
  const [notValid, setNotValid] = useState(false);
  const [errMsgDisplay, setErrMsgDisplay] = useState(false);

  const [name, setName] = useState(false);
  const [nameVal, setNameVal] = useState("");

  const [email, setEmail] = useState(false);
  const [emailVal, setEmailVal] = useState("");

  const [msg, setMsg] = useState(false);
  const [msgVal, setMsgVal] = useState("");

  const isFilled = (e) => {
    errorDisplay();
    if (name === false || email === false || msg === false || notValid) {
      e.preventDefault();
      setFillMsg(true);
    } else {
      setFillMsg(false);
    }
  };

  const errorDisplay = () => {
    if (name === false || email === false || msg === false) {
      setErrMsgDisplay(true);
    } else if (
      (name === false || email === false || msg === false) &&
      notValid
    ) {
      setErrMsgDisplay(true);
    } else if (name === true && email === true && msg === true && notValid) {
      setErrMsgDisplay(false);
    }
  };

  const emailStructure = (e) => {
    let curEmail = e.target.value;
    if (curEmail.match(emailExp)) {
      setNotValid(false);
    } else {
      setNotValid(true);
    }
  };

  return (
    <>
      <main className={`${styles.wrapper} flex`} data-testid="home">
        <section id="contact" className={`${styles.content} flex`}>
          <div className={styles.contactSubmission}>
            <h1 className="flicker">Get In Touch</h1>
            <form
              action="https://formspree.io/f/mwkzplvb"
              name="contact-form"
              id={styles.formSubmission}
              className={`${styles.contactForm} flex`}
              method="post"
            >
              <div className={`${styles.formInput} flex appear`}>
                <label htmlFor="name">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="glass"
                    placeholder="Name"
                    value={nameVal}
                    onChange={(e) => {
                      setNameVal(e.target.value);
                      setName(true);
                    }}
                  />
                </label>
                <label htmlFor="email">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="glass"
                    placeholder="Email"
                    value={emailVal}
                    onChange={(e) => {
                      setEmailVal(e.target.value);
                      setEmail(true);
                    }}
                    onBlur={emailStructure}
                  />
                </label>
              </div>
              <label htmlFor="message">
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  className="glass appearText"
                  placeholder="Message"
                  value={msgVal}
                  onChange={(e) => {
                    setMsgVal(e.target.value);
                    setMsg(true);
                  }}
                ></textarea>
              </label>
              <div
                className={`${styles.errorMsg} flex flicker`}
                style={{
                  display: fillMsg ? "flex" : "none",
                }}
              >
                <p className="glass">
                  {errMsgDisplay
                    ? "Please ensure that all fields are populated"
                    : "Please insert a valid email address"}
                </p>
              </div>
              <div className={`${styles.formSubmission} flex slide-in-yon`}>
                <button
                  type="submit"
                  id="submit"
                  className={styles.submitBtn}
                  name="submit"
                  onClick={isFilled}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}