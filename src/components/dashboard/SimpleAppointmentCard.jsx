import { Check, Eye, Heart, Brain } from 'lucide-react';

const SimpleAppointmentCard = ({ appointment }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-3 flex items-center shadow-sm">
      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
        {getIcon(appointment.icon)}
      </div>
      
      <div className="flex-1">
        <p className="font-medium text-sm">{appointment.title}</p>
        <p className="text-xs text-gray-500">{appointment.time}</p>
      </div>
    </div>
  );
};

const getIcon = (iconName) => {
  const props = { size: 16, className: 'text-blue-600' };
  
  switch (iconName) {
    case 'check': return <Check {...props} />;
    case 'eye': return <Eye {...props} />;
    case 'heart': return <Heart {...props} />;
    case 'brain': return <Brain {...props} />;
    default: return <Check {...props} />;
  }
};

export default SimpleAppointmentCard;