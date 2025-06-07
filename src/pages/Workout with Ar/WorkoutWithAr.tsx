import React, { useState, useRef } from 'react'
import ExerciseCard from '../Exercise Library/ExerciseCard'
import Webcam from 'react-webcam'

const WorkoutWithAr = () => {
  const [selectedType, setSelectedType] = useState('all')
  const [isSessionActive, setIsSessionActive] = useState(false)
  const [currentRep, setCurrentRep] = useState(0)
  const [totalReps, setTotalReps] = useState(12)
  const [timer, setTimer] = useState(45)

  const webcamRef = useRef<Webcam>(null)

  const exerciseTypes = [
    { id: 'all', label: 'All', icon: '🔄' },
    { id: 'cardio', label: 'Cardio', icon: '🏃' },
    { id: 'strength', label: 'Strength', icon: '💪' },
    { id: 'yoga', label: 'Yoga', icon: '🧘' },
    { id: 'hiit', label: 'HIIT', icon: '⚡' }
  ]

  const exercises = [
    {
      id: 1,
      title: 'Perfect Push-ups',
      type: 'Strength',
      duration: 10,
      difficulty: 'Intermediate',
      imageUrl: 'https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg',
      category: 'Lower Body'
    },
    {
      id: 2,
      title: 'Dynamic Squats',
      type: 'Strength',
      duration: 15,
      difficulty: 'Beginner',
      imageUrl: 'https://images.pexels.com/photos/4162438/pexels-photo-4162438.jpeg',
      category: 'Lower Body'
    },
    {
      id: 3,
      title: 'Yoga Flow',
      type: 'Yoga',
      duration: 20,
      difficulty: 'Advanced',
      imageUrl: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg',
      category: 'Flexibility'
    },
    {
      id: 4,
      title: 'HIIT Training',
      type: 'HIIT',
      duration: 25,
      difficulty: 'Expert',
      imageUrl: 'https://images.pexels.com/photos/999309/pexels-photo-999309.jpeg',
      category: 'Cardio'
    }
  ]

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  const handleStartPractice = () => {
    setIsSessionActive(true)
    setCurrentRep(0)
  }

  const handleEndSession = () => {
    setIsSessionActive(false)
  }

  const filteredExercises = exercises.filter(exercise =>
    selectedType === 'all' || exercise.type.toLowerCase() === selectedType
  )

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="flex justify-between items-center mb-8 flex-col md:flex-row gap-4">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Practice with Ai</h1>
          <p className="text-gray-400 text-lg">Record your workout session</p>
        </div>
        {!isSessionActive ? (
          <button
            className="bg-emerald-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-colors"
            onClick={handleStartPractice}
          >
            Start Practice
          </button>
        ) : (
          <button
            className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            onClick={handleEndSession}
          >
            End Session
          </button>
        )}
      </div>

      {isSessionActive && (
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden mb-8">
          <Webcam
            ref={webcamRef}
            className="absolute inset-0 w-full h-full object-cover"
            videoConstraints={{
              width: 640,
              height: 480,
              facingMode: "user"
            }}
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-end p-6">
            <div className="text-5xl font-bold text-white">{formatTime(timer)}</div>
            <div className="text-2xl text-emerald-400 mt-2">Rep: {currentRep}/{totalReps}</div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-emerald-400 text-lg bg-black/70 px-4 py-2 rounded-lg">
              Recording your workout session
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
        {exerciseTypes.map(type => (
          <button
            key={type.id}
            className={`px-4 py-2 rounded-full font-medium transition-colors whitespace-nowrap flex items-center gap-2
              ${selectedType === type.id 
                ? 'bg-emerald-400 text-black border-emerald-400' 
                : 'bg-gray-800 text-white border-gray-700'} 
              border`}
            onClick={() => setSelectedType(type.id)}
          >
            <span>{type.icon}</span>
            {type.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {filteredExercises.map(exercise => (
          <ExerciseCard
            key={exercise.id}
            {...exercise}
            onStart={handleStartPractice}
          />
        ))}
      </div>
    </div>
  )
}

export default WorkoutWithAr