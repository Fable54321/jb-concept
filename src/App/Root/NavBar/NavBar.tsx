import styles from './NavBar.module.scss'
import logo from '../../../assets/logo-up.png'
import arrowDown from '../../../assets/arrow-down.png'
import arrowUp from '../../../assets/arrow-up.png'
import { Link, useLocation } from 'react-router'
import { useMediaQuery } from 'react-responsive'
import { useState, useEffect } from 'react'

const NavBar = () => {

const currentPath: string = useLocation().pathname
const isMobile: boolean = useMediaQuery({ query: '(max-width: 50em)' })
const [dropDown, setDropDown] = useState(false);
const [transition, setTransition] = useState('');

useEffect(() => {
  if(dropDown){
    setDropDown(false);
    setTransition('none');
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[currentPath])

const usablePaths: Record<string, string> = {
  '/': 'Accueil',
  '/produits': 'Nos Produits',
  '/a_propos': 'À propos',
  '/contact': 'Contactez-nous',
};

const usablePath = usablePaths[currentPath] || '';




const handleClick = () => {
  if(!dropDown){
    setDropDown(true);
    setTransition('');
  }else{
    setDropDown(false);
    setTransition('none');
  }
}



  return (
    <header aria-label='la barre de navigation' className={styles["navbar"]}>
      <div className={styles["navbar__top"]}>
        <img
          className={styles["navbar__top__logo"]}
          src={logo}
          alt="le logo de l'entreprise"
        />
        <h1 className={styles["navbar__top__title"]}>JB Concept inc.</h1>
      </div>
      <div className={styles["navbar__bottom"]}>
        <div className={`${styles["navbar__bottom__links"]} ${dropDown ? styles["navbar__bottom__links--open"] : ""}`}>
          <h2 className={styles["navbar__bottom__link"]} style={{display: dropDown || !isMobile ? 'none' : 'block'}}>{usablePath}</h2>
          <Link
            role="lien du menu"
            aria-current={currentPath === '/' ? 'page' : undefined}
            style={{
              opacity: dropDown || !isMobile ? 1 : 0,
              transition,
              pointerEvents: dropDown || !isMobile ? 'auto' : 'none'
            }}
            className={`${styles["navbar__bottom__link"]} ${styles["navbar__bottom__link--1"]}`}
            to="/"
          >
            Accueil
          </Link>
          <Link
            role="lien du menu"
            aria-current={currentPath === '/produits' ? 'page' : undefined}
            style={{
              opacity: dropDown || !isMobile ? 1 : 0,
              transition,
              pointerEvents: dropDown || !isMobile ? 'auto' : 'none'
            }}
            className={`${styles["navbar__bottom__link"]} ${styles["navbar__bottom__link--2"]}`}
            to="/a_propos"
          >
            À propos
          </Link>
          <Link
            role="lien du menu"
            aria-current={currentPath === '/contact' ? 'page' : undefined}
            style={{
              opacity: dropDown || !isMobile ? 1 : 0,
              transition,
              pointerEvents: dropDown || !isMobile ? 'auto' : 'none'
            }}
            className={`${styles["navbar__bottom__link"]} ${styles["navbar__bottom__link--3"]}`}
            to="/contact"
          >
            Contactez-nous
          </Link>
          <Link
            role="lien du menu"
            aria-current={currentPath === '/produits' ? 'page' : undefined}
            style={{
              opacity: dropDown || !isMobile ? 1 : 0,
              transition,
              pointerEvents: dropDown || !isMobile ? 'auto' : 'none'
            }}
            className={`${styles["navbar__bottom__link"]} ${styles["navbar__bottom__link--4"]}`}
            to="/produits"
          >
            Nos Produits
          </Link>
        </div>
        <button
          className={styles["navbar__bottom__button"]}
          onClick={() => handleClick()}
        >
          <img
            style={{
              transform: `rotate(${dropDown ? 180 : 0}deg)`,
              transition: "transform 0.2s ease-in-out",
            }}
            src={dropDown ? arrowUp : arrowDown}
            alt="open the navigation menu"
          />
        </button>
      </div>
    </header>
  );
}

export default NavBar
