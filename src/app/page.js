"use client";
import styles from "./home.module.css";
import flicker from "../../public/flicker.png";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { useState } from "react";
import { data } from "./components/data";
import Link from "next/link";

export default function Home() {
  const [csl, setCsl] = useState(0);

  return (
    <main className={`${styles.content} flex column`} data-testid="home">
      <section className={`${styles.welcomeContent} flex`}>
        <div className={styles.flicker}></div>
        <div className={styles.welcomeHeader}>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p className={`appear ${styles.welMsg}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
        </div>
        <Image
          src={flicker}
          quality={100}
          alt="art work"
          className={styles.welcomeImg}
        />
      </section>
      <section className={`${styles.availableStock}`}>
        <h2 className={styles.availableStockHeader}>Premium Merch</h2>
        <div className={`${styles.merchContainer}`}>
          <button
            name="prev"
            type="button"
            className={`${styles.prevBtn} ${styles.cslBtn}`}
            onClick={() => {
              if (csl !== 0) setCsl(csl + 332);
            }}
          >
            <AiOutlineLeft />
          </button>
          <div className={`${styles.productItemContainer} flex`}>
            {data.map((product, idx) => {
              return (
                <article
                  key={idx}
                  className={`${styles.productItem} flex scrollContainer`}
                  style={{
                    transform: `translateX(${csl}px)`,
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className={styles.productImage}
                  />
                  <p className={styles.productDesc}>{product.name}</p>
                  <div className={`${styles.viewLink} flex`}>
                    <small>{`$ ${product.price}`}</small>
                    <Link href={`/merch/${product.id}`}>
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
            name="next"
            type="button"
            className={`${styles.nextBtn} ${styles.cslBtn}`}
            onClick={() => {
              if (csl !== (data.length - 4) * -332) setCsl(csl - 332);
            }}
          >
            <AiOutlineRight />
          </button>
        </div>
        <div className={`${styles.categoriesContainer} flex`}>
          <h2>Categories</h2>
          <div className={`${styles.categories} flex`}>
            <Link href={"/unisex"} className={styles.catAnchor}>
              <button
                type="button"
                name="category"
                className={`${styles.unisex} ${styles.catItem} flex`}
              >
                <h2>Unisex</h2>
              </button>
            </Link>
            <div className={`${styles.catContainer} flex`}>
              <Link href={"/men"} className={styles.catAnchor}>
                <button
                  type="button"
                  name="mens"
                  className={`${styles.male} ${styles.catItem} flex`}
                >
                  <h2>Men</h2>
                </button>
              </Link>
              <Link href={"/women"} className={styles.catAnchor}>
                <button
                  type="button"
                  name="women"
                  className={`${styles.female} ${styles.catItem} flex`}
                >
                  <h2>Women</h2>
                </button>
              </Link>
            </div>
            <div className={styles.popularContainer}>
              <Link href={"/popular"} className={styles.catAnchor}>
                <button
                  type="button"
                  name="popular"
                  className={`${styles.popular} ${styles.catItem} flex`}
                >
                  <h2>Popular</h2>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
