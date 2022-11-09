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
          <td className="relative whitespace-nowrap py-4 text-right text-sm font-medium flex justify-center">
            <Link href={'/admin/edit/' + provider.ID}>
              <PencilSquareIcon className='h-5 text-apexB' title='edit' />
            </Link>
          </td>
        </tr>
      ))}
    </>
  )
}

export default ProviderRow