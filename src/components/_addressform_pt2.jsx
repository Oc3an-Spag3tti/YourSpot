import React, { useState } from "react"
import { Formik, Form, Field } from "formik"

const AddressFormPt2 = ({ handleSubmit }) => {
  const [selectedTypeofArt, setSelectedTypeofArt] = useState("")
  const [selectedMuseumType, setSelectedMuseumType] = useState("")
  const [selectedCuisine, setSelectedCuisine] = useState("")
  const [selectedPriceLevel, setSelectedPriceLevel] = useState("")
  const [selectedBarType, setSelectedBarType] = useState("")
  const [selectedParkType, setSelectedParkType] = useState("")
  const [parkIsPublic, setParkIsPublic] = useState(false)
  const [parkIsPrivate, setParkIsPrivate] = useState(false)
  const [parkIsFree, setParkIsFree] = useState(false)
  const [parkIsPaid, setParkIsPaid] = useState(false)
  const [museumIsPaid, setMuseumIsPaid] = useState(false)
  const [museumIsFree, setMuseumIsFree] = useState(false)

  const cuisines = [
    "Italian",
    "Japanese",
    "Mexican",
    // Add more cuisines if needed
  ]

  const typesOfBars = [
    "Pub",
    "Sports Bar",
    "Cocktail Bar",
    // Add more bar types if needed
  ]

  const typesOfParks = [
    "National Parks",
    "State Parks",
    "City Parks",
    "Theme Parks",
    "Wildlife Parks",
    "Botanical Gardens",
    "Historical Parks",
    "Marine Parks",
    "Eco Parks",
    "Sculpture Parks",
    "Dog Parks",
    "Skate Parks",
  ]

  const typesOfMuseums = [
    "Art Museum",
    "History Museum",
    "Science Museum",
    "Natural History Museum",
    "Children's Museum",
    "Maritime Museum",
    "Aviation Museum",
    // Add more types as needed
  ]

  const typesOfArtInMuseums = [
    "Painting",
    "Sculpture",
    "Drawing",
    "Printmaking",
    "Photography",
    "Textile Art",
    "Ceramics",
    "Installation Art",
    "Mixed Media",
    "Digital Art",
    // Add more types as needed
  ]

  const handleSubmitAddressForm2 = (values) => {
    handleSubmit(values)
  }

  const handleCuisineSelect = (e) => {
    setSelectedCuisine(e.target.value)
  }

  const handlePriceLevelSelect = (level) => {
    setSelectedPriceLevel(level)
  }

  const handleBarTypeSelect = (type) => {
    setSelectedBarType(type)
  }

  const handleParkTypeSelect = (type) => {
    setSelectedParkType(type)
  }

  const handlePublicParkToggle = () => {
    setParkIsPublic(!parkIsPublic)
    if (parkIsPrivate) {
      setParkIsPrivate(false)
      setParkIsFree(false)
      setParkIsPaid(false)
    }
  }

  const handlePrivateParkToggle = () => {
    setParkIsPrivate(!parkIsPrivate)
    if (parkIsPublic) {
      setParkIsPublic(false)
    }
  }

  const handleFreeParkToggle = () => {
    setParkIsFree(!parkIsFree)
    setParkIsPaid(false) // Uncheck "Paid" checkbox when "Free" is toggled
  }

  const handlePaidParkToggle = () => {
    setParkIsPaid(!parkIsPaid)
    setParkIsFree(false) // Uncheck "Free" checkbox when "Paid" is toggled
  }

  const handleFreeMuseumToggle = () => {
    setMuseumIsFree(!museumIsFree) // Toggle museumIsFree
    setMuseumIsPaid(false) // Uncheck "Paid" checkbox when "Free" is toggled
  }
  const handlePaidMuseumToggle = () => {
    setMuseumIsPaid(!museumIsPaid) // Toggle museumIsPaid
    setMuseumIsFree(false) // Uncheck "Free" checkbox when "Paid" is toggled
  }
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-96 rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-2xl font-semibold">Additional Information</h2>
        <Formik
          initialValues={{
            establishmentType: "",
            rating: null,
          }}
          onSubmit={handleSubmitAddressForm2}
        >
          {({ values, setFieldValue, isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label
                  htmlFor="establishmentType"
                  className="block text-lg font-semibold text-gray-800"
                >
                  Establishment Type:
                </label>
                <Field
                  as="select"
                  id="establishmentType"
                  name="establishmentType"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-lg"
                >
                  <option value="">Select...</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Bar">Bar</option>
                  <option value="Park">Park</option>
                  <option value="Museum">Museum</option>
                </Field>
              </div>
              {values.establishmentType === "Restaurant" && (
                <div>
                  <label
                    htmlFor="cuisineType"
                    className="block text-lg font-semibold text-gray-800"
                  >
                    Cuisine Type:
                  </label>
                  <select
                    id="cuisineType"
                    name="cuisineType"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-lg"
                    value={selectedCuisine}
                    onChange={handleCuisineSelect}
                  >
                    <option value="">Select Cuisine...</option>
                    {cuisines.map((cuisine, index) => (
                      <option key={index} value={cuisine}>
                        {cuisine}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              {values.establishmentType === "Bar" && (
                <div>
                  <label
                    htmlFor="barType"
                    className="block text-lg font-semibold text-gray-800"
                  >
                    Type of Bar:
                  </label>
                  <select
                    id="barType"
                    name="barType"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-lg"
                    value={selectedBarType}
                    onChange={(e) => handleBarTypeSelect(e.target.value)}
                  >
                    <option value="">Select Bar Type...</option>
                    {typesOfBars.map((barType, index) => (
                      <option key={index} value={barType}>
                        {barType}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              {values.establishmentType === "Park" && (
                <>
                  <div>
                    <label
                      htmlFor="parkType"
                      className="block text-lg font-semibold text-gray-800"
                    >
                      Type of Park:
                    </label>
                    <select
                      id="parkType"
                      name="parkType"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 text-lg"
                      value={selectedParkType}
                      onChange={(e) => handleParkTypeSelect(e.target.value)}
                    >
                      <option value="">Select Park Type...</option>
                      {typesOfParks.map((parkType, index) => (
                        <option key={index} value={parkType}>
                          {parkType}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-gray-800">
                      Park Facilities:
                    </label>
                    <div className="flex items-center space-x-4">
                      <label
                        htmlFor="parkIsPublic"
                        className="flex items-center"
                      >
                        <input
                          type="checkbox"
                          id="parkIsPublic"
                          name="parkIsPublic"
                          checked={parkIsPublic}
                          onChange={handlePublicParkToggle}
                          className="mr-2"
                        />
                        Public
                      </label>
                      <label
                        htmlFor="parkIsPrivate"
                        className="flex items-center"
                      >
                        <input
                          type="checkbox"
                          id="parkIsPrivate"
                          name="parkIsPrivate"
                          checked={parkIsPrivate}
                          onChange={handlePrivateParkToggle}
                          className="mr-2"
                        />
                        Private
                      </label>
                      {parkIsPrivate && (
                        <>
                          <label
                            htmlFor="parkIsFree"
                            className="flex items-center"
                          >
                            <input
                              type="checkbox"
                              id="parkIsFree"
                              name="parkIsFree"
                              checked={parkIsFree}
                              onChange={handleFreeParkToggle}
                              className="mr-2"
                            />
                            Free
                          </label>
                          <label
                            htmlFor="parkIsPaid"
                            className="flex items-center"
                          >
                            <input
                              type="checkbox"
                              id="parkIsPaid"
                              name="parkIsPaid"
                              checked={parkIsPaid}
                              onChange={handlePaidParkToggle}
                              className="mr-2"
                            />
                            Paid
                          </label>
                        </>
                      )}
                    </div>
                  </div>
                </>
              )}
              {values.establishmentType === "Museum" && (
                <>
                  <div>
                    <label
                      htmlFor="museumType"
                      className="block text-lg font-semibold text-gray-800"
                    >
                      Type of Museum:
                    </label>
                    <select
                      id="museumType"
                      name="museumType"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 text-lg"
                      value={selectedMuseumType}
                      onChange={(e) => setSelectedMuseumType(e.target.value)}
                    >
                      <option value="">Select Museum Type...</option>
                      {typesOfMuseums.map((museumType, index) => (
                        <option key={index} value={museumType}>
                          {museumType}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-gray-800">
                      Type of Art:
                    </label>
                    <div className="flex flex-wrap">
                      {typesOfArtInMuseums.map((artType, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="checkbox"
                            id={`artType${index}`}
                            name={`artType${index}`}
                            checked={selectedTypeofArt === artType}
                            onChange={() => setSelectedTypeofArt(artType)}
                            className="hidden"
                          />
                          <label
                            htmlFor={`artType${index}`}
                            className="relative flex items-center cursor-pointer"
                          >
                            <div className="w-4 h-4 rounded border border-gray-400 mr-2">
                              {selectedTypeofArt === artType && (
                                <div className="w-full h-full bg-blue-500 rounded"></div>
                              )}
                            </div>
                            <span className="text-lg">{artType}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-gray-800">
                      Museum Facilities:
                    </label>
                    <div className="flex items-center space-x-4">
                      <label
                        htmlFor="museumIsFree"
                        className="flex items-center"
                      >
                        <input
                          type="checkbox"
                          id="museumIsFree"
                          name="museumIsFree"
                          checked={museumIsFree}
                          onChange={handleFreeMuseumToggle}
                          className="mr-2"
                        />
                        Free
                      </label>
                      <label
                        htmlFor="museumIsPaid"
                        className="flex items-center"
                      >
                        <input
                          type="checkbox"
                          id="museumIsPaid"
                          name="museumIsPaid"
                          checked={museumIsPaid}
                          onChange={handlePaidMuseumToggle}
                          className="mr-2"
                        />
                        Paid
                      </label>
                    </div>
                  </div>
                </>
              )}

              {(values.establishmentType === "Bar" ||
                values.establishmentType === "Restaurant" ||
                (values.establishmentType === "Park" && parkIsPaid) ||
                (values.establishmentType === "Museum" && museumIsPaid)) && (
                <div>
                  <label
                    htmlFor="averagePrice"
                    className="block text-lg font-semibold text-gray-800"
                  >
                    Average Price:
                  </label>
                  {[...Array(5)].map((_, index) => {
                    const currentLevel = index + 1
                    return (
                      <label key={index}>
                        <Field
                          type="radio"
                          name="averagePrice"
                          value={currentLevel}
                          className="hidden"
                        />
                        <span
                          className="dollar cursor-pointer"
                          style={{
                            color:
                              currentLevel <= selectedPriceLevel
                                ? "#ffc107"
                                : "#e4e5e9",
                          }}
                          onClick={() => handlePriceLevelSelect(currentLevel)}
                        >
                          &#36;
                        </span>
                      </label>
                    )
                  })}
                </div>
              )}

              {values.establishmentType === "Restaurant" && (
                <div>
                  <label
                    htmlFor="rating"
                    className="block text-lg font-semibold text-gray-800"
                  >
                    Michelin stars:
                  </label>
                  {[...Array(3)].map((_, index) => {
                    const currentRating = index + 1
                    return (
                      <label key={index}>
                        <Field
                          type="radio"
                          name="rating"
                          value={currentRating}
                          className="hidden"
                        />
                        <span
                          className="star cursor-pointer"
                          style={{
                            color:
                              currentRating <= values.rating
                                ? "#ffc107"
                                : "#e4e5e9",
                          }}
                          onClick={() => setFieldValue("rating", currentRating)}
                        >
                          &#9733;
                        </span>
                      </label>
                    )
                  })}
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                className="rounded-md bg-blue-500 px-6 py-3 text-lg font-semibold text-white transition-colors duration-300 hover:bg-blue-600"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default AddressFormPt2
