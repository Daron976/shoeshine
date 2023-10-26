"use client";
// import Link from "next/link";
import styles from "./authentication.module.css";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Image from "next/image";
import flicker from "../../../public/flicker.png";

export default function Authenticate() {
  const [toggle, setToggle] = useState(false);
  const [none, setNone] = useState(false);
  return (
    <>
      <main className={styles.main}>
        <section className={`${styles.authContainer} grid`}>
          <div
            className={
              toggle
                ? `${styles.coverImage} ${styles.right} flex`
                : `${styles.coverImage} flex`
            }
          >
            <div className={styles.filterDiv}></div>
            <Image
              src={flicker}
              width={400}
              height={350}
              quality={100}
              alt="art work"
              className={
                toggle ? `${styles.signUpImage}` : `${styles.loginImage}`
              }
            />
          </div>
          <section
            className={
              toggle
                ? `${styles.authenticate} ${styles.left} flex`
                : `${styles.authenticate} flex`
            }
          >
            <h1>{none ? "Welcome Back" : "Lets get Started"}</h1>
            <form action="" className={`${styles.authenticateForm} flex`}>
              <input
                type="input"
                name="username"
                placeholder="Username"
                id="username"
                className={none ? "none" : ""}
              />
              <input type="input" name="email" placeholder="Email" id="email" />
              <input
                type="input"
                name="pword"
                placeholder="Password"
                id="pword"
              />
              <button
                type="button"
                name="Login"
                className={`${styles.authenticateBtn} btn`}
              >
                {none ? "Sign In" : "Sign Up"}
              </button>
              <button
                type="button"
                name="redirectBtn"
                className={`${styles.redirect}`}
                onClick={() => {
                  if (!toggle) {
                    setToggle(true);
                    setTimeout(() => {
                      setNone(true);
                    }, 350);
                  }
                  if (toggle) {
                    setToggle(false);
                    setTimeout(() => {
                      setNone(false);
                    }, 350);
                  }
                }}
              >
                <em>
                  {toggle
                    ? "Not a member? Sign Up..."
                    : "Already a member? Sign In..."}
                </em>
              </button>
            </form>
          </section>
        </section>
      </main>
    </>
  );
}
