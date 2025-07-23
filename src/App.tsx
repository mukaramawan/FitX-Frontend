import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ResetPassword from './pages/ResetPassword'
import Home from './pages/home/Home'
import ExerciseLibrary from './pages/Exercise Library/ExerciseLibrary'
import WorkoutWithAr from './pages/Workout with Ar/WorkoutWithAr'
import Analytics from './pages/Analytics/Analytics'
import Profile from './pages/Profile/Profile'

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="ai-workout" element={<div>AI Workout Page</div>} />
            <Route path="ar-workout" element={<WorkoutWithAr />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="exercises" element={<ExerciseLibrary />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>

        {/* Catch all route - redirect to signin */}
        <Route path="*" element={<Navigate to="/signin" replace />} />
      </Routes>
    </Router>
  )
}

export default App