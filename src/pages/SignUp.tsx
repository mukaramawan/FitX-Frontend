import React, { useState, FormEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext.tsx'
import { supabase } from '../supabaseClient'
import { validatePassword } from '../utils/passwordValidation'

const fitnessGoals = [
  'Lose Weight',
  'Build Muscle',
  'Improve Endurance',
  'Increase Flexibility',
  'General Fitness',
]

const SignUp = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [validationErrors, setValidationErrors] = useState<string[]>([])
  const [goal, setGoal] = useState(fitnessGoals[0])
  const navigate = useNavigate()
  const { signUpNewUser } = UserAuth()

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const { errors } = validatePassword(newPassword);
    setValidationErrors(errors);
  };

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { isValid, errors } = validatePassword(password);
    if (!isValid) {
      setError('Please fix the password requirements');
      setValidationErrors(errors);
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    try {
      const { success, error } = await signUpNewUser(email, password)
      if (success) {
        // Create user profile in the database
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            {
              first_name: firstName,
              last_name: lastName,
              email: email.toLowerCase(),
              fitness_goal: goal,
            },
          ])

        if (profileError) {
          console.error('Error creating profile:', profileError)
        }

        navigate('/')
      } else {
        setError(error || 'Failed to create account')
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212]">
      <form
        onSubmit={handleSignUp}
        className="bg-[#181818] rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col gap-6 border border-[#232323]"
      >
        <div className="text-center mb-2">
          <h1 className="text-3xl font-bold text-[#00FF85]">FitX</h1>
          <h2 className="text-xl font-semibold text-[#F3F4F6] mt-2">Create Account</h2>
          <p className="text-gray-400 text-sm mt-1">Transform your workouts with AI & AR-powered guidance</p>
        </div>
        {error && <div className="text-[#EF4444] text-center text-sm">{error}</div>}
        <div className="flex gap-2">
          <input
            type="text"
            className="bg-[#232323] rounded px-3 py-2 w-1/2 text-[#F3F4F6] placeholder-gray-500"
            placeholder="First Name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            className="bg-[#232323] rounded px-3 py-2 w-1/2 text-[#F3F4F6] placeholder-gray-500"
            placeholder="Last Name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            required
          />
        </div>
        <input
          type="email"
          className="bg-[#232323] rounded px-3 py-2 text-[#F3F4F6] placeholder-gray-500"
          placeholder="Email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <div>
          <div className="flex items-center bg-[#232323] rounded px-3 py-2">
            <input
              type={showPassword ? "text" : "password"}
              className="bg-transparent outline-none w-full text-[#F3F4F6] placeholder-gray-500"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
              minLength={8}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {showPassword ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
          {validationErrors.length > 0 && (
            <div className="mt-2 text-sm text-[#EF4444]">
              <ul className="list-disc list-inside">
                {validationErrors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div>
          <div className="flex items-center bg-[#232323] rounded px-3 py-2">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="bg-transparent outline-none w-full text-[#F3F4F6] placeholder-gray-500"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
              minLength={8}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {showConfirmPassword ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#00FF85] text-[#121212] font-bold py-2 rounded-lg shadow-md hover:bg-[#0ABDE3] transition-colors duration-200"
          disabled={loading || validationErrors.length > 0}
        >
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>
        <div className="text-center text-gray-400 text-sm mt-2">
          Already have an account?{' '}
          <Link to="/signin" className="text-cyan-400 hover:underline cursor-pointer">Sign In</Link>
        </div>
      </form>
    </div>
  )
}

export default SignUp 