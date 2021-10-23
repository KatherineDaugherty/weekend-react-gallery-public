import './GalleryItem.css'

function GalleryItem({ image }) {

    return (
        <>
            <view className="imgWithText" style={{ flex: 1, flexDirection: 'column' }}>

                <div className="listDiv">
                    <img onClick={image.onClick} key={image.id} src={image.path} alt={image.description} width="175" height="200"></img>


                    <span className="likeSpan">
                        <button> LIKE </button>
                        <p>{image.likes} likes </p>
                        {/* onClick={() => onLike(image.id)} */}
                    </span>
                </div>
            </view>

        </>
    )
}
export default GalleryItem;