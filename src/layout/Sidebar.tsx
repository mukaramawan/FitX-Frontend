import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Home, Bot, Camera as Camera3d, LineChart, Dumbbell, User, MoreVertical, X } from 'lucide-react'

function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Bot, label: "Workout with AI", path: "/ai-workout" },
    { icon: Camera3d, label: "Workout with AR", path: "/ar-workout" },
    { icon: LineChart, label: "Analytics", path: "/analytics" },
    { icon: Dumbbell, label: "Exercise Library", path: "/exercises" },
    { icon: User, label: "Profile", path: "/profile" },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      {/* Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 p-2 rounded-full text-white shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MoreVertical className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-[70%] sm:w-[50%] md:w-[13%] bg-gray-950 p-4 flex flex-col z-40 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-50"} md:translate-x-0 md:static md:h-auto md:flex md:flex-col justify-between`}
      >
        <div>
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-semibold text-emerald-400">FitX</h1>
          </div>

          <nav className="flex-1">
            <ul className="space-y-2">
              {menuItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <li
                    key={index}
                    className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${
                      isActive(item.path)
                        ? 'bg-emerald-400/20 text-emerald-400'
                        : 'text-gray-400 hover:bg-emerald-400/10 hover:text-emerald-400'
                    }`}
                    onClick={() => {
                      navigate(item.path)
                      setIsOpen(false)
                    }}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        <div className="pt-4 border-t border-gray-800 flex items-center gap-3">
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover border-2 border-emerald-400"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white">Mukaram Awan</span>
            <span className="text-xs text-emerald-400">Premium Member</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar