import styles from './About.module.scss'
import julie from '../../../assets/photo--julie.jpeg'

const About = () => {
  return (
    <section className={styles["about"]}>
      <h1 className={styles["sr-only"]}>À propos</h1>
      <div className={styles["about__title--wrapper"]}>
        <h2 className={styles["about__title--main"]}>JB Concept </h2>
        <h3 className={styles["about__title--secondary"]}>
          Une entreprise bien de chez nous
        </h3>
      </div>
      <article className={styles["about__content"]}>
        <div className={styles["about__content__img--wrapper"]}>
          <div className={styles["about__content__img--border"]}></div>
          <img
            className={styles["about__content__img"]}
            src={julie}
            alt="une photo de la propriétaire de l'entreprise"
          />
          <p className={styles["about__content__img--legend"]}>
            Julie,{" "}
            <p data-margin-top="data-margin-top">
              propriétaire de l'entreprise
            </p>
          </p>
        </div>
        <div className={styles["about__content__text--wrapper"]}>
          <p className={styles["about__content__text"]}>
            JB Concept Inc. est fier de représenter la troisième génération d'une
            tradition familiale dans le domaine des vêtements et des uniformes.
          </p>
          <div className={styles["about__content__text--deco"]}></div>
          <p className={styles["about__content__text"]}>
            Notre entreprise incarne un héritage d'excellence et un engagement profond envers des
            valeurs durables et responsables. Pensés pour votre bien-être, nos collections
            personnalisées sont créées avec soin pour répondre à vos besoins tout en reflétant vos
            valeurs.
          </p>
          <div className={styles["about__content__text--deco"]}></div>
          <p className={styles["about__content__text"]}>
            Nous croyons fermement que chaque vêtement et chaque objet promotionnel doit refléter non
            seulement l'identité de votre entreprise, mais aussi un respect pour notre planète.
          </p>
          <div className={styles["about__content__text--deco"]}></div>
          <p className={styles["about__content__text"]}>
            C'est pourquoi nous sélectionnons soigneusement des produits locaux, écologiques et
            éthiques, afin de garantir que chaque collection personnalisée soit à la fois authentique
            et de haute qualité. Faites le choix d’un style responsable, sans compromis sur le
            confort ni l’élégance.
          </p>
          {/* <div className={styles["about__content__text--deco"]}></div> */}
        </div>
        <div className={styles["about__content--deco"]}></div> 
      </article>
    </section>
  );
}

export default About
