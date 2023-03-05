import React, { useState } from "react";
import './UploadFile.scss'

function ImageUploader() {
  const [image, setImage] = useState(null);

  function handleImageUpload(event) {
    const file = event.target.files[0];

    // Créer un objet FileReader
    const reader = new FileReader();

    // Définir la fonction callback qui sera appelée lorsque le fichier aura été chargé
    reader.onload = function(e) {
      setImage(e.target.result);
    };

    // Charger le fichier
    reader.readAsDataURL(file);
  }

  return (
    <>
        <input type="file" onChange={handleImageUpload} />
        {image && <img src={image} alt="Uploaded image" />}
    </>
  );
}

export default ImageUploader;
