import { useState } from 'react';
import axios from 'axios';
import './GalleryItem.css'

//pass in image and fetchList 
function GalleryItem({ image , fetchList}) {

  //PUT in Item file because it's only used here.  no need to pass down
    const addLike = () => {
        console.log(`in ADD `);
        axios({
          method:'PUT',
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
        
      }

      //return galleryList array of objects. src image path and description 
    return (
        <>
            <view className="imgWithText" style={{ flex: 1, flexDirection: 'column' }}>

                <div className="listDiv">
                  
                  {/* TOGGLE.. if True and False  */}
              
                    <img onClick={toggleD} key={image.id} src={image.path} alt={image.description} width="175" height="200"></img>


                    <span className="likeSpan">
                        <button onClick={addLike}> LIKE </button>
                        <p>{image.likes} likes </p>
                    </span>

                </div>
            </view>

        </>
    )
}
//make this component available to others 
export default GalleryItem;