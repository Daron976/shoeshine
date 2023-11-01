"use client";
import Link from "next/link";
import { IconContext } from "react-icons";
import { AiOutlineHeart } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";
import { GiExitDoor } from "react-icons/gi";
import { CgMenuRight } from "react-icons/cg";
import shoe from "../../public/men.jpg";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

export default function Template({ children }) {
  const [toggle, setToggle] = useState(false);
  const [toggleWish, setToggleWish] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    if (toggle || toggleWish || toggleMenu) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.removeProperty("overflow");
    }
  }, [toggle, toggleWish, toggleMenu]);

  return (
    <>
      <header>
        <nav className="nav-bar flex">
          <span>
            <Link href={"/"}>
              <em>Premium Q</em>
            </Link>
          </span>
          <ul className="ul-content ul-cat flex">
            <li className="category">
              <Link href="/merch">Merch</Link>
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
              <Link href="/authentication">
                <IconContext.Provider
                  value={{ size: "1.5rem", className: "nav-icon" }}
                >
                  <FiLogIn />
                </IconContext.Provider>
              </Link>
            </li>
            <li className="user-data">
              <button
                type="button"
                name="wishList"
                className="navBtn"
                onClick={() => {
                  setToggleWish(true);
                }}
              >
                <IconContext.Provider
                  value={{ size: "1.5rem", className: "nav-icon" }}
                >
                  <AiOutlineHeart />
                </IconContext.Provider>
              </button>
            </li>
            <li className="user-data">
              <button
                type="button"
                name="cart"
                className="cartOpen navBtn"
                onClick={() => {
                  setToggle(true);
                }}
              >
                <IconContext.Provider
                  value={{ size: "1.5rem", className: "nav-icon" }}
                >
                  <MdOutlineShoppingCart />
                </IconContext.Provider>
              </button>
            </li>
            <li className="user-data">
              <button
                type="button"
                name="cart"
                className="menuToggle navBtn"
                onClick={() => {
                  setToggleMenu(true);
                }}
              >
                <IconContext.Provider
                  value={{ size: "1.5rem", className: "nav-icon" }}
                >
                  <CgMenuRight />
                </IconContext.Provider>
              </button>
            </li>
          </ul>
          <div
            className={
              toggle || toggleWish || toggleMenu ? "cartOverlay" : "none"
            }
          >
            <div
              className={
                toggleMenu ? "cartBar cartBarOpen mobileMenu flex" : "none"
              }
            >
              <div className="cartHeaderContainer flex">
                <h1>Menu</h1>
                <button
                  type="button"
                  name="cart"
                  className="cartClose navBtn"
                  onClick={() => {
                    document
                      .querySelector(".cartBar")
                      .classList.add("cartBarClose");
                    setTimeout(() => {
                      setToggleMenu(false);
                    }, 500);
                  }}
                >
                  <IconContext.Provider
                    value={{ size: "1.5rem", className: "nav-icon" }}
                  >
                    <GiExitDoor />
                  </IconContext.Provider>
                </button>
              </div>
              <ul className="menuItemContainer flex">
                <li className="menuItem">
                  <Link href="/merch">Merch</Link>
                </li>
                <li className="menuItem">
                  <Link href="/men">Men</Link>
                </li>
                <li className="menuItem">
                  <Link href="/women">Women</Link>
                </li>
                <li className="menuItem">
                  <Link href={"/about"}>About Us</Link>
                </li>
                <li className="menuItem">
                  <Link href={"/policy"}>Returns</Link>
                </li>
                <li className="menuItem">
                  <Link href={"/policy"}>Shipping</Link>
                </li>
                <li className="menuItem">
                  <Link href={"/policy"}>Privacy Policy</Link>
                </li>
                <li className="menuItem">
                  <Link href={"/FAQs"}>FAQs</Link>
                </li>
                <li className="menuItem">
                  <Link href={"/contact"}>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className={toggle ? "cartBar cartBarOpen flex" : "none"}>
              <div className="cartHeaderContainer flex">
                <h1>Cart</h1>
                <button
                  type="button"
                  name="cart"
                  className="cartClose navBtn"
                  onClick={() => {
                    document
                      .querySelector(".cartBar")
                      .classList.add("cartBarClose");
                    setTimeout(() => {
                      setToggle(false);
                    }, 500);
                  }}
                >
                  <IconContext.Provider
                    value={{ size: "1.5rem", className: "nav-icon" }}
                  >
                    <GiExitDoor />
                  </IconContext.Provider>
                </button>
              </div>
              <ul className="cartItems">
                <li className="item flex">
                  <button
                    type="button"
                    name="cart"
                    className="navBtn removeBtn"
                  >
                    <IconContext.Provider
                      value={{ size: "1.2rem", className: "cart-icon" }}
                    >
                      <IoMdRemoveCircleOutline />
                    </IconContext.Provider>
                  </button>
                  <div className="cartItemImageCont">
                    <Image
                      src={shoe}
                      width={70}
                      height={70}
                      alt="product item"
                      className="cartItemImage"
                    />
                  </div>
                  <div className="itemDetails flex">
                    <h3>Nike AirForce One</h3>
                    <p className="itemPrice">$ 215</p>
                  </div>
                  <div className="itemQuantity flex">
                    <span className="quantity">0</span>
                    <IconContext.Provider
                      value={{ size: "1.5rem", className: "cart-btn-icon" }}
                    >
                      <IoAddCircleOutline />
                    </IconContext.Provider>
                  </div>
                </li>
                <li className="item flex">
                  <button
                    type="button"
                    name="cart"
                    className="navBtn removeBtn"
                  >
                    <IconContext.Provider
                      value={{ size: "1.2rem", className: "cart-icon" }}
                    >
                      <IoMdRemoveCircleOutline />
                    </IconContext.Provider>
                  </button>
                  <div className="cartItemImageCont">
                    <Image
                      src={shoe}
                      width={70}
                      height={70}
                      alt="product item"
                      className="cartItemImage"
                    />
                  </div>
                  <div className="itemDetails flex">
                    <h3>Nike AirForce One</h3>
                    <p className="itemPrice">$ 215</p>
                  </div>
                  <div className="itemQuantity flex">
                    <span className="quantity">0</span>
                    <IconContext.Provider
                      value={{ size: "1.5rem", className: "cart-btn-icon" }}
                    >
                      <IoAddCircleOutline />
                    </IconContext.Provider>
                  </div>
                </li>
                <li className="item flex">
                  <button
                    type="button"
                    name="cart"
                    className="navBtn removeBtn"
                  >
                    <IconContext.Provider
                      value={{ size: "1.2rem", className: "cart-icon" }}
                    >
                      <IoMdRemoveCircleOutline />
                    </IconContext.Provider>
                  </button>
                  <div className="cartItemImageCont">
                    <Image
                      src={shoe}
                      width={70}
                      height={70}
                      alt="product item"
                      className="cartItemImage"
                    />
                  </div>
                  <div className="itemDetails flex">
                    <h3>Nike AirForce One</h3>
                    <p className="itemPrice">$ 215</p>
                  </div>
                  <div className="itemQuantity flex">
                    <span className="quantity">0</span>
                    <IconContext.Provider
                      value={{ size: "1.5rem", className: "cart-btn-icon" }}
                    >
                      <IoAddCircleOutline />
                    </IconContext.Provider>
                  </div>
                </li>
              </ul>
              <div className="cartCost">
                <div className="total flex">
                  <p>SUB-TOTAL</p>
                  <p className="totalCost">$ 215</p>
                </div>
                <div className="cartBtnContainer flex">
                  <button type="button" name="checkout" className="cartBtn">
                    CHECKOUT
                  </button>
                  <button
                    type="button"
                    name="continueShopping"
                    className="cartBtn"
                    onClick={() => {
                      document
                        .querySelector(".cartBar")
                        .classList.add("cartBarClose");
                      setTimeout(() => {
                        setToggle(false);
                      }, 500);
                    }}
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              </div>
            </div>
            <div
              className={
                toggleWish ? "wishList cartBar cartBarOpen flex" : "none"
              }
            >
              <div className="cartHeaderContainer flex">
                <h1>Wish List</h1>
                <button
                  type="button"
                  name="cart"
                  className="cartClose navBtn"
                  onClick={() => {
                    document
                      .querySelector(".cartBar")
                      .classList.add("cartBarClose");
                    setTimeout(() => {
                      setToggleWish(false);
                    }, 500);
                  }}
                >
                  <IconContext.Provider
                    value={{ size: "1.5rem", className: "nav-icon" }}
                  >
                    <GiExitDoor />
                  </IconContext.Provider>
                </button>
              </div>
              <ul className="cartItems">
                <li className="item flex">
                  <button
                    type="button"
                    name="cart"
                    className="navBtn removeBtn"
                  >
                    <IconContext.Provider
                      value={{ size: "1.2rem", className: "cart-icon" }}
                    >
                      <IoMdRemoveCircleOutline />
                    </IconContext.Provider>
                  </button>
                  <div className="cartItemImageCont">
                    <Image
                      src={shoe}
                      width={70}
                      height={70}
                      alt="product item"
                      className="cartItemImage"
                    />
                  </div>
                  <div className="itemDetails flex">
                    <h3>Nike AirForce One</h3>
                    <p className="itemPrice">$ 215</p>
                  </div>
                  <div className="itemQuantity flex">
                    <span className="quantity">0</span>
                    <button
                      type="button"
                      name="cartView"
                      className="wishListAdd cartBtn"
                    >
                      Add to Cart
                    </button>
                  </div>
                </li>
                <li className="item flex">
                  <button
                    type="button"
                    name="cart"
                    className="navBtn removeBtn"
                  >
                    <IconContext.Provider
                      value={{ size: "1.2rem", className: "cart-icon" }}
                    >
                      <IoMdRemoveCircleOutline />
                    </IconContext.Provider>
                  </button>
                  <div className="cartItemImageCont">
                    <Image
                      src={shoe}
                      width={70}
                      height={70}
                      alt="product item"
                      className="cartItemImage"
                    />
                  </div>
                  <div className="itemDetails flex">
                    <h3>Nike AirForce One</h3>
                    <p className="itemPrice">$ 215</p>
                  </div>
                  <div className="itemQuantity flex">
                    <span className="quantity">0</span>
                    <button
                      type="button"
                      name="cartView"
                      className="wishListAdd cartBtn"
                    >
                      Add to Cart
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {children}
      <footer className="flex">
        <div className="footerContainer flex">
          <p>
            <Link href={"/"}>
              <strong>Premium Q</strong>
            </Link>
          </p>
          <div className="merchLinks flex">
            <Link href={"/merch"}>Merchandise</Link>
            <Link href={"/policy"}>Returns</Link>
            <Link href={"/policy"}>Shipping</Link>
            <Link href={"/policy"}>Privacy Policy</Link>
          </div>
          <div className="aboutLinks flex">
            <Link href={"/about"}>About Us</Link>
            <Link href={"/FAQs"}>FAQs</Link>
            <Link href={"/contact"}>Contact Us</Link>
          </div>
          <div className="socials flex">
            {/* <h3>Socials</h3> */}
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
