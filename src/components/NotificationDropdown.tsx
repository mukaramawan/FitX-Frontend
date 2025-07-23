import React, { useState } from 'react';
import { Bell, Check, X } from 'lucide-react';

interface Notification {
  id: number;
  userImage: string;
  status: 'success' | 'error';
  message: string;
  projectName: string;
  timestamp: string;
}

const NotificationDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Sample notifications data
  const notifications: Notification[] = [
    {
      id: 1,
      userImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      status: 'success',
      message: 'John requested access to',
      projectName: 'Project Alpha',
      timestamp: '5 min ago'
    },
    {
      id: 2,
      userImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      status: 'error',
      message: 'Sarah declined changes to',
      projectName: 'Project Beta',
      timestamp: '10 min ago'
    },
    {
      id: 3,
      userImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      status: 'success',
      message: 'Mike approved changes to',
      projectName: 'Project Gamma',
      timestamp: '15 min ago'
    }
  ];

  return (
    <div className="relative">
      <div 
        className="relative cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bell className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-white transition-colors" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {notifications.length}
        </span>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-700/50 overflow-hidden">
          <div className="p-4 border-b border-gray-700/50">
            <h3 className="text-lg font-bold text-white">Notifications</h3>
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="p-4 hover:bg-gray-700/50 transition-colors border-b border-gray-700/50 last:border-b-0"
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <img
                      src={notification.userImage}
                      alt="User"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-800
                      ${notification.status === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-300">
                        {notification.message} <span className="font-semibold text-white">{notification.projectName}</span>
                      </p>
                      <span className="text-xs text-gray-400">{notification.timestamp}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown; 