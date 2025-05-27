import React from 'react';
import { 
  LayoutDashboard, 
  History, 
  Calendar, 
  Clock, 
  BarChart2, 
  FileText, 
  MessageSquare, 
  HelpCircle, 
  Settings
} from 'lucide-react';
import { navigationLinks } from '../data/navigationData';

const Sidebar = () => {
  return (
    <aside className="bg-white w-16 md:w-56 border-r border-gray-200 flex-shrink-0 overflow-y-auto">
      <div className="p-4 md:p-6">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 hidden md:block">General</h2>
        
        <nav className="space-y-1">
          {navigationLinks.map((link) => (
            <a
              key={link.id}
              href="#"
              className={`
                flex items-center px-2 py-2.5 text-sm rounded-lg
                ${link.id === 'dashboard' 
                  ? 'text-blue-600 bg-blue-50 font-medium' 
                  : 'text-gray-600 hover:bg-gray-100 transition-colors'
                }
              `}
            >
              <span className="flex-shrink-0 w-5 h-5">
                {getIcon(link.icon, link.id === 'dashboard' ? "text-blue-600" : "text-gray-500")}
              </span>
              <span className="ml-3 hidden md:block">{link.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

const getIcon = (iconName, className) => {
  const props = { size: 20, className };
  
  switch (iconName) {
    case 'dashboard': return <LayoutDashboard {...props} />;
    case 'history': return <History {...props} />;
    case 'calendar': return <Calendar {...props} />;
    case 'appointments': return <Clock {...props} />;
    case 'statistics': return <BarChart2 {...props} />;
    case 'tests': return <FileText {...props} />;
    case 'chat': return <MessageSquare {...props} />;
    case 'support': return <HelpCircle {...props} />;
    case 'settings': return <Settings {...props} />;
    default: return <LayoutDashboard {...props} />;
  }
};

export default Sidebar;