import { upcomingAppointments } from '../../data/appointmentData';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule = () => {
  const groupedAppointments = upcomingAppointments.reduce((acc, appointment) => {
    if (!acc[appointment.day]) {
      acc[appointment.day] = [];
    }
    acc[appointment.day].push(appointment);
    return acc;
  }, {});

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">The Upcoming Schedule</h2>
      
      <div className="space-y-6">
        {Object.entries(groupedAppointments).map(([day, appointments]) => (
          <div key={day} className="space-y-3">
            <h3 className="text-sm font-medium text-gray-500 capitalize">
              On {day}
            </h3>
            
            <div className="space-y-3">
              {appointments.map((appointment) => (
                <SimpleAppointmentCard key={appointment.id} appointment={appointment} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;