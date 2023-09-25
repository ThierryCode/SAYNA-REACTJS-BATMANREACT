import React, { Component } from 'react';
import {useState, useEffect} from 'react'
export const Filter = ()=> {
  const [showCateg, setShowCateg] = useState(false);
  const [showUnivers, setShowUnivers] = useState(false);
  const [showCouleur, setShowCouleur] = useState(false);
  return (
  <><div className="containerFilter">
    <div className="Filter">
      <h2>Filtres</h2>
      <label for="prix">Prix</label>
      <input type="range" id="prix" name="prix" min="0" max="200" step="1" />
      <p id="priceValue">0</p>
      <div className="dropdownCateg">
        <p onClick={()=>{
          setShowCateg(!showCateg);
        }}>
          Categorie <i className="bi bi-caret-right" ></i>
        </p>
        <div className="hrFilter"></div>
        {showCateg && <div className="CategCheck Menu">
        <li className="checkItems">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Bestsellers</label>
        </li>      
        <li className="checkItems dropdown-item">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Goodies</label>
        </li>      
        <li className="checkItems dropdown-item">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Vêtements</label>
        </li>      
        <li className="checkItems dropdown-item">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Affiches/Posters</label>
        </li>      
        <li className="checkItems dropdown-item">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Comics</label>
        </li>      
        <li className="checkItems dropdown-item">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Multimédia</label>
        </li>      
        <li className="checkItems dropdown-item">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Equipement</label>
        </li>      
        <li className="checkItems dropdown-item">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Bijoux</label>
        </li>      
        <li className="checkItems dropdown-item">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Véhicule</label>
        </li>      
      </div>}
      </div>
      <div className="dropdownCateg">

      </div>
      <p onClick={()=>{
          setShowCouleur(!showCouleur);
        }}>Couleur
        <i className="bi bi-caret-right" ></i>
        </p>
      <div className="hrFilter"></div>
      {showCouleur &&         
      <div className="ColorCheck">
        <div className="checkCouleur">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Bleu</label>
        </div> 
        <div className="checkCouleur">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Noir</label>
        </div> 
        <div className="checkCouleur">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Rouge</label>
        </div> 
        <div className="checkCouleur">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Blanc</label>
        </div> 
        <div className="checkCouleur">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Autres couleur</label>
        </div> 
      </div>}
      <div className="dropdownCateg">
      <p onClick={()=>{
          setShowUnivers(!showUnivers);
        }}>Univers <i className="bi bi-caret-right" ></i>
        </p>
        <div className="hrFilter"></div>
        {showUnivers &&         
      <div className="UniversCheck">
        <div className="checkUnivers">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">The Batman</label>
        </div> 
        <div className="checkUnivers">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">The dark night Rises</label>
        </div> 
        <div className="checkUnivers">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Batman V Superman</label>
        </div> 
        <div className="checkUnivers">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Batman et Robin</label>
        </div> 
        <div className="checkUnivers">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Autres comics</label>
        </div> 
      </div>
      }</div>
    </div>
  </div>
  </>

  )
}