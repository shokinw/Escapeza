export interface Restaurant {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  priceRange: string;
  address: string;
  contactNumber: string;
  openingHours: string;
  description: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  vegetarian: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const restaurants: Restaurant[] = [
  {
    id: "r1",
    name: "Grill In",
    image: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cuisine: "Indian, Kashmiri",
    rating: 4.7,
    priceRange: "₹₹",
    address: "Fly Over, Kishtwar",
    contactNumber: "+91 9876543210",
    openingHours: "10:00 AM - 10:00 PM",
    description: "Enjoy authentic Kashmiri cuisine with a modern twist. Our chefs prepare dishes using traditional recipes and fresh local ingredients."
  },
  {
    id: "r2",
    name: "Celebration",
    image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cuisine: "Café, Continental",
    rating: 4.5,
    priceRange: "₹₹",
    address: "Near Zum Zum, Kishtwar",
    contactNumber: "+91 9876543211",
    openingHours: "8:00 AM - 9:00 PM",
    description: "A cozy café serving delicious beverages, snacks, and continental dishes. Perfect spot to relax and enjoy the mountain views."
  },
  {
    id: "r3",
    name: "ZUM ZUM",
    image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cuisine: "Multi-cuisine",
    rating: 4.2,
    priceRange: "₹",
    address: "College Road, Kishtwar",
    contactNumber: "+91 9876543212",
    openingHours: "11:00 AM - 11:00 PM",
    description: "A family-friendly restaurant offering a variety of dishes ranging from local Dogri cuisine to North Indian favorites."
  },
  {
    id: "r4",
    name: "Bake and Flakes",
    image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cuisine: "Dogri, North Indian",
    rating: 4.6,
    priceRange: "₹₹",
    address: "Shalimar Colony, Kishtwar",
    contactNumber: "+91 9876543213",
    openingHours: "12:00 PM - 10:00 PM",
    description: "Specializing in authentic Dogri cuisine with recipes passed down through generations. Experience the true taste of Jammu & Kashmir."
  },
  {
    id: "r5",
    name: "Mountain View Restaurant",
    image: "https://images.pexels.com/photos/858508/pexels-photo-858508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cuisine: "Multi-cuisine",
    rating: 4.3,
    priceRange: "₹₹₹",
    address: "Chowgan Ground, Kishtwar",
    contactNumber: "+91 9876543214",
    openingHours: "11:00 AM - 11:00 PM",
    description: "Dine with a spectacular view of the mountains. Our restaurant offers a diverse menu with something for everyone."
  },
  {
    id: "r6",
    name: "Sinthan Dhaba",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cuisine: "North Indian, Street Food",
    rating: 4.4,
    priceRange: "₹",
    address: "Sinthan Road, Kishtwar",
    contactNumber: "+91 9876543215",
    openingHours: "6:00 AM - 10:00 PM",
    description: "A popular roadside eatery known for serving hot, delicious food to travelers. Famous for parathas and kadhi chawal."
  }
];

export const menuCategories: { [key: string]: MenuCategory[] } = {
  "r1": [
    {
      id: "c1",
      name: "Starters",
      items: [
        {
          id: "m1",
          name: "Kashmiri Seekh Kebab",
          description: "Delicious minced meat kebabs with Kashmiri spices",
          price: 280,
          image: "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          category: "Starters",
          vegetarian: false
        },
        {
          id: "m2",
          name: "Nadru Chips",
          description: "Crispy lotus stem chips with Kashmiri spices",
          price: 180,
          image: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          category: "Starters",
          vegetarian: true
        },
        {
          id: "m3",
          name: "Paneer Tikka",
          description: "Marinated cottage cheese grilled in a tandoor",
          price: 250,
          image: "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          category: "Starters",
          vegetarian: true
        }
      ]
    },
    {
      id: "c2",
      name: "Main Course",
      items: [
        {
          id: "m4",
          name: "Rogan Josh",
          description: "Traditional Kashmiri lamb curry",
          price: 350,
          image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          category: "Main Course",
          vegetarian: false
        },
        {
          id: "m5",
          name: "Dum Aloo",
          description: "Baby potatoes in a yogurt-based gravy",
          price: 220,
          image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          category: "Main Course",
          vegetarian: true
        },
        {
          id: "m6",
          name: "Kashmiri Pulao",
          description: "Fragrant rice with dry fruits and saffron",
          price: 280,
          image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          category: "Main Course",
          vegetarian: true
        }
      ]
    },
    {
      id: "c3",
      name: "Breads",
      items: [
        {
          id: "m7",
          name: "Kashmiri Naan",
          description: "Naan bread stuffed with dry fruits",
          price: 80,
          image: "https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          category: "Breads",
          vegetarian: true
        },
        {
          id: "m8",
          name: "Tandoori Roti",
          description: "Whole wheat bread baked in tandoor",
          price: 40,
          image: "https://images.pexels.com/photos/1894781/pexels-photo-1894781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          category: "Breads",
          vegetarian: true
        }
      ]
    },
    {
      id: "c4",
      name: "Desserts",
      items: [
        {
          id: "m9",
          name: "Phirni",
          description: "Rice pudding garnished with nuts",
          price: 150,
          image: "https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          category: "Desserts",
          vegetarian: true
        },
        {
          id: "m10",
          name: "Shufta",
          description: "Traditional Kashmiri dessert with nuts and spices",
          price: 180,
          image: "https://images.pexels.com/photos/14705344/pexels-photo-14705344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          category: "Desserts",
          vegetarian: true
        }
      ]
    }
  ],
  "r2": [
    {
      id: "c1",
      name: "Beverages",
      items: [
        {
          id: "m1",
          name: "Kahwa",
          description: "Traditional Kashmiri green tea with saffron and almonds",
          price: 120,
          image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          category: "Beverages",
          vegetarian: true
        },
        {
          id: "m2",
          name: "Mountain Mocha",
          description: "Rich coffee with chocolate and whipped cream",
          price: 150,
          image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          category: "Beverages",
          vegetarian: true
        }
      ]
    },
    {
      id: "c2",
      name: "Breakfast",
      items: [
        {
          id: "m3",
          name: "English Breakfast",
          description: "Eggs, bacon, sausage, beans, and toast",
          price: 250,
          image: "https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          category: "Breakfast",
          vegetarian: false
        },
        {
          id: "m4",
          name: "Avocado Toast",
          description: "Sourdough toast with avocado, poached egg, and cherry tomatoes",
          price: 220,
          image: "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          category: "Breakfast",
          vegetarian: true
        }
      ]
    }
  ],
  "r3": [
    {
      id: "c1",
      name: "Fast Food",
      items: [
        {
          id: "m1",
          name: "Veg Burger",
          description: "Vegetable patty with cheese and special sauce",
          price: 120,
          image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          category: "Fast Food",
          vegetarian: true
        },
        {
          id: "m2",
          name: "Chicken Pizza",
          description: "Pizza topped with chicken, bell peppers, and cheese",
          price: 280,
          image: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          category: "Fast Food",
          vegetarian: false
        }
      ]
    }
  ],
  "r4": [
    {
      id: "c1",
      name: "Dogri Specials",
      items: [
        {
          id: "m1",
          name: "Ambal",
          description: "Tangy pumpkin curry, a Dogri specialty",
          price: 180,
          image: "https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          category: "Dogri Specials",
          vegetarian: true
        }
      ]
    }
  ],
  "r5": [
    {
      id: "c1",
      name: "Chef's Special",
      items: [
        {
          id: "m1",
          name: "Mountain Trout",
          description: "Local river trout grilled with herbs",
          price: 450,
          image: "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          category: "Chef's Special",
          vegetarian: false
        }
      ]
    }
  ],
  "r6": [
    {
      id: "c1",
      name: "Breakfast",
      items: [
        {
          id: "m1",
          name: "Aloo Paratha",
          description: "Stuffed potato paratha served with curd",
          price: 80,
          image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          category: "Breakfast",
          vegetarian: true
        }
      ]
    }
  ]
};