import React from 'react';
import AnatomySection from './dashboard/AnatomySection';
import CalendarView from './dashboard/CalendarView';
import UpcomingSchedule from './dashboard/UpcomingSchedule';
import ActivityFeed from './dashboard/ActivityFeed';

const DashboardMainContent = () => {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <AnatomySection />
          <ActivityFeed />
        </div>
        
        <div className="space-y-6">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;