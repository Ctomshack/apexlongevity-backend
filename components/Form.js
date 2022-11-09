/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ProviderTable from "./ProviderTable";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import supabase from "../config/supabaseClient";
import Link from "next/link";
import Navbar from '../components/Navbar'

const navigation = [{ name: "Adminstrator", href: "#", current: true }];
const states = [
  "Alabama",
  "Arizona",
  "California",
  "Colorado",
  "Florida",
  "Georgia",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  ,
  "Ohio",
  "Oklahoma",
  "Oregon",
  ,
  "Pennsylvania",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Island",
  "Virginia",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Form() {
  const [Name, setName] = useState('')
  const [Address, setAddress] = useState('')
  const [City, setCity] = useState('')
  const [State, setState] = useState('')
  const [Phone, setPhone] = useState('')
  const [formError, setFormError] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  const router = useRouter()
 
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!Name || !Address || !City || !State || !Phone) {
      setFormError('Please fill in all fields before submitting the form.')
      return
    }

    
    
    const { data, error } = await supabase
      .from('Providers')
      .insert([{Name, Address, City, State, Phone}])

      if (error) {
        setFormError('Please fill in all fields before submitting the form.')
        console.log(error)
      }
      if (data) {
        console.log(data)
        setFormError(null)
        setSuccessMessage('New Provider successfully added to the database!')
      }
  }

  return (
    <>
      <div className="min-h-full">
        <Navbar />
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
              <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      New Provider
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Fill out the form to add a new provider to the database.
                    </p>
                  </div>
                  <div className="mt-5 md:col-span-2 md:mt-0">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-5">
                        <label
                          htmlFor="Name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Clinic Name
                        </label>
                        <input
                          type="text"
                          name="Name"
                          id="Name"
                          placeholder="Healthsource Chiropractic"
                          value={Name}
                          onChange={(e) => setName(e.target.value)}
                          // autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-5">
                        <label
                          htmlFor="Address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Street address
                        </label>
                        <input
                          type="text"
                          name="Address"
                          id="Address"
                          placeholder="36901 American Way, suite 7"
                          value={Address}
                          onChange={(e) => setAddress(e.target.value)}
                          // autoComplete="address"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label
                          htmlFor="City"
                          className="block text-sm font-medium text-gray-700"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          name="City"
                          id="City"
                          placeholder="Avon"
                          value={City}
                          onChange={(e) => setCity(e.target.value)}
                        //   autoComplete="address-level2"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="State"
                          className="block text-sm font-medium text-gray-700"
                        >
                          State
                        </label>
                        <select
                          id="State"
                          name="State"
                          value={State}
                          onChange={(e) => setState(e.target.value)}
                          // autoComplete="state-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                          {states.map((state, Idx) => {
                            return <option key={Idx}>{state}</option>;
                          })}
                        </select>
                      </div>
                      <div className="col-span-6 sm:col-span-5">
                        <label
                          htmlFor="Phone"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Phone
                        </label>
                        <input
                          type="text"
                          name="Phone"
                          id="Phone"
                          placeholder="(888) 712-2739"
                          value={Phone}
                          onChange={(e) => setPhone(e.target.value)}
                          // autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Link href='/admin/Dashboard'>
                <button
                  type="button"
                  className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
                </Link>
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
              {formError && <p className="error">{formError}</p>}
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
