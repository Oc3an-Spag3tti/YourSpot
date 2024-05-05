import React from "react"
import { Formik, Form, Field } from "formik"
import inputData from "./input_data"
import { useRouter } from "next/router"

const AddressForm = () => {
  const router = useRouter()
  const cuisines = ["Italian", "Japanese", "Mexican"]
  const typesOfBars = ["Pub", "Sports Bar", "Cocktail Bar"]
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
  ]

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl mb-6 font-semibold">Address Form</h2>
        <Formik
          initialValues={{
            locationName: "",
            address: "",
            city: "",
            zipCode: "",
            country: "",
            establishmentType: "",
            currentRating: null,
            selectedCuisine: "",
            selectedBarType: "",
            selectedParkType: "",
            selectedMuseumType: "",
            selectedTypeofArt: "",
            PriceLevel: null,
            parkIsPublic: false,
            parkIsPrivate: false,
            parkIsFree: false,
            parkIsPaid: false,
            museumIsPaid: false,
            museumIsFree: false,
          }}
          onSubmit={async (values) => {
            await inputData(values)
            console.log("Form submitted:", values)
            router.push("/")
          }}
        >
          {({ isSubmitting, values, setFieldValue }) => (
            <Form className="space-y-4">
              <div>
                <label
                  htmlFor="locationName"
                  className="block text-lg font-semibold text-gray-800"
                >
                  Location Name:
                </label>
                <Field
                  type="text"
                  id="locationName"
                  name="locationName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-lg"
                  required
                />
              </div>
              {/* Address */}
              <div>
                <label
                  htmlFor="address"
                  className="block text-lg font-semibold text-gray-800"
                >
                  Address:
                </label>
                <Field
                  type="text"
                  id="address"
                  name="address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-lg"
                  required
                />
              </div>
              {/* City and Zip Code */}
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="city"
                    className="block text-lg font-semibold text-gray-800"
                  >
                    City:
                  </label>
                  <Field
                    type="text"
                    id="city"
                    name="city"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-lg"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="zipCode"
                    className="block text-lg font-semibold text-gray-800"
                  >
                    Zip Code:
                  </label>
                  <Field
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-lg"
                    required
                  />
                </div>
              </div>
              {/* Country */}
              <div>
                <label
                  htmlFor="country"
                  className="block text-lg font-semibold text-gray-800"
                >
                  Country:
                </label>
                <Field
                  type="text"
                  id="country"
                  name="country"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-lg"
                  required
                />
              </div>

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
                    htmlFor="selectedCuisine"
                    className="block text-lg font-semibold text-gray-800"
                  >
                    Cuisine Type:
                  </label>
                  <Field
                    as="select"
                    id="selectedCuisine"
                    name="selectedCuisine"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-lg"
                  >
                    <option value="">Select Cuisine...</option>
                    {cuisines.map((cuisine, index) => (
                      <option key={index} value={cuisine}>
                        {cuisine}
                      </option>
                    ))}
                  </Field>
                </div>
              )}
              {values.establishmentType === "Bar" && (
                <div>
                  <label
                    htmlFor="selectedBarType"
                    className="block text-lg font-semibold text-gray-800"
                  >
                    Type of Bar:
                  </label>
                  <Field
                    as="select"
                    id="selectedBarType"
                    name="selectedBarType"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-lg"
                  >
                    <option value="">Select Bar Type...</option>
                    {typesOfBars.map((barType, index) => (
                      <option key={index} value={barType}>
                        {barType}
                      </option>
                    ))}
                  </Field>
                </div>
              )}
              {values.establishmentType === "Park" && (
                <>
                  <div>
                    <label
                      htmlFor="selectedParkType"
                      className="block text-lg font-semibold text-gray-800"
                    >
                      Type of Park:
                    </label>
                    <Field
                      as="select"
                      id="selectedParkType"
                      name="selectedParkType"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 text-lg"
                    >
                      <option value="">Select Park Type...</option>
                      {typesOfParks.map((parkType, index) => (
                        <option key={index} value={parkType}>
                          {parkType}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-gray-800">
                      Park Facilities:
                    </label>
                    <div className="flex items-center space-x-4">
                      <Field
                        type="checkbox"
                        id="parkIsPublic"
                        name="parkIsPublic"
                        className="mr-2"
                      />
                      <label
                        htmlFor="parkIsPublic"
                        className="flex items-center"
                      >
                        Public
                      </label>
                      <Field
                        type="checkbox"
                        id="parkIsPrivate"
                        name="parkIsPrivate"
                        className="mr-2"
                      />
                      <label
                        htmlFor="parkIsPrivate"
                        className="flex items-center"
                      >
                        Private
                      </label>
                      {values.parkIsPrivate && (
                        <>
                          <Field
                            type="checkbox"
                            id="parkIsFree"
                            name="parkIsFree"
                            className="mr-2"
                          />
                          <label
                            htmlFor="parkIsFree"
                            className="flex items-center"
                          >
                            Free
                          </label>
                          <Field
                            type="checkbox"
                            id="parkIsPaid"
                            name="parkIsPaid"
                            className="mr-2"
                          />
                          <label
                            htmlFor="parkIsPaid"
                            className="flex items-center"
                          >
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
                      htmlFor="selectedMuseumType"
                      className="block text-lg font-semibold text-gray-800"
                    >
                      Type of Museum:
                    </label>
                    <Field
                      as="select"
                      id="selectedMuseumType"
                      name="selectedMuseumType"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 text-lg"
                    >
                      <option value="">Select Museum Type...</option>
                      {typesOfMuseums.map((museumType, index) => (
                        <option key={index} value={museumType}>
                          {museumType}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-gray-800">
                      Type of Art:
                    </label>
                    <div className="flex flex-wrap">
                      <Field
                        as="select"
                        id="selectedTypeofArt"
                        name="selectedTypeofArt"
                        className="w-full rounded-md border border-gray-300 px-4 py-2 text-lg appearance-none"
                      >
                        <option value="">Select Type of Art...</option>
                        {typesOfArtInMuseums.map((artType, index) => (
                          <option key={index} value={artType}>
                            {artType}
                          </option>
                        ))}
                      </Field>
                    </div>
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-gray-800">
                      Museum Facilities:
                    </label>
                    <div className="flex items-center space-x-4">
                      <Field
                        type="checkbox"
                        id="museumIsFree"
                        name="museumIsFree"
                        className="mr-2"
                      />
                      <label
                        htmlFor="museumIsFree"
                        className="flex items-center"
                      >
                        Free
                      </label>
                      <Field
                        type="checkbox"
                        id="museumIsPaid"
                        name="museumIsPaid"
                        className="mr-2"
                      />
                      <label
                        htmlFor="museumIsPaid"
                        className="flex items-center"
                      >
                        Paid
                      </label>
                    </div>
                  </div>
                </>
              )}
              {(values.establishmentType === "Bar" ||
                values.establishmentType === "Restaurant" ||
                (values.establishmentType === "Park" && values.parkIsPaid) ||
                (values.establishmentType === "Museum" &&
                  values.museumIsPaid)) && (
                <div>
                  <label htmlFor="selectedPriceLevel">
                    Average Price Level:
                  </label>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, index) => {
                      const PriceLevel = index + 1
                      return (
                        <span
                          key={index}
                          className={`cursor-pointer text-2xl ${
                            PriceLevel <= values.PriceLevel
                              ? "text-green-500"
                              : "text-gray-300"
                          }`}
                          onClick={() =>
                            setFieldValue("PriceLevel", PriceLevel)
                          }
                        >
                          $
                        </span>
                      )
                    })}
                  </div>
                </div>
              )}
              {values.establishmentType === "Restaurant" && (
                <div>
                  <label htmlFor="currentRating">Michelin stars:</label>
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, index) => {
                      const currentRating = index + 1
                      return (
                        <span
                          key={index}
                          className={`cursor-pointer text-2xl ${
                            currentRating <= values.currentRating
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }`}
                          onClick={() =>
                            setFieldValue("currentRating", currentRating)
                          }
                        >
                          &#9733;
                        </span>
                      )
                    })}
                  </div>
                </div>
              )}
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300 text-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default AddressForm
