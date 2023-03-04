import React, { useState } from 'react'
import './Question.scss'

export default function Question() {

  const [file, setFile] = useState('')



  const fileData = () => {
    if (file) {
      return (
        <div>
          <p>Fichier: <span>{file}</span></p>
        </div>
      )
    }
  }
  
  const onFileChange = (event) => {
    setFile(event.target.files[0].name)
  }

  return (
    <div>
      <form>
    	  <label htmlFor="titre">Titre</label>
	      <input type="text" id="titre" name="titre" placeholder="Titre.." />
        
        <label htmlFor="contenu">Contenu</label>
	      <textarea id="contenu" name="contenu" placeholder="Contenu.." style={{height: "200px"}} ></textarea>

        {fileData()}
        <label htmlFor="image" id='uploadfile'>Importer fichier</label>
        <br />
        <input type="file" name="image" id="image" onChange={onFileChange} style={{display: "none"}} />  

	      <button type="submit">Publier</button>
      </form>
    </div>
  )
}
