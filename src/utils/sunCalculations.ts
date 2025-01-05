import { getTimes } from 'suncalc';
import { addDays, startOfYear } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

export interface DaylightData {
  date: Date;
  daylightHours: number;
}

export const calculateYearlyDaylight = (latitude: number, longitude: number, timezone: string, year: number = new Date().getFullYear()) => {
  const data: DaylightData[] = [];
  const startDate = startOfYear(new Date(year, 0, 1));

  for (let day = 0; day < 365; day++) {
    const date = addDays(startDate, day);
    const localDate = zonedTimeToUtc(date, timezone);
    const times = getTimes(localDate, latitude, longitude);
    
    const daylightHours = (times.sunset.getTime() - times.sunrise.getTime()) / (1000 * 60 * 60);
    
    data.push({
      date: localDate,
      daylightHours: parseFloat(daylightHours.toFixed(2))
    });
  }

  return data;
};