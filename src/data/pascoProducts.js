// Centralized dataset for products, categories, fun facts, and heritage timeline.
// This simulates data fetched from a Headless E-Commerce API (e.g. Shopify Storefront API)

export const pascoProducts = [
  {
    id: 'tikka-masala-paste',
    name: 'Tikka Masala Paste',
    category: 'pastes-sauces',
    subCategory: 'Authentic Pastes',
    description: 'Our signature blend of ground coriander, cumin, turmeric, and juicy tomatoes. Perfect for creating the ultimate rich, creamy Tikka Masala.',
    price: '$5.99',
    heatLevel: 2,
    weight: '280g',
    ingredients: ['Coriander', 'Cumin', 'Turmeric', 'Tomato Paste', 'Ginger', 'Garlic', 'Rapeseed Oil'],
    nutrition: { calories: 120, fat: '9g', carbs: '8g', protein: '2g' },
    image: '/src/assets/tikka_masala_jar.jpg',
    accentColor: '#0F5132',
    dishImage: '/src/assets/plated_tikka_masala.jpg',
    dishName: 'Chicken/Paneer Tikka Masala',
    recipeSnippet: 'Sauté diced onions and chicken or paneer. Stir in 2 tbsp of paste, simmer with 100ml cream and 100ml water for 15 mins. Serve hot with naans.'
  },
  {
    id: 'sweet-mango-pickle',
    name: 'Sweet Mango Pickle',
    category: 'pickles',
    subCategory: 'Heritage Pickles',
    description: 'Chunks of juicy mangoes preserved in a sweet blend of aromatic spices, cumin, and black onion seeds. A classic sweet-tangy balance.',
    price: '$4.49',
    heatLevel: 1,
    weight: '300g',
    ingredients: ['Mango Pieces', 'Sugar', 'Salt', 'Mustard Seeds', 'Fenugreek', 'Fennel', 'Spices'],
    nutrition: { calories: 90, fat: '2g', carbs: '18g', protein: '1g' },
    image: '/src/assets/mango_pickle_jar.jpg',
    accentColor: '#D97706',
    dishImage: '/src/assets/plated_tikka_masala.jpg', // can fallback or use gradient
    dishName: 'Crispy Samosas & Poppadoms',
    recipeSnippet: 'Serve as a side accompaniment alongside hot samosas, pakoras, or spread inside a warm flatbread roll for a tangy flavor kick.'
  },
  {
    id: 'korma-simmer-sauce',
    name: 'Korma Simmer Sauce',
    category: 'pastes-sauces',
    subCategory: 'Simmer Sauces',
    description: 'A mild, luxurious blend of coconut cream, ground almonds, green cardamom, and aromatic spices. Ideal for a mild yet flavorful curry.',
    price: '$6.49',
    heatLevel: 1,
    weight: '350g',
    ingredients: ['Coconut Milk', 'Almond Powder', 'Onions', 'Ginger', 'Cardamom', 'Cloves', 'Yogurt'],
    nutrition: { calories: 140, fat: '11g', carbs: '7g', protein: '3g' },
    image: '/src/assets/korma_sauce_jar.jpg',
    accentColor: '#B45309',
    dishImage: '/src/assets/plated_tikka_masala.jpg',
    dishName: 'Royal Vegetable Korma',
    recipeSnippet: 'Stir-fry mixed vegetables or chicken. Pour in the simmer sauce. Cover and cook on medium heat for 12-15 minutes. Garnish with toasted almonds.'
  },
  {
    id: 'spicy-lamb-curry-paste',
    name: 'Rogan Josh Paste',
    category: 'curries',
    subCategory: 'Kashmiri Curries',
    description: 'A robust Kashmiri-style paste infused with paprika, fennel, and black cardamom, designed to create a deep, fragrant slow-cooked red curry.',
    price: '$5.99',
    heatLevel: 3,
    weight: '280g',
    ingredients: ['Paprika', 'Fennel Seeds', 'Black Cardamom', 'Ginger', 'Rapeseed Oil', 'Tomato Puree'],
    nutrition: { calories: 110, fat: '8g', carbs: '7g', protein: '2g' },
    image: '/src/assets/tikka_masala_jar.jpg', // reusing tikka masala jar image
    accentColor: '#B91C1C',
    dishImage: '/src/assets/plated_tikka_masala.jpg',
    dishName: 'Kashmiri Rogan Josh Lamb',
    recipeSnippet: 'Sear cubes of lamb, add 2 tbsp Rogan Josh paste and sauté. Add lamb broth, cover and simmer slow for 1 hour until tender.'
  },
  {
    id: 'chili-garlic-pickle',
    name: 'Hot Chili Garlic Pickle',
    category: 'pickles',
    subCategory: 'Heritage Pickles',
    description: 'A fiery combination of sliced green chilies and plump garlic cloves matured in mustard oil with hot Indian spices. Extremely flavorful.',
    price: '$4.49',
    heatLevel: 5,
    weight: '290g',
    ingredients: ['Green Chilies', 'Garlic Cloves', 'Mustard Oil', 'Salt', 'Spices', 'Acetic Acid'],
    nutrition: { calories: 95, fat: '6g', carbs: '9g', protein: '2g' },
    image: '/src/assets/mango_pickle_jar.jpg', // reusing pickle jar image
    accentColor: '#991B1B',
    dishImage: '/src/assets/plated_tikka_masala.jpg',
    dishName: 'Stuffed Paratha & Curd',
    recipeSnippet: 'Take a tiny spoonful and enjoy as a high-heat accompaniment with stuffed potato parathas, curd, or rice.'
  }
];

