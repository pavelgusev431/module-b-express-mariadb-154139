import Place from "../models/placeModel.js";
import fs from "fs";

const populatePlaces = async () => {
  const placesJSON = fs.readFileSync("./src/db/task_addons.json");
  const places = JSON.parse(placesJSON);

  for (let i in places) {
    await Place.create(places[i]);
  }
};

const getAllPlaces = async (req, res) => {
  const { q, rating_from, rating_to, sort_by } = req.query;
  let places = await Place.findAll();
  places = places.map((place) => place.dataValues);
  if (q) {
    places = places.filter((place) => {
      const re = new RegExp(q, "i");
      return re.test(place.name) || re.test(place.address);
    });
  }
  if (rating_from || rating_to) {
    places = places.filter((place) => {
      return (
        place.rating >= (rating_from || 0) && place.rating <= (rating_to || 5)
      );
    });
  }
  if (sort_by) {
    places.sort((a, b) => {
      return a[sort_by] - b[sort_by];
    });
  }
  res.status(200).json({
    total: places.length,
    per_page: 15,
    current_page: 1,
    data: places,
  });
};

const getPlaceById = async (req, res) => {
  const { place_id } = req.params;
  const place = await Place.findByPk(place_id);
  if (!place) {
    res.status(404).json({
      error: "Lankytina vieta neegzistuoja",
    });
  } else {
    res.status(200).json(place.dataValues);
  }
};

const getNearbyPlaces = async (req, res) => {
  const { latitude, longitude, radius, category } = req.query;
  let places = await Place.findAll();
  places = places.map((place) => place.dataValues);
  if (!latitude || !longitude) {
    return res.status(404).json({
      error: "Lankytina vieta nerasta",
    });
  }
  places = places.filter((place) => {
    const lat1 = place.latitude;
    const lat2 = latitude;
    const lon1 = place.longitude;
    const lon2 = longitude;
    const far =
      Math.acos(
        Math.sin(lat1) * Math.sin(lat2) +
          Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1)
      ) * 6371;
    if (far <= (radius || 10)) return true;
  });
  if (category) {
    places = places.filter((place) => {
        const re = new RegExp(category, "i");
        return re.test(place.name);
    });
  }
  if (places.length == 0) {
    return res.status(404).json({
      error: "Lankytina vieta neegzistuoja",
    });
  }
  return res.status(200).json(places);
};

export { populatePlaces, getAllPlaces, getPlaceById, getNearbyPlaces };
