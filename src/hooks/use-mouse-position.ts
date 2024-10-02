import { useEffect, useState } from 'react'

interface MousePosition {
  mouseX: number | null
  mouseY: number | null
}

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    mouseX: null,
    mouseY: null,
  })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ mouseX: e.clientX, mouseY: e.clientY })
    }
    console.log(window)

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return mousePosition
}
