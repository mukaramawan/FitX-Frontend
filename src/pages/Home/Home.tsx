import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Flame, Clock, Dumbbell, Bot, Camera as Camera3d, Timer, Sun as Run, Cog as Yoga, LayoutGrid } from 'lucide-react'
import GoalCard from './GoalCard'
import PracticeCard from './PracticeCard'
import ExerciseCategory from './ExerciseCategory'
import WorkoutCard from './WorkoutCard'

const Home = () => {
  const navigate = useNavigate()

  const goals = [
    { Icon: Flame, title: 'Calories', current: 700, target: 1000, unit: 'kcal' },
    { Icon: Clock, title: 'Exercise Time', current: 45, target: 100, unit: 'min' },
    { Icon: Dumbbell, title: 'Exercises', current: 3, target: 8, unit: '' }
  ]

  const categories = [
    { Icon: Dumbbell, title: 'Strength Training' },
    { Icon: Run, title: 'Cardio' },
    { Icon: Yoga, title: 'Yoga' },
    { Icon: LayoutGrid, title: 'Core' },
    { Icon: Timer, title: 'HIIT' },
    { Icon: Timer, title: 'Flexibility' }
  ]

  const recommendedWorkouts = [
    {
      title: 'Full Body HIIT',
      duration: 30,
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg'
    },
    {
      title: 'Core Strength',
      duration: 25,
      level: 'Beginner',
      image: 'https://images.pexels.com/photos/4162438/pexels-photo-4162438.jpeg'
    },
    {
      title: 'Upper Body Power',
      duration: 40,
      level: 'Advanced',
      image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg'
    }
  ]

  return (
    <div className="space-y-12">
      <section className="bg-gray-800/50 rounded-xl p-6">
        <h1 className="text-2xl font-bold text-white mb-6">Today's Goals</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {goals.map((goal, index) => (
            <GoalCard key={index} {...goal} />
          ))}
        </div>
        <button className="mx-auto block bg-emerald-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-colors">
          Let's Start
        </button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PracticeCard
          Icon={Bot}
          title="Practice with AI"
          description="Get real-time AI feedback for your workouts"
          buttonText="Start Practice"
          onClick={() => navigate('/ai-workout')}
        />
        <PracticeCard
          Icon={Camera3d}
          title="Practice with AR"
          description="Enhance your workout with AR guidance for perfect form"
          buttonText="Start AR Practice"
          onClick={() => navigate('/ar-workout')}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-6">Exercise Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <ExerciseCategory
              key={index}
              {...category}
              onClick={() => navigate(`/exercises/${category.title.toLowerCase()}`)}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-6">Recommended For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedWorkouts.map((workout, index) => (
            <WorkoutCard
              key={index}
              {...workout}
              onStart={() => navigate(`/workout/${workout.title.toLowerCase()}`)}
            />
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800/50 rounded-xl p-6 text-center">
          <h3 className="text-gray-400 text-sm mb-2">Total Calories Burned</h3>
          <p className="text-3xl font-bold text-emerald-400">12,543</p>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-6 text-center">
          <h3 className="text-gray-400 text-sm mb-2">Workouts Completed</h3>
          <p className="text-3xl font-bold text-emerald-400">237</p>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-6 text-center">
          <h3 className="text-gray-400 text-sm mb-2">Days Streak</h3>
          <p className="text-3xl font-bold text-emerald-400">28</p>
        </div>
      </section>
    </div>
  )
}

export default Home