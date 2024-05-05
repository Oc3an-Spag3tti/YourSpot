import React, { useState, useEffect } from "react"
import axios from "axios"
import Footer from "@/components/_footer"
import Header from "@/components/_header"

const PlaceList = () => {
  const [places, setPlaces] = useState([])

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get("/api/create_root")
        setPlaces(response.data)
      } catch (error) {
        console.error("Error:", error)
      }
    }

    fetchPlaces()
  }, [])

  return (
    <div className="max-w-xl mx-auto mt-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Places</h2>
        <div className="grid grid-cols-2 gap-4">
          {places.map((place) => (
            <div key={place._id} className="border p-4 rounded-md">
              <h3 className="font-semibold">{place.locationName}</h3>
              {place.address && <p>Address: {place.address}</p>}
              {place.city && <p>City: {place.city}</p>}
              {typeof place.zipCode === "number" && (
                <p>Zip Code: {place.zipCode}</p>
              )}
              {place.country && <p>Country: {place.country}</p>}
              {place.establishmentType === "Restaurant" && (
                <>
                  <p>Cuisine: {place.selectedCuisine}</p>
                  {place.PriceLevel && <p>Price Level: {place.PriceLevel}</p>}
                  {place.PriceLevel && place.currentRating && (
                    <p>Michelin Stars: {place.currentRating}</p>
                  )}
                </>
              )}

              {place.establishmentType === "Bar" && (
                <p>Type of Bar: {place.selectedBarType}</p>
              )}
              {place.establishmentType === "Museum" && (
                <>
                  <p>Museum Type: {place.selectedMuseumType}</p>
                  <p>Type of Art: {place.selectedTypeofArt}</p>
                </>
              )}
              {(place.museumIsPaid ||
                place.parkIsPaid ||
                place.selectedBarType ||
                place.selectedCuisine) && (
                <p>Price Level: {place.PriceLevel}</p>
              )}
              {(place.parkIsPrivate ||
                place.parkIsPaid ||
                place.selectedBarType ||
                place.selectedCuisine) && (
                <p>Park Type: {place.selectedParkType}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const SpotsPage = () => {
  return (
    <>
      <Header />
      <h1 className="text-center mt-8 mb-4 text-2xl font-bold">Welcome</h1>
      <PlaceList />
      <Footer />
    </>
  )
}

export default SpotsPage
