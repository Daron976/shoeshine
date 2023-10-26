"use client";
import Link from "next/link";
import "./globals.css";
import { IconContext } from "react-icons";
import { AiOutlineHeart } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuContact2 } from "react-icons/lu";
import { CiFacebook, CiInstagram } from "react-icons/ci";
// import { useEffect } from "react";

export default function Template({ children }) {
  // useEffect(() => {
  //   async function merch() {
  //     const res = await fetch("http://127.0.0.1:5000/api/v1/merch");
  //     // const res = await fetch("https://kontests.net/api/v1/all");

  //     if (!res) {
  //       throw new Error("Something went wrong");
  //     }

  //     // console.log(res.json());
  //     return res.json();
  //   }

  //   const response = merch();
  //   // console.log(merch());

  //   if (response) console.log(response[0]);
  // });
  return (
    <>
      <header>
        <nav className="nav-bar flex">
          <span>
            <em>Premium Q</em>
          </span>
          <ul className="ul-content ul-cat flex">
            <li className="category">
              <Link href="/stock">Stock</Link>
            </li>
            <li className="category">
              <Link href="/brands">Brands</Link>
            </li>
            <li className="category">
              <Link href="/men">Men</Link>
            </li>
            <li className="category">
              <Link href="/women">Women</Link>
            </li>
          </ul>
          <ul className="ul-content ul-user flex">
            <li className="user-data">
              <Link href="/wishlist">
                <IconContext.Provider
                  value={{ size: "1.5rem", className: "nav-icon" }}
                >
                  <AiOutlineHeart />
                </IconContext.Provider>
              </Link>
            </li>
            <li className="user-data">
              <Link href="/cart">
                <IconContext.Provider
                  value={{ size: "1.5rem", className: "nav-icon" }}
                >
                  <MdOutlineShoppingCart />
                </IconContext.Provider>
              </Link>
            </li>
            <li className="user-data none">
              <Link href="/contact">
                <IconContext.Provider
                  value={{ size: "1.5rem", className: "nav-icon" }}
                >
                  <LuContact2 />
                </IconContext.Provider>
              </Link>
            </li>
            <li className="user-data">
              <Link href="/login">
                <IconContext.Provider
                  value={{ size: "1.5rem", className: "nav-icon" }}
                >
                  <FiLogIn />
                </IconContext.Provider>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
      <footer className="flex">
        <div className="footerContainer flex">
          <p>Premium Q</p>
          <div className="merchLinks flex">
            <Link href={"/"}>Merchandise</Link>
            <Link href={"/"}>Returns</Link>
            <Link href={"/"}>Shipping</Link>
          </div>
          <div className="aboutLinks flex">
            <Link href={"/"}>About Us</Link>
            <Link href={"/"}>FAQs</Link>
            <Link href={"/"}>Contact Us</Link>
          </div>
          <div className="socials flex">
            <h3>Socials</h3>
            <div className="socialLinks flex">
              <Link href={"/"}>
                <IconContext.Provider
                  value={{ size: "1.5rem", className: "nav-icon" }}
                >
                  <CiFacebook />
                </IconContext.Provider>
              </Link>
              <Link href={"/"}>
                <IconContext.Provider
                  value={{ size: "1.5rem", className: "nav-icon" }}
                >
                  <CiInstagram />
                </IconContext.Provider>
              </Link>
            </div>
          </div>
        </div>
        <div className="footerRights flex">
          <p>Premium products at regular prices</p>
          <p>©2023 Premium Q. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
