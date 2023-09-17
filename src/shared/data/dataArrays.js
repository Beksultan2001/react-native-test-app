import All from '../../../assets/icons/All';
import Masks from '../../../assets/icons/Masks';
import Kitchen from '../../../assets/icons/Kitchen';
import Confetti from '../../../assets/icons/Confetti';
import Minimalistic from '../../../assets/icons/Minimalistic';
import Settings from '../../../assets/icons/Settings';
import AllActive from '../../../assets/icons/AllActive';

export const clubList = [
  {
    id: 1,
    title: 'Крутой ивент авто-пати',
    img: require('../../../assets/meet.jpeg')
  },
  {
    id: 2,
    title: 'Test 2',
    img: require('../../../assets/room1.jpg')
  },
  {
    id: 3,
    title: 'Test 3',
    img: require('../../../assets/room2.jpeg')
  },
  {
    id: 4,
    title: 'Test 4',
    img: require('../../../assets/room3.jpeg')
  }
]

export const reserveList = [
  {
    id: 5,
    title: 'Переговорка №13',
    img: require('../../../assets/meet.jpeg'),
    details: [
      {key: 'Дата посещения',value: '20.04.2023'},
      {key: 'Время',value: '15:00 - 16:00'},
      {key: 'Число людей',value: '4'}
    ]
  },
  {
    id: 6,
    title: 'Test 2',
    img: require('../../../assets/room1.jpg'),
    details: [
      {key: 'Дата посещения',value: '20.04.2023'},
      {key: 'Время',value: '15:00 - 16:00'},
      {key: 'Число людей',value: '4'}
    ]
  },
  {
    id: 7,
    title: 'Test 3',
    img: require('../../../assets/room2.jpeg'),
    details: [
      {key: 'Дата посещения',value: '20.04.2023'},
      {key: 'Время',value: '15:00 - 16:00'},
      {key: 'Число людей',value: '4'}
    ]
  },
  {
    id: 8,
    title: 'Test 4',
    img: require('../../../assets/room3.jpeg'),
    details: [
      {key: 'Дата посещения',value: '20.04.2023'},
      {key: 'Время',value: '15:00 - 16:00'},
      {key: 'Число людей',value: '4'}
    ]
  }
]

export const FilterList = [
  {
    id: 1,
    title: 'Все',
    location: 'Italy',
    description:
      'The ultimate Amalfi Coast travel guide, where to stay, where to eat, and what areas to visit in the Amalfi Coast of Italy. Positano, Ravello, Amalfi and more',
    rating: 9.4,
    type: 'PLACE',
    icon: <All/>,
    iconactive: <AllActive />
  },
  {
    id: 2,
    title: 'Психолог',
    location: 'Spain',
    description:
      'Granada is the capital city of the province of Granada, in the autonomous community of Andalusia, Spain',
    rating: 8.9,
    type: 'PLACE',
    icon: <Masks/>,
    iconactive: <Masks active={true}  />
  },
  {
    id: 3,
    title: 'Бизнес- завтрак',
    location: 'Japan',
    description:
      "Cherry blossoms usually bloom between mid-March and early May. In 2022, Tokyo's cherry blossom season officially began on March 20",
    rating: 7.4,
    type: 'PLACE',
    icon: <Kitchen/>,
    iconactive: <Kitchen active={true}/>
  },
  {
    id: 4,
    title: 'Бизнес- завтрак',
    location: 'Japan',
    description:
      "Cherry blossoms usually bloom between mid-March and early May. In 2022, Tokyo's cherry blossom season officially began on March 20",
    rating: 7.4,
    type: 'PLACE',
    icon: <Confetti/>,
    iconactive: <Confetti active={true}/>
  },
  {
    id: 5,
    title: 'Бизнес- завтрак',
    location: 'Japan',
    description:
      "Cherry blossoms usually bloom between mid-March and early May. In 2022, Tokyo's cherry blossom season officially began on March 20",
    rating: 7.4,
    type: 'PLACE',
    icon: <Minimalistic/>,
    iconactive: <Minimalistic active={true}/>
  },
  {
    id: 6,
    title: 'Бизнес- завтрак',
    location: 'Japan',
    description:
      "Cherry blossoms usually bloom between mid-March and early May. In 2022, Tokyo's cherry blossom season officially began on March 20",
    rating: 7.4,
    type: 'PLACE',
    icon: <Settings/>,
    iconactive: <Settings active={true}/>
  },
];

