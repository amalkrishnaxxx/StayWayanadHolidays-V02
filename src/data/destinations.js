export const destinations = [
  {
    id: 'wayanad',
    name: 'Wayanad',
    state: 'Kerala',
    shortDescription: 'Hills, waterfalls, and forest stays for adventure and peace lovers.',
    fullDescription: 'Nestled in the Western Ghats, Wayanad is a paradise for nature lovers and adventure enthusiasts. With its lush green hills, cascading waterfalls, and dense forests, Wayanad offers an unforgettable escape from the hustle of city life.',
    // Replace with your image URL or path:
    image: 'https://images.unsplash.com/photo-1708492320318-d4d9fb0ed2f8?w=800',
    // To replace: Update the URL above or use ImagePlaceholder component
    activities: [
      'Trekking in the Western Ghats',
      'Wildlife Safari at Wayanad Wildlife Sanctuary',
      'Visit Edakkal Caves',
      'Waterfall visits (Soochipara, Meenmutty)',
      'Bamboo rafting',
      'Tea and spice plantation tours'
    ],
    packages: [
      { name: 'Family Package', duration: '3 Days / 2 Nights', price: 'Starting from ₹12,000' },
      { name: 'Honeymoon Package', duration: '4 Days / 3 Nights', price: 'Starting from ₹18,000' },
      { name: 'Adventure Package', duration: '5 Days / 4 Nights', price: 'Starting from ₹22,000' }
    ]
  },
  {
    id: 'munnar',
    name: 'Munnar',
    state: 'Kerala',
    shortDescription: 'Tea gardens and mountain views for relaxation.',
    fullDescription: 'Munnar, located in the Western Ghats, is famous for its sprawling tea plantations, misty mountains, and cool climate. It is one of the most sought-after hill stations in South India, perfect for a peaceful retreat.',
    // Replace with your image URL or path:
    image: 'https://images.unsplash.com/photo-1650884986392-984358536050?w=800',
    // To replace: Update the URL above or use ImagePlaceholder component
    activities: [
      'Tea plantation visits and factory tours',
      'Eravikulam National Park (Nilgiri Tahr)',
      'Mattupetty Dam and Lake',
      'Echo Point',
      'Attukal Waterfalls',
      'Trekking and nature walks'
    ],
    packages: [
      { name: 'Romantic Getaway', duration: '3 Days / 2 Nights', price: 'Starting from ₹14,000' },
      { name: 'Family Retreat', duration: '4 Days / 3 Nights', price: 'Starting from ₹20,000' },
      { name: 'Luxury Package', duration: '5 Days / 4 Nights', price: 'Starting from ₹28,000' }
    ]
  },
  {
    id: 'alappuzha',
    name: 'Alappuzha (Alleppey)',
    state: 'Kerala',
    shortDescription: 'Known for houseboats and backwater experiences.',
    fullDescription: 'Alappuzha, also known as Alleppey, is the Venice of the East. Famous for its serene backwaters, houseboat cruises, and pristine beaches, it offers a unique and tranquil experience.',
    // Replace with your image URL or path:
    image: 'https://images.unsplash.com/photo-1707893013488-51672ef83425?w=800',
    // To replace: Update the URL above or use ImagePlaceholder component
    activities: [
      'Houseboat cruise on backwaters',
      'Visit Alappuzha Beach',
      'Snake boat races (seasonal)',
      'Village tours and coir-making demonstrations',
      'Kayaking through canals',
      'Visit Krishnapuram Palace'
    ],
    packages: [
      { name: 'Backwater Bliss', duration: '2 Days / 1 Night', price: 'Starting from ₹10,000' },
      { name: 'Houseboat Experience', duration: '3 Days / 2 Nights', price: 'Starting from ₹16,000' },
      { name: 'Premium Cruise', duration: '4 Days / 3 Nights', price: 'Starting from ₹24,000' }
    ]
  },
  {
    id: 'kovalam',
    name: 'Kovalam',
    state: 'Kerala',
    shortDescription: 'Beachside holidays and Ayurveda retreats.',
    fullDescription: 'Kovalam is a coastal paradise known for its crescent-shaped beaches, lighthouse, and Ayurvedic treatments. It is perfect for those seeking sun, sand, and rejuvenation.',
    image: 'https://images.unsplash.com/photo-1677769608829-1534f945c1df?w=800',
    activities: [
      'Beach relaxation and swimming',
      'Visit the iconic Kovalam Lighthouse',
      'Ayurvedic spa treatments',
      'Surfing and parasailing',
      'Visit nearby Vizhinjam fishing village',
      'Yoga and meditation sessions'
    ],
    packages: [
      { name: 'Beach Retreat', duration: '3 Days / 2 Nights', price: 'Starting from ₹11,000' },
      { name: 'Wellness Package', duration: '5 Days / 4 Nights', price: 'Starting from ₹20,000' },
      { name: 'Luxury Beach Stay', duration: '7 Days / 6 Nights', price: 'Starting from ₹35,000' }
    ]
  },
  {
    id: 'goa',
    name: 'Goa',
    state: 'Goa',
    shortDescription: 'Perfect for beach parties and leisure.',
    fullDescription: 'Goa is India\'s beach paradise, known for its golden sands, vibrant nightlife, Portuguese heritage, and laid-back vibe. Whether you seek adventure or relaxation, Goa has it all.',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800',
    activities: [
      'Beach hopping (Baga, Calangute, Anjuna, Palolem)',
      'Water sports (jet skiing, parasailing, scuba diving)',
      'Visit Old Goa churches and Fort Aguada',
      'Night markets and beach parties',
      'Dudhsagar Waterfall trek',
      'Spice plantation tours'
    ],
    packages: [
      { name: 'Bachelor Trip', duration: '3 Days / 2 Nights', price: 'Starting from ₹13,000' },
      { name: 'Beach Fun Package', duration: '4 Days / 3 Nights', price: 'Starting from ₹17,000' },
      { name: 'Complete Goa', duration: '6 Days / 5 Nights', price: 'Starting from ₹28,000' }
    ]
  },
  {
    id: 'coorg',
    name: 'Coorg',
    state: 'Karnataka',
    shortDescription: 'Coffee plantations and cool climate for nature enthusiasts.',
    fullDescription: 'Known as the Scotland of India, Coorg offers lush coffee plantations, misty hills, and rich culture. It is a perfect destination for nature lovers and adventure seekers.',
    image: 'https://images.unsplash.com/photo-1633437805600-2c58bf56663c?w=800',
    activities: [
      'Coffee plantation tours',
      'Visit Abbey Falls and Iruppu Falls',
      'Trekking to Tadiandamol Peak',
      'River rafting in Barapole',
      'Visit Namdroling Monastery (Golden Temple)',
      'Wildlife safari at Nagarhole National Park'
    ],
    packages: [
      { name: 'Nature Escape', duration: '3 Days / 2 Nights', price: 'Starting from ₹12,500' },
      { name: 'Adventure Coorg', duration: '4 Days / 3 Nights', price: 'Starting from ₹18,500' },
      { name: 'Luxury Coffee Estate Stay', duration: '5 Days / 4 Nights', price: 'Starting from ₹26,000' }
    ]
  },
  {
    id: 'mysore',
    name: 'Mysore',
    state: 'Karnataka',
    shortDescription: 'Royal heritage, palaces, and cultural experiences.',
    fullDescription: 'Mysore, the City of Palaces, is known for its rich cultural heritage, magnificent architecture, and vibrant festivals. It is a must-visit for history and culture enthusiasts.',
    image: 'https://images.unsplash.com/photo-1657856855186-7cf4909a4f78?w=800',
    activities: [
      'Visit Mysore Palace',
      'Explore Chamundi Hills and Temple',
      'Brindavan Gardens musical fountain show',
      'Visit St. Philomena\'s Cathedral',
      'Shopping for silk sarees and sandalwood',
      'Day trip to Srirangapatna'
    ],
    packages: [
      { name: 'Heritage Tour', duration: '2 Days / 1 Night', price: 'Starting from ₹9,000' },
      { name: 'Cultural Mysore', duration: '3 Days / 2 Nights', price: 'Starting from ₹14,000' },
      { name: 'Royal Experience', duration: '4 Days / 3 Nights', price: 'Starting from ₹20,000' }
    ]
  },
  {
    id: 'tamilnadu-karnataka',
    name: 'Tamil Nadu & Karnataka',
    state: 'Tamil Nadu & Karnataka',
    shortDescription: 'Explore temples, beaches, and hill stations.',
    fullDescription: 'Experience the best of South India with a tour covering Tamil Nadu and Karnataka. From ancient temples and pristine beaches to scenic hill stations, this journey offers diverse experiences.',
    image: 'https://images.unsplash.com/photo-1470087167738-6aa485ff65dc?w=800',
    activities: [
      'Temple tours (Madurai, Rameshwaram, Kanyakumari)',
      'Beach visits (Mahabalipuram, Pondicherry)',
      'Hill stations (Ooty, Kodaikanal)',
      'Bangalore city tour',
      'Hampi heritage sites',
      'Bandipur National Park safari'
    ],
    packages: [
      { name: 'South India Explorer', duration: '7 Days / 6 Nights', price: 'Starting from ₹30,000' },
      { name: 'Temple & Beach Tour', duration: '5 Days / 4 Nights', price: 'Starting from ₹22,000' },
      { name: 'Complete South', duration: '10 Days / 9 Nights', price: 'Starting from ₹45,000' }
    ]
  }
];