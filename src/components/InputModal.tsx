import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Button } from './Button'
import { Input } from './Input'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  onGetInputValue: (value: number) => void
  onSubmitted: () => void
}

export const InputModal = ({
  isOpen,
  onClose,
  onGetInputValue,
  onSubmitted,
}: ModalProps) => {
  const handleGetValue = (value: number) => {
    onGetInputValue(value)
  }

  const handleSubmit = () => {
    onClose()
    onSubmitted()
  }

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
                    className="text-lg font-bold leading-6 text-gray-900"
                  >
                    Pick a number
                  </Dialog.Title>
                  <div className="mt-2">
                    <Input onGetData={handleGetValue} />
                  </div>

                  <div className="mt-4">
                    <Button onClick={handleSubmit} name={'Guess'} />
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
