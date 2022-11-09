import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ShieldExclamationIcon } from '@heroicons/react/24/outline'
import supabase from '../config/supabaseClient'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function DeleteModal({ visible, onClose }) {
    const router = useRouter();
    const { id } = router.query
    const [open, setOpen] = useState(true)
  
    const cancelButtonRef = useRef(null)

    const handleClose = () => {
        setOpen(false)
      }

    const handleDelete = async () => {
        const { data, error } = await supabase
            .from('Providers')
            .delete()
            .eq('ID', id)

        if (data) {
            console.log(data)
        }

        if (error) {
            console.log(error)
        }
        onClose
    }
  
  
  if(!visible) return null;

  return (
    <Transition.Root show={open} as={Fragment} onClose={onClose}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                    <ShieldExclamationIcon className="h-6 w-6 text-red-500" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-6">
                    <Dialog.Title as="h3" className="text-3xl font-medium leading-6 text-gray-900">
                      Wait!
                    </Dialog.Title>
                    <div className="mt-6">
                      <p className="text-md text-gray-500">
                        {`By clicking 'confirm', you are PERMANENTLY deleting this Provider from the database. Are you sure you want to proceed?`}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-8 sm:grid sm:grid-flow-row-dense sm:grid-cols-1 sm:gap-3 flex items-center justify-center">
                  <Link href='/admin/Dashboard'>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-apexG focus:outline-none focus:ring-2 focus:ring-apexG focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                    onClick={handleDelete}
                  >
                    Confirm
                  </button>
                  </Link>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none sm:col-start-1 sm:mt-0 sm:text-sm"
                    onClick={onClose}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
