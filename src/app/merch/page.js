import styles from "./merch.module.css";
import Link from "next/link";
import { merch } from "../components/Merch";

export default async function Merchandise() {
  const products = await merch();
  return (
    <>
      <main className={styles.main}>
        <section className={`${styles.catItems} flex`}>
          <h1>Merchandise</h1>
          <div className={`${styles.catContent} flex`}>
            {products.map((product, idx) => {
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
        </section>
      </main>
    </>
  );
}
