import React from 'react';

const Notifications = () => {
  const notifications = [
    { id: 1, message: 'New application received for Software Engineer position', type: 'new' },
    { id: 2, message: 'AI Interview completed for John Doe', type: 'complete' },
    { id: 3, message: 'Final review scheduled for Jane Smith', type: 'scheduled' },
  ];

  const getNotificationColor = (type) => {
    switch (type) {
      case 'new': return 'bg-green-500';
      case 'complete': return 'bg-blue-500';
      case 'scheduled': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="mt-8 bg-gray-700 rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Real-time Notifications</h3>
      <ul className="space-y-2">
        {notifications.map((notification) => (
          <li key={notification.id} className="flex items-center text-sm">
            <span className={`w-2 h-2 ${getNotificationColor(notification.type)} rounded-full mr-2`}></span>
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;   