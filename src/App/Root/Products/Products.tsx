import styles from "./Products.module.scss";

import { productsList } from "../../../assets/products";
import { useState } from "react";

const Products = () => {

  const [descrtiption, setDescrtiption] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const [opacity, setOpacity] = useState([
    "1",
    "1",
    "1",
    "1",
    "1"
  ]);

  const handleClick = (e: React.MouseEvent<HTMLElement>, id: number) => {
    
    
  if (id.toString() === (e.target as HTMLDivElement).id) {
    
    setOpacity((prevState) => {
      const newOpacity = [...prevState];
      newOpacity[id - 1] = "0";
      return newOpacity;
    });

    setTimeout(() => {
      setOpacity((prevState) => {
        const newOpacity = [...prevState];
        newOpacity[id - 1] = "1";
        return newOpacity;
      });
    }, 500);
  }

    if (id.toString() === (e.target as HTMLDivElement).id) {
      setDescrtiption({
        ...descrtiption,
        [id as keyof typeof descrtiption]:
          !descrtiption[id as keyof typeof descrtiption],
      });
    }
  };

  return (
    <section className={styles["products"]}>
      <article className={styles["products__title--wrapper"]}>
        <h3 className={styles["products__title"]}>
          Il y en a pour tous les goûts!
        </h3>
        <h4 className={styles["products__subtitle"]}>
          Que vous <br /> recherchiez :
        </h4>
        <div className={styles["products__grid"]}>
          {productsList.map((product) => (
            <div
              style={{
                display: descrtiption[product.id as keyof typeof descrtiption]
                  ? "block"
                  : "grid",
                alignItems: descrtiption[
                  product.id as keyof typeof descrtiption
                ]
                  ? "center"
                  : "",
              }}
              className={`${styles["products__grid__item"]} ${
                styles[`products__grid__item--${product.id}`]
              }`}
              key={product.id}
            >
              <button
                id={product.id.toString()}
                style={{
                  left: descrtiption[product.id as keyof typeof descrtiption]
                    ? "50%"
                    : "",
                  right: descrtiption[product.id as keyof typeof descrtiption]
                    ? "0%"
                    : "",
                  transform: descrtiption[
                    product.id as keyof typeof descrtiption
                  ]
                    ? "translateX(-50%)"
                    : "",
                  opacity: opacity[product.id -1],
                }}
                type="button"
                aria-label="cliquer pour plus d'informations"
                className={
                  styles[`products__grid__item__button--${product.id}`]
                }
                onClick={(e) => handleClick(e, product.id)}
              >
                <p id={product.id.toString()}>
                  {descrtiption[product.id as keyof typeof descrtiption]
                    ? "Fermer"
                    : "Voir Plus"}
                </p>
              </button>
              <h4
                style={{
                  display: descrtiption[product.id as keyof typeof descrtiption]
                    ? "none"
                    : "block",
                }}
                className={`${styles["products__grid__item__title"]} ${
                  styles[`products__grid__item__title--${product.id}`]
                }`}
              >
                {product.name}
              </h4>
              <img
                style={{
                  display: descrtiption[product.id as keyof typeof descrtiption]
                    ? "none"
                    : "block",
                }}
                className={`${styles["products__grid__item__img"]} ${
                  styles[`products__grid__item__img--${product.id}`]
                }`}
                src={product.image}
                alt={product.name}
              />

              <div
                style={{
                  display: descrtiption[product.id as keyof typeof descrtiption]
                    ? "flex"
                    : "none",
                }}
                className={styles["products__grid__item__description"]}
              >
                <p
                  className={styles["products__grid__item__description__text"]}
                >
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Products;

