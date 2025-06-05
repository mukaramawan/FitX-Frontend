import React from 'react'
import { Clock } from 'lucide-react'

interface ExerciseCardProps {
  title: string
  type: string
  duration: number
  difficulty: string
  imageUrl: string
  onStart: () => void
}

const ExerciseCard = ({ 
  title, 
  type, 
  duration, 
  difficulty, 
  imageUrl, 
  onStart 
}: ExerciseCardProps) => {
  const getDifficultyColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 'bg-emerald-400/20 text-emerald-400'
      case 'intermediate':
        return 'bg-yellow-400/20 text-yellow-400'
      case 'advanced':
        return 'bg-red-400/20 text-red-400'
      default:
        return 'bg-gray-400/20 text-gray-400'
    }
  }

  return (
    <div className="bg-gray-800/50 rounded-xl overflow-hidden group">
      <div className="relative h-48">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 text-white text-sm">
          {type}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-gray-400">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{duration} min</span>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm ${getDifficultyColor(difficulty)}`}>
            {difficulty}
          </span>
        </div>
        <button 
          onClick={onStart}
          className="w-full py-2 text-emerald-400 font-medium hover:bg-emerald-400/10 transition-colors rounded-lg"
        >
          Start Exercise
        </button>
      </div>
    </div>
  )
}

export default ExerciseCard