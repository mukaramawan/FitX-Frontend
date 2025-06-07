import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import ExerciseLibrary from './pages/Exercise Library/ExerciseLibrary'
import WorkoutWithAr from './pages/WorkoutWithAr'
import Analytics from './pages/Analytics/Analytics'
import Profile from './pages/Profile/Profile'
import WorkoutWithAI from './pages/WorkoutWithAI'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ai-workout" element={<WorkoutWithAI />} />
          <Route path="ar-workout" element={<WorkoutWithAr />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="exercises" element={<ExerciseLibrary />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App