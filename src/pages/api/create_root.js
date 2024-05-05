import mongoose from "mongoose"
import PlaceModel from "../../database/models/places"

const PlacesAPI = async (req, res) => {
  await mongoose.connect(process.env.MONGODB_DB_URI)

  try {
    if (req.method === "GET") {
      const places = await PlaceModel.find()
      res.status(200).json(places)
    } else if (req.method === "POST") {
      const newPlace = new PlaceModel(req.body)
      await newPlace.save()
      res.status(200).json(newPlace)
    } else {
      res.status(405).json({ message: "Method Not Allowed" })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export default PlacesAPI
