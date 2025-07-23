import React, { useState, FormEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext.tsx'
import ForgotPassword from '../components/ForgotPassword'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const { signInUser } = UserAuth()

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const { success, error } = await signInUser(email, password)
      if (success) {
        navigate('/')
      } else {
        setError(error || 'Failed to sign in')
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
        onSubmit={handleSignIn}
        className="bg-[#181818] rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col gap-6 border border-[#232323]"
      >
        <div className="text-center mb-2">
          <h1 className="text-3xl font-bold text-[#00FF85]">FitX</h1>
          <h2 className="text-xl font-semibold text-[#F3F4F6] mt-3">Welcome Back</h2>
        </div>
        {error && <div className="text-[#EF4444] text-center text-sm">{error}</div>}
        <div>
          <label className="block text-[#F3F4F6] mb-1">Email</label>
          <div className="flex items-center bg-[#232323] rounded px-3 py-2">
            <span className="mr-2 text-cyan-400">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M2.94 5.12A2 2 0 0 1 4.88 4h10.24a2 2 0 0 1 1.94 1.12l-7.06 4.42-7.06-4.42z"/><path d="M18 8.08V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.08l7.47 4.68a1 1 0 0 0 1.06 0L18 8.08z"/></svg>
            </span>
            <input
              type="email"
              className="bg-transparent outline-none w-full text-[#F3F4F6] placeholder-gray-500"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-[#F3F4F6] mb-1">Password</label>
          <div className="flex items-center bg-[#232323] rounded px-3 py-2">
            <span className="mr-2 text-cyan-400">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a4 4 0 0 0-4 4v2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-1V6a4 4 0 0 0-4-4zm-2 6V6a2 2 0 1 1 4 0v2H8zm-3 2h10v6H5v-6z"/></svg>
            </span>
            <input
              type={showPassword ? "text" : "password"}
              className="bg-transparent outline-none w-full text-[#F3F4F6] placeholder-gray-500"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
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
        </div>
        <div className="flex justify-end text-sm">
          <button
            type="button"
            className="text-cyan-400 hover:underline"
            onClick={() => setShowForgotPassword(true)}
          >
            Forgot Password?
          </button>
        </div>
        <button
          type="submit"
          className="bg-[#00FF85] text-[#121212] font-bold py-2 rounded-lg shadow-md hover:bg-[#0ABDE3] transition-colors duration-200"
          disabled={loading}
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
        <div className="text-center text-gray-400 text-sm mt-2">
          Don&apos;t have an account?{' '}
          <Link to="/signup" className="text-cyan-400 hover:underline cursor-pointer">Sign Up</Link>
        </div>
      </form>

      {showForgotPassword && (
        <ForgotPassword onClose={() => setShowForgotPassword(false)} />
      )}
    </div>
  )
}

export default SignIn 