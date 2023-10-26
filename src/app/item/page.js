"use client";
import styles from "./item.module.css";
import shoe from "../../../public/men.jpg";
import { data } from "../components/data";
import Link from "next/link";
import Image from "next/image";

export default function Authenticate() {
  return (
    <>
      <main className={styles.main}>
        <section className={`${styles.singleItemContainer} flex`}>
          <div className={`${styles.singleItemWrapper} flex`}>
            <div className={`${styles.imageContainer} flex`}>
              <ul className={`${styles.multiImageContainer} flex`}>
                {data.slice(0, 5).map((item, idx) => {
                  return (
                    <li key={idx}>
                      <Image
                        src={shoe}
                        width={70}
                        height={70}
                        alt="product variations"
                        className={styles.variation}
                      />
                    </li>
                  );
                })}
              </ul>
              {/* <div className={styles.mainImage}> */}
              <Image
                src={shoe}
                width={470}
                heigth={300}
                quality={100}
                className={styles.image}
              />
              {/* </div> */}
            </div>
            <article className={`${styles.productInfo} flex`}>
              <h1>Adidas Adifoam TRXN</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <ul className={`${styles.sizeContainer} flex`}>
                <li className={styles.sizeItem}>Uk 6</li>
                <li className={styles.sizeItem}>Uk 7</li>
                <li className={styles.sizeItem}>Uk 8</li>
                <li className={styles.sizeItem}>Uk 9</li>
                <li className={styles.sizeItem}>Uk 10</li>
                <li className={styles.sizeItem}>Uk 11</li>
              </ul>
              <p className={styles.price}>
                <strong>$ 165</strong>
              </p>
              <div className={`${styles.addContainer} flex`}>
                <button
                  type="button"
                  name="cartView"
                  className={`${styles.cartView}`}
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  name="wishView"
                  className={`${styles.wishView}`}
                >
                  Add to Wishlist
                </button>
              </div>
            </article>
          </div>
        </section>
        <section className={`${styles.resume} flex`}>
          <h2>Continue Shopping</h2>
          <div className={`${styles.resumeContent} flex`}>
            {data.slice(0, 4).map((product, idx) => {
              return (
                <article
                  key={idx}
                  className={`${styles.productItem} flex scrollContainer`}
                  // style={{
                  //   transform: `translateX(${csl}px)`,
                  // }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className={styles.productImage}
                  />
                  <p className={styles.productDesc}>{product.name}</p>
                  <div className={`${styles.viewLink} flex`}>
                    <small>{`$ ${product.price}`}</small>
                    <Link href={"/"}>
                      <button
                        type="button"
                        name="itemView"
                        className={`${styles.itemView}`}
                      >
                        View
                      </button>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
          <button
            type="button"
            name="itemView"
            className={`${styles.viewMore}`}
          >
            View More
          </button>
        </section>
      </main>
    </>
  );
}
