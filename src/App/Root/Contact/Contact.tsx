import styles from './Contact.module.scss'
import { useState } from 'react'

const Contact = () => {


const [result, setResult] = useState("");

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setResult("Envoi...");
  const formData = new FormData(e.currentTarget);

  formData.append("access_key", "ce06bdf6-e8e7-418a-9d6c-781ba8c97e76");

  const response= await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();

  console.log(data);
   
  if(data.success){
    setResult("Message envoyé");
    e.currentTarget.reset();
  } else {
    console.log("Erreur", data);
    setResult(data.message);
  }

  
};

 
  return (
    <section className={styles.contact}>
      <h2 className={styles.contact__title}>Contactez-nous</h2>
      <form className={styles.contact__form} onSubmit={handleSubmit}>
        <input type='hidden' name="subject" value="Nouveau message reçu depuis jb-concept" required />
        <div className={styles['contact__form__input--wrapper']}>
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div className={styles['contact__form__input--wrapper']}>
          <label htmlFor="email">Courriel</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className={styles['contact__form__input--wrapper']}>
          <label htmlFor="message">Message</label>
          <textarea className={styles.contact__form__textarea} id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        </div>
        <button className={styles.contact__form__button} type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact
