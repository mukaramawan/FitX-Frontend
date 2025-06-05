import React from 'react'
import ProfileHeader from './ProfileHeader'
import PersonalInfoForm from './PersonalInfoForm'
import SecurityForm from './SecurityForm'

const Profile = () => {
  // Mock user data - replace with actual data from your backend
  const user = {
    name: 'Mukaram Awan',
    email: 'mukaramawan.official@gmail.com',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    fullName: 'Muhammad Mukaram Awan',
    phone: '+92 311 979084',
    gender: 'male',
    dateOfBirth: '2002-08-12',
    height: 175,
    weight: 70
  }

  const handleUpdate = (data: unknown) => {
    console.log('Update data:', data)
    // Implement your update logic here
  }

  const handleSave = () => {
    console.log('Saving changes...')
    // Implement save logic here
  }

  const handleCancel = () => {
    console.log('Canceling changes...')
    // Implement cancel logic here
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <ProfileHeader user={user} />
      <PersonalInfoForm user={user} onUpdate={handleUpdate} />
      <SecurityForm onUpdate={handleUpdate} />
      <div className="flex justify-end gap-4 mt-6">
        <button 
          onClick={handleCancel}
          className="px-6 py-3 rounded-lg border border-gray-600 text-gray-400 hover:bg-gray-800/50 transition-colors"
        >
          Cancel
        </button>
        <button 
          onClick={handleSave}
          className="px-6 py-3 rounded-lg bg-emerald-400 text-black font-medium hover:bg-emerald-500 transition-colors"
        >
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default Profile