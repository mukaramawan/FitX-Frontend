import React, { useState } from 'react'
import SearchBar from './SearchBar'
import ExerciseFilters from './ExerciseFilters'
import ExerciseCard from './ExerciseCard'
import Pagination from './Pagination'

const ITEMS_PER_PAGE = 6

const ExerciseLibrary = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [exerciseType, setExerciseType] = useState('')
  const [difficultyLevel, setDifficultyLevel] = useState('')
  const [duration, setDuration] = useState('')
  const [equipment, setEquipment] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  // Mock data - replace with actual API call
  const exercises = [
    {
      id: 1,
      title: 'Full Body HIIT',
      type: 'Cardio',
      duration: 30,
      difficulty: 'Advanced',
      imageUrl: 'https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg'
    },
    {
      id: 2,
      title: 'Core Strength',
      type: 'Strength',
      duration: 20,
      difficulty: 'Intermediate',
      imageUrl: 'https://images.pexels.com/photos/4162438/pexels-photo-4162438.jpeg'
    },
    {
      id: 3,
      title: 'Morning Yoga Flow',
      type: 'Yoga',
      duration: 15,
      difficulty: 'Beginner',
      imageUrl: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg'
    }
  ]

  // Filter exercises based on search and filters
  const filteredExercises = exercises.filter(exercise => {
    const matchesSearch = exercise.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = !exerciseType || exercise.type.toLowerCase() === exerciseType.toLowerCase()
    const matchesDifficulty = !difficultyLevel || exercise.difficulty.toLowerCase() === difficultyLevel.toLowerCase()
    const matchesDuration = !duration || exercise.duration === parseInt(duration)
    
    return matchesSearch && matchesType && matchesDifficulty && matchesDuration
  })

  // Calculate pagination
  const totalPages = Math.ceil(filteredExercises.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedExercises = filteredExercises.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handleStartExercise = (exerciseId: number) => {
    console.log('Starting exercise:', exerciseId)
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold text-white">Exercise Library</h1>
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search exercises..."
        />
      </div>

      <ExerciseFilters
        exerciseType={exerciseType}
        difficultyLevel={difficultyLevel}
        duration={duration}
        equipment={equipment}
        onExerciseTypeChange={setExerciseType}
        onDifficultyChange={setDifficultyLevel}
        onDurationChange={setDuration}
        onEquipmentChange={setEquipment}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedExercises.map(exercise => (
          <ExerciseCard
            key={exercise.id}
            {...exercise}
            onStart={() => handleStartExercise(exercise.id)}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  )
}

export default ExerciseLibrary