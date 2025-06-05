import React from 'react'
import { Camera } from 'lucide-react'

interface ProfileHeaderProps {
  user: {
    name: string
    email: string
    avatar: string
  }
}

const ProfileHeader = ({ user }: ProfileHeaderProps) => {
  return (
    <div className="bg-gray-800/50 rounded-xl p-6 flex items-center gap-6">
      <div className="relative">
        <img 
          src={user.avatar} 
          alt={user.name} 
          className="w-28 h-28 rounded-full object-cover border-2 border-emerald-400"
        />
        <button className="absolute bottom-0 right-0 w-9 h-9 rounded-full bg-emerald-400 flex items-center justify-center hover:bg-emerald-500 transition-colors">
          <Camera className="w-5 h-5 text-black" />
        </button>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-white mb-2">{user.name}</h2>
        <p className="text-gray-400">{user.email}</p>
      </div>
    </div>
  )
}

export default ProfileHeader