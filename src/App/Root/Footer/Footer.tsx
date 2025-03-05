import { Link } from 'react-router'
import styles from './Footer.module.scss'
import facebook from '../../../assets/facebook.png'
import gmail from '../../../assets/gmail.png'
import linkedIn from '../../../assets/linkedin.png'

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <h1 className={styles['footer__title']}>JB Concept inc</h1>
      <div className={styles['footer__content--grid']}>
          <Link to="/a_propos" className={styles['footer__content--grid__link']}>A propos</Link>
          <Link to="/contact" className={styles['footer__content--grid__link']}>Contactez-nous</Link>
          <Link to="/" className={styles['footer__content--grid__link']}>Accueil</Link>
          <Link to="/produits" className={styles['footer__content--grid__link']}>Produits</Link>
      </div>
      <div className={styles['footer__social']}>
        <a href="https://www.facebook.com/profile.php?id=61568670801420" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="" /></a>
        <a href="mailto:ju_beaulieu@hotmail.com" target="_blank" rel="noopener noreferrer"><img src={gmail} alt="" /></a>
        <a href="https://www.linkedin.com/in/jb-concept-inc-v%C3%AAtements-et-objets-promotionnels-3973a4291/" target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt="" /></a>
      </div>
    </footer>
  )
}

export default Footer
