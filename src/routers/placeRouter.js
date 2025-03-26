import express from "express";
import {getAllPlaces, getPlaceById, getNearbyPlaces} from "../controllers/placeController.js";
import {postPlaceReview, getPlaceReviews} from "../controllers/reviewController.js";
import validate from "../utilities/validate.js";
import valReview from "../validators/valReview.js";

const placeRouter = express.Router();

placeRouter.route("/").get(getAllPlaces);
placeRouter.route("/nearby").get(getNearbyPlaces);
placeRouter.route("/:place_id/reviews").post(valReview, validate, postPlaceReview).get(getPlaceReviews);
placeRouter.route("/:place_id").get(getPlaceById);

export default placeRouter;