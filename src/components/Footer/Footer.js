import React from 'react'

export const Footer = () => {
  return (
    <>
        <footer id="footer">
        <div className="warnerBrosLastPara">
            <div className="warnerBros">
                <img src={process.env.PUBLIC_URL + "assets/logos/icon_WB.png"} alt="Icone Warner Bross"/>
            </div>
            <p>Ce projet respecte l’univers cinématographique des films Batman récents. Version Nolan & Snyder & Reeves
            </p>
        </div>
        <div class="Icones">
            <img src={process.env.PUBLIC_URL + "assets/logos/logo_sayna_white.png"} alt="Logo Sayna"/>
            <img src={process.env.PUBLIC_URL + "assets/logos/icon_x.png"} alt="Icon x"/>
            <img src={process.env.PUBLIC_URL + "assets/logos/icon_DC.png"} alt="Icone DC"/>
            <img src={process.env.PUBLIC_URL + "assets/logos/icon_facebook.png"} alt="icone facebook"/>
            <img src={process.env.PUBLIC_URL + "assets/logos/icon_ig.png"} alt="Icon instagram"/>
            <img src={process.env.PUBLIC_URL + "assets/logos/icon_tw.png"} alt="Icone twitter"/>
        </div>
    </footer>
    </>
  )
}
