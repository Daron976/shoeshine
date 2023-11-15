"use client";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";
import { GiExitDoor } from "react-icons/gi";
import { CgMenuRight } from "react-icons/cg";
import shoe from "../../../public/men.jpg";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { linkItems } from "./data";

export default function Header() {
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
            {linkItems
              .filter((el) => el.navItem === true)
              .map((el) => {
                return (
                  <li className="category" key={el.id}>
                    <Link href={el.link}>{el.item}</Link>
                  </li>
                );
              })}
          </ul>
          <ul className="ul-content ul-user flex">
            <li className="user-data">
              <Link href="/authentication">
                <FiLogIn />
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
                <AiOutlineHeart />
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
                <MdOutlineShoppingCart />
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
                <CgMenuRight />
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
                  <GiExitDoor />
                </button>
              </div>
              <ul className="menuItemContainer flex">
                {linkItems
                  .filter((el) => el.menuItem === true)
                  .map((mapEl) => {
                    return (
                      <li className="menuItem" key={mapEl.id}>
                        <Link href={mapEl.link}>{mapEl.item}</Link>
                      </li>
                    );
                  })}
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
                  <GiExitDoor />
                </button>
              </div>
              <ul className="cartItems">
                <li className="item flex">
                  <button
                    type="button"
                    name="cart"
                    className="navBtn removeBtn"
                  >
                    <IoMdRemoveCircleOutline />
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
                    <IoAddCircleOutline />
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
                  <GiExitDoor />
                </button>
              </div>
              <ul className="cartItems">
                <li className="item flex">
                  <button
                    type="button"
                    name="cart"
                    className="navBtn removeBtn"
                  >
                    <IoMdRemoveCircleOutline />
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
    </>
  );
}
