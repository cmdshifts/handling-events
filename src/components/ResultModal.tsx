import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Button } from './Button'
import { RiCheckboxCircleLine, RiCloseCircleLine } from 'react-icons/ri'

interface ModalProps {
  input: number | undefined
  result: number | undefined
  isOpen: boolean
  onClose: () => void
}

export const ResultModal = ({ input, result, isOpen, onClose }: ModalProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-100"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-[5px] bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold leading-6 text-gray-900"
                  >
                    {input === result ? (
                      <span className="flex items-center gap-2 text-green-500">
                        <RiCheckboxCircleLine />
                        <p>Congratulation!</p>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 text-red-500">
                        <RiCloseCircleLine />
                        <p>Sorry! Try again</p>
                      </span>
                    )}
                  </Dialog.Title>
                  <div className="mt-2 text-lg">
                    <p>
                      Your number is <b>{input}</b>
                    </p>
                    <p>
                      Computer's number is <b>{result}</b>
                    </p>
                  </div>

                  <div className="mt-4">
                    <Button onClick={onClose} name={'Close'} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
