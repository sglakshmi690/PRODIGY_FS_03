require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');
 
const sampleProducts = [
  {
    name: 'Fresh Paneer (200g)',
    description: 'Raw, fresh dairy cottage cheese / paneer skewers',
    price: 95,
    imageUrl: 'https://images.pexels.com/photos/8414670/pexels-photo-8414670.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Dairy',
    stock: 20
  },
  {
    name: 'Basmati Rice (5kg)',
    description: 'Aromatic long-grain premium royal basmati rice',
    price: 450,
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80',
    category: 'Grains',
    stock: 30
  },
  {
    name: 'Bananas (dozen)',
    description: 'Sweet, ripe and energizing bananas',
    price: 60,
    imageUrl: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&auto=format&fit=crop&q=80',
    category: 'Fruits',
    stock: 40
  },
  {
    name: 'Whole Wheat Bread',
    description: 'Soft, preservative-free brown loaf bread',
    price: 45,
    imageUrl: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&auto=format&fit=crop&q=80',
    category: 'Bakery',
    stock: 25
  },
  {
    name: 'Green Capsicum (500g)',
    description: 'Crunchy and fresh farm green bell peppers',
    price: 30,
    imageUrl: 'https://images.pexels.com/photos/28352592/pexels-photo-28352592.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Vegetables',
    stock: 30
  },
  {
    name: 'Curd / Dahi (500g)',
    description: 'Thick, creamy, and traditional fresh curd in clay pot',
    price: 40,
    imageUrl: 'https://images.pexels.com/photos/10809146/pexels-photo-10809146.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Dairy',
    stock: 30
  },
  {
    name: 'Shimla Apples (1kg)',
    description: 'Crisp, sweet, and juicy handpicked red apples',
    price: 160,
    imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&auto=format&fit=crop&q=80',
    category: 'Fruits',
    stock: 25
  },
  {
    name: 'Toor Dal (1kg)',
    description: 'High-protein unpolished yellow split pigeon peas',
    price: 150,
    imageUrl: 'https://images.pexels.com/photos/28110938/pexels-photo-28110938.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Grains',
    stock: 40
  },
  {
    name: 'Fresh Tomatoes (1kg)',
    description: 'Locally grown, farm-fresh red tomatoes',
    price: 40,
    imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&auto=format&fit=crop&q=80',
    category: 'Vegetables',
    stock: 50
  },
  {
    name: 'Choco Chip Cookies (Pack of 6)',
    description: 'Oven-baked crisp cookies loaded with rich chocolate chips',
    price: 60,
    imageUrl: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&auto=format&fit=crop&q=80',
    category: 'Bakery',
    stock: 25
  },
  {
    name: 'Toned Milk (1L)',
    description: 'Pasteurized homogenized toned dairy milk',
    price: 28,
    imageUrl: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&auto=format&fit=crop&q=80',
    category: 'Dairy',
    stock: 60
  },
  {
    name: 'Whole Wheat Grains (5kg)',
    description: 'Raw, unpolished whole golden wheat grain kernels',
    price: 220,
    imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&auto=format&fit=crop&q=80',
    category: 'Grains',
    stock: 35
  },
  {
    name: 'Farm Potatoes (1kg)',
    description: 'Fresh organic earthy potatoes ideal for cooking',
    price: 35,
    imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&auto=format&fit=crop&q=80',
    category: 'Vegetables',
    stock: 45
  },
  {
    name: 'Butter Croissant (2 pcs)',
    description: 'Flaky, buttery baked french pastries',
    price: 80,
    imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&auto=format&fit=crop&q=80',
    category: 'Bakery',
    stock: 15
  },
  {
    name: 'Fresh Oranges (1kg)',
    description: 'Tangy and vitamin C rich citrus oranges',
    price: 90,
    imageUrl: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=600&auto=format&fit=crop&q=80',
    category: 'Fruits',
    stock: 35
  }
];

const seedDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Product.deleteMany();
  await Product.insertMany(sampleProducts);
  console.log('Sample products inserted');
  mongoose.connection.close();
};
 
seedDB();
