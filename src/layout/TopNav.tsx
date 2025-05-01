import { Bell, MoreVertical, X } from 'lucide-react'

interface TopNavProps {
  isOpen: boolean
  setIsOpen: (val: boolean) => void
}

function TopNav({ isOpen, setIsOpen }: TopNavProps) {
  const currentTime = new Date().getHours()
  let greeting = 'Good morning'

  if (currentTime >= 12 && currentTime < 17) {
    greeting = 'Good afternoon'
  } else if (currentTime >= 17 || currentTime < 5) {
    greeting = 'Good evening'
  }

  return (
    <div className="fixed top-0 left-0 md:left-[13%] right-0 h-16 bg-gray-800 flex items-center justify-between px-4 sm:px-6 md:px-8 z-40 shadow-md">
      
      {/* Sidebar Toggle for Mobile */}
      <div className="flex items-center gap-3">
        <button
          className="md:hidden text-white mr-3"
          onClick={() => setIsOpen(!isOpen)}
        >
         {isOpen ? <X className="w-6 h-6" /> : <MoreVertical className="w-6 h-6" />}
        </button>
        
        <div className="flex flex-col">
          <h2 className="text-sm sm:text-base md:text-lg font-semibold text-white">{greeting}, Mukaram</h2>
          <p className="text-xs md:text-sm text-gray-400">Welcome back!</p>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <div className="relative cursor-pointer">
          <Bell className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-white transition-colors" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer group">
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
            alt="Profile"
            className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover"
          />
          <svg
            className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white transition-colors"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default TopNav
