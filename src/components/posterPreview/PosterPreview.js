import {urlForPoster} from "../../constants";

const PosterPreview = ({imgPath, original_title}) => {

    return (
        <div>
            <img src={urlForPoster + imgPath} alt={original_title}/>
        </div>
    )
}

export {
    PosterPreview
}