import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { calendarAppointments } from '../../data/appointmentData';

const CalendarView = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const calendarDays = Array.from({ length: 35 }, (_, i) => {
    const day = i - 6;
    return day > 0 && day <= 31 ? day : null;
  });

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Calendar</h2>
        
        <div className="flex items-center">
          <button className="p-1 rounded-full hover:bg-gray-100">
            <ChevronLeft size={20} className="text-gray-500" />
          </button>
          <span className="mx-2 text-sm font-medium">October 2023</span>
          <button className="p-1 rounded-full hover:bg-gray-100">
            <ChevronRight size={20} className="text-gray-500" />
          </button>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="grid grid-cols-7 text-center mb-2">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-xs font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((day, index) => {
            const dayAppointments = day 
              ? calendarAppointments.filter(apt => apt.day === day) 
              : [];
              
            return (
              <div 
                key={index} 
                className={`
                  relative aspect-square rounded-lg flex flex-col items-center justify-start p-2
                  ${day ? 'bg-white border border-gray-100' : 'bg-transparent'}
                  ${dayAppointments.length > 0 ? 'border-blue-200' : ''}
                `}
              >
                {day && (
                  <>
                    <span className={`
                      text-sm 
                      ${day === 15 ? 'font-bold text-blue-600' : 'text-gray-700'}
                    `}>
                      {day}
                    </span>
                    
                    <div className="mt-1 w-full space-y-1">
                      {dayAppointments.map((apt, i) => (
                        <div 
                          key={i} 
                          className="text-xs bg-blue-100 text-blue-800 px-1 rounded truncate"
                        >
                          {apt.time}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Today's Appointments</h3>
        
        <div className="space-y-3">
          {calendarAppointments
            .filter(apt => apt.day === 15)
            .map((apt, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-100 rounded-lg p-3 flex justify-between items-center shadow-sm"
              >
                <div>
                  <p className="font-medium text-sm">{apt.title}</p>
                  <p className="text-xs text-gray-500">Dr. {apt.doctor}</p>
                </div>
                <div className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {apt.time}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;