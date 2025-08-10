// Property images organized by room types
export const propertyImages = {
  // Exterior images for hero and main sections
  exterior: [
    '/property-images/exterior/exterior1.avif',
    '/property-images/exterior/exterior2.avif',
    '/property-images/exterior/exterior3.avif',
    '/property-images/exterior/exterior4.avif',
  ],
  
  // Living room images
  living: [
    '/property-images/living/living1.avif',
    '/property-images/living/living2.avif',
    '/property-images/living/living3.avif',
    '/property-images/living/living4.avif',
    '/property-images/living/living5.jpg',
  ],
  
  // Kitchen images
  kitchen: [
    '/property-images/kitchen/kitchen1.avif',
    '/property-images/kitchen/kitchen2.avif',
    '/property-images/kitchen/kitchen3.avif',
    '/property-images/kitchen/kitchen4.avif',
    '/property-images/kitchen/kitchen5.avif',
  ],
  
  // Bedroom images
  bedroom: {
    master: [
      '/property-images/bedroom/bed1-1.avif',
      '/property-images/bedroom/bed1-2.avif',
      '/property-images/bedroom/bed1-3.avif',
    ],
    second: [
      '/property-images/bedroom/bed2-1.avif',
      '/property-images/bedroom/bed2-2.avif',
      '/property-images/bedroom/bed2-3.avif',
      '/property-images/bedroom/bed2-4.avif',
    ],
    third: [
      '/property-images/bedroom/bed3-1.avif',
      '/property-images/bedroom/bed3-2.avif',
    ],
  },
  
  // Bathroom images
  bathroom: [
    '/property-images/washroom/washroom1.avif',
    '/property-images/washroom/washroom2.avif',
    '/property-images/washroom/washroom3.avif',
  ],
  
  // Dining area images
  dining: [
    '/property-images/dining/dining1.avif',
    '/property-images/dining/dining2.avif',
    '/property-images/dining/dining3.avif',
    '/property-images/dining/dining4.avif',
  ],
  
  // Outdoor/patio images
  outdoor: [
    '/property-images/outdoor/outdoor1.avif',
    '/property-images/outdoor/outdoor2.avif',
    '/property-images/outdoor/outdoor3.jpeg',
    '/property-images/outdoor/outdoor4.avif',
    '/property-images/outdoor/outdoor5.avif',
    '/property-images/outdoor/outdoor7.avif',
  ],
  
  // Laundry room images
  laundry: [
    '/property-images/laundary/laundary1.avif',
  ],
  
  // Additional/other images
  additional: [
    '/property-images/additional/additional1.webp',
    '/property-images/additional/additional2.avif',
    '/property-images/additional/additional3.avif',
    '/property-images/additional/additional4.avif',
    '/property-images/additional/additional5.avif',
    '/property-images/additional/additional6.webp',
  ],
};

// Helper function to get a random image from a category
export const getRandomImage = (category: keyof typeof propertyImages): string => {
  const images = propertyImages[category];
  if (Array.isArray(images) && images.length > 0) {
    return images[Math.floor(Math.random() * images.length)] || '';
  }
  return '';
};

// Helper function to get all images from a category
export const getAllImages = (category: keyof typeof propertyImages): string[] => {
  const images = propertyImages[category];
  if (Array.isArray(images)) {
    return images;
  }
  return [];
};

// Helper function to get bedroom images by room number
export const getBedroomImages = (roomNumber: 1 | 2 | 3): string[] => {
  switch (roomNumber) {
    case 1:
      return propertyImages.bedroom.master;
    case 2:
      return propertyImages.bedroom.second;
    case 3:
      return propertyImages.bedroom.third;
    default:
      return propertyImages.bedroom.master;
  }
};
