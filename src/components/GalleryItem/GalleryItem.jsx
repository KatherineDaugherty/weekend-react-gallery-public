function GalleryItem({ image }) {

    return (
        <>
            <div className="listDiv">

                <img key={image.id} src={image.path} alt={image.description} width="175" height="200"></img>)

                <span className="imageSpan">
                    {/* {toDisplay()} */}
                    <button onClick={() => onLike(image.id)}>LIKE</button>
                    <p>{image.likes} likes</p>
                </span>
            </div>
        </>
    )
}
export default GalleryItem;