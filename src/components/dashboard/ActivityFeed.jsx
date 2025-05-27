import React from 'react';
import { activityData } from '../../data/appointmentData';

const ActivityFeed = () => {
  const maxValue = Math.max(...activityData.map(item => item.value));
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Activity</h2>
        <span className="text-sm text-blue-600 font-medium">
          3 appointments this week
        </span>
      </div>
      
      <div className="h-40">
        <div className="flex items-end justify-between h-32">
          {activityData.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center"
            >
              <div 
                className={`w-8 rounded-t-md ${
                  item.value === maxValue ? 'bg-blue-600' : 'bg-blue-200'
                }`}
                style={{ height: `${(item.value / maxValue) * 100}%` }}
              ></div>
              <span className="text-xs mt-2 text-gray-500">{item.day}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-center mt-2">
        <div className="flex items-center mr-4">
          <div className="w-3 h-3 bg-blue-600 rounded-sm mr-1"></div>
          <span className="text-xs text-gray-500">Appointment</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-200 rounded-sm mr-1"></div>
          <span className="text-xs text-gray-500">Regular day</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;