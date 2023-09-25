import React from 'react'

export const UserProfil = () => {
  return (
    <><div className="containerInfos">
      <div className="infos">
        <div className="infoMenu">
          <ul>
            <li>Mes information</li>
            <li>Historique des commandes</li>
            <li>Mes avis</li>
            <li>Mes favoris</li>
          </ul>
          <button className="logOut">Déconnexion</button>
        </div>
        <div className="infosPersNewsLetter">
          <div className="InfoPers">
            <h2>Information personnelles</h2>
            <p>Nom</p>
            <p>Prénom</p>
            <p>Mot de passe</p>
            <p>Email</p>
            <p>Numéro de téléphone</p>
            <p>Adresse de livraison</p>
            <p>Adresse de facturation</p>
            <button className='modifier'>Modifier</button>
          </div>
          <div className="NewsLetter">
            <h2>Newsletter</h2>
            <p>Abonnez vous à la newsletter ! Ne ratez pas nos offres exceptionnels sur votre article préféré !</p>
            <div className="YN">
              <div className="yes">
                <input type="radio" name="Oui" id="" />
                <label htmlFor="">Oui</label><br />
                <input type="radio" name="Non" id="" />
                <label htmlFor="">Non</label>
              </div>
            </div>
            <button className='enregistrer'>Enregistrer</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
