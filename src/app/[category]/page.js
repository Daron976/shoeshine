import styles from "./categories.module.css";
import Link from "next/link";
import { data } from "../components/data";
import { notFound } from "next/navigation";

export default function Category({ params }) {
  const category = params.category;
  let header;

  switch (category) {
    case "unisex":
      header = "Unisex";
      break;
    case "men":
      header = "Men";
      break;
    case "women":
      header = "Women";
      break;
    case "popular":
      header = "Popular";
      break;
    default:
      notFound();
  }
  return (
    <>
      <main className={styles.main}>
        <section className={`${styles.catItems} flex`}>
          <h1>{header}</h1>
          <div className={`${styles.catContent} flex`}>
            {data.map((product, idx) => {
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
