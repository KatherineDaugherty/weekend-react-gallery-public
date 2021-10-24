import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css'

//pass in galleryList and fetchList 
//This component mainly loops. 
function GalleryList({ galleryList, fetchList}) {
    console.log(galleryList);

    //loop through array of objects with map. 
    return (
        <>
            <div className="listDiv">
                {galleryList.map((image) => <GalleryItem image={image} fetchList={fetchList}/>)}
            </div>
        </>
    )
} //END function 
export default GalleryList;
