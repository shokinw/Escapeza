export interface Place {
  id: string;
  name: string;
  description: string;
  image: string;
  location: {
    lat: number;
    lng: number;
  };
  distance: string;
  category: string;
  bestTimeToVisit: string;
  duration: string;
}

export const places: Place[] = [
  {
    id: "p1",
    name: "Sinthan Top",
    description: "Sinthan Top is a mountain pass located at an altitude of 3,748 meters, connecting Kishtwar with Anantnag district. It offers breathtaking views of the snow-capped mountains and lush green valleys. During winter, the area is covered with snow, making it a popular destination for snow sports.",
    image: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: {
      lat: 33.5677,
      lng: 75.5234
    },
    distance: "45 km from Kishtwar town",
    category: "Mountain Pass",
    bestTimeToVisit: "April to October",
    duration: "Day trip"
  },
  {
    id: "p2",
    name: "Chowgan Ground",
    description: "Chowgan Ground is a large open space in the heart of Kishtwar town. It is used for various cultural events, sports activities, and festivals. The ground is surrounded by deodar trees and offers a panoramic view of the mountains.",
    image: "chowgan.jpg",
    location: {
      lat: 33.3123,
      lng: 75.7651
    },
    distance: "In Kishtwar town",
    category: "Cultural Landmark",
    bestTimeToVisit: "Throughout the year",
    duration: "2-3 hours"
  },
  {
    id: "p3",
    name: "Warwan Valley",
    description: "Warwan Valley is a remote and pristine valley known for its natural beauty and traditional villages. It is surrounded by high mountains and glaciers, making it a paradise for trekkers and nature lovers. The valley is home to the Warwan River, which flows through lush green meadows.",
    image: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: {
      lat: 33.7234,
      lng: 75.8911
    },
    distance: "70 km from Kishtwar town",
    category: "Valley",
    bestTimeToVisit: "June to September",
    duration: "2-3 days"
  },
  {
    id: "p4",
    name: "Dachhan Valley",
    description: "Dachhan Valley is known for its scenic beauty, with snow-covered peaks, flowing rivers, and lush green meadows. It is home to several small villages where traditional culture and way of life are preserved. The valley is a great place for trekking and experiencing local hospitality.",
    image: "https://images.pexels.com/photos/753325/pexels-photo-753325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: {
      lat: 33.4532,
      lng: 75.9234
    },
    distance: "55 km from Kishtwar town",
    category: "Valley",
    bestTimeToVisit: "April to October",
    duration: "1-2 days"
  },
  {
    id: "p5",
    name: "Kishtwar National Park",
    description: "Kishtwar National Park is a protected area known for its rich biodiversity. It is home to several endangered species such as the Himalayan brown bear, snow leopard, and musk deer. The park offers trekking opportunities and is a paradise for wildlife enthusiasts and photographers.",
    image: "https://images.pexels.com/photos/1376960/pexels-photo-1376960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: {
      lat: 33.3578,
      lng: 76.0123
    },
    distance: "40 km from Kishtwar town",
    category: "National Park",
    bestTimeToVisit: "April to October",
    duration: "1-2 days"
  },
  {
    id: "p6",
    name: "Machail Temple",
    description: "Machail Temple is dedicated to Goddess Chandi and is a popular pilgrimage site. It is located in the Paddar area of Kishtwar district. The annual Machail Yatra attracts thousands of devotees from different parts of the country.",
    image: "https://images.pexels.com/photos/3328054/pexels-photo-3328054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: {
      lat: 33.2789,
      lng: 76.1523
    },
    distance: "85 km from Kishtwar town",
    category: "Religious Site",
    bestTimeToVisit: "July to August (during Machail Yatra)",
    duration: "1-2 days"
  }
];