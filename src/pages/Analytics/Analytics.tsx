import React, { useState } from 'react'
import { Download, Flame, Clock, Dumbbell, Gauge } from 'lucide-react'
import StatCard from './StatCard'
import PerformanceChart from './PerformanceChart'
import WorkoutTable from './WorkoutTable'

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('daily')

  const stats = [
    {
      icon: Flame,
      title: 'Total Calories',
      value: '2,840',
      unit: 'kcal',
      progress: 75
    },
    {
      icon: Clock,
      title: 'Time Exercised',
      value: '5.2',
      unit: 'hours',
      progress: 65
    },
    {
      icon: Dumbbell,
      title: 'Workouts',
      value: '12',
      unit: 'sessions',
      progress: 80
    },
    {
      icon: Gauge,
      title: 'Avg. Duration',
      value: '45',
      unit: 'min',
      progress: 70
    }
  ]

  const performanceData = [
    { day: 'Mon', calories: 450, duration: 45 },
    { day: 'Tue', calories: 380, duration: 40 },
    { day: 'Wed', calories: 520, duration: 55 },
    { day: 'Thu', calories: 420, duration: 45 },
    { day: 'Fri', calories: 580, duration: 60 },
    { day: 'Sat', calories: 350, duration: 35 },
    { day: 'Sun', calories: 480, duration: 50 }
  ]

  const recentWorkouts = [
    {
      exercise: 'High Intensity Cardio',
      type: 'cardio',
      duration: 45,
      calories: 450,
      heartRate: 130,
      score: 92
    },
    {
      exercise: 'Strength Training',
      type: 'strength',
      duration: 60,
      calories: 380,
      heartRate: 125,
      score: 88
    },
    {
      exercise: 'Yoga Flow',
      type: 'yoga',
      duration: 30,
      calories: 200,
      heartRate: 110,
      score: 95
    }
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Your Performance</h1>
          <p className="text-gray-400">Track your progress and analyze your exercise performance</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <select 
            value={timeRange} 
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white cursor-pointer focus:border-emerald-400 focus:outline-none"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
          <button className="flex items-center gap-2 bg-emerald-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-emerald-500 transition-colors">
            <Download className="w-5 h-5" />
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <PerformanceChart data={performanceData} />
      
      <WorkoutTable workouts={recentWorkouts} />
    </div>
  )
}

export default Analytics