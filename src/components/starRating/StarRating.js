import StarRatings from "react-star-ratings/build/star-ratings";

const StarRating = ({vote_average}) => {
    return (
        <div>
            starRating
            <StarRatings
                name={'name'}
                numberOfStars={10}
                rating={vote_average}
                starDimension={'40px'}
                starSpacing={'15px'}
                starRatedColor={'yellow'}
                starEmptyColor={'grey'}
            />
        </div>
    )
}

export {
    StarRating
}