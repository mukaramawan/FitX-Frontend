import React, { useState } from 'react';
import { UserAuth } from '../context/AuthContext';

interface ForgotPasswordProps {
  onClose: () => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const { resetPassword } = UserAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    try {
      const { success, error } = await resetPassword(email);
      if (success) {
        setSuccess(true);
      } else {
        setError(error || 'Failed to send reset email');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#181818] rounded-xl shadow-lg p-8 w-full max-w-md border border-[#232323]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-[#F3F4F6]">Reset Password</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {success ? (
          <div className="text-center">
            <div className="text-[#00FF85] mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-[#F3F4F6] mb-4">
              Password reset instructions have been sent to your email.
            </p>
            <button
              onClick={onClose}
              className="bg-[#00FF85] text-[#121212] font-bold py-2 px-4 rounded-lg hover:bg-[#0ABDE3] transition-colors duration-200"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <div className="text-[#EF4444] text-center text-sm">{error}</div>}
            <div>
              <label className="block text-[#F3F4F6] mb-1">Email</label>
              <div className="flex items-center bg-[#232323] rounded px-3 py-2">
                <span className="mr-2 text-cyan-400">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.94 5.12A2 2 0 0 1 4.88 4h10.24a2 2 0 0 1 1.94 1.12l-7.06 4.42-7.06-4.42z"/>
                    <path d="M18 8.08V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.08l7.47 4.68a1 1 0 0 0 1.06 0L18 8.08z"/>
                  </svg>
                </span>
                <input
                  type="email"
                  className="bg-transparent outline-none w-full text-[#F3F4F6] placeholder-gray-500"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#00FF85] text-[#121212] font-bold py-2 rounded-lg shadow-md hover:bg-[#0ABDE3] transition-colors duration-200"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Reset Instructions'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword; 