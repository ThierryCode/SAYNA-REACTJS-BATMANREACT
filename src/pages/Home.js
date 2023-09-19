import React from 'react'

export const Home = () => {
  return (
  <div>
    <div className="ligneGauche"></div>
    <div className="ligneDroite"></div>

    <header className="header" id="header">
        <div className="menuLogo">
            <div className="logoHome"><img src="assets/Logos/logohome.png" alt="batman avec un point d'interrogation"/>
            </div>
            <nav className="menu" id="menu">
                <ul>
                    <li className="itemNav"><a href="#header">Home</a></li>
                    <li className="itemNav"><a href="game.html">GAME</a></li>
                     <li className="itemNav"><a href="#shop">E-SHOP</a></li>
                    <li className="itemNav"><a href="#compte">MON COMPTE</a></li> 
                </ul>
            </nav>
        </div>
        <div className="hr"></div>
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

    <section className="contenu">
        <div className="down">
            <img src="assets/Logos/flèche_down_header.png" alt=""/>
        </div>
        <h2>BATMAN AU CINÉMA</h2>
        <p className="presentation">Le personnage de Batman est un super héros de l’univers de DC Comics. Il a été créé par
            le
            dessinateur Bob Kane et le scénariste Bill Finger et apparaît pour la première fois dans le
            comic book Detective Comics en 1939. Batman se différencie de Superman, alors héros
            majeur de DC, car il n’a aucun pouvoir. Il sera porté au cinema pour la première fois en 1943
            par Lewis Wilson et bénéficiera de nombreux reboot, donnant l’occasion à de multiples
            acteurs d’interpréter l’homme chauve-souris. Voici les trois derniers :</p>
        <div className="carte">
            <div className="infoCard">
                <img src="assets/Illustrations/Bathome2.png" alt="Robert Pattinson"/>
                <p className="nom">Robert Pattinson</p>
                <p className="date">(2022)</p>
            </div>
            <div className="infoCard">
                <img src="assets/Illustrations/Bathome3.png" alt="Christian Bale "/>
                <p className="nom">Robert Pattinson</p>
                <p className="date">(2006-2008-2012)</p>
            </div>
            <div className="infoCard">
                <img src="assets/Illustrations/Bathome4.png" alt="Ben Affleck"/>
                <p className="nom">Robert Pattinson</p>
                <p className="date">(2016-2017/2020-2023)</p>
            </div>
        </div>
        <div className="imageBatarang">
            <img src="assets/Illustrations/Bathome13.png" alt=""/>
        </div>
        <h2>NÉMÉSIS</h2>
        <p className="presentation">Batman souhaite éradiquer la criminalité de Gotham. C’est pourquoi, il affrontera la
            plupart
            du temps, des vilains sans capacités surnaturelles mais particulièrement violents ou
            psychopathes. Avec son introduction dans la Justice League il aura l’occasion de se
            mesurer à des antagonistes qui défient l’imagination et les lois de la physique. Parmi les
            derniers ennemis emblématiques que nous avons pu voir au cinéma, on retrouve :</p>
        <div className="carte">
            <div className="infoCard">
                <img src="assets/Illustrations/Bathome5.png" alt="The Riddler Paul Dano"/>
                <p className="nom">The Riddler Paul Dano</p>
                <p className="date">(2022)</p>
            </div>
            <div className="infoCard">
                <img src="assets/Illustrations/Bathome6.png" alt="Le Joker Heath Ledger"/>
                <p className="nom">Le Joker Heath Ledger</p>
                <p className="date">(2008)</p>
            </div>
            <div className="infoCard">
                <img src="assets/Illustrations/Bathome7.png" alt="Darkseid Ray Porter"/>
                <p className="nom">Darkseid Ray Porter</p>
                <p className="date">(2022)</p>
            </div>
        </div>
        <div className="imageBatman">
            <img src="assets/Illustrations/Bathome12.png" alt=""/>
        </div>
        <h2>Alliés</h2>
        <p className="presentation">Alfred est le majordome des Wayne. A leur mort il s’occupe de l’éducation du jeune Bruce
            avant de l’assister dans son rôle du Batman. Ce dernier rencontrera Catwoman dès le
            premier numéro des aventures de l’homme-chauve souris en 1940. Tantôt ennemie tantôt
            alliée la jeune femme fatale fera tourner la tête de Batman à maintes reprises. Du côté de la
            police, Bruce pourra compter sur l’aide infaillible de James Gordon, “Jim , qui désire lui aussi
            nettoyer sa ville de la criminalité qui y règne.</p>
        <div className="carte">
            <div className="infoCard">
                <img src="assets/Illustrations/Bathome9.png" alt="Alfred Pennyworth Michael Cain"/>
                <p className="nom">Alfred Pennyworth Michael Cain</p>
                <p className="date">(2006-2008-2012)</p>
            </div>
            <div className="infoCard">
                <img src="assets/Illustrations/Bathome8.png" alt="Catwoman Zoé Kravitz "/>
                <p className="nom">Catwoman Zoé Kravitz</p>
                <p className="date">(2008)</p>
            </div>
            <div className="infoCard">
                <img src="assets/Illustrations/Bathome10.png" alt="James Gordon"/>
                <p className="nom">James Gordon</p>
                <p className="date">(2014-2019)</p>
            </div>
        </div>
        <h2>Justice league</h2>
        <p className="presentation">Lorsque la Terre est menacée les plus grands super-héros s’allient pour la protéger. Ils
            doivent cependant apprendre à se faire confiance mutuellement et à faire équipe ce qui
            ne sera pas chose aisée. Ensemble ils forment la Justice League, les plus grands superhéros de la Terre,
            ceux vers qui le monde entier se tourne lorsque les menaces
            extraterrestres ou surnaturelles menacent son existence.</p>
        <div className="imgJusticeLeag">
            <img src="assets/Illustrations/Bathome11.png" alt="La league des justiciés"/>
        </div>
    </section>

    <section className="multimedia">
        <h2>Multimédia</h2>
        <div className="content">
            <div className="flecheGauche">
                <img src="assets/Logos/icon_flèche_1.png" alt=""/>
            </div>
            <div className="card">
                <div className="imagecard">
                    <img src="assets/Illustrations/Bathome_ba1.png" alt=""/>
                </div>
                <div className="contentCard">
                    <h3>Action, Adventure</h3>
                    <h4>Batman Begins</h4>
                    <h5>IMDB: <span>8.2</span></h5>
                    <p>Le jeune Bruce Wayne assiste impuissant au meurtre de ses
                        parents. Profondément traumatisé, il grandit obnubilé par un
                        désir de vengeance. La Ligue des ombres, une secte de
                        guerriers ninja dirigée par Ra's al Ghul, se chargera de son
                        entraînement. De retour chez lui à Gotham, avec l'aide de son
                        majordome Alfred Pennyworth, Bruce Wayne se lance alors
                        dans la lutte contre le crime sous le nom de Batman.</p>
                </div>
            </div>
            <div className="flecheDroite">
                <img src="assets/Logos/icon_flèche_2.png" alt=""/>
            </div>
        </div>
        <div className="bandeAnnonce">
            <img src="assets/Illustrations/Bathome_ba2.png" alt=""/>
        </div>
    </section>

    <section className="FormulaireDeContact">
        <h2>Prenons contact</h2>
        <form>
            <label>Adresse Email</label><br/>
            <input type="text" className="inputmail" id="" placeholder="Adresse email"/><br/>
            <label>newsletter</label><br/>
            <p>En cochant cette case vous acceptez de recevoir l’actualité concernant les
                aventures de Batman : <input type="checkbox" name="" id=""/></p>

            <input className="inputmail"
                placeholder="Choisissez la fréquence à laquelle vous souhaitez recevoir votre newsletter"/>
            <input className="inputmail" placeholder="Souhaitez vous recevoir des news"/>
            <div className="formBoutons">
                <button>Des Films</button>
                <button>Des comics</button>
                <button>De tout</button>
            </div>
            <label>message</label><br/>
            <textarea name="" id="" className="inputmail"
                placeholder="Laissez un commentaire pour la communauté"></textarea>
            <div className="boutons">
                <button type="submit"><a href="#">confirmer</a></button>
            </div>
        </form>
    </section>

    <section className="replique">
        <div className="containerReplique">
            <div className="guillemetGauche">
                <img src="assets/Logos/icon_guillemets_1.png" alt=""/>
            </div>
            <div className="repliquePhrase">
                <p>La seule façon raisonnable de vivre en ce bas monde,
                    c'est en dehors des règles.</p>
                <div className="lastPara">
                    <p>The Dark Knight : Le Chevalier Noir -
                        Le Joker à Batman (2008)</p>
                </div>
            </div>
            <div className="guillemetDroite">
                <img src="assets/Logos/icon_guillemets_2.png" alt=""/>
            </div>
        </div>
    </section>
    <footer id="footer">
        <div className="warnerBrosLastPara">
            <div className="warnerBros">
                <img src="assets/Logos/icon_WB.png" alt=""/>
            </div>
            <p>Ce projet respecte l’univers cinématographique des films Batman récents. Version Nolan & Snyder & Reeves
            </p>
        </div>
        <div className="Icones">
            <img src="assets/Logos/logo_sayna_white.png" alt="Logo Sayna"/>
            <img src="assets/Logos/icon_x.png" alt="Icon x"/>
            <img src="assets/Logos/icon_DC.png" alt="Icone DC"/>
            <img src="assets/Logos/icon_facebook.png" alt="icone facebook"/>
            <img src="assets/Logos/icon_ig.png" alt="Icon instagram"/>
            <img src="assets/Logos/icon_tw.png" alt="Icone twitter"/>
        </div>
    </footer>
  </div>
  )
}

