import { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../..';
import no_avatar from '../../assets/images/no_avatar.png';

const Test = () => {
  const [image, setImage] = useState<any>();
  const [url, setUrl] = useState<any>(no_avatar);
  const [progress, setProgress] = useState(0);

  const handleImageChange = (e: any) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const imageRef = ref(storage,`/avatar`);
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            console.log(error.message, 'error getting the image url');
          });
        setImage(null);
      },)
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="App">
      <img src={url} alt='ava'/>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
    </div>
  );
};

export default Test;