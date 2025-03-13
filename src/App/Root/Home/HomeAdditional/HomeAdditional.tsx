import styles from './HomeAdditional.module.scss'
import client from '../../../../assets/additional-png.png'

const HomeAdditional = () => {
  return (
    <article className={styles["home-additional"]}>
      <h3 className={styles["home-additional__title"]}>
        Des vêtements à la hauteur de toutes les occasions
      </h3>
      <div className={styles["home-additional__img--wrapper"]}>
        <img className={styles["home-additional__img"]} src={client} alt="" />
        <p className={styles["home-additional__text"]}>
          Francesco Capaldo et l'équipe d'AIKI SECURE sommes ravis de participer
          à la 199ᵉ parade de la Saint-Patrick dans la ville de Montréal avec
          TSN Radio 690.<strong> Un grand merci à Julie Beaulieu et à l'équipe de JB Concept Inc.</strong> pour leur collaboration exceptionnelle. Leur expertise,
          créativité et passion pour la qualité ont été essentielles dans la
          création de tenues professionnelles reflétant parfaitement l'esprit de
          notre marque et de cet événement.<strong> Collaborer avec JB Concept visuel
          Inc. a été une expérience enrichissante et leur réactivité, efficacité
          et sensibilité à nos demandes ont été remarquables.</strong> Merci pour votre
          travail exceptionnel, qui rend notre participation à la parade encore
          plus spéciale
        </p>
      </div>
    </article>
  );
}

export default HomeAdditional
