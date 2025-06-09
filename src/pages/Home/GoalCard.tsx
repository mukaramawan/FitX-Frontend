import React from 'react'
import { DivideIcon as LucideIcon } from 'lucide-react'

interface GoalCardProps {
  Icon: LucideIcon
  title: string
  current: number
  target: number
  unit: string
}

const GoalCard = ({ Icon, title, current, target, unit }: GoalCardProps) => {
  const percentage = (current / target) * 100
  
  return (
    <div className="flex flex-col items-center p-4 text-white">
      <div className="relative w-20 h-20 mb-4">
        <div 
          className="absolute inset-0 rounded-full bg-emerald-400/20"
          style={{
            background: `conic-gradient(#10b981 ${percentage}%, transparent ${percentage}%)`,
            maskImage: 'radial-gradient(transparent 55%, black 56%)',
            WebkitMaskImage: 'radial-gradient(transparent 55%, black 56%)'
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="w-6 h-6 text-emerald-400" />
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-sm text-gray-400 mb-1">{title}</h3>
        <p className="text-base">
          <span className="text-emerald-400">{current}</span>
          <span className="text-gray-400 ml-1">/ {target}{unit && ` ${unit}`}</span>
        </p>
      </div>
    </div>
  )
}

export default GoalCard