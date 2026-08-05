// Centralized dataset containing authentic product copy, bundles, recipes, reviews, and timeline events
// Omitted all price tags and pricing metadata for brand-first presentation

export const cookingSauces = [
  {
    id: 'punjabi-butter-chicken',
    name: 'Punjabi Butter Chicken',
    category: 'cooking-sauces',
    description: 'A mild, rich, and creamy cooking sauce made with gentle spices, tomatoes, and butter. A true classic of Punjabi cuisine.',
    image: '/src/assets/korma_sauce_jar.jpg',
    accentColor: '#B45309',
    dishName: 'Creamy Butter Chicken',
    dishImage: '/src/assets/plated_tikka_masala.jpg',
    pairText: 'Best served with steaming Basmati rice and butter naan.'
  },
  {
    id: 'delhi-tikka-masala',
    name: 'Delhi Tikka Masala',
    category: 'cooking-sauces',
    description: 'Our flagship medium-spiced cooking sauce. A beautiful blend of tomatoes, cream, onions, coriander, cumin, and warm Indian spices.',
    image: '/src/assets/tikka_masala_jar.jpg',
    accentColor: '#0F5132',
    dishName: 'Delhi Chicken Tikka Masala',
    dishImage: '/src/assets/plated_tikka_masala.jpg',
    pairText: 'Perfect alongside yellow saffron rice and crisp poppadoms.'
  },
  {
    id: 'navratan-korma',
    name: 'Navratan Korma',
    category: 'cooking-sauces',
    description: 'A very mild, luxurious sauce made with coconut cream, ground almonds, yogurt, and aromatic spices like green cardamom.',
    image: '/src/assets/korma_sauce_jar.jpg',
    accentColor: '#FAF7F0',
    dishName: 'Royal Vegetable Navratan Korma',
    dishImage: '/src/assets/plated_tikka_masala.jpg',
    pairText: 'Pairs beautifully with mixed vegetables and garlic naan.'
  },
  {
    id: 'rajasthani-jalfrezi',
    name: 'Rajasthani Jalfrezi',
    category: 'cooking-sauces',
    description: 'A vibrant, medium-hot sauce loaded with bell peppers, onions, tomatoes, and a tangy spice blend for a fresh-cooked taste.',
    image: '/src/assets/tikka_masala_jar.jpg',
    accentColor: '#B91C1C',
    dishName: 'Rajasthani Paneer Jalfrezi',
    dishImage: '/src/assets/plated_tikka_masala.jpg',
    pairText: 'Best paired with hot tandoori rotis.'
  }
];

export const pickles = [
  {
    id: 'lime-pickle-mild',
    name: 'Lime Pickle (Mild)',
    category: 'pickles',
    description: 'Fresh, juicy limes cured with traditional spices. Offers a tangy, sour, and mildly spicy kick to elevate any meal.',
    image: '/src/assets/mango_pickle_jar.jpg',
    accentColor: '#0F5132',
    dishName: 'Lime Pickle Plate Pairing',
    pairText: 'A perfect side for dal chawal (lentils & rice) and cold meats.'
  },
  {
    id: 'mango-pickle-hot',
    name: 'Mango Pickle (Hot)',
    category: 'pickles',
    description: 'Chunks of raw green mangoes matured in mustard oil with hot chilies, fenugreek, and mustard seeds. Extremely fiery and authentic.',
    image: '/src/assets/mango_pickle_jar.jpg',
    accentColor: '#D97706',
    dishName: 'Mango Pickle Samosa Pairing',
    pairText: 'Adds fire and tang to crispy vegetable samosas and parathas.'
  },
  {
    id: 'mixed-pickle',
    name: 'Mixed Pickle',
    category: 'pickles',
    description: 'A traditional farmhouse blend of raw mangoes, limes, carrots, green chilies, and lotus root matured in mustard oil.',
    image: '/src/assets/mango_pickle_jar.jpg',
    accentColor: '#991B1B',
    dishName: 'Mixed Pickle Thali Pairing',
    pairText: 'Enjoy alongside classic Indian thalis and poppadoms.'
  }
];

export const tasterBundles = [
  {
    id: 'curry-in-a-hurry',
    name: 'Curry in a Hurry Bundle',
    category: 'taster-bundles',
    description: 'The ultimate taster box for quick meals. Includes our mild cooking sauces: Butter Chicken, Tikka Masala, and Navratan Korma.',
    image: '/src/assets/korma_sauce_jar.jpg',
    accentColor: '#D97706',
    items: ['Punjabi Butter Chicken', 'Delhi Tikka Masala', 'Navratan Korma']
  },
  {
    id: 'bbq-bundle',
    name: 'BBQ Paste Taster Bundle',
    category: 'taster-bundles',
    description: 'Master the grill. Includes our high-performance spice pastes: Tikka Masala Paste, Tandoori Marinade Paste, and Seekh Kebab Paste.',
    image: '/src/assets/tikka_masala_jar.jpg',
    accentColor: '#B91C1C',
    items: ['Tikka Masala Paste', 'Tandoori Marinade', 'Kebab Paste']
  },
  {
    id: 'tickle-the-pickle',
    name: 'Tickle the Pickle Bundle',
    category: 'taster-bundles',
    description: 'A trio of our finest sun-cured pickles: Lime Pickle (Mild), Mango Pickle (Hot), and farmhouse Mixed Pickle.',
    image: '/src/assets/mango_pickle_jar.jpg',
    accentColor: '#0F5132',
    items: ['Lime Pickle (Mild)', 'Mango Pickle (Hot)', 'Mixed Pickle']
  }
];

