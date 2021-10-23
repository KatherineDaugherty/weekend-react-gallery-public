import { useState } from 'react';
import axios from 'axios';
import './GalleryItem.css'

function GalleryItem({ image , fetchList}) {

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


    return (
        <>
            <view className="imgWithText" style={{ flex: 1, flexDirection: 'column' }}>

                <div className="listDiv">
                    <img onClick={image.onClick} key={image.id} src={image.path} alt={image.description} width="175" height="200"></img>


                    <span className="likeSpan">
                        <button onClick={addLike}> LIKE </button>
                        <p>{image.likes} likes </p>
                    </span>

                </div>
            </view>

        </>
    )
}
export default GalleryItem;