export const funFacts = [
  'Garam Masala literally translates to "warm spice blend" in Hindi.',
  'Cardamom is known as the "Queen of Spices" and is the third most expensive spice in the world.',
  'Pasco paste jars are designed to lock in flavor at peak freshness without artificial preservatives.',
  'Traditional Indian pickles (Achar) are matured under natural sunlight to ferment organic ingredients.',
  'Turmeric has been used in Indian culinary and Ayurvedic traditions for over 4,000 years.',
  'The secret to a rich Indian curry is "bhuna"—slowly frying spices in oil until they release aromatics.'
];

export const sourcingStory = {
  title: 'Our Seed-to-Spoon Philosophy',
  subtitle: 'Sourced from local farms across India, crafted for the global kitchen.',
  points: [
    {
      title: 'Hand-Selected Spices',
      description: 'We source coriander from Rajasthan and turmeric from Sangli at peak harvest seasons.'
    },
    {
      title: 'Traditional Sun-Curing',
      description: 'Our pickles are cured in large glass jars under the Indian sun to naturally seal in probiotics and oils.'
    },
    {
      title: 'Zero Artificial Preservatives',
      description: 'Using oil, natural citric acids, and salt preservation techniques passed down through generations.'
    }
  ]
};

export const heritageTimeline = [
  {
    year: '1975',
    title: 'The Spice Cellar Beginnings',
    description: 'Founder begins grinding custom spice pastes for local community kitchens using family recipes.'
  },
  {
    year: '1988',
    title: 'The Pasco Brand Launch',
    description: 'First official bottling of Pasco Tikka Masala and Mango Pickle in commercial glass jars.'
  },
  {
    year: '2004',
    title: 'European Expansion',
    description: 'Pasco enters global markets, supplying authentic Indian ingredients across Europe and North America.'
  },
  {
    year: '2018',
    title: 'Eco-Farm Partnerships',
    description: 'Partnered with over 200 sustainable, organic spice farms in India to ensure pesticide-free ingredients.'
  },
  {
    year: '2026',
    title: 'Headless E-Commerce Front',
    description: 'Transitioning to headless e-commerce architectures to power performance-first consumer experiences globally.'
  }
];
