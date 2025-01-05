import { Location } from '../types/Location';

export const locations: Location[] = [
  {
    name: '赫尔辛基，芬兰',
    latitude: 60.1699,
    longitude: 24.9384,
    timezone: 'Europe/Helsinki',
    description: '体验"白夜"现象，夏季日照时间可达19小时',
    imageUrl: 'https://images.unsplash.com/photo-1559650656-5d1d361ad10e?auto=format&fit=crop&q=80'
  },
  {
    name: '新加坡',
    latitude: 1.3521,
    longitude: 103.8198,
    timezone: 'Asia/Singapore',
    description: '位于赤道附近，全年日照时间变化很小',
    imageUrl: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80'
  },
  {
    name: '雷克雅未克，冰岛',
    latitude: 64.1466,
    longitude: -21.9426,
    timezone: 'Atlantic/Reykjavik',
    description: '夏季有午夜太阳现象，冬季白天极短',
    imageUrl: 'https://images.unsplash.com/photo-1490780960365-b5e36e1d824c?auto=format&fit=crop&q=80'
  }
];