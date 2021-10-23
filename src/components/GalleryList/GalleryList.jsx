import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css'

function GalleryList({ galleryList }) {
    console.log(galleryList);

    return (
        <>
            <div className="listDiv">
                {galleryList.map((image) => <GalleryItem image={image} />)}
            </div>
        </>
    )
} //END function 
export default GalleryList;
