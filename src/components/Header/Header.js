import React from 'react'
import {NavLink, Link} from "react-router-dom"

export const Header = () => {
  return ( <>
  <div className="ligneGauche"></div>
    <div className="ligneDroite">
    <div className="icon">
            <div className="navIcon"><a href="#header"><img src=" assets/Logos/logo_bat_flèche.png" alt="Flèche haut"/></a>
            </div>
            <div className="navIcon"><img src={process.env.PUBLIC_URL + '/assets/Logos/icon_facebook.png'} alt="Icone facebook"/></div>
            <div className="navIcon"><img src={process.env.PUBLIC_URL + '/assets/Logos/icon_ig.png'} alt="Icone Instagram"/></div>
            <div className="navIcon"><img src={process.env.PUBLIC_URL + '/assets/Logos/icon_tw.png'} alt="Icone twitter"/></div>
            <div className="navIcon"><a href="#footer"><img src={process.env.PUBLIC_URL + '/assets/Logos/logo_bat_flèche_2.png'} alt="Flèche bas"/></a>
            </div>
        </div>
    </div>
  <header className="header " id="header">
        <div className="menuLogo d-flex navbar navbar-expand-lg">
            <div className="logoHome w-25">
                <img src={process.env.PUBLIC_URL + '/assets/icones/logohome.png'} alt="batman avec un point d'interrogation"/>
            </div>
            <nav className="Navigation navbar-nav navbar-expand-lg">
                <div className="forButton container burger-Button">
                    <button class="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#menu" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <NavLink className="NavLinkBox collapse navbar-collapse" id='menu'>
                        <NavLink className ="NavLinks nav-item" to="/"> Home</NavLink>
                        <NavLink className ="NavLinks nav-item" to="/game">GAME</NavLink>
                        <NavLink className ="NavLinks nav-item" to="/eshop">E-SHOP</NavLink>
                        <NavLink className ="NavLinks nav-item" to="/MonCompte">MON COMPTE</NavLink>
                    </NavLink>
                </div>
            </nav>
        </div>
        <div className="hr w-80">

        </div>

    </header>
  </>
        
  )
}
