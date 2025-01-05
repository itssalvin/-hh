import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from 'recharts';
import { format } from 'date-fns';
import { calculateYearlyDaylight } from '../utils/sunCalculations';
import { Location } from '../types/Location';

interface DaylightChartProps {
  location: Location;
}

const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', 
                   '7月', '8月', '9月', '10月', '11月', '12月'];

export const DaylightChart: React.FC<DaylightChartProps> = ({ location }) => {
  const data = calculateYearlyDaylight(location.latitude, location.longitude, location.timezone);

  return (
    <div className="w-full h-[300px] sm:h-[400px] bg-white p-3 sm:p-4 rounded-lg shadow-lg">
      <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">{location.name}全年日照时间</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          data={data}
          margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
        >
          <XAxis
            dataKey="date"
            tickFormatter={(date) => monthNames[new Date(date).getMonth()]}
            interval={30}
            tick={{ fontSize: 12 }}
            padding={{ left: 10, right: 10 }}
            axisLine={{ strokeWidth: 1.5 }}
          />
          <YAxis
            domain={[0, 24]}
            tickFormatter={(value) => `${value}h`}
            tick={{ fontSize: 12 }}
            width={40}
            axisLine={{ strokeWidth: 1.5 }}
          />
          <Tooltip
            labelFormatter={(date) => format(new Date(date), 'MM月dd日')}
            formatter={(value: number) => [`${value.toFixed(1)} 小时`, '日照时间']}
            contentStyle={{ fontSize: '12px' }}
          />
          <Legend wrapperStyle={{ fontSize: '12px' }} />
          <ReferenceLine 
            y={12} 
            stroke="violet" 
            strokeWidth={3}
            strokeDasharray="3 3" 
            label={{ 
              position: 'insideTopRight',
              value: '⬆ 12小时 - 在这条线附近，大概六七点下山，往上的话晚上还都是白天',
              fill: 'black',
              fontSize: 12 
            }}
          />
          <Line
            type="monotone"
            dataKey="daylightHours"
            stroke="#2563eb"
            name="日照时间"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};