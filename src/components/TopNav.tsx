import React from 'react'
import NotificationDropdown from './NotificationDropdown'
import UserDropdown from './UserDropdown'

function TopNav() {
  const currentTime = new Date().getHours()
  let greeting = 'Good morning'

  if (currentTime >= 12 && currentTime < 17) {
    greeting = 'Good afternoon'
  } else if (currentTime >= 17 || currentTime < 5) {
    greeting = 'Good evening'
  }

  return (
    <div className="fixed top-0 left-0 md:left-[13%] right-0 h-16 bg-gray-800 flex items-center justify-between px-4 sm:px-6 md:px-8 z-50 shadow-md">
      <div className="flex flex-col">
        <h2 className="text-sm sm:text-base md:text-lg font-semibold text-white">{greeting}, Mukaram</h2>
        <p className="text-xs md:text-sm text-gray-400">Welcome back!</p>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <NotificationDropdown />
        <UserDropdown 
          userName="Mukaram"
          userEmail="mukaram@example.com"
          userImage="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
        />
      </div>
    </div>
  )
}

export default TopNav
