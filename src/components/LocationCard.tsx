import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Location } from '../types/Location';
import { getTimes } from 'suncalc';
import { format } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

interface LocationCardProps {
  location: Location;
  onSelect: () => void;
  isSelected: boolean;
}

export const LocationCard: React.FC<LocationCardProps> = ({ location, onSelect, isSelected }) => {
  const today = zonedTimeToUtc(new Date(), location.timezone);
  const { sunrise, sunset } = getTimes(today, location.latitude, location.longitude);
  
  return (
    <div 
      className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-102 active:scale-98 ${
        isSelected ? 'ring-2 ring-blue-500' : ''
      }`}
      onClick={onSelect}
    >
      <div className="relative h-36 sm:h-48">
        <img
          src={location.imageUrl}
          alt={location.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="p-3 sm:p-4 bg-white">
        <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{location.name}</h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">{location.description}</p>
        
        <div className="flex justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center gap-1">
            <Sun className="w-4 h-4 text-yellow-500" />
            <span>日出 {format(sunrise, 'HH:mm')}</span>
          </div>
          <div className="flex items-center gap-1">
            <Moon className="w-4 h-4 text-blue-500" />
            <span>日落 {format(sunset, 'HH:mm')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};