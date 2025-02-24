import styles from './HomePictureGrid.module.scss'
import image1 from '../../../../assets/grid--1.jpeg'
import image2 from '../../../../assets/grid--2.png'
import image3 from '../../../../assets/grid--3.png'
import { useState, useEffect } from 'react'
const Home2nd = () => {

  const [opacity, setOpacity] = useState(0)
  const [transition, setTransition] = useState('');

  const handleScroll = () => {
    const element = document.querySelector(`.${styles['picture-grid__grid']}`) as HTMLElement
    const position = element.getBoundingClientRect().top
    const viewportHeight = window.innerHeight

    if (position < viewportHeight && position > 0) {
      setTransition('');
      setOpacity(1)
    } else if (window.scrollY === 0) {
      setTransition('none');
      setOpacity(0)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
   <article className={styles['picture-grid']}>
    <h3 className={styles['picture-grid__title']}>Joignez vous à d'autres clients satisfaits</h3>
    <div style={{opacity, transition}} className={styles['picture-grid__grid']}>
      
      <div className={`${styles['picture-grid__grid__item-bg']} ${styles['picture-grid__grid__item-1']}`}><img className={styles['picture-grid__grid__item']} src={image1} alt=''/></div>
      <div className={`${styles['picture-grid__grid__item-bg--bottom']} ${styles['picture-grid__grid__item-2']}`}><p className={styles['picture-grid__grid__text']}>Des vêtements de qualité pour un confort sans compromis !</p></div>
      <div className={`${styles['picture-grid__grid__item-bg']} ${styles['picture-grid__grid__item-3']}`}><img className={styles['picture-grid__grid__item']} src={image3} alt=''/></div>
      <div className={`${styles['picture-grid__grid__item-bg--bottom']} ${styles['picture-grid__grid__item-4']}`}><p className={styles['picture-grid__grid__text']}>Écologique et élégant, un choix naturel !</p></div>
      <div className={`${styles['picture-grid__grid__item-bg']} ${styles['picture-grid__grid__item-5']}`}><img className={styles['picture-grid__grid__item']} src={image2} alt=''/></div>
      <div className={`${styles['picture-grid__grid__item-bg--bottom']} ${styles['picture-grid__grid__item-6']}`}><p className={styles['picture-grid__grid__text']}>Soutenons notre planète un vêtement à la fois !</p></div>
      
    </div>  
   </article>
  )
}

export default Home2nd
