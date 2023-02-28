import { useEffect, useRef } from 'react'

export function useKeyShortcut(cb) {
  const currentKeys = useRef({})

  useEffect(() => {
    const combos = [
      ['meta', 'k'],
      ['control', 'k']
    ]

    const onKeydown = (evt) => {
      currentKeys.current[evt.key.toLowerCase()] = true

      const isComboValid = combos.some((combo) => {
        let complete = true

        combo.forEach((key) => {
          if (!currentKeys.current[key]) complete = false
        })

        return complete
      })

      if (isComboValid) cb()
    }

    const onKeyup = () => (currentKeys.current = {})

    document.addEventListener('keydown', onKeydown)
    document.addEventListener('keyup', onKeyup)

    return () => {
      document.removeEventListener('keydown', onKeydown)
      document.removeEventListener('keyup', onKeyup)
    }
  }, [cb])
}
