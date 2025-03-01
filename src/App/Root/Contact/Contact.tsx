import styles from './Contact.module.scss'
import { useState } from 'react'

const Contact = () => {


const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

 
  return (
    <section className={styles.contact}>
      <h2 className={styles.contact__title}>Contactez-nous</h2>
      <form className={styles.contact__form} action="https://formspree.io/f/xnqlqkjz" method="POST">
        <div className={styles['contact__form__input--wrapper']}>
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className={styles['contact__form__input--wrapper']}>
          <label htmlFor="email">Courriel</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className={styles['contact__form__input--wrapper']}>
          <label htmlFor="message">Message</label>
          <textarea className={styles.contact__form__textarea} id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <button className={styles.contact__form__button} type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact
