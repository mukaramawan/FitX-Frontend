import React from 'react'
import { DivideIcon as LucideIcon } from 'lucide-react'

interface PracticeCardProps {
  Icon: LucideIcon
  title: string
  description: string
  buttonText: string
  onClick: () => void
}

const PracticeCard = ({ Icon, title, description, buttonText, onClick }: PracticeCardProps) => {
  return (
    <div className="bg-gray-800/50 rounded-xl p-6 flex gap-6 items-start">
      <div className="w-12 h-12 rounded-xl bg-emerald-400/20 flex items-center justify-center">
        <Icon className="w-6 h-6 text-emerald-400" />
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
        <p className="text-sm text-gray-400 mb-4">{description}</p>
        <button 
          onClick={onClick}
          className="px-6 py-2 rounded-lg border border-emerald-400 text-emerald-400 text-sm font-medium
            hover:bg-emerald-400 hover:text-black transition-colors"
        >
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default PracticeCard