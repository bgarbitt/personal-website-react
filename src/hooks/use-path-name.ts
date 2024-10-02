import { useLocation } from '@tanstack/react-router'

export const usePathName = () => {
  const { pathname } = useLocation()
  const totalPaths = pathname.split('/').length - 1
  return { pathname, totalPaths }
}
