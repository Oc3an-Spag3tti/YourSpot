import React, { useState } from "react"
import { Formik, Form, Field } from "formik"
import AddressFormPt2 from "@/components/_addressform_pt2"

const AddressFormPt1 = () => {
  const [showAddressForm2, setShowAddressForm2] = useState(false)

  const handleSubmitAddressForm = (values) => {
    console.log(values)
    setShowAddressForm2(true)
  }

  return !showAddressForm2 ? (
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
          }}
          onSubmit={handleSubmitAddressForm}
        >
          {({ isSubmitting }) => (
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
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300 text-lg font-semibold"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  ) : (
    <AddressFormPt2 />
  )
}

export default AddressFormPt1
