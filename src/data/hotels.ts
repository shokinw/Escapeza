export interface Hotel {
  id: string;
  name: string;
  images: string[];
  rating: number;
  pricePerNight: number;
  address: string;
  description: string;
  amenities: string[];
  contactNumber: string;
  email: string;
  rooms: Room[];
}

export interface Room {
  id: string;
  type: string;
  price: number;
  capacity: number;
  description: string;
  image: string;
  amenities: string[];
  available: boolean;
}

export const hotels: Hotel[] = [
  {
    id: "h1",
    name: "Hotel Mountain View",
    images: [
      "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    rating: 4.7,
    pricePerNight: 3500,
    address: "Main Market, Kishtwar",
    description: "Experience luxury amidst the mountains with breathtaking views of the Kishtwar valley. Our hotel offers comfortable rooms, excellent service, and delicious cuisine.",
    amenities: ["Free Wi-Fi", "Restaurant", "Room Service", "Parking", "24-hour Front Desk", "Hot Water"],
    contactNumber: "+91 9876543210",
    email: "info@mountainview.com",
    rooms: [
      {
        id: "r1",
        type: "Deluxe Room",
        price: 3500,
        capacity: 2,
        description: "Comfortable room with a double bed and mountain view",
        image: "https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        amenities: ["TV", "Wi-Fi", "Hot Water", "Room Service"],
        available: true
      },
      {
        id: "r2",
        type: "Premium Room",
        price: 4500,
        capacity: 2,
        description: "Spacious room with king-size bed and panoramic mountain view",
        image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        amenities: ["TV", "Wi-Fi", "Hot Water", "Room Service", "Mini Bar"],
        available: true
      }
    ]
  },
  {
    id: "h2",
    name: "Kishtwar Valley Resort",
    images: [
      "https://images.pexels.com/photos/2344264/pexels-photo-2344264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/172872/pexels-photo-172872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    rating: 4.5,
    pricePerNight: 4000,
    address: "Himalayan Highway, Kishtwar",
    description: "A luxurious resort surrounded by pine forests and snow-capped mountains. Offers a perfect blend of modern amenities and natural beauty.",
    amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Bar", "Spa", "Gym", "Room Service", "Parking"],
    contactNumber: "+91 9876543211",
    email: "bookings@kishtwarvalley.com",
    rooms: [
      {
        id: "r1",
        type: "Deluxe Room",
        price: 4000,
        capacity: 2,
        description: "Elegant room with modern amenities and valley view",
        image: "https://images.pexels.com/photos/172872/pexels-photo-172872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        amenities: ["TV", "Wi-Fi", "Hot Water", "Room Service", "Air Conditioning"],
        available: true
      },
      {
        id: "r2",
        type: "Luxury Suite",
        price: 6000,
        capacity: 3,
        description: "Spacious suite with separate living area and premium amenities",
        image: "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        amenities: ["TV", "Wi-Fi", "Hot Water", "Room Service", "Mini Bar", "Jacuzzi"],
        available: true
      }
    ]
  },
  {
    id: "h3",
    name: "Sinthan Top Lodge",
    images: [
      "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/275845/pexels-photo-275845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    rating: 4.2,
    pricePerNight: 2500,
    address: "Sinthan Top Road, Kishtwar",
    description: "A cozy lodge located on the way to Sinthan Top. Offers comfortable accommodation and stunning views of the snow-covered peaks.",
    amenities: ["Free Wi-Fi", "Restaurant", "Parking", "Heater", "Hot Water"],
    contactNumber: "+91 9876543212",
    email: "contact@sinthanlodge.com",
    rooms: [
      {
        id: "r1",
        type: "Standard Room",
        price: 2500,
        capacity: 2,
        description: "Comfortable room with basic amenities and mountain view",
        image: "https://images.pexels.com/photos/275845/pexels-photo-275845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        amenities: ["TV", "Wi-Fi", "Hot Water", "Heater"],
        available: true
      }
    ]
  },
  {
    id: "h4",
    name: "Warwan Guest House",
    images: [
      "https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    rating: 4.0,
    pricePerNight: 1800,
    address: "Warwan Valley Road, Kishtwar",
    description: "A homely guest house offering authentic local experience. Perfect for travelers looking to explore the Warwan Valley.",
    amenities: ["Free Wi-Fi", "Homemade Food", "Parking", "Hot Water"],
    contactNumber: "+91 9876543213",
    email: "stay@warwanguest.com",
    rooms: [
      {
        id: "r1",
        type: "Standard Room",
        price: 1800,
        capacity: 2,
        description: "Simple and clean room with basic amenities",
        image: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        amenities: ["TV", "Hot Water"],
        available: true
      }
    ]
  }
];