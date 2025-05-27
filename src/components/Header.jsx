import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white h-16 px-6 flex items-center justify-between shadow-sm z-10">
      <div className="flex items-center gap-12">
        <h1 className="text-xl font-bold text-blue-600">Healthcare.</h1>
        
        <div className="relative hidden md:block">
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 bg-gray-100 rounded-lg w-64 focus:outline-none"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
      
      <div className="flex items-center gap-5">
        <button className="relative text-gray-500 hover:text-blue-600 transition-colors">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <button className="bg-blue-600 text-white p-1 rounded-md hover:bg-blue-700 transition-colors">
          <Plus size={20} />
        </button>
        
        <div className="flex items-center gap-3">
          <img 
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150" 
            alt="User" 
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium hidden md:block">Dr. Praveen Narwar</span>
        </div>
      </div>
    </header>
  );
};

export default Header;