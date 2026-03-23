[
  {
    "_id": "P1001",
    "name": "Samsung 55-inch Smart TV",
    "category": "Electronics",
    "price": 45000,
    "brand": "Samsung",
    "warranty_years": 2,
    "specifications": {
      "resolution": "4K",
      "voltage": "220V",
      "screen_type": "LED"
    },
    "features": ["Smart TV", "WiFi", "Bluetooth"]
  },
  {
    "_id": "P2001",
    "name": "Men's Casual Shirt",
    "category": "Clothing",
    "price": 1200,
    "brand": "Zara",
    "size_options": ["S", "M", "L", "XL"],
    "material": "Cotton",
    "colors": ["Blue", "White"],
    "care_instructions": {
      "wash": "Machine wash",
      "iron": "Low heat"
    }
  },
  {
    "_id": "P3001",
    "name": "Organic Milk 1L",
    "category": "Groceries",
    "price": 60,
    "brand": "Amul",
    "expiry_date": "2024-12-25",
    "nutritional_info": {
      "calories": 150,
      "protein": "8g",
      "fat": "7g"
    },
    "storage": "Refrigerated",
    "ingredients": ["Milk"]
  }
]

// OP1: insertMany() — insert all 3 documents
db.products.insertMany([
  {
    _id: "P1001",
    name: "Samsung 55-inch Smart TV",
    category: "Electronics",
    price: 45000,
    brand: "Samsung",
    warranty_years: 2,
    specifications: {
      resolution: "4K",
      voltage: "220V",
      screen_type: "LED"
    },
    features: ["Smart TV", "WiFi", "Bluetooth"]
  },
  {
    _id: "P2001",
    name: "Men's Casual Shirt",
    category: "Clothing",
    price: 1200,
    brand: "Zara",
    size_options: ["S", "M", "L", "XL"],
    material: "Cotton",
    colors: ["Blue", "White"],
    care_instructions: {
      wash: "Machine wash",
      iron: "Low heat"
    }
  },
  {
    _id: "P3001",
    name: "Organic Milk 1L",
    category: "Groceries",
    price: 60,
    brand: "Amul",
    expiry_date: "2024-12-25",
    nutritional_info: {
      calories: 150,
      protein: "8g",
      fat: "7g"
    },
    storage: "Refrigerated",
    ingredients: ["Milk"]
  }
]);

// OP2: find() — Electronics products with price > 20000
db.products.find({
  category: "Electronics",
  price: { $gt: 20000 }
});

// OP3: find() — Groceries expiring before 2025-01-01
db.products.find({
  category: "Groceries",
  expiry_date: { $lt: "2025-01-01" }
});

// OP4: updateOne() — add discount_percent to a product
db.products.updateOne(
  { _id: "P1001" },
  { $set: { discount_percent: 10 } }
);

// OP5: createIndex() — index on category field
db.products.createIndex({ category: 1 });

