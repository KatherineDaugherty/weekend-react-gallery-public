function GalleryList({ galleryList }) {
    console.log(galleryList);

return( <>
     {galleryList.map((image) => ( <img key={image.id} src={image.path} alt={image.description} width="100" height="100"></img>  ))}
</>

    )

} //END function 
                    export default GalleryList;
