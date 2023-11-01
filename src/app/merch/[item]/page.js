import styles from "./item.module.css";
import { data } from "../../components/data";
import Link from "next/link";
import { merch } from "@/app/components/Merch";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const res = await fetch("http://127.0.0.1:5000/api/v1/merch");

  const merchItems = await res.json();

  return merchItems.map((item) => ({
    id: item.id,
  }));
}

export default async function SingleItem({ params }) {
  const item = parseInt(params.item);

  const products = await merch();

  const product = await products.find((el) => el.id === item);

  if (!product) {
    notFound();
  }

  return (
    <>
      <main className={styles.main}>
        <section className={`${styles.singleItemContainer} flex`}>
          <div className={`${styles.singleItemWrapper} flex`}>
            <div className={`${styles.imageContainer} flex`}>
              
              <ul className={`${styles.multiImageContainer} flex`}>
                {data.slice(0, 4).map((item, idx) => {
                  return (
                    <li key={idx}>
                      <img
                        src={product.image}
                        alt="product variations"
                        className={styles.variation}
                      />
                    </li>
                  );
                })}
              </ul>
              <img
                src={product.image}
                alt="item Image"
                className={styles.image}
              />
              <h1 className={styles.mobileHeader}>{product.name}</h1>
            </div>
            <article className={`${styles.productInfo} flex`}>
              <h1 className={styles.desktopHeader}>{product.name}</h1>
              <p
                className={styles.productDescription}
              >{`${product.description.slice(0, 200)}...`}</p>
              <ul className={`${styles.sizeContainer} flex`}>
                <li className={styles.sizeItem}>Uk 6</li>
                <li className={styles.sizeItem}>Uk 7</li>
                <li className={styles.sizeItem}>Uk 8</li>
                <li className={styles.sizeItem}>Uk 9</li>
                <li className={styles.sizeItem}>Uk 10</li>
                <li className={styles.sizeItem}>Uk 11</li>
              </ul>
              <p className={styles.price}>
                <strong>{`$ ${product.price}`}</strong>
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
          <Link href={"/merch"} className={styles.viewMoreCont}>
            <button
              type="button"
              name="itemView"
              className={`${styles.viewMore}`}
            >
              View More
            </button>
          </Link>
        </section>
      </main>
    </>
  );
}
