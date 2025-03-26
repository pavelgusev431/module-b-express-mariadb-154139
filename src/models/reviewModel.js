import sq from "../db/sequelize.js";
import DataTypes from "sequelize";

const Review = sq.define(
  "Review",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      notNull: true,
    },
    place_id: {
      type: DataTypes.INTEGER,
    },
    user_name: {
      type: DataTypes.STRING,
      validate: { len: [3, 100] },
    },
    comment: {
      type: DataTypes.STRING,
      validate: { len: [0, 2000] },
    },
    rating: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 5 },
    },
  },
  {
    timestamps: true,
    tableName: "reviews",
  }
);

try {
  await Review.sync({ alter: true });
  await Review.truncate();
  console.log("Created model: Review");
} catch (error) {
  console.log("Error creating Review model");
}

export default Review;
