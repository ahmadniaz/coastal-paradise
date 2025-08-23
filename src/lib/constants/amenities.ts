// Coastal Paradise Amenities Data
export interface Amenity {
  id: string;
  name: string;
  category: 'bathroom' | 'bedroom' | 'entertainment' | 'family' | 'heating' | 'safety' | 'internet' | 'kitchen' | 'outdoor' | 'parking' | 'services';
  icon: string;
  description: string;
  available: boolean;
}

export const amenities: Amenity[] = [
  // Bathroom Amenities
  {
    id: "bathtub",
    name: "Bathtub",
    category: "bathroom",
    icon: "hot_tub",
    description: "Comfortable bathtub for relaxation",
    available: true
  },
  {
    id: "hair-dryer",
    name: "Hair Dryer",
    category: "bathroom",
    icon: "dry",
    description: "Hair dryer available",
    available: true
  },

  {
    id: "outdoor-shower",
    name: "Outdoor Shower",
    category: "bathroom",
    icon: "shower",
    description: "Outdoor shower for beach days",
    available: true
  },
  {
    id: "hot-water",
    name: "Hot Water",
    category: "bathroom",
    icon: "hot_tub",
    description: "Reliable hot water system",
    available: true
  },

  // Bedroom and Laundry Amenities
  {
    id: "washer",
    name: "Free Washer – In unit",
    category: "bedroom",
    icon: "local_laundry_service",
    description: "In-unit washer available",
    available: true
  },
  {
    id: "dryer",
    name: "Free Dryer – In unit",
    category: "bedroom",
    icon: "local_laundry_service",
    description: "In-unit dryer available",
    available: true
  },
  {
    id: "hangers",
    name: "Hangers",
    category: "bedroom",
    icon: "checkroom",
    description: "Clothing hangers provided",
    available: true
  },
  {
    id: "bed-linens",
    name: "Bed Linens",
    category: "bedroom",
    icon: "bed",
    description: "Fresh bed linens provided",
    available: true
  },
  {
    id: "extra-pillows",
    name: "Extra Pillows and Blankets",
    category: "bedroom",
    icon: "bed",
    description: "Extra pillows and blankets available",
    available: true
  },
  {
    id: "room-darkening",
    name: "Room-darkening Shades",
    category: "bedroom",
    icon: "curtains",
    description: "Room-darkening window shades",
    available: true
  },
  {
    id: "iron",
    name: "Iron",
    category: "bedroom",
    icon: "iron",
    description: "Iron and ironing board available",
    available: true
  },
  {
    id: "clothing-storage",
    name: "Clothing Storage",
    category: "bedroom",
    icon: "checkroom",
    description: "Generous closet space in all bedrooms",
    available: true
  },

  // Entertainment Amenities
  {
    id: "tv",
    name: "TV",
    category: "entertainment",
    icon: "tv",
    description: "Television with streaming services",
    available: true
  },
  {
    id: "books",
    name: "Books and Reading Material",
    category: "entertainment",
    icon: "book",
    description: "Selection of books and magazines",
    available: true
  },
  {
    id: "board-games",
    name: "Board Games",
    category: "entertainment",
    icon: "casino",
    description: "Collection of family board games",
    available: true
  },
  {
    id: "beach-chairs",
    name: "Beach Chairs",
    category: "entertainment",
    icon: "beach_access",
    description: "Comfortable beach chairs for outdoor relaxation",
    available: true
  },
  {
    id: "cooler",
    name: "Cooler",
    category: "entertainment",
    icon: "ac_unit",
    description: "Portable cooler for beach trips and outdoor activities",
    available: true
  },
  {
    id: "snorkeling-equipment",
    name: "Snorkeling Equipment",
    category: "entertainment",
    icon: "pool",
    description: "Snorkeling gear for underwater exploration",
    available: true
  },
  {
    id: "bicycles-entertainment",
    name: "Bicycles",
    category: "entertainment",
    icon: "directions_bike",
    description: "Bicycles available for exploring the area",
    available: true
  },

  // Family Amenities
  {
    id: "children-books-toys",
    name: "Children's Books and Toys",
    category: "family",
    icon: "child_care",
    description: "Age-appropriate books and toys for children of all ages",
    available: true
  },
  {
    id: "babysitter",
    name: "Babysitter Recommendations",
    category: "family",
    icon: "person",
    description: "Local babysitter recommendations available",
    available: true
  },

  // Heating and Cooling Amenities
  {
    id: "ac",
    name: "Air Conditioning",
    category: "heating",
    icon: "ac_unit",
    description: "Central air conditioning throughout the home",
    available: true
  },
  {
    id: "ceiling-fan",
    name: "Ceiling Fan",
    category: "heating",
    icon: "air",
    description: "Ceiling fans in bedrooms and living areas",
    available: true
  },
  {
    id: "heating",
    name: "Heating",
    category: "heating",
    icon: "thermostat",
    description: "Central heating system",
    available: true
  },

  // Safety Amenities
  {
    id: "smoke-alarm",
    name: "Smoke Alarm",
    category: "safety",
    icon: "warning",
    description: "Smoke detectors throughout the home",
    available: true
  },
  {
    id: "co-alarm",
    name: "Carbon Monoxide Alarm",
    category: "safety",
    icon: "warning",
    description: "Carbon monoxide detectors",
    available: true
  },
  {
    id: "fire-extinguisher",
    name: "Fire Extinguisher",
    category: "safety",
    icon: "local_fire_department",
    description: "Fire extinguisher available",
    available: true
  },
  {
    id: "first-aid",
    name: "First Aid Kit",
    category: "safety",
    icon: "medical_services",
    description: "Complete first aid kit",
    available: true
  },

  // Internet and Office Amenities
  {
    id: "wifi",
    name: "WiFi",
    category: "internet",
    icon: "wifi",
    description: "High-speed WiFi throughout the home",
    available: true
  },
  {
    id: "workspace",
    name: "Dedicated Workspace",
    category: "internet",
    icon: "desktop_mac",
    description: "Quiet workspace with desk and chair",
    available: true
  },

  // Kitchen and Dining Amenities
  {
    id: "kitchen",
    name: "Kitchen",
    category: "kitchen",
    icon: "kitchen",
    description: "Fully equipped kitchen for cooking meals",
    available: true
  },
  {
    id: "refrigerator",
    name: "Refrigerator",
    category: "kitchen",
    icon: "kitchen",
    description: "Full-size refrigerator with freezer",
    available: true
  },
  {
    id: "microwave",
    name: "Microwave",
    category: "kitchen",
    icon: "microwave",
    description: "Built-in microwave oven",
    available: true
  },
  {
    id: "cooking-basics",
    name: "Cooking Basics",
    category: "kitchen",
    icon: "restaurant",
    description: "Pots and pans, oil, salt and pepper",
    available: true
  },
  {
    id: "dishes",
    name: "Dishes and Silverware",
    category: "kitchen",
    icon: "restaurant",
    description: "Complete set of dishes, bowls, plates, cups, etc.",
    available: true
  },

  {
    id: "dishwasher",
    name: "Dishwasher",
    category: "kitchen",
    icon: "dishwasher",
    description: "Built-in dishwasher",
    available: true
  },
  {
    id: "stove-oven",
    name: "Stove and Oven",
    category: "kitchen",
    icon: "oven",
    description: "Electric stove top and oven",
    available: true
  },
  {
    id: "hot-water-kettle",
    name: "Hot Water Kettle",
    category: "kitchen",
    icon: "coffee",
    description: "Electric hot water kettle",
    available: true
  },
  {
    id: "coffee-maker",
    name: "Coffee Maker",
    category: "kitchen",
    icon: "coffee",
    description: "Keurig and a Drip coffee maker",
    available: true
  },
  {
    id: "wine-glasses",
    name: "Wine Glasses",
    category: "kitchen",
    icon: "wine_bar",
    description: "Wine glasses for dining",
    available: true
  },
  {
    id: "toaster",
    name: "Toaster",
    category: "kitchen",
    icon: "restaurant",
    description: "Toaster for breakfast",
    available: true
  },
  {
    id: "baking-sheet",
    name: "Baking Sheet",
    category: "kitchen",
    icon: "restaurant",
    description: "Baking sheets for cooking",
    available: true
  },
  {
    id: "blender",
    name: "Blender",
    category: "kitchen",
    icon: "restaurant",
    description: "Blender for smoothies and drinks",
    available: true
  },
  {
    id: "dining-table",
    name: "Dining Table",
    category: "kitchen",
    icon: "restaurant",
    description: "Dining table for meals",
    available: true
  },

  // Outdoor Amenities
  {
    id: "private-patio",
    name: "Private Patio or Balcony",
    category: "outdoor",
    icon: "deck",
    description: "Private outdoor space",
    available: true
  },
  {
    id: "private-backyard",
    name: "Private Backyard – Fully fenced",
    category: "outdoor",
    icon: "park",
    description: "Beautiful private garden with tropical plants",
    available: true
  },
  {
    id: "outdoor-furniture",
    name: "Outdoor Furniture",
    category: "outdoor",
    icon: "deck",
    description: "Comfortable outdoor seating",
    available: true
  },
  {
    id: "outdoor-dining",
    name: "Outdoor Dining Area",
    category: "outdoor",
    icon: "outdoor_grill",
    description: "Covered outdoor dining space",
    available: true
  },
  {
    id: "bbq",
    name: "BBQ Grill",
    category: "outdoor",
    icon: "outdoor_grill",
    description: "Gas barbecue grill",
    available: true
  },

  {
    id: "outdoor-chair",
    name: "Outside Chair",
    category: "outdoor",
    icon: "deck",
    description: "Comfortable outdoor chairs",
    available: true
  },
  {
    id: "outdoor-dining-set",
    name: "Outdoor Dining Set",
    category: "outdoor",
    icon: "restaurant",
    description: "Outdoor dining table and chairs",
    available: true
  },
  {
    id: "beach-essentials",
    name: "Beach Essentials",
    category: "outdoor",
    icon: "beach_access",
    description: "Beach towels, umbrella, beach blanket, snorkeling gear",
    available: true
  },


  // Parking and Facilities Amenities
  {
    id: "free-parking",
    name: "Free Parking on Premises",
    category: "parking",
    icon: "local_parking",
    description: "Private parking space included",
    available: true
  },
  {
    id: "street-parking",
    name: "Free Street Parking",
    category: "parking",
    icon: "local_parking",
    description: "Free street parking available",
    available: true
  },

  // Services Amenities

  {
    id: "assistance-animals",
    name: "Assistance Animals Always Allowed",
    category: "services",
    icon: "pets",
    description: "Service animals always welcome",
    available: true
  },
  {
    id: "long-term-stays",
    name: "Long Term Stays Allowed",
    category: "services",
    icon: "schedule",
    description: "Stays of 28 days or more allowed",
    available: true
  },
  {
    id: "self-checkin",
    name: "Self Check-in",
    category: "services",
    icon: "key",
    description: "Self check-in with lockbox",
    available: true
  },
  {
    id: "housekeeping",
    name: "Housekeeping Available",
    category: "services",
    icon: "cleaning_services",
    description: "Housekeeping available at extra cost",
    available: true
  }
];

export const amenityCategories = [
  { id: "outdoor", name: "Outdoor", icon: "park" },
  { id: "kitchen", name: "Kitchen & Dining", icon: "kitchen" },
  { id: "bathroom", name: "Bathroom", icon: "bathroom" },
  { id: "bedroom", name: "Bedroom & Laundry", icon: "bed" },
  { id: "entertainment", name: "Entertainment", icon: "movie" },
  { id: "family", name: "Family", icon: "family_restroom" },
  { id: "heating", name: "Heating & Cooling", icon: "ac_unit" },
  { id: "safety", name: "Safety", icon: "security" },
  { id: "internet", name: "Internet & Office", icon: "wifi" },
  { id: "parking", name: "Parking", icon: "local_parking" },
  { id: "services", name: "Services", icon: "room_service" }
];

