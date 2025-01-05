import React, { useState } from 'react';
import { Sun } from 'lucide-react';
import { locations } from './data/locations';
import { LocationCard } from './components/LocationCard';
import { DaylightChart } from './components/DaylightChart';

function App() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center gap-2">
            <Sun className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">你想知道，为什么某些地方夏天晚上10点天还亮吗？</h1>
          </div>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            澍哥带你探索全年不同地区日照时间的变化规律
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {locations.map((location) => (
            <LocationCard
              key={location.name}
              location={location}
              onSelect={() => setSelectedLocation(location)}
              isSelected={selectedLocation.name === location.name}
            />
          ))}
        </div>

        <DaylightChart location={selectedLocation} />

        <div className="mt-6 sm:mt-8 bg-white rounded-lg shadow-lg p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">为什么日照时间会变化？</h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            想象地球是个永远歪着脖子的人，围着太阳走路。
            夏天时，北半球"歪"向太阳，就像把头伸到台灯下看书一样，靠近北极的地方能一直被照到，所以有时半夜太阳还在天上。
            冬天时，北半球"歪"离太阳，就像低头看手机一样避开了阳光，靠近北极的地方就很少被照到，有时好几天都见不到太阳。
            南半球刚好相反。而赤道附近的地方，就像人的腰部，不管怎么歪，一年到头晒太阳的时间都差不多。这就是为什么新加坡全年日照平均，而赫尔辛基夏天天天亮，冬天天天黑。
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-3 sm:mt-4">
            靠近赤道的地区（如新加坡）全年的日照时间变化很小。相比之下，赫尔辛基和雷克雅未克
            等城市则会经历戏剧性的变化，夏季白天很长，冬季白天很短。
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;