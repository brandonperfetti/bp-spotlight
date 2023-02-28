import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import { Children, createContext, Fragment, useContext } from 'react'

const ModalContext = createContext({
  disableTrap: false,
  isFullScreen: false,
  onClose() {}
})

export function Modal({
  size = 'lg',
  fullHeight = false,
  children,
  isOpen,
  hideClose = false,
  disableTrap = false,
  onClose,
  onAfterClose
}) {
  const isFullScreen = size === 'full-screen'
  const childrenArray = Children.toArray(children)
  const title = childrenArray.find(
    (child) => child.type.name === ModalTitle.name
  )
  const content = childrenArray.filter(
    (child) => child.type.name !== ModalTitle.name
  )

  const body = (
    <div
      className={classNames('flex min-h-screen justify-center', {
        'items-center': !fullHeight,
        'p-4': size !== 'full-screen'
      })}>
      <Transition.Child
        as={Fragment}
        enter={classNames({ 'ease-out duration-300': !isFullScreen })}
        enterFrom={classNames({ 'opacity-0': !isFullScreen })}
        enterTo={classNames({ 'opacity-100': !isFullScreen })}
        leave={classNames({ 'ease-in duration-200': !isFullScreen })}
        leaveFrom={classNames({ 'opacity-100': !isFullScreen })}
        leaveTo={classNames({ 'opacity-0': !isFullScreen })}>
        <div>
          {disableTrap && (
            <div
              role="button"
              tabIndex={-1}
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={onClose}
              onKeyUp={(e) => {
                if (e.key === 'Escape') {
                  onClose()
                }
              }}
            />
          )}
          {!disableTrap && (
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          )}
        </div>
      </Transition.Child>
      <Transition.Child
        as={Fragment}
        enter={classNames({ 'ease-out duration-300': !isFullScreen })}
        enterFrom={classNames({
          'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95': !isFullScreen
        })}
        enterTo={classNames({
          'opacity-100 translate-y-0 sm:scale-100': !isFullScreen
        })}
        leave={classNames({ 'ease-in duration-200': !isFullScreen })}
        leaveFrom={classNames({
          'opacity-100 translate-y-0 sm:scale-100': !isFullScreen
        })}
        leaveTo={classNames({
          'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95': !isFullScreen
        })}
        afterLeave={onAfterClose}>
        <div
          className={classNames('transform shadow-xl transition-all', {
            'max-w-xs': size === 'xs',
            'max-w-sm': size === 'sm',
            'max-w-md': size === 'md',
            'max-w-lg': size === 'lg',
            'max-w-xl': size === 'xl',
            'max-w-2xl': size === '2xl',
            'max-w-3xl': size === '3xl',
            'max-w-4xl': size === '4xl',
            'max-w-5xl': size === '5xl',
            'max-w-6xl': size === '6xl',
            'max-w-7xl': size === '7xl',
            'max-w-max': size === 'max',

            'w-full rounded-lg bg-white px-4 pb-4 pt-4 dark:bg-zinc-800 sm:my-8 sm:p-6':
              !isFullScreen,

            'flex h-screen w-screen flex-col overflow-auto bg-gray-100':
              isFullScreen
          })}>
          {!hideClose && !isFullScreen && (
            <div className="absolute top-0 right-0 block pt-4 pr-4">
              <button
                type="button"
                className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:bg-zinc-800 dark:text-white"
                onClick={() => onClose()}>
                <span className="sr-only">Close Modal</span>
                <XIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          )}
          {isFullScreen && (
            <>
              {title}
              <div className="flex-grow px-4 pt-4 pb-4 sm:p-6">{content}</div>
            </>
          )}
          {!isFullScreen && children}
        </div>
      </Transition.Child>
    </div>
  )

  return (
    <ModalContext.Provider value={{ disableTrap, isFullScreen, onClose }}>
      <Transition.Root show={isOpen} as={Fragment}>
        <div>
          {disableTrap && (
            <div className="fixed inset-0 z-40 overflow-y-auto">{body}</div>
          )}
          {!disableTrap && (
            <Dialog
              as="div"
              className="fixed inset-0 z-40 overflow-y-auto"
              onClose={() => {
                // We don't want the user to close the modal when
                // they hit the escape key when in fullscreen.
                if (!isFullScreen) {
                  onClose()
                }
              }}>
              <div>{body}</div>
            </Dialog>
          )}
        </div>
      </Transition.Root>
    </ModalContext.Provider>
  )
}

Modal.Title = ModalTitle

function ModalTitle({ children }) {
  const { disableTrap, isFullScreen, onClose } = useContext(ModalContext)

  return (
    <>
      {isFullScreen && (
        <nav className="sticky top-0 z-40">
          <div className="flex h-[3.75rem] items-center bg-white px-4 shadow">
            <div className="flex w-1/12 items-center">
              <button
                className="flex items-center space-x-2 text-sm text-gray-900 dark:text-white"
                onClick={onClose}>
                <span>Exit</span>
              </button>
            </div>
            <div className="flex w-10/12 items-center justify-center">
              {disableTrap && <h3>{children}</h3>}
              {!disableTrap && <Dialog.Title as="h3">{children}</Dialog.Title>}
            </div>
          </div>
        </nav>
      )}
      {!isFullScreen && (
        <>
          {disableTrap && (
            <h3 className="pr-6 text-2xl font-normal text-gray-700 dark:text-white">
              {children}
            </h3>
          )}
          {!disableTrap && (
            <Dialog.Title
              as="h3"
              className="pr-6 text-2xl font-normal text-gray-700 dark:text-white">
              {children}
            </Dialog.Title>
          )}
        </>
      )}
    </>
  )
}
