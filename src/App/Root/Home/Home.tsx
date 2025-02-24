import styles from './Home.module.scss'
import image1 from '../../../assets/photo--1.png'
import image2 from '../../../assets/photo--2.png'
import image3  from '../../../assets/image--3.jpg'
import HomePictureGrid from './HomePictureGrid/HomePictureGrid'
import { useState } from 'react'

const Home = () => {

const [position, setPosition] = useState(1);
const [opacity, setOpacity] = useState(1);

const switching = (page : number) => {
    setOpacity(0);
    setTranslateX(-50);

    setTimeout(() => {
        setPosition(page)
        setOpacity(1);
        setTranslateX(0);
    }, 500)

    
}

const srcs = [
    image1,
    image2,
    image3]
const texts1 = [
    "Le bonheur",
    "Faites la différence ",
    "Des uniformes"  
]
const texts2 =[
    "se porte tous ",
    "avec des cadeaux",
    "éco-chics pour"
]   

const texts3 =[
    "les jours !",
    "mémorables.",
    "un avenir plus vert !" 
]

const [translateX, setTranslateX] = useState(0);
 

  return (
    <section className={styles["home"]}>
        <article className={styles['home__carousel']}>
            <div className={styles['home__carousel__banner']}></div>
                <img src={srcs[position-1]} alt="" className={styles['home__carousel__image']} style={{opacity: opacity, transform: `translateX(${translateX}%)`}} />
            <div className={styles['home__carousel__text--wrapper']}>
                <p className={`${styles['home__carousel__text']} ${styles['home__carousel__text--1']}`} style={{opacity: opacity}} >{texts1[position-1]}</p>
                <p className={`${styles['home__carousel__text']} ${styles['home__carousel__text--2']}`} style={{opacity: opacity}} >{texts2[position-1]}</p>
                <p className={`${styles['home__carousel__text']} ${styles['home__carousel__text--3']}`} style={{opacity: opacity}} >{texts3[position-1]}</p>
                
            </div>
            
        </article>
        <div className={styles['home__carousel__button--wrapper']}>
            {[1,2,3].map(n => (
                <button key={n} onClick={() => {
                    setTimeout(() => switching(n))
                }} style={{background: position === n ? '#118ab2' : 'white'}} className={styles['home__carousel__button']}>
                    
                </button>
            ))}
        </div>
        <HomePictureGrid />
    </section>
  )
}

export default Home
