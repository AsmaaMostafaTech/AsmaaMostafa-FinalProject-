// Products data for Vercel serverless functions
const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    category: "Electronics",
    image: "https://i.pinimg.com/1200x/19/28/7c/19287c8799f8c0ce38103cfe7a240bea.jpg",
    images: [
      "https://i.pinimg.com/1200x/19/28/7c/19287c8799f8c0ce38103cfe7a240bea.jpg",
      "https://i.pinimg.com/736x/04/21/08/0421089689509a1c57e4d269825dabf0.jpg",
      "https://i.pinimg.com/736x/66/a8/60/66a860bb4064b1ec418c82f5dcbc745b.jpg",
      "https://i.pinimg.com/1200x/51/5d/93/515d93279a9918b235e3e2a37d2021f1.jpg"
    ],
    description: "Latest iPhone 15 Pro Max with titanium design and A17 Pro chip. Features advanced camera system, ProMotion display, and all-day battery life. Available in multiple colors including Natural Titanium, Blue Titanium, White Titanium, and Black Titanium.",
    rating: 4.8,
    reviews: 2453,
    stores: [
      { name: "Amazon", price: 1199.99, url: "#" },
      { name: "Best Buy", price: 1249.99, url: "#" },
      { name: "Target", price: 1299.99, url: "#" },
      { name: "Walmart", price: 1179.99, url: "#" }
    ]
  },
  {
    id: 2,
    name: "MacBook Pro 16-inch",
    category: "Electronics",
    image: "https://i.pinimg.com/736x/f6/02/8c/f6028c28864d7103cefaf12046d25822.jpg",
    images: [
      "https://i.pinimg.com/736x/c6/33/1b/c6331b53803351e18e55e8825448a085.jpg",
      "https://i.pinimg.com/736x/b5/3b/fd/b53bfd5edf93be1173b19b1d7b452549.jpg",
      "https://i.pinimg.com/736x/8a/84/63/8a8463af30cf64eb8d028d13d7694ef8.jpg",
      "https://i.pinimg.com/736x/ba/d0/69/bad069ed359345ce963b4707cb715d1b.jpg"
    ],
    description: "MacBook Pro 16-inch with M3 Max chip, designed for professionals. Features stunning 16.2-inch Liquid Retina XDR display, up to 96GB unified memory, and 22-hour battery life. Perfect for video editing, 3D rendering, and software development.",
    rating: 4.9,
    reviews: 1823,
    stores: [
      { name: "Apple Store", price: 2499.99, url: "#" },
      { name: "Amazon", price: 2399.99, url: "#" },
      { name: "Best Buy", price: 2499.99, url: "#" },
      { name: "Adorama", price: 2349.99, url: "#" }
    ]
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Headphones",
    category: "Electronics",
    image: "https://i.pinimg.com/736x/d6/46/14/d646147952636b44ac290ff5b14a5524.jpg",
    images: [
      "https://i.pinimg.com/736x/52/d6/e7/52d6e7f7a1fbb12aa5ad4343e1ce0d37.jpg",
      "https://i.pinimg.com/1200x/68/6c/62/686c62e9940dec3da4e8d7d27d749297.jpg",
      "https://i.pinimg.com/1200x/45/7b/bd/457bbd650f0e4e3c116a5fe0f46863ed.jpg",
      "https://i.pinimg.com/1200x/69/cc/ba/69ccbab459d5fd9680095c990219494c.jpg"
    ],
    description: "Sony WH-1000XM5 wireless headphones with industry-leading noise canceling. Features exceptional sound quality, 30-hour battery life, multipoint connectivity, and comfortable design for all-day wear. Available in Black and Silver colors.",
    rating: 4.7,
    reviews: 3421,
    stores: [
      { name: "Amazon", price: 379.99, url: "#" },
      { name: "Best Buy", price: 399.99, url: "#" },
      { name: "Target", price: 389.99, url: "#" },
      { name: "Walmart", price: 369.99, url: "#" }
    ]
  },
  {
    id: 4,
    name: "Samsung 65\" QLED TV",
    category: "Electronics",
    image: "https://i.pinimg.com/1200x/fa/8d/29/fa8d29401571903c26ccf115e10ef534.jpg",
    images: [
      "https://i.pinimg.com/736x/3a/18/03/3a1803082f17b91ad9e97dbea99eac7b.jpg",
      "https://i.pinimg.com/1200x/92/f9/81/92f98109603a7c9d8add983c842766a7.jpg",
      "https://i.pinimg.com/1200x/35/c6/8f/35c68fdd76d5762b2cc0e67b0f458652.jpg",
      "https://i.pinimg.com/736x/19/93/a1/1993a1f36d28c91533b954de6d47c6ce.jpg"
    ],
    description: "Samsung 65-inch QLED 4K Smart TV with Quantum HDR and Object Tracking Sound. Features built-in voice assistants, gaming mode, and smart TV capabilities. Perfect for movie nights, sports, and gaming with vibrant colors and deep contrast.",
    rating: 4.6,
    reviews: 1567,
    stores: [
      { name: "Samsung", price: 1299.99, url: "#" },
      { name: "Amazon", price: 1199.99, url: "#" },
      { name: "Best Buy", price: 1249.99, url: "#" },
      { name: "Costco", price: 1099.99, url: "#" }
    ]
  },
  {
    id: 5,
    name: "iPad Air 5th Gen",
    category: "Electronics",
    image: "https://i.pinimg.com/736x/06/b4/f7/06b4f7df75dd54a849d985e541d98b25.jpg",
    images: [
      "https://i.pinimg.com/736x/b4/de/78/b4de7874f8a80d04d5159537b4071d8d.jpg",
      "https://i.pinimg.com/1200x/11/93/38/119338b7340b07a116848286f82555db.jpg",
      "https://i.pinimg.com/736x/7f/ce/87/7fce87cb8899b434fed52f92b2d49c5b.jpg",
      "https://i.pinimg.com/736x/c7/04/1e/c7041eefd0d7cf632b261c74f0a093fa.jpg"
    ],
    description: "iPad Air 5th generation with powerful M1 chip. Features 10.9-inch Liquid Retina display with True Tone, Touch ID security, and all-day battery life. Perfect for work, creativity, and entertainment. Available in multiple colors.",
    rating: 4.8,
    reviews: 2103,
    stores: [
      { name: "Apple Store", price: 599.99, url: "#" },
      { name: "Amazon", price: 579.99, url: "#" },
      { name: "Best Buy", price: 599.99, url: "#" },
      { name: "Target", price: 589.99, url: "#" }
    ]
  },
  {
    id: 6,
    name: "Apple Watch Series 9",
    category: "Electronics",
    image: "https://i.pinimg.com/1200x/90/c6/05/90c6050d639458daf314d5854c7ec4bf.jpg",
    images: [
      "https://i.pinimg.com/736x/2b/64/f0/2b64f086dc2050b1beae3739aafa24a1.jpg",
      "https://i.pinimg.com/1200x/79/a4/7c/79a47c1b026768e63c240f53e66920f4.jpg",
      "https://i.pinimg.com/736x/df/ae/9a/dfae9a53a0a9c6d86ac8a38b5cb35867.jpg",
      "https://i.pinimg.com/736x/2b/64/f0/2b64f086dc2050b1beae3739aafa24a1.jpg"
    ],
    description: "Apple Watch Series 9 with advanced health monitoring and fitness tracking. Features heart rate monitoring, blood oxygen sensor, ECG, and seamless iPhone integration. Water-resistant with always-on display.",
    rating: 4.7,
    reviews: 1876,
    stores: [
      { name: "Apple Store", price: 399.99, url: "#" },
      { name: "Amazon", price: 379.99, url: "#" },
      { name: "Best Buy", price: 399.99, url: "#" },
      { name: "Target", price: 389.99, url: "#" }
    ]
  },
  {
    id: 7,
    name: "Dyson V15 Detect Vacuum",
    category: "Electronics",
    image: "https://i.pinimg.com/1200x/6f/ba/18/6fba18223c3f22c502460b28c50ac679.jpg",
    images: [
      "https://i.pinimg.com/736x/06/50/2f/06502fd1982ba07971db8b55060191f9.jpg",
      "https://i.pinimg.com/1200x/d0/cc/dc/d0ccdc06a110bb9e7dafc6509bc51f5d.jpg",
      "https://i.pinimg.com/736x/d9/a2/e6/d9a2e62f6863758e9f5f5256b6e5ab14.jpg",
      "https://i.pinimg.com/1200x/12/5f/a7/125fa7d8f60ce2f363d5c94e211d92ed.jpg"
    ],
    description: "Dyson V15 Detect cordless vacuum cleaner with laser dust detection technology. Features powerful suction, up to 60 minutes runtime, and advanced filtration. Reveals microscopic dust with laser illumination.",
    rating: 4.7,
    reviews: 1234,
    stores: [
      { name: "Dyson", price: 749.99, url: "#" },
      { name: "Best Buy", price: 699.99, url: "#" },
      { name: "Amazon", price: 679.99, url: "#" },
      { name: "Target", price: 729.99, url: "#" }
    ]
  },
  {
    id: 8,
    name: "PlayStation 5 Console",
    category: "Electronics",
    image: "https://i.pinimg.com/1200x/c9/fb/f9/c9fbf981b4574ffcf369d61d335111a6.jpg",
    images: [
      "https://i.pinimg.com/736x/66/82/a5/6682a547ce9ede038ff689354896fd32.jpg",
      "https://i.pinimg.com/1200x/7e/d3/60/7ed3600aff4d7786fee4283813542948.jpg",
      "https://i.pinimg.com/736x/f9/0e/cb/f90ecb252ba398387295d6db08d4cf2f.jpg",
      "https://i.pinimg.com/736x/46/3d/6b/463d6ba1195330281c2660661af12cc2.jpg"
    ],
    description: "PlayStation 5 gaming console with revolutionary 4K gaming and ultra-high speed SSD. Features haptic feedback, adaptive triggers, 3D audio, and ray tracing. Backward compatible with PS4 games.",
    rating: 4.9,
    reviews: 5432,
    stores: [
      { name: "Sony", price: 499.99, url: "#" },
      { name: "Amazon", price: 489.99, url: "#" },
      { name: "Best Buy", price: 499.99, url: "#" },
      { name: "Target", price: 479.99, url: "#" }
    ]
  },
  {
    id: 9,
    name: "Canon EOS R6 Mark II",
    category: "Electronics",
    image: "https://i.pinimg.com/1200x/51/01/98/510198b231a9b3ed4b133f69e4531c72.jpg",
    images: [
      "https://i.pinimg.com/1200x/53/a5/77/53a577697cada3c26c1cce0ba8d15a4a.jpg",
      "https://i.pinimg.com/1200x/a7/cc/48/a7cc489672999902697440430e5933b0.jpg",
      "https://i.pinimg.com/736x/db/4b/48/db4b482d89fd876de5c97be1f9fb222d.jpg",
      "https://i.pinimg.com/1200x/c5/4d/9d/c54d9dd58b4c3eb2b69c139fbec2615d.jpg"
    ],
    description: "Canon EOS R6 Mark II professional mirrorless camera with 24.2MP full-frame sensor. Features 8K video recording, advanced autofocus system, and 5-axis image stabilization. Perfect for professional photography and videography.",
    rating: 4.8,
    reviews: 987,
    stores: [
      { name: "Canon", price: 2499.99, url: "#" },
      { name: "B&H Photo", price: 2399.99, url: "#" },
      { name: "Amazon", price: 2299.99, url: "#" },
      { name: "Best Buy", price: 2499.99, url: "#" }
    ]
  },
  {
    id: 10,
    name: "Samsung Galaxy Watch 6",
    category: "Electronics",
    image: "https://i.pinimg.com/736x/48/96/5b/48965befcb85394d35f7c9b0b7fc77f8.jpg",
    images: [
      "https://i.pinimg.com/1200x/42/ab/91/42ab910952b56bdf555acaefe5e6e9d5.jpg",
      "https://i.pinimg.com/1200x/fc/40/55/fc4055cfb11ec9341b2be4b245f32a66.jpg",
      "https://i.pinimg.com/736x/c0/a1/38/c0a13871d64b37f0177fbe19aa8783f2.jpg",
      "https://i.pinimg.com/1200x/8d/9b/f3/8d9bf3e1d720223f2c86c58518aea5e7.jpg"
    ],
    description: "Samsung Galaxy Watch 6 with advanced body composition analysis and sleep tracking. Features heart rate monitoring, blood oxygen sensor, and comprehensive health metrics. Water-resistant with beautiful AMOLED display.",
    rating: 4.5,
    reviews: 1543,
    stores: [
      { name: "Samsung", price: 329.99, url: "#" },
      { name: "Amazon", price: 299.99, url: "#" },
      { name: "Best Buy", price: 329.99, url: "#" },
      { name: "Target", price: 309.99, url: "#" }
    ]
  },
  {
    id: 11,
    name: "Bose QuietComfort Ultra Headphones",
    category: "Electronics",
    image: "https://i.pinimg.com/736x/2f/3c/74/2f3c74388d084283ba63282bd8e00e3c.jpg",
    images: [
      "https://i.pinimg.com/736x/cc/2d/92/cc2d92241e3acc4d4a570e4b52746fb8.jpg",
      "https://i.pinimg.com/736x/ea/c8/93/eac8936b0b4dbc802eb95a3ac32ec09c.jpg",
      "https://i.pinimg.com/736x/40/17/52/401752ed54ed762cfaccf66afab01cda.jpg",
      "https://i.pinimg.com/736x/ca/34/44/ca3444c885c83ce165f938bd76df8aaa.jpg"
    ],
    description: "Bose QuietComfort Ultra headphones with premium noise-canceling technology. Features immersive audio, spatial awareness, and comfortable over-ear design. Perfect for travel, work, and music enjoyment.",
    rating: 4.6,
    reviews: 2109,
    stores: [
      { name: "Bose", price: 429.99, url: "#" },
      { name: "Amazon", price: 399.99, url: "#" },
      { name: "Best Buy", price: 429.99, url: "#" },
      { name: "Target", price: 409.99, url: "#" }
    ]
  },
  {
    id: 12,
    name: "LG OLED55C3 TV",
    category: "Electronics",
    image: "https://i.pinimg.com/736x/51/b0/b0/51b0b0a55a72f82d08bf0ea10755f56f.jpg",
    images: [
      "https://i.pinimg.com/736x/84/1a/81/841a81ee6391e342e217566f0a40347b.jpg",
      "https://i.pinimg.com/1200x/c9/0d/7c/c90d7c26a2a49b7bf6c1360457d269c7.jpg",
      "https://i.pinimg.com/1200x/86/2a/13/862a13439dbbf74e0962cd6b40f753c6.jpg",
      "https://i.pinimg.com/1200x/14/5b/62/145b6271a8030a54e19e39688fe13bd3.jpg"
    ],
    description: "LG OLED55C3 55-inch OLED 4K TV with perfect black levels and infinite contrast. Features Dolby Vision IQ, FILMMAKER MODE, and advanced gaming capabilities. Self-lit pixels deliver perfect color and contrast.",
    rating: 4.8,
    reviews: 1876,
    stores: [
      { name: "LG", price: 1499.99, url: "#" },
      { name: "Amazon", price: 1399.99, url: "#" },
      { name: "Best Buy", price: 1499.99, url: "#" },
      { name: "Costco", price: 1299.99, url: "#" }
    ]
  }
];

export default products;
