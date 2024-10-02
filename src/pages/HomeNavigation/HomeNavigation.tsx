import { useLocation } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Glow } from '../../components/Glow'
import { usePathName } from '../../hooks/use-path-name'

export const HomeNavigation = () => {
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('lg')
  const { totalPaths } = usePathName()
  useEffect(() => {
    if (totalPaths === 0 && size !== 'lg') {
      setSize('lg')
    }
    if (totalPaths === 1 && size !== 'md') {
      setSize('md')
    }
    if (totalPaths > 1 && size !== 'sm') {
      setSize('sm')
    }
  }, [totalPaths, size, setSize])

  return (
    <>
      <Glow className="cursor-none">Brett Garbitt</Glow>
    </>
  )
}
