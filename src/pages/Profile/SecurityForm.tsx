import React, { useState } from 'react'
import { Lock, Eye, EyeOff } from 'lucide-react'

interface SecurityFormProps {
  onUpdate: (data: unknown) => void
}

const SecurityForm = ({ onUpdate }: SecurityFormProps) => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="bg-gray-800/50 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-white mb-6">Change Password</h3>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm text-white">Current Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type={showCurrentPassword ? "text" : "password"}
              placeholder="Enter current password"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 pl-10 pr-12 text-white placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-white">New Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="Enter new password"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 pl-10 pr-12 text-white placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-white">Confirm New Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm new password"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 pl-10 pr-12 text-white placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SecurityForm