import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css'

function GalleryList({ galleryList, fetchList}) {
    console.log(galleryList);

    return (
        <>
            <div className="listDiv">
                {galleryList.map((image) => <GalleryItem image={image} fetchList={fetchList}/>)}
            </div>
        </>
    )
} //END function 
export default GalleryList;
