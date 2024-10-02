import { type ReactNode, useEffect, useRef, useState } from 'react'
import {
  type GradientPositionParams,
  useGradientPositions,
} from '../hooks/use-gradient-positions'

interface GlowProps {
  children: ReactNode
  className?: string
}

export const Glow = ({ children, className }: GlowProps) => {
  const ref = useRef<HTMLSpanElement>(null)
  const [gradientPositionParams, setGradientPositionParams]
    = useState<GradientPositionParams>({ minX: 0, maxX: window.innerWidth })
  const { from, to, via } = useGradientPositions(gradientPositionParams)
  useEffect(() => {
    if (ref.current) {
      const boundingRect = ref.current?.getBoundingClientRect()
      setGradientPositionParams({
        minX: boundingRect.left,
        maxX: boundingRect.right,
      })
    }
  }, [])

  return (
    <>
      <span
        className={`absolute mx-auto box-content flex w-fit select-none border bg-gradient-to-r
          from-sky-400 ${from} via-gray-200 ${via} to-cyan-400 ${to} bg-clip-text py-4
          text-center text-6xl font-extrabold text-transparent blur-lg`}
        ref={ref}
      >
        {children}
      </span>
      <h1
        className={`relative top-0 flex h-auto w-fit select-auto items-center justify-center
          bg-gradient-to-r from-sky-400 ${from} via-gray-200 ${via} to-cyan-400 ${to}
          bg-clip-text py-4 text-center text-6xl font-extrabold text-transparent
          ${className}`}
      >
        {children}
      </h1>
    </>
  )
}
