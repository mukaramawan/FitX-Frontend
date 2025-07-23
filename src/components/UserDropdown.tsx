import React, { useState } from 'react';
import { User, Settings, HelpCircle, LogOut, Edit2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext.tsx';

interface UserDropdownProps {
  userName: string;
  userEmail: string;
  userImage: string;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ userName, userEmail, userImage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { signOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/signin');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const menuItems = [
    { 
      icon: Edit2, 
      label: 'Edit Profile', 
      onClick: () => {
        navigate('/profile');
        setIsOpen(false);
      }
    },
    { 
      icon: Settings, 
      label: 'Account Settings', 
      onClick: () => {
        navigate('/profile');
        setIsOpen(false);
      }
    },
    { 
      icon: HelpCircle, 
      label: 'Support', 
      onClick: () => console.log('Support') 
    },
  ];

  return (
    <div className="relative">
      <div 
        className="flex items-center gap-2 cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={userImage}
          alt="Profile"
          className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover ring-2 ring-gray-700 group-hover:ring-emerald-400 transition-all"
        />
        <svg
          className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white transition-colors"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-700/50 overflow-hidden">
          {/* User Info Section */}
          <div className="p-4 border-b border-gray-700/50">
            <div className="flex items-center gap-3">
              <img
                src={userImage}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-400"
              />
              <div>
                <h3 className="text-sm font-semibold text-white">{userName}</h3>
                <p className="text-xs text-gray-400">{userEmail}</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-1">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={item.onClick}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Sign Out Button */}
          <div className="p-2 border-t border-gray-700/50">
            <button
              onClick={handleSignOut}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown; 