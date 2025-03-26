import Review from "../models/reviewModel.js";
import Place from "../models/placeModel.js";

const postPlaceReview = async (req, res) => {
    try{const {place_id} = req.params;
    const foundPlace = await Place.findByPk(place_id);
    if(!foundPlace) {
        return res.status(404).json({
            error: "Lankytina vieta neegzistuoja"
        })
    }
    const {user_name, comment, rating} = req.body;
    const review = await Review.create({
        place_id: place_id,
        user_name,
        comment,
        rating
    });

    let reviews = await Review.findAll({where:{place_id: place_id}});
    reviews.map((review) => review.dataValues);
    const reviewCount = reviews.length;
    foundPlace.rating = reviews.reduce((acc, item) => {return acc += item.rating}, 0) / reviewCount;
    foundPlace.save();
    
    res.status(201).json({
        message: "Review created successfully",
        data: review,
    });}
    catch(error) {
        res.status(422).json({
            error: "validation error"
        })
    }
}

const getPlaceReviews = async (req, res) => {
    const {place_id} = req.params;
    const foundPlace = await Place.findByPk(place_id);
    if(!foundPlace) {
        return res.status(404).json({
            error: "Lankytina vieta neegzistuoja",
        });
    }
    let reviews = await Review.findAll({where: {place_id: place_id}});
    reviews = reviews.map((review) => review.dataValues);
    res.status(200).json({
        total: reviews.length,
        data: reviews
    });
}

export {postPlaceReview, getPlaceReviews};