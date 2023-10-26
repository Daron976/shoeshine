export async function merch() {
  const res = await fetch("http://127.0.0.1:5000/api/v1/merch");

  if (!res) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

export default async function Merch({ styles, cslVal }) {
  const data = await merch();

  const sliceVal = cslVal ? cslVal : 0;

  return (
    <>
      {data.slice(sliceVal, sliceVal + 3).map((product, idx) => {
        return (
          <article key={idx} className={`${styles.productItem} flex`}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.productImage}
            />
            <p className={styles.productDesc}>{product.name}</p>
            <small>{`$ ${product.price}`}</small>
          </article>
        );
      })}
    </>
  );
}
