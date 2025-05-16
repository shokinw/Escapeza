export interface RentProperty {
  id: string;
  title: string;
  description: string;
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  images: string[];
  location: string;
  features: string[];
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  available: boolean;
}

export const rentProperties: RentProperty[] = [
  {
    id: "r1",
    title: "Modern Apartment near Chowgan Ground",
    description: "A fully furnished modern apartment located near Chowgan Ground. Perfect for tourists and business travelers looking for a comfortable stay in Kishtwar.",
    price: 15000,
    area: 1200,
    bedrooms: 2,
    bathrooms: 2,
    images: [
      "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    location: "Near Chowgan Ground, Kishtwar",
    features: [
      "Fully furnished",
      "24-hour hot water",
      "Power backup",
      "Parking space",
      "Kitchen with modern appliances",
      "Free Wi-Fi"
    ],
    contactName: "Rahul Sharma",
    contactPhone: "+91 9876543210",
    contactEmail: "rahul.sharma@example.com",
    available: true
  },
  {
    id: "r2",
    title: "Traditional Wooden House with Garden",
    description: "Experience the traditional Kashmiri lifestyle in this beautiful wooden house with a garden. Located in a peaceful area of Kishtwar, it offers a perfect blend of tradition and comfort.",
    price: 20000,
    area: 1800,
    bedrooms: 3,
    bathrooms: 2,
    images: [
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    location: "Shalimar Colony, Kishtwar",
    features: [
      "Traditional wooden architecture",
      "Garden with fruit trees",
      "Fireplace",
      "Spacious living room",
      "Kitchen with traditional and modern appliances",
      "Mountain view"
    ],
    contactName: "Priya Gupta",
    contactPhone: "+91 9876543211",
    contactEmail: "priya.gupta@example.com",
    available: true
  },
  {
    id: "r3",
    title: "Cozy Cottage near Sinthan Road",
    description: "A cozy cottage ideal for a small family or a group of friends. Located near Sinthan Road, it provides easy access to Sinthan Top and other tourist attractions.",
    price: 12000,
    area: 900,
    bedrooms: 2,
    bathrooms: 1,
    images: [
      "https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    location: "Near Sinthan Road, Kishtwar",
    features: [
      "Fully furnished",
      "Mountain view",
      "Kitchen with basic amenities",
      "Heater provided",
      "Parking space"
    ],
    contactName: "Amir Khan",
    contactPhone: "+91 9876543212",
    contactEmail: "amir.khan@example.com",
    available: true
  },
  {
    id: "r4",
    title: "Luxury Villa with Panoramic Views",
    description: "A luxurious villa offering panoramic views of the Kishtwar valley. Perfect for those looking for a premium stay experience in the heart of nature.",
    price: 35000,
    area: 2500,
    bedrooms: 4,
    bathrooms: 3,
    images: [
      "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    location: "Hillview Area, Kishtwar",
    features: [
      "Panoramic valley view",
      "Spacious living and dining area",
      "Fully equipped modern kitchen",
      "Outdoor seating area",
      "Garden with BBQ facility",
      "Fireplace",
      "Smart home features",
      "24-hour security"
    ],
    contactName: "Sunita Joshi",
    contactPhone: "+91 9876543213",
    contactEmail: "sunita.joshi@example.com",
    available: true
  }
];