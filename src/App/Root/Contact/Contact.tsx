import styles from './Contact.module.scss'
import { useEffect, useState } from 'react'

const Contact = () => {



const [display, setDisplay] = useState("none");
const [, setResult] = useState<string>("");
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [nameError, setNameError] = useState("");
const [emailError, setEmailError] = useState("");
const [messageError, setMessageError] = useState("");
const [isTried, setIsTried] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);


const validateName = (name: string) => {
  if (name.length === 0) {
    setNameError("Veuillez entrer votre nom");
    return false;
  }
  setNameError("");
  return true;
};

useEffect(() => {

  if(isTried){
  validateName(name);
  validateEmail(email);
  validateMessage(message);
  }

}, [name, email, message, isTried]);

const validateEmail = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!emailRegex.test(email)) {
    setEmailError("Veuillez entrer un courriel valide");
    return false;
  }
  setEmailError("");
  return true;
};

const validateMessage = (message: string) => {
  if (message.length === 0) {
    setMessageError("Veuillez entrer un message");
    return false;
  }
  setMessageError("");
  return true;
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsTried(true);
  if (
    validateName(name) &&
    validateEmail(email) &&
    validateMessage(message)
  ) {
    setResult("Envoi...");
    const formData = new FormData(e.currentTarget);

    formData.append("access_key", "ce06bdf6-e8e7-418a-9d6c-781ba8c97e76");

    const response= await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if(data.success){
      setDisplay("flex");
      setIsSuccess(true);
      setIsTried(false);
      setName("");
      setEmail("");
      setMessage("");
      setResult("Message envoyé");
      e.currentTarget.reset();
    } else {
      console.log("Erreur", data);
      setResult(data.message);
    }
  }
  
};

const closeSuccess = () => {
  setIsSuccess(false);
 
  setTimeout(() => {
    setDisplay("none");
  }, 2000);
  
}

 
  return (
    <section className={styles.contact}>
      <h1 className={styles['sr-only']}>Contactez-nous</h1>
      <div style={{display, opacity: isSuccess ? 1 : 0, transform: isSuccess ? 'translateY(0)' : 'translateY(-100%)'}} className={styles['contact__success--container']}>
        <p className={styles['contact__success']}>Votre message a été envoyé avec succès! </p> 
        <button className={styles['contact__success--button']} onClick={closeSuccess}>Fermer</button>
      </div>
      <h2 className={styles.contact__title}>Contactez-nous</h2>
      <form className={styles.contact__form} onSubmit={handleSubmit}>
        <input type='hidden' name="subject" value="Nouveau message reçu depuis jb-concept"  />
        <div className={styles['contact__form__input--wrapper']}>
          <label htmlFor="name">Nom</label>
          <input style={{border: nameError ? '2px solid #DF2935' : ''}} type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          {nameError ? <p className={styles.contact__form__error}>{nameError}</p> : <></>}
        </div>
        <div className={styles['contact__form__input--wrapper']}>
          <label htmlFor="email">Courriel</label>
          <input style={{border: emailError ? '2px solid #DF2935' : ''}} type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          {emailError ? <p className={styles.contact__form__error}>{emailError}</p> : <></>}
        </div>
        <div className={styles['contact__form__input--wrapper']}>
          <label htmlFor="message">Message</label>
          <textarea  style={{border: messageError ? '2px solid #DF2935' : ''}} className={styles.contact__form__textarea} id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
          {messageError ? <p className={styles.contact__form__error}>{messageError}</p> : <></>}
        </div>
        <button className={styles.contact__form__button} type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact
