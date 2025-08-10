// Coastal Paradise Reviews Data
export interface Review {
  id: string;
  guestName: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  guestPhoto?: string;
  hostResponse?: string;
  helpful: number;
  location?: string;
  tripType?: string;
}

export const reviews: Review[] = [
  {
    id: "1",
    guestName: "Natalie",
    rating: 5,
    date: "2024-01-15",
    title: "We now call this, \"our house\"",
    comment: "We now call this, \"our house\" it is practically perfect in every way!!  So cozy and had everything you needed and more!  Perfect location, immaculate landscaping and cozy beds and couch!  Love the back yard area!  Just perfect for our family!  We will definitely be booking again!!  Thank you for my wonderful 48th birthday weekend with my kiddos at our favorite beaches and in \"our home\"!  💕",
    tripType: "Stayed with kids",
    hostResponse: "Hi Natalie, I am so glad that we can share our home with you. Please come back anytime !",
    helpful: 12
  },
  {
    id: "2",
    guestName: "Tripp",
    rating: 5,
    date: "2024-01-08",
    title: "Perfect for us",
    location: "Tequesta, Florida",
    comment: "Nikki's place was perfect for us.  Great location in the middle of Tequesta with walkable access to restaurants, bars, and even the Tequesta Farmer's Market.   It worked perfectly for us and we definitely will be back! Nikki was awesome to work with and easy to communicate with.   Thank you Nikki and we will be back!",
    tripType: "Group trip",
    helpful: 8
  },
  {
    id: "3",
    guestName: "Karen",
    rating: 5,
    date: "2023-12-28",
    title: "Perfect home for a relaxing getaway!",
    location: "Jacksonville, Florida",
    comment: "Perfect home for a relaxing getaway!  Very comfortable and clean. The bed in the master bedroom was so comfortable!  Walkable to a cute coffee shop, a couple restaurants and a brewery. Would definitely stay here again!",
    tripType: "Group trip",
    helpful: 15
  },
  {
    id: "4",
    guestName: "Mallory",
    rating: 5,
    date: "2023-12-15",
    title: "Pleasantly surprised",
    location: "Savannah, Georgia",
    comment: "We have family who live in Jupiter and came to visit. We were pleasantly surprised with this place. Everything was updated and clean. There is an awesome backyard to hang out in. It's walking distance to restaurants and shops. We walked to get coffee in the morning.",
    tripType: "Stayed with a pet",
    hostResponse: "Perk Coffee shop is one of our favorites too, especially on Sundays when they have live music.",
    helpful: 9
  },
  {
    id: "5",
    guestName: "Kaitlyn",
    rating: 5,
    date: "2023-12-01",
    title: "Absolutely loved this Airbnb!",
    location: "Orlando, Florida",
    comment: "Absolutely loved this Airbnb! The place was so clean. The Airbnb had everything I needed and was wide enough space for me to bring my pack and play and toys for my little one. Beds were extremely comfortable. loved the bathrooms! This place is walking distance from a great coffee shop and restaurants. Also a short 4 minute drive from love Street and the Jupiter lighthouse! Host was amazing. very polite and flexible when we had last-minute changes. 100% stay here again for future trips. it was a great place to celebrate my son's first Easter.",
    tripType: "Stayed with kids",
    helpful: 11
  },
  {
    id: "6",
    guestName: "Dorothy",
    rating: 5,
    date: "2023-11-20",
    title: "So many stars!!!!",
    location: "Saugerties, New York",
    comment: "So many stars!!!! Nikki's place was one of the best airbnbs we've ever had the privilege of staying at! It is so much more spectacular than the photos show! Nikki OFFERED us early check in and she was easy and lovely to communicate with! The place was beyond perfect clean and smelled like a dream! The outdoor area offered a magical refuge for relaxation and delightful dinner. Nikki's place is close to so many outdoor and dining activities! If available, you should already be hitting the reservation button! 100out of 10! We can't wait to come back! Can't say enough good things about our stay!",
    tripType: "Stayed with kids",
    helpful: 18
  },
  {
    id: "7",
    guestName: "Taylor",
    rating: 5,
    date: "2023-11-10",
    title: "Perfect homebase for our Jupiter/Tequesta vacation!",
    location: "Saint Paul, Minnesota",
    comment: "This was the perfect homebase for our Jupiter/Tequesta vacation! We were in the area to visit family and take my young son to the beach. We appreciated the proximity to the wonderful restaurants in Jupiter as well as easy access to area beaches. By night, the patio provided the perfect, private retreat for us to spend time with family members. Nikki was a great host and a proactive communicator. We couldn't recommend this place more!",
    tripType: "Stayed with kids",
    helpful: 14
  },
  {
    id: "8",
    guestName: "Andrew",
    rating: 5,
    date: "2023-10-28",
    title: "Immaculately clean, comfortable",
    location: "Chico, California",
    comment: "Immaculately clean, comfortable, with comfortable beds, in a safe and peaceful neighborhood. The kitchen has everything you would need and more, with a wonderful beautifully landscaped backyard. Great hosts who really cared about you enjoying your stay and feeling welcomed. I highly recommend this home and would definitely stay here again!",
    tripType: "Stayed about a week",
    hostResponse: "Thank you Andrew. I would welcome you back anytime.",
    helpful: 7
  },
  {
    id: "9",
    guestName: "Jason",
    rating: 5,
    date: "2023-10-15",
    title: "Great place, very conveniently located",
    location: "Maitland, Florida",
    comment: "Great place, very conveniently located. House is gorgeous and comfortable. Can't wait to come back.",
    tripType: "Stayed with kids",
    hostResponse: "I am so glad that you had a great time !",
    helpful: 6
  },
  {
    id: "10",
    guestName: "Ove",
    rating: 5,
    date: "2023-10-01",
    title: "Beautiful, 100% clean",
    location: "Orlando, Florida",
    comment: "Nikki's house is beautiful, 100% clean, I been there for a work trip and the location was perfect, Thanks for the hospitality",
    tripType: "Stayed a few nights",
    helpful: 5
  },
  {
    id: "11",
    guestName: "Manuel",
    rating: 5,
    date: "2023-09-15",
    title: "Great place to stay",
    comment: "Great place to stay, perfect for a weekend getaway! Very spacious house with lots to do around the area. Would definitely stay again!",
    tripType: "Stayed with a pet",
    hostResponse: "I am so glad you enjoyed what Tequesta has to offer.",
    helpful: 4
  },
  {
    id: "12",
    guestName: "Lauren",
    rating: 5,
    date: "2023-09-01",
    title: "Absolutely wonderful place to stay!",
    location: "Tallahassee, Florida",
    comment: "Absolutely wonderful place to stay! We had a fantastic time!",
    tripType: "Stayed with kids",
    hostResponse: "so happy to hear that you and your family had a great time.",
    helpful: 10
  },
  {
    id: "13",
    guestName: "Rob",
    rating: 5,
    date: "2023-08-15",
    title: "Great stay",
    comment: "We had a great stay at Nikki O'Neill's home! It was very clean; the backyard was attractive and spacious. We were really happy and would recommend it to other travelers.",
    tripType: "Stayed a few nights",
    hostResponse: "Hi Rob, this means a lot to me, especially because you are in hotel business yourself.",
    helpful: 8
  },
  {
    id: "14",
    guestName: "Stuart",
    rating: 5,
    date: "2023-08-01",
    title: "Outstanding house",
    location: "Tampa, Florida",
    comment: "The is an outstanding house, and a perfect spot if folks are looking to be in Jupiter and near the water. For us as scuba divers, all the diving boats are within two miles of the house, which means we do not have to get up at the crack of dawn to spend our weekend diving, and all the good restaurants are within 3 miles of the home. While the images are 100% accurate, the house is somehow even nicer in person. Everything you need is available, and my wife (the clean freak) commented on how clean everything was. We slept in the master bedroom, and had no back issues in the morning. A/C was nice and cold (a plus for floridians), and the backyard is a great spot to unwind with friends. Nikki knew it was my wife's birthday, and left her a little surprise in the fridge....very nice touch! As Tampa residents who cross the state often, this is now our go to home when staying in Jupiter. 10 stars!",
    tripType: "Stayed a few nights",
    helpful: 16
  },
  {
    id: "15",
    guestName: "Lauren",
    rating: 5,
    date: "2023-07-15",
    title: "A great stay!",
    location: "Troy, Ohio",
    comment: "A great stay! Would visit again!",
    tripType: "Group trip",
    helpful: 3
  },
  {
    id: "16",
    guestName: "Kristie",
    rating: 5,
    date: "2023-07-01",
    title: "Enjoyed staying at this property",
    location: "Hico, Texas",
    comment: "We enjoyed staying at this property and the location",
    tripType: "Stayed over a week",
    helpful: 2
  },
  {
    id: "17",
    guestName: "James",
    rating: 5,
    date: "2023-06-15",
    title: "Great host",
    comment: "Nikki  was great- we'd stay here again!",
    tripType: "Stayed a few nights",
    helpful: 1
  },
  {
    id: "18",
    guestName: "Abigail",
    rating: 5,
    date: "2023-06-01",
    title: "Amazing service",
    location: "Charleston, South Carolina",
    comment: "amazing service, and communicated well!",
    tripType: "Stayed a few nights",
    helpful: 2
  },
  {
    id: "19",
    guestName: "Richard",
    rating: 5,
    date: "2023-05-15",
    title: "Good stuff!",
    comment: "Good stuff! Very clean place with brand new appliances",
    tripType: "Stayed a few nights",
    helpful: 1
  },
  {
    id: "20",
    guestName: "Zach",
    rating: 5,
    date: "2023-05-01",
    title: "Great Place",
    location: "Newtown, Connecticut",
    comment: "Great Place",
    tripType: "Stayed a few nights",
    helpful: 1
  }
];

export const reviewStats = {
  averageRating: 5.0,
  totalReviews: reviews.length,
  ratingBreakdown: {
    5: 20,
    4: 0,
    3: 0,
    2: 0,
    1: 0
  },
  categoryRatings: {
    cleanliness: 5.0,
    accuracy: 5.0,
    checkIn: 5.0,
    communication: 4.9,
    location: 5.0,
    value: 5.0
  }
};
