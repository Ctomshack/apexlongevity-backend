import React from 'react'
import { PencilSquareIcon, TrashIcon} from "@heroicons/react/24/outline";
import Link from 'next/link';

const ProviderRow = ({ providers }) => {
  return (
    <>
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
              <PencilSquareIcon className='mx-2 h-5 w- text-apexB' title='edit' />
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
    </>
  )
}

export default ProviderRow