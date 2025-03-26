import sq from "../db/sequelize.js";
import DataTypes from "sequelize";

const Place = sq.define(
  "Place",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      notNull: true,
    },
    name: {
      type: DataTypes.STRING,
      validate: { len: [1, 255] },
    },
    address: {
      type: DataTypes.STRING,
      validate: { len: [1, 255] },
    },
    latitude: {
      type: DataTypes.FLOAT,
      notNull: true,
    },
    longitude: {
      type: DataTypes.FLOAT,
      notNull: true,
    },
    description: {
      type: DataTypes.STRING,
      validate: { len: [0, 5000] },
    },
    rating: {
      type: DataTypes.FLOAT,
      validate: { min: 0, max: 5 },
      default: 0
    },
  },
  {
    timestamps: true,
    tableName: "places",
  }
);

try {
  await Place.sync({ alter: true });
  await Place.truncate();
  console.log("Created model: Place");
} catch (error) {
  console.log("Error creating Place model");
}

export default Place;
