import Container from '../layout/Container'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import image from '../../img/team_work.png'
import styles from './Contact.module.css'

function Contact() {
  return (
  <div className={styles.corpo}>
    
    <img width="700" src={image} />
    <div className={styles.wrapper}>
   <div className={styles.titulo}>
     Entre em Contato conosco ! 
   </div>
   </div>

<div className={styles.grupo_redes_sociais}>

    <div className={styles.redes_sociais}>
    <h1 className={styles.mini_logo}><FaFacebook /><br /></h1>
    <p>Facebook</p>
    </div>

    <div className={styles.redes_sociais}>
    <h1 className={styles.mini_logo}><FaInstagram /></h1>
    <p>Instagram</p>
    </div>

    <div className={styles.redes_sociais}>
    <h1 className={styles.mini_logo}><FaLinkedin /></h1>
    <p>Linkedin</p>
    </div>

    <div className={styles.redes_sociais}>
    <h1 className={styles.mini_logo}><FaGithub /></h1>
    <p>Github</p>
    </div>
    </div>
   
    </div>
  )
}

export default Contact
