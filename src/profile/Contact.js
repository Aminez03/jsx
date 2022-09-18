import React from 'react'
import { ListGroup } from 'react-bootstrap'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="title">
            <h3 style={{textDecoration:'underline'}}>Contact</h3>
            <i class="fa-solid fa-phone"> 27055885</i>
            <i class="fa-regular fa-envelope">amine.zaidi03@gmail.com</i>
            <i class="fa-solid fa-location-dot">Tunisie,Sfax,Sidi Mansour</i>
        </div>
        <div className="competance">
            <h3 style={{textDecoration:'underline'}}>Compétance</h3>
           <ul>
            <li>Force de proposition</li>
            <li>Logique</li>
            <li>Travail en équipe</li>
            <li>Esprit de synthése</li>
           </ul>
        </div>
        <div className="langue">
            <h3 style={{textDecoration:'underline'}}>langues</h3>
           <ul>
            <li>Anglais:bien</li>
            <li>Fraçais:bien</li>
            <li>Arabe:trés bien</li>
           </ul>
           
           
        </div>




    </div>
  )
}

export default Contact