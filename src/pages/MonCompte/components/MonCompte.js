import React from 'react'
import { UserProfil } from './UserProfile/UserProfil'
export const MonCompte= () => {
  return (
    <>
          <div className="ImageBackroundCompte">
          <div className="IntroShop">
            <div className="Textintro">
              <h1 className='introTextShop'>
                Votre identité <br />
                secrète...
              </h1>
            </div>
          </div>
        </div>
        <UserProfil />
    </>
  )
}
