import React from 'react'
import { DivideIcon as LucideIcon } from 'lucide-react'

interface StatCardProps {
  icon: LucideIcon
  title: string
  value: string
  unit: string
  progress: number
}

const StatCard = ({ icon: Icon, title, value, unit, progress }: StatCardProps) => {
  return (
    <div className="bg-gray-800/50 rounded-xl p-6 flex items-start gap-4 group hover:-translate-y-1 transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-emerald-400/20 flex items-center justify-center">
        <Icon className="w-6 h-6 text-emerald-400" />
      </div>
      <div className="flex-1">
        <h3 className="text-sm text-gray-400 mb-2">{title}</h3>
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-2xl font-semibold text-white">{value}</span>
          <span className="text-sm text-gray-400">{unit}</span>
        </div>
        <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-emerald-400 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export default StatCard