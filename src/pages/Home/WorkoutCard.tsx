import React from 'react'

interface WorkoutCardProps {
  title: string
  duration: number
  level: string
  image: string
  onStart: () => void
}

const WorkoutCard = ({ title, duration, level, image, onStart }: WorkoutCardProps) => {
  return (
    <div className="bg-gray-800/50 rounded-xl overflow-hidden">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-300">{duration} min</span>
              <span className="px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-400">
                {level}
              </span>
            </div>
          </div>
        </div>
      </div>
      <button 
        onClick={onStart}
        className="w-full p-4 text-emerald-400 font-medium hover:bg-emerald-400/10 transition-colors"
      >
        Start Exercise
      </button>
    </div>
  )
}

export default WorkoutCard