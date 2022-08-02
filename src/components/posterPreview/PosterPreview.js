import {urlForPoster} from "../../constants";

const PosterPreview = ({imgPath, original_title}) => {

    return (
        <div>
            {imgPath && <img src={urlForPoster + imgPath} alt={original_title}/>}
            {!imgPath && <h2>Something went wrong</h2>}
        </div>
    )
}

export {
    PosterPreview
}