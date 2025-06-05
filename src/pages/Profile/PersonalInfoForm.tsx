import React from 'react'
import { User, Mail, Phone, UserCircle, Calendar, Ruler, Weight } from 'lucide-react'

interface PersonalInfoFormProps {
  user: {
    fullName: string
    email: string
    phone: string
    gender: string
    dateOfBirth: string
    height: number
    weight: number
  }
  onUpdate: (data: unknown) => void
}

const PersonalInfoForm = ({ user, onUpdate }: PersonalInfoFormProps) => {
  return (
    <div className="bg-gray-800/50 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-white mb-6">Personal Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm text-white">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              defaultValue={user.fullName}
              placeholder="Enter your full name"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 pl-10 pr-4 text-white placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-white">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="email" 
              defaultValue={user.email}
              placeholder="Enter your email"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 pl-10 pr-4 text-white placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-white">Phone</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="tel" 
              defaultValue={user.phone}
              placeholder="Enter your phone number"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 pl-10 pr-4 text-white placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-white">Gender</label>
          <div className="relative">
            <UserCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select 
              defaultValue={user.gender}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 pl-10 pr-4 text-white appearance-none cursor-pointer focus:border-emerald-400 focus:outline-none"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-white">Date of Birth</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="date" 
              defaultValue={user.dateOfBirth}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 pl-10 pr-4 text-white focus:border-emerald-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-white">Height (cm)</label>
          <div className="relative">
            <Ruler className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="number" 
              defaultValue={user.height}
              placeholder="Enter height in cm"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 pl-10 pr-4 text-white placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-white">Weight (kg)</label>
          <div className="relative">
            <Weight className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="number" 
              defaultValue={user.weight}
              placeholder="Enter weight in kg"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 pl-10 pr-4 text-white placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfoForm