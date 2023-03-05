import React from 'react'
import './NewQuestion.scss'
import ImageUploader from './UploadFile'

export default function NewQuestion() {
  return (
    <div className='new-question'>
      <form action="#">
        <div className="form-group">
          <label htmlFor='question'>Question : </label>
          <input type="text" placeholder='Votre question...' id='question' />
        </div>
        <div className="form-group">
          <label htmlFor='motsCle'>Mots clés : </label>
          <input type="text" placeholder='Mots clés de votre question...' id='question' />
        </div>
        <div className="form-group">
          <label htmlFor='descQuestion'>Description : </label>
          <textarea type="text" placeholder='Description question...' id='descQuestion' />
        </div>
        <div className="form-group">
          <label htmlFor='capture'>Capture de code : </label>
          <div className="image-upload">
            <ImageUploader />
          </div>
        </div>
        <button type='button'>Poster</button>
      </form>
    </div>
  )
}
