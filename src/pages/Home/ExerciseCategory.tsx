import React from 'react'
import { LucideIcon } from 'lucide-react'

interface ExerciseCategoryProps {
  Icon: LucideIcon
  title: string
  onClick: () => void
}

const ExerciseCategory = ({ Icon, title, onClick }: ExerciseCategoryProps) => {
  return (
    <div 
      className="bg-gray-800/50 rounded-xl p-6 flex flex-col items-center gap-4 cursor-pointer
        hover:bg-emerald-400/10 transition-colors group"
      onClick={onClick}
    >
      <div className="w-12 h-12 rounded-xl bg-emerald-400/20 flex items-center justify-center">
        <Icon className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
      </div>
      <h3 className="text-sm font-medium text-white text-center">{title}</h3>
    </div>
  )
}

export default ExerciseCategory