import mongoose from "mongoose"
const { Schema } = mongoose

const placesSchema = new Schema({
  // _adress_form_pt1.jsx
  locationName: String,
  address: String,
  city: String,
  zipCode: Number,
  country: String,

  // _adress_form_pt2.jsx
  establishmentType: String,
  PriceLevel: Number,

  //Cuisine
  selectedCuisine: String,
  currentRating: Number,

  //Bar
  selectedBarType: String,

  //Park
  selectedParkType: String,
  ParkIsPublic: Boolean,
  parkIsPrivate: Boolean,
  parkIsFree: Boolean,
  parkIsPaid: Boolean,

  //Museum
  selectedMuseumType: String,
  selectedTypeofArt: String,
  museumIsFree: Boolean,
  museumIsPaid: Boolean,
})

export default placesSchema
