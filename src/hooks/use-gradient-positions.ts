import { useEffect, useState } from 'react'
import { gradientPositionVariants } from '../lib/utils/constants/tailwind-constants'
import { roundToNearest, valuePercentageOfRange } from '../lib/utils/numbers'
import { useMousePosition } from './use-mouse-position'

interface GradientPositionTailwindValues {
  from: string
  via: string
  to: string
}

export interface GradientPositionParams {
  minX: number
  maxX: number
}

export const useGradientPositions = ({
  minX,
  maxX,
}: GradientPositionParams) => {
  const { mouseX } = useMousePosition()
  const [gradientPositions, setGradientPositions]
    = useState<GradientPositionTailwindValues>({
      from: gradientPositionVariants.from['40'],
      via: gradientPositionVariants.via['50'],
      to: gradientPositionVariants.to['60'],
    })

  useEffect(() => {
    if (mouseX === null || mouseX < minX || mouseX > maxX) {
      return
    }

    const mousePercent = valuePercentageOfRange(mouseX, {
      min: minX,
      max: maxX,
    })

    setGradientPositions({
      from: gradientPositionVariants.from[
        roundToNearest(mousePercent - 10, {
          multiple: 5,
          min: 0,
          max: 80,
        }).toString() as '0'
      ],
      via: gradientPositionVariants.via[
        roundToNearest(mousePercent, {
          multiple: 5,
          min: 10,
          max: 90,
        }).toString() as '0'
      ],
      to: gradientPositionVariants.to[
        roundToNearest(mousePercent + 10, {
          multiple: 5,
          min: 20,
          max: 100,
        }).toString() as '0'
      ],
    })
  }, [mouseX, minX, maxX])

  return gradientPositions
}
