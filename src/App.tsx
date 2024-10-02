import { Outlet, useLocation } from '@tanstack/react-router'
import { useState } from 'react'
import { HomeNavigation } from './pages/HomeNavigation/HomeNavigation'

function App() {
  const { pathname } = useLocation()
  return (
    <div className="h-screen bg-gray-800 text-gray-200">
      <HomeNavigation />
      {pathname === '/' ? '' : <Outlet />}
    </div>
  )
}

export default App
