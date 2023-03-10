import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import swal from 'sweetalert'
import './NewQuestion.scss'
import './UploadFile.scss'

export default function NewQuestion() {
  const [addQuestion, setAddQuestion] = useState({
    idStudent: JSON.parse(localStorage.getItem('user')),
    title: '',
    content: '',
    tagsId: '',
    picture: ''
  })

  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  useEffect(()=>{
    console.log(addQuestion.idStudent)
  }, [])

  const handleChange = event => {
    const fieldName = event.target.name
    setAddQuestion(previous => ({
      ...previous,
      [fieldName]: event.target.value
    }))
  }

  const post = async () => {
    const response = await axios.post('/devHunt2/students/posts', addQuestion )
    console.log(response.data)

    swal({
      icon:'success',
      text: 'Question ajoutée avec succès'
    }).then((isConfirm)=>{
      navigate('/questions/myQuestion')
    })
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const fileName = file.name
    
    changePicture(fileName);

    // Créer un objet FileReader
    const reader = new FileReader();

    // Définir la fonction callback qui sera appelée lorsque le fichier aura été chargé
    reader.onload = function(e) {
      setImage(e.target.result);
    };
    // Charger le fichier
    reader.readAsDataURL(file); 
    console.log(image)
  }


  return (
    <div className='new-question'>
      <form action="#" encType='multipart/form-data'>
        <div className="form-group">
          <label htmlFor='title'>Titre : </label>
          <input type="text" placeholder='Titre...' id='title' name='title' value={addQuestion.title} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor='motsCle'>Mots clés : </label>
          <input type="text" placeholder='Mots clés de votre question...' id='tagsId' name='tagsId' />
        </div>
        <div className="form-group">
          <label htmlFor='content'>Description : </label>
          <textarea type="text" placeholder='Description question...' id='content' name='content' onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor='picture'>Importer un fichier : </label>
          
          {/* Upload file start */}
          <div className="image-upload">
            <input type="file" name='picture' onChange={handleImageUpload} />
            {image && <img src={image} alt="Uploaded image" />}
          </div>
          {/* Upload file end */}

        </div>
        <button type='button' onClick={post}>Poster</button>
      </form>
    </div>
  )
}
