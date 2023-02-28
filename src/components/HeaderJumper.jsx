import { SearchIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { Modal } from './Modal'
import Search from './Search'
import { useKeyShortcut } from './useKeyShortcut'

export function HeaderJumper() {
  const [showModal, setShowModal] = useState(false)

  useKeyShortcut(() => setShowModal(true))

  return (
    <div className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
      <button className="flex" onClick={() => setShowModal(true)}>
        <span className="sr-only">Search</span>
        <SearchIcon className="h-6 w-6 text-slate-400" />
      </button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Title>Search</Modal.Title>
        <div className="mt-4">
          {/* <Jumper onJump={() => setShowModal(false)} /> */}
          <Search />
        </div>
      </Modal>
    </div>
  )
}
