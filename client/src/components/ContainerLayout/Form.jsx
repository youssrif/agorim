import React ,{useState}from "react";
import '../../styles/Form.css'
import axois from 'axios'
function Form() {
const prenom=useInput('')
const nom=useInput('')
const tel=useInput('')
const email=useInput('')

const sent=(e)=>{
  const mailcontent={
    prenom:prenom.value,
    nom:nom.value,
    tel:tel.value,
    email:email.value,
  }
  axois.post('http://localhost:4001/api/sendmail',mailcontent)
  .then(()=>{
    console.log('mail envoyer ')
  })
  .catch(()=>{
    console.log('echec!!')
  })
  e.preventDefault()
}
  
  return (
    <div className="form-container">
      <h2> Faites appel à nos experts! </h2>
      <p>
        Nos conseils sont gratuits et sans engagement.
        <br />
        Complétez ce formulaire, nous vous recontactons
        <br />
        dans les 24h.
      </p>
      <p>
        Votre demande concerne :<br />
        - Une question liée à un projet en cours <br />
        / à un futur projet
        <br />- Une estimation gratuite
      </p>
      <form onSubmit={sent}>
        <div className="nom-prenom">
          <div className="inputs">
            <label>Prénom</label>
            <input type="text" {...prenom} placeholder="Entre votre prénom"/>
          </div>
          <div className="inputs">
            <label>Nom</label>
             <input type="text" {...nom} placeholder="Entrer votre nom"/>
          </div>
        </div>
        <div className="inputs">
            <label>Numéro téléphone</label>
            <input type="number" {...tel} placeholder="Entrez votre numéro de téléphone"/>
        </div>
        <div className="inputs">
          <label>E-Mail</label>
            <input type="email" {...email} placeholder="Entrer votre mail"/>
        </div>
        <button  className="submit-button">Contactez-moi</button>
      </form>
    </div>
  );
}

export default Form;
function useInput(initialvalue){
 const [value,setValue]=useState(initialvalue)
 const handelchange=(e)=>{
   setValue(e.target.value)
 }
 return{
   value,
   onChange:handelchange
 }
}