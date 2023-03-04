import React from 'react'
import './Question.scss'

export default function Question() {
  return (
    <div>
      <form>
    	  <label for="titre">Titre</label>
	      <input type="text" id="titre" name="titre" placeholder="Titre.." />
	    
	      <label for="contenu">Contenu</label>
	      <textarea id="contenu" name="contenu" placeholder="Contenu.." style={{height: "200px"}} ></textarea>
	   
	      <button type="submit">Publier</button>
      </form>
    </div>
  )
}
