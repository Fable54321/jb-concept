import styles from "./Products.module.scss";

import { productsList } from "../../../assets/products";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import canada from "../../../assets/canada.png";

const Products = () => {
  const [descrtiption, setDescrtiption] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const [descHeight1, setDescHeight1] = useState(0);
  const [scale1, setScale1] = useState("");

  const [opacity, setOpacity] = useState(["1", "1", "1", "1", "1"]);

  const isMobile = useMediaQuery({ query: "(max-width: 50em)" });
  const isTablet = useMediaQuery({ query: "(max-width: 69em)" });

  const [minHeight, setMinHeight] = useState(177);

  useEffect(() => {
    const updateHeight = () => {
      const imgHeight =
        document.querySelector<HTMLImageElement>(
          `.${styles["products__grid__item"]}`
        )?.clientHeight ?? 0;
      const imgHeight2 =
        document.querySelector<HTMLImageElement>(
          `.${styles["products__grid__item--5"]}`
        )?.clientHeight ?? 0;
      setMinHeight(imgHeight < imgHeight2 ? imgHeight : imgHeight2);
    };
    window.addEventListener("resize", updateHeight);
    setTimeout(updateHeight, 100);
    updateHeight();

    return () => window.removeEventListener("resize", updateHeight);

    console.log(descHeight1, minHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [descrtiption]);

  const handleClick = (e: React.MouseEvent<HTMLElement>, id: number) => {
    if (id.toString() === (e.target as HTMLDivElement).id) {
      if (
        (e.target as HTMLDivElement).id === "1" ||
        (e.target as HTMLDivElement).id === "5"
      ) {
        if (descrtiption[1] || descrtiption[5]) {
          setDescHeight1(minHeight);
          setScale1("scale(70%)");
        } else {
          setTimeout(() => {
            setScale1("");
            setDescHeight1(minHeight + minHeight * 0.4);
          }, 500);
        }
      }

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

      if (descrtiption[id as keyof typeof descrtiption]) {
        setTimeout(() => {
          setDescrtiption({
            ...descrtiption,
            [id as keyof typeof descrtiption]: false,
          });
        }, 500);
      } else {
        setDescrtiption({
          ...descrtiption,
          [id as keyof typeof descrtiption]:
            !descrtiption[id as keyof typeof descrtiption],
        });
      }
    }
  };

  return (
    <section translate="no" className={styles["products"]}>
      <h2 className={styles["sr-only"]}>Produits</h2>
      <article className={styles["products__title--wrapper"]}>
        <h3 className={styles["products__title"]}>
          Il y en a pour tous les goûts!
        </h3>
        <h3 className={styles["products__subtitle"]}>
          Que vous <br /> recherchiez :
        </h3>
        <div className={styles["products__grid"]}>
          {productsList.map((product) => (
            <div
              style={{
                display: descrtiption[product.id as keyof typeof descrtiption]
                  ? "flex"
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
              <div
                style={{
                  left: descrtiption[product.id as keyof typeof descrtiption]
                    ? "50%"
                    : "",
                  width: descrtiption[product.id as keyof typeof descrtiption]
                    ? "35%"
                    : "",
                }}
                className={styles[`products__grid__border--${product.id}`]}
              ></div>

              <h3
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
              </h3>
              <button
                id={product.id.toString()}
                style={{
                  left: descrtiption[product.id as keyof typeof descrtiption]
                    ? "50%"
                    : "",
                  bottom: descrtiption[product.id as keyof typeof descrtiption]
                    ? "0%"
                    : "",

                  opacity: opacity[product.id - 1],
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

              <img
                style={{
                  display: descrtiption[product.id as keyof typeof descrtiption]
                    ? "none"
                    : "block",
                }}
                className={`${styles["products__grid__item__img"]} ${
                  styles[`products__grid__item__img--${product.id}`]
                }`}
                src={
                  product.image2 && !isMobile ? product.image2 : product.image
                }
                alt={product.name}
              />

              <div
                style={{
                  display: descrtiption[product.id as keyof typeof descrtiption]
                    ? "flex"
                    : "none",
                  minHeight:
                  isTablet && product.id === 1 || isTablet && product.id === 5 
                      ? `max(${descHeight1}px, ${minHeight}px)`
                      : `${minHeight}px`,
                  transform:
                   isTablet && product.id === 1 || isTablet && product.id === 5 
                      ? `${scale1}`
                      : "",
                  transition:
                   isTablet && product.id === 1 || isTablet && product.id === 5 
                      ? "all 0.5s ease-in-out"
                      : "",
                }}
                className={styles["products__grid__item__description"]}
              >
                <p
                  className={`${
                    styles["products__grid__item__description__text"]
                  } ${
                    styles[
                      `products__grid__item__description__text--${product.id}`
                    ]
                  }`}
                >
                  <img style={{display: product.id === 4 ? "block" : "none"}} src={canada} alt="" />
                  {product.description}
                </p>
                <div
                  className={`${
                    styles["products__grid__item__description__catalogue"]
                  } ${
                    styles[
                      `products__grid__item__description__catalogue--${product.id}`
                    ]
                  }`}
                >
                  {product.catalogues &&
                    product.catalogues.slice(0, 3).map((catalogue, index) => (
                      <div
                        key={catalogue}
                        className={
                          styles[
                            `products__grid__item__description__catalogue__item--${index}`
                          ]
                        }
                      >
                        <a
                          className={ product.links[index] === "" ? styles["no-deco"] : styles['deco']}
                          href={product.links && product.links[index] ? product.links[index] : "#"}
                          target= "_blank"
                          onClick={(e) =>
                            !product.links || !product.links[index] ? e.preventDefault() : null
                          }
                        >
                          <p>{catalogue} </p>
                        </a>
                        <img style={{display: product.canada[index] ? "block" : "none"}} src={canada}/>
                      </div>
                    ))}
                  {product.catalogues && product.catalogues.length > 3 && (
                    <div
                      className={
                        
                        styles[
                          `products__grid__item__description__catalogue__item--3`
                        ]
                      }

                    >
                      <a href={product.links &&product.links[3]} 
                      className={ product.links[3] === "" ? styles["no-deco"] : styles['deco']}
                      target="_blank"
                      onClick={(e) => !product.links || !product.links[3] ? e.preventDefault() : null}
                      
                      ><p>{product.catalogues[3]} </p></a>
                       <img style={{display: product.canada[3] ? "block" : "none"}} src={canada} alt=""/>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Products;
