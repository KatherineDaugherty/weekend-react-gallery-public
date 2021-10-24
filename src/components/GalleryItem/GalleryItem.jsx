import { useState } from 'react';
import axios from 'axios';
import './GalleryItem.css'

//pass in image and fetchList 
function GalleryItem({ image, fetchList }) {

  //Hooks in react are always use...

  const [isToggle, setIsToggle] = useState(false);

  //PUT in Item file because it's only used here.  no need to pass down
  const addLike = () => {
    console.log(`in ADD `);
    axios({
      method: 'PUT',
      url: `/gallery/like/${image.id}`,
    })
      .then(response => {
        console.log(`response is`, response);
        fetchList();
      })
      .catch(error => {
        console.log(`Error in Put`, error);
      })
  } //END PUT      

  //create function for onClick of Img
  const toggleD = () => {
    console.log(`clicked toggle`);
    setIsToggle(!isToggle);
    //opposite of what currently is
  }

  console.log(image, isToggle);
  //TEST toggle - looks good 

  //return galleryList array of objects. src image path and description 
  return (
    <>
      <div>

        {/* TOGGLE.. if True and False  USE Ternary */}

        <div className="isToggle">
          {isToggle ? <h2 className="description" onClick={toggleD} > {image.description} </h2> : <img className="image" onClick={toggleD} key={image.id} src={image.path} alt={image.description} width="200" height="250"></img>}
        </div>

        <div className="likeDiv">

          <button className="button" onClick={addLike}> Love &#128156; </button>
          {image.likes === 0 ? <p> Be the first to Love this! </p> : <p> {image.likes} people love this </p>}
        </div>

      </div>

    </>
  )
}
//make this component available to others 
export default GalleryItem;