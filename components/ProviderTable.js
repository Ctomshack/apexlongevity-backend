import supabase from '../config/supabaseClient'
import { PencilSquareIcon, TrashIcon} from "@heroicons/react/24/outline";
import { useState, useEffect } from 'react';
import Link from 'next/link';


export default function ProviderTable() {
  const [fetchError, setFetchError] = useState(null)
  const [providers, setProviders] = useState(null)

  useEffect(() => {
    const fetchProviders = async () => {
      const { data, error } = await supabase
        .from('Providers')
        .select()

      if (error) {
        setFetchError('Unable to fetch Provider data.')
        setProviders(null)
        console.log(fetchError)
      }
      if (data) {
        setProviders(data)
        setFetchError(null)
      }
    }

      fetchProviders()
  }, [])

  // console.log(providers)

  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center justify-end">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Providers</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all Apex Providers including their name, address, city, state, and phone number.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Link href='/admin/NewProvider'>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-apexB px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-apexG focus:outline-none focus:ring-2 focus:ring-apexG focus:ring-offset-2 sm:w-auto"
          >
            Add provider
          </button>
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8 mb-6">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    {/* <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      ID
                    </th> */}
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Address
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      City
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      State
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Phone
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-center text-sm  font-semibold text-gray-900">
                      Actions
                    </th>
                    {/* <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th> */}
                  </tr>
                </thead>
                {fetchError && (<p>{fetchError}</p>)}
                {providers && (
                <tbody className="divide-y divide-gray-200 bg-white">
                    {providers.map((provider) => (
                      <tr key={provider.ID} className='hover:bg-gray-100'>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600">{provider.Name}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600">{provider.Address}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600">{provider.City}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600">{provider.State}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600">{provider.Phone}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 flex">
                          <Link href={'/admin/edit/' + provider.ID}>
                          {/* <button className="mx-2 px-2 py-1 rounded-md border-gray-400 border-2 text-gray-400  hover:text-gray-600 hover:border-gray-600">
                            Edit<span className="sr-only">, {provider.Name}</span>
                          </button> */}
                            <PencilSquareIcon className='mx-2 h-5 w- text-gray-400' title='edit' />
                          </Link>
                          {/* <button>
                          <TrashIcon className='mx-2 h-5 w-5 text-red-500' title='delete' />
                          </button> */}
                          {/* <a href="#" className="ml-2 px-2 py-1 rounded-md bg-red-500 border-red-500 text-white border-2 hover:bg-red-600 hover:border-red-600">
                            Delete<span className="sr-only">, {provider.Name}</span>
                          </a> */}
                        </td>
                      </tr>
                    ))}
                    
                </tbody>
                )}
              </table>
              <nav
      className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to <span className="font-medium">all</span> of{' '}
          <span className="font-medium">all</span> results
        </p>
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
    </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

