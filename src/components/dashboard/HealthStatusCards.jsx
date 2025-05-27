import React from 'react';
import { Calendar, AlertCircle } from 'lucide-react';
import { healthStatusDetails } from '../../data/healthData';

const HealthStatusCards = () => {
  return (
    <div className="space-y-4">
      {healthStatusDetails.map((item) => (
        <div 
          key={item.id} 
          className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-medium">{item.label}</h3>
            <span 
              className={`w-2.5 h-2.5 rounded-full ${
                item.status === 'healthy' ? 'bg-green-500' : 'bg-red-500'
              }`}
            ></span>
          </div>
          
          <div className="flex justify-between mt-3">
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <p className={`text-sm font-medium ${
                item.status === 'healthy' ? 'text-green-600' : 'text-red-600'
              }`}>
                {item.status === 'healthy' ? 'Healthy' : 'Needs Attention'}
              </p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Value</p>
              <p className="text-sm font-medium">{item.value}</p>
            </div>
          </div>
          
          <div className="flex items-center mt-3 text-xs text-gray-500">
            <Calendar size={14} className="mr-1" />
            <span>Next check: {formatDate(item.nextCheck)}</span>
          </div>
          
          {item.status !== 'healthy' && (
            <div className="flex items-center mt-2 text-xs text-red-500">
              <AlertCircle size={14} className="mr-1" />
              <span>{item.description}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  }).format(date);
};

export default HealthStatusCards;