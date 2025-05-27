import React from 'react';
import { healthIndicators } from '../../data/healthData';
import HealthStatusCards from './HealthStatusCards';

const AnatomySection = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">Health Overview</h2>
      
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-1/2 mb-6 md:mb-0">
          <div className="bg-blue-50 rounded-xl p-4 h-80 flex items-center justify-center">
            <div className="relative">
              <svg viewBox="0 0 100 200" width="120" className="mx-auto">
                <path 
                  d="M50,0 C60,0 70,10 70,20 C70,30 60,40 60,40 L65,70 L70,90 L65,110 L60,130 L55,150 L50,170 L45,150 L40,130 L35,110 L30,90 L35,70 L40,40 C40,40 30,30 30,20 C30,10 40,0 50,0 Z" 
                  fill="#e0e0e0" 
                />
                <ellipse cx="50" cy="15" rx="10" ry="12" fill="#e0e0e0" />
                <rect x="40" y="40" width="20" height="30" fill="#e0e0e0" />
                <rect x="30" y="70" width="40" height="20" fill="#e0e0e0" />
              </svg>
              
              {healthIndicators.map((indicator) => (
                <div 
                  key={indicator.id}
                  className="absolute flex items-center transform -translate-x-1/2 -translate-y-1/2"
                  style={{ 
                    top: `${indicator.position.top}%`, 
                    left: `${indicator.position.left}%` 
                  }}
                >
                  <span 
                    className={`w-3 h-3 rounded-full ${
                      indicator.status === 'healthy' ? 'bg-green-500' : 'bg-red-500'
                    } mr-2`}
                  ></span>
                  <span className="text-xs font-medium whitespace-nowrap">{indicator.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 md:pl-6">
          <HealthStatusCards />
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;