// Combine all catalog products for unified queries
export const pascoProducts = [...cookingSauces, ...pickles, ...tasterBundles];

export const recipes = [
  {
    id: 'hyderabadi-biryani',
    name: 'Hyderabadi Biryani',
    meatType: 'Traditionally made using lamb',
    prepTime: '45 mins',
    difficulty: 'Medium',
    ingredients: ['500g Lamb chunks', '2 cups Basmati Rice', '3 tbsp Pasco Paste', 'Yogurt', 'Fried Onions', 'Fresh Saffron'],
    instructions: 'Layer parboiled rice over marinated lamb and saffron. Seal and slow-cook on "dum" heat for 40 minutes.'
  },
  {
    id: 'stuffed-mushrooms',
    name: 'Stuffed Mushrooms',
    meatType: 'Perfect for Summer BBQ',
    prepTime: '20 mins',
    difficulty: 'Easy',
    ingredients: ['Large Portobello Mushrooms', '1 tbsp Pasco Paste', 'Cream Cheese', 'Breadcrumbs', 'Chopped Herbs'],
    instructions: 'Mix cream cheese with spice paste. Stuff into mushroom caps, sprinkle breadcrumbs, and grill until golden.'
  },
  {
    id: 'methi-chicken',
    name: 'Methi Chicken',
    meatType: 'Fenugreek infusion curry',
    prepTime: '30 mins',
    difficulty: 'Easy',
    ingredients: ['500g Chicken thighs', 'Fresh Fenugreek leaves', '1 onion (diced)', '2 tbsp Pasco Tikka Masala Paste', 'Cream'],
    instructions: 'Sear chicken with onions. Stir in spice paste and fenugreek. Simmer with cream until thick.'
  },
  {
    id: 'lamb-bhuna-gosht',
    name: 'Lamb Bhuna Gosht',
    meatType: 'Made with Pasco Madras Curry Paste',
    prepTime: '60 mins',
    difficulty: 'Hard',
    ingredients: ['500g Diced Lamb', '2 tbsp Pasco Madras Paste', '2 tomatoes (chopped)', 'Onions', 'Garam Masala'],
    instructions: 'Slow-fry lamb cubes in paste, spices, and tomatoes until the oil separates and lamb is tender.'
  }
];

export const testimonials = [
  {
    quote: "I have tried Pasco's mango chutney, chilli garlic pickle and hot curry paste. Very authentic Indian taste...",
    author: "Mrs. Shinde",
    rating: 5,
    location: "Lancashire, UK"
  },
  {
    quote: "We have tried the pickles and the spices they are very tasty. Just like Indian home taste. Really awesome!!",
    author: "Kirti Paik",
    rating: 5,
    location: "London, UK"
  },
  {
    quote: "Delicious taste, authentic Indian flavours! I recommend everyone to try Pasco pickles and curry pastes...",
    author: "Swapnil Khandekar",
    rating: 5,
    location: "Manchester, UK"
  }
];

export const brandHistory = {
  narrative: "Our business began in our family kitchen in 1990 with four curry pastes that we supplied to our local curry house. Before we knew it, word spread... In 1995, we decided to create a retail range free of saturated fats, E numbers, additives, preservatives, thick starches, and far too much water. From that day we made it our mission to create natural, honest flavours.",
  timeline: [
    {
      year: '1990',
      title: 'Family Kitchen Roots',
      description: 'First batch of 4 curry pastes ground by hand in our home kitchen and supplied to local curry houses.'
    },
    {
      year: '1995',
      title: 'Retail Launch',
      description: 'Officially launched retail jars. Committed to recipes free of E numbers, starches, and preservatives.'
    },
    {
      year: '2005',
      title: 'UK Supermarket Expansion',
      description: 'Pasco jars enter professional kitchens and major supermarket chains across the UK.'
    },
    {
      year: '2015',
      title: 'Organic Sourcing Promise',
      description: 'Solidified partnerships with organic farms in India to ensure seed-to-spoon pesticide-free ingredients.'
    },
    {
      year: '2026',
      title: 'Headless Digital Commerce',
      description: 'Migrated web experiences to headless front-ends to scale authentic Indian flavor distribution globally.'
    }
  ]
};

export const funFacts = [
  'Pasco pastes are ground using granite millstones to preserve volatile oils of spices.',
  'Fenugreek leaves (Methi) add a signature maple-like sweet aroma to butter chicken.',
  'Pasco pickles are matured under natural sunlight in traditional sun-curing jars.',
  'Garam Masala is roasted dry before grinding to release intense flavor molecules.',
  'Pasco products contain 0% added starches or artificial water thickening agents.'
];
