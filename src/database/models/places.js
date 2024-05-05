import mongoose from "mongoose";
import placesSchema from "../schemas/places";


const PlaceModel = mongoose.models.Place || mongoose.model('Place', placesSchema);

export default PlaceModel;
