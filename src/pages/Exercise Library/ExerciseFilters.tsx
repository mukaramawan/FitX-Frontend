import React from 'react'

interface ExerciseFiltersProps {
  exerciseType: string
  difficultyLevel: string
  duration: string
  equipment: string
  onExerciseTypeChange: (value: string) => void
  onDifficultyChange: (value: string) => void
  onDurationChange: (value: string) => void
  onEquipmentChange: (value: string) => void
}

const ExerciseFilters = ({
  exerciseType,
  difficultyLevel,
  duration,
  equipment,
  onExerciseTypeChange,
  onDifficultyChange,
  onDurationChange,
  onEquipmentChange
}: ExerciseFiltersProps) => {
  return (
    <div className="flex flex-wrap gap-4">
      <select 
        value={exerciseType} 
        onChange={(e) => onExerciseTypeChange(e.target.value)}
        className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white cursor-pointer focus:border-emerald-400 focus:outline-none min-w-[150px]"
      >
        <option value="">Exercise Type</option>
        <option value="cardio">Cardio</option>
        <option value="strength">Strength</option>
        <option value="yoga">Yoga</option>
      </select>

      <select 
        value={difficultyLevel} 
        onChange={(e) => onDifficultyChange(e.target.value)}
        className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white cursor-pointer focus:border-emerald-400 focus:outline-none min-w-[150px]"
      >
        <option value="">Difficulty Level</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>

      <select 
        value={duration} 
        onChange={(e) => onDurationChange(e.target.value)}
        className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white cursor-pointer focus:border-emerald-400 focus:outline-none min-w-[150px]"
      >
        <option value="">Duration</option>
        <option value="15">15 min</option>
        <option value="30">30 min</option>
        <option value="45">45 min</option>
        <option value="60">60 min</option>
      </select>

      <select 
        value={equipment} 
        onChange={(e) => onEquipmentChange(e.target.value)}
        className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white cursor-pointer focus:border-emerald-400 focus:outline-none min-w-[150px]"
      >
        <option value="">Equipment</option>
        <option value="none">No Equipment</option>
        <option value="dumbbells">Dumbbells</option>
        <option value="resistance">Resistance Bands</option>
        <option value="yoga-mat">Yoga Mat</option>
      </select>
    </div>
  )
}

export default ExerciseFilters