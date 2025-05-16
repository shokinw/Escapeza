export interface Tour {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  image: string;
  destinations: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: TourDay[];
}

interface TourDay {
  day: number;
  title: string;
  description: string;
}

export const tours: Tour[] = [
  {
    id: "t1",
    name: "Kishtwar Explorer",
    description: "A comprehensive tour covering the major attractions of Kishtwar district, including Sinthan Top, Warwan Valley, and local cultural sites.",
    duration: "5 Days / 4 Nights",
    price: 15000,
    image: "https://images.pexels.com/photos/3265511/pexels-photo-3265511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    destinations: ["Kishtwar Town", "Sinthan Top", "Warwan Valley", "Dachhan Valley"],
    inclusions: [
      "Accommodation in 3-star hotels",
      "All meals (breakfast, lunch, dinner)",
      "Transportation in private vehicle",
      "Professional guide",
      "All entry fees",
      "Welcome drink on arrival"
    ],
    exclusions: [
      "Personal expenses",
      "Travel insurance",
      "Any activity not mentioned in inclusions",
      "Alcoholic beverages"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kishtwar",
        description: "Arrive in Kishtwar, check into hotel, and explore the local market. Evening visit to Chowgan Ground followed by welcome dinner."
      },
      {
        day: 2,
        title: "Sinthan Top Excursion",
        description: "Early morning drive to Sinthan Top. Enjoy the panoramic views and snow (seasonal). Return to Kishtwar by evening."
      },
      {
        day: 3,
        title: "Warwan Valley",
        description: "Full day excursion to Warwan Valley. Explore the traditional villages and enjoy the scenic beauty."
      },
      {
        day: 4,
        title: "Dachhan Valley",
        description: "Visit to Dachhan Valley. Experience local culture and traditions. Enjoy a traditional lunch with a local family."
      },
      {
        day: 5,
        title: "Departure",
        description: "After breakfast, check out from hotel and depart with beautiful memories of Kishtwar."
      }
    ]
  },
  {
    id: "t2",
    name: "Kishtwar Adventure Trek",
    description: "An adventurous trek through the beautiful landscapes of Kishtwar, suitable for nature lovers and adventure enthusiasts.",
    duration: "7 Days / 6 Nights",
    price: 22000,
    image: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    destinations: ["Kishtwar Town", "Kishtwar National Park", "Warwan Valley", "Machail"],
    inclusions: [
      "Accommodation in hotels and tents",
      "All meals",
      "Transportation",
      "Professional trekking guide",
      "Trekking equipment",
      "First aid kit",
      "Permits"
    ],
    exclusions: [
      "Personal expenses",
      "Travel insurance",
      "Porters for personal luggage",
      "Alcoholic beverages"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kishtwar",
        description: "Arrive in Kishtwar, check into hotel, and attend trek briefing session."
      },
      {
        day: 2,
        title: "Trek to Base Camp",
        description: "Start trekking towards the base camp located at the edge of Kishtwar National Park."
      },
      {
        day: 3,
        title: "Kishtwar National Park",
        description: "Trek through Kishtwar National Park, exploring its rich biodiversity."
      },
      {
        day: 4,
        title: "High Altitude Lake",
        description: "Trek to a high-altitude lake, camping overnight by the lakeside."
      },
      {
        day: 5,
        title: "Warwan Valley",
        description: "Trek to Warwan Valley, experiencing the beautiful landscapes."
      },
      {
        day: 6,
        title: "Machail",
        description: "Visit Machail Temple and explore the surrounding area."
      },
      {
        day: 7,
        title: "Return to Kishtwar and Departure",
        description: "Trek back to Kishtwar and depart with memories of an adventurous journey."
      }
    ]
  },
  {
    id: "t3",
    name: "Kishtwar Cultural Tour",
    description: "A tour focused on the rich culture and traditions of Kishtwar, including visits to local villages, traditional homes, and cultural performances.",
    duration: "4 Days / 3 Nights",
    price: 12000,
    image: "https://images.pexels.com/photos/2825578/pexels-photo-2825578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    destinations: ["Kishtwar Town", "Traditional Villages", "Cultural Sites"],
    inclusions: [
      "Accommodation in heritage homestays",
      "All meals (traditional Dogri cuisine)",
      "Transportation",
      "Cultural guide",
      "Entry fees",
      "Cultural performances"
    ],
    exclusions: [
      "Personal expenses",
      "Travel insurance",
      "Photography fees at certain sites",
      "Alcoholic beverages"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kishtwar",
        description: "Arrive in Kishtwar, check into a heritage homestay, and attend a traditional welcome ceremony."
      },
      {
        day: 2,
        title: "Cultural Exploration",
        description: "Visit to local villages to experience traditional lifestyle, crafts, and cuisine."
      },
      {
        day: 3,
        title: "Religious and Historical Sites",
        description: "Visit to religious and historical sites in Kishtwar, including ancient temples and monuments."
      },
      {
        day: 4,
        title: "Departure",
        description: "After a traditional breakfast, check out and depart with cultural insights of Kishtwar."
      }
    ]
  }
];