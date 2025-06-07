import React from 'react'
import { Heart, FileWarning as Running, Dumbbell, Cog as Yoga } from 'lucide-react'

interface Workout {
  exercise: string
  type: 'cardio' | 'strength' | 'yoga'
  duration: number
  calories: number
  heartRate: number
  score: number
}

interface WorkoutTableProps {
  workouts: Workout[]
}

const WorkoutTable = ({ workouts }: WorkoutTableProps) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'cardio':
        return <Running className="w-5 h-5 text-emerald-400" />
      case 'strength':
        return <Dumbbell className="w-5 h-5 text-emerald-400" />
      case 'yoga':
        return <Yoga className="w-5 h-5 text-emerald-400" />
      default:
        return null
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-emerald-400'
    if (score >= 80) return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <div className="bg-gray-800/50 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-white mb-6">Recent Workouts</h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-4 px-6 text-gray-400 font-normal">Exercise</th>
              <th className="text-left py-4 px-6 text-gray-400 font-normal">Duration</th>
              <th className="text-left py-4 px-6 text-gray-400 font-normal">Calories</th>
              <th className="text-left py-4 px-6 text-gray-400 font-normal">Heart Rate</th>
              <th className="text-left py-4 px-6 text-gray-400 font-normal">Score</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout, index) => (
              <tr key={index} className="border-b border-gray-700 last:border-0">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    {getTypeIcon(workout.type)}
                    <span className="text-white">{workout.exercise}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-white">{workout.duration} min</td>
                <td className="py-4 px-6 text-white">{workout.calories} kcal</td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-400" />
                    <span className="text-white">{workout.heartRate} bpm</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className={`font-medium ${getScoreColor(workout.score)}`}>
                    {workout.score}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default WorkoutTable