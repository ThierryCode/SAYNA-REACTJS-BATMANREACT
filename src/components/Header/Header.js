import React from 'react'
import {NavLink, Link} from "react-router-dom"

export const Header = () => {
  return ( <>
  <div class="ligneGauche"></div>
    <div class="ligneDroite"></div>
  <header className="header w-100 d-flex flex-column justify-content-between align-items-center" id="header">
        <div className="menuLogo container d-flex justify-content-between py-5 w-100">
            <div className="logoHome d-flex justify-content-start w-25 px-0">
                <img className="d-flex align-items-start "src={process.env.PUBLIC_URL + '/assets/icones/logohome.png'} alt="batman avec un point d'interrogation"/>
            </div>
            <NavLink className="d-flex justify-content-evenly w-50">
                <NavLink className ="NavLinks" to="/"> Home</NavLink>
                <NavLink className ="NavLinks" to="/game">GAME</NavLink>
                <NavLink className ="NavLinks" to="/eshop">E-SHOP</NavLink>
                <NavLink className ="NavLinks" to="/MonCompte">MON COMPTE</NavLink>
            </NavLink>
        </div>
        <div className="hr w-80 "></div>
        <div className="headerIntroButton">
            <div className="intro">
                <p className="introText">Au nom de ses parents assassinés, Bruce Wayne mène une guerre éternelle contre les
                    criminels de Gotham City. Il est vengeur. Il est la nuit.</p>
                <span>Il est Batman.</span>
            </div>
            <div className="boutons">
                <button><a href="#">Voir le Héros</a></button>
                <button><a href="#">Les adversaires</a></button>
            </div>
        </div>
        <div className="icon">
            <div className="navIcon"><a href="#header"><img src=" assets/Logos/logo_bat_flèche.png" alt="Flèche haut"/></a>
            </div>
            <div className="navIcon"><img src="assets/Logos/icon_facebook.png" alt="Icone facebook"/></div>
            <div className="navIcon"><img src="assets/Logos/icon_ig.png" alt="Icone Instagram"/></div>
            <div className="navIcon"><img src="assets/Logos/icon_tw.png" alt="Icone twitter"/></div>
            <div className="navIcon"><a href="#footer"><img src="assets/Logos/logo_bat_flèche_2.png" alt="Flèche bas"/></a>
            </div>
        </div>
    </header>
  </>
        
  )
}
