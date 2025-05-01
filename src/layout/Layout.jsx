import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopNav from './TopNav'
import { useState } from 'react'

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 relative">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <TopNav />
        <div className="flex-1 p-4 mt-16 md:mt-16 lg:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
