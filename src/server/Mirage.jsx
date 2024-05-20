import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/products", () => {
      return {
        products: [
          {
            id: 1,
            title: "Plain Basic T-Shirt",
            category: "tshirt",
            img: "/tshirt/tshirt-one/tshirt-one.webp",
            description:
              "The Plain Basic T-Shirt is a versatile wardrobe essential, crafted from soft, breathable fabric for everyday comfort. Its simple, classic design features a crew neckline, short sleeves, and a relaxed fit, making it perfect for layering or wearing on its own. Available in a variety of colors, this timeless tee is ideal for casual wear, workouts, or as a foundational piece in any outfit.",
            price: 998,
            extraImg: [
              "/tshirt/tshirt-one/tshirt-one-e-1.webp",
              "/tshirt/tshirt-one/tshirt-one-e-2.webp",
              "/tshirt/tshirt-one/tshirt-one-e-3.webp",
              "/tshirt/tshirt-one/tshirt-one-e-4.webp",
            ],
          },
          {
            id: 2,
            title: "Basic V-Neck T-Shirt",
            category: "tshirt",
            img: "/tshirt/tshirt-two/tshirt-two.webp",
            description:
              "The Basic V-Neck T-Shirt offers a stylish twist on a classic staple, featuring a flattering V-neckline and a comfortable, relaxed fit. Made from soft, breathable fabric, this tee provides all-day comfort and is perfect for layering or wearing on its own. Available in a range of colors, it adds a touch of elegance to casual outfits and serves as a versatile piece for any wardrobe.",
            price: 998,
            extraImg: [
              "/tshirt/tshirt-two/tshirt-two-e-1.webp",
              "/tshirt/tshirt-two/tshirt-two-e-2.webp",
              "/tshirt/tshirt-two/tshirt-two-e-3.webp",
              "/tshirt/tshirt-two/tshirt-two-e-4.webp",
            ],
          },
          {
            id: 3,
            title: "Sports Jersey T-Shirt",
            category: "tshirt",
            img: "/tshirt/tshirt-three/tshirt-three.webp",
            description:
              "The Sports Jersey T-Shirt combines athletic functionality with modern style, featuring a lightweight, moisture-wicking fabric that keeps you cool and dry during intense activities. Its design includes a comfortable crew neckline, short sleeves, and often incorporates team colors and logos for a sporty look. Ideal for workouts, sports events, or casual wear, this jersey-style tee offers both performance and versatility.",
            price: 748,
            extraImg: [
              "/tshirt/tshirt-three/tshirt-three-e-1.webp",
              "/tshirt/tshirt-three/tshirt-three-e-2.webp",
              "/tshirt/tshirt-three/tshirt-three-e-3.webp",
              "/tshirt/tshirt-three/tshirt-three-e-4.webp",
            ],
          },
          {
            id: 4,
            title: "Lycra Basic T-Shirt",
            category: "tshirt",
            img: "/tshirt/tshirt-four/tshirt-four.webp",
            description:
              "The Lycra Basic T-Shirt is designed for maximum comfort and flexibility, made from a soft and stretchy Lycra blend that moves with you. Its sleek, fitted silhouette features a classic crew neckline and short sleeves, providing a modern look that's perfect for activewear or casual outfits. Available in various colors, this tee offers durability and shape retention, making it a reliable choice for everyday wear.",
            price: 1378,
            extraImg: [
              "/tshirt/tshirt-four/tshirt-four-e-1.webp",
              "/tshirt/tshirt-four/tshirt-four-e-2.webp",
              "/tshirt/tshirt-four/tshirt-four-e-3.webp",
              "/tshirt/tshirt-four/tshirt-four-e-4.webp",
            ],
          },
          {
            id: 5,
            title: "Full Sleeve Shirt",
            category: "shirt",
            img: "/shirt/shirt-one/shirt-one.webp",
            description:
              "The Full Sleeve Shirt is a timeless wardrobe staple, featuring a classic design with long sleeves and a button-down front. Made from high-quality, breathable fabric, it offers a comfortable fit and a polished look suitable for both casual and formal occasions. The shirt includes a structured collar and adjustable cuffs, providing versatility in styling. Available in various colors and patterns, this shirt is perfect for layering or wearing on its own for a sophisticated touch to any outfit.",
            price: 1598,
            extraImg: [
              "/shirt/shirt-one/shirt-one-e-1.webp",
              "/shirt/shirt-one/shirt-one-e-2.webp",
              "/shirt/shirt-one/shirt-one-e-3.webp",
            ],
          },
          {
            id: 6,
            title: "Embroidered Button-Up Top",
            category: "shirt",
            img: "/shirt/shirt-two/shirt-two.webp",
            description:
              "The Embroidered Button-Up Top is a stylish and elegant piece, featuring intricate embroidery that adds a unique and artistic touch. Made from high-quality, breathable fabric, this top combines comfort with sophistication. It includes a button-down front, a structured collar, and long sleeves with adjustable cuffs. Perfect for both casual and dressy occasions, this top can be paired with jeans for a chic look or with tailored pants for a more polished ensemble. Available in a variety of colors and designs, it brings a refined flair to any wardrobe.",
            price: 1498,
            extraImg: [
              "/shirt/shirt-two/shirt-two-e-1.webp",
              "/shirt/shirt-two/shirt-two-e-2.webp",
              "/shirt/shirt-two/shirt-two-e-3.webp",
            ],
          },
          {
            id: 7,
            title: "Plain Half Shirt",
            category: "shirt",
            img: "/shirt/shirt-three/shirt-three.webp",
            description:
              "The Plain Half Shirt is a versatile and comfortable wardrobe essential, featuring a simple, minimalist design with short sleeves and a button-down front. Made from lightweight, breathable fabric, this shirt offers a relaxed fit, perfect for warm weather or casual outings. Its classic collar and clean lines make it easy to pair with jeans, shorts, or chinos for a laid-back yet polished look. Available in a variety of colors, this shirt is ideal for effortless, everyday style.",
            price: 1998,
            extraImg: [
              "/shirt/shirt-three/shirt-three-e-1.webp",
              "/shirt/shirt-three/shirt-three-e-2.webp",
              "/shirt/shirt-three/shirt-three-e-3.webp",
              "/shirt/shirt-three/shirt-three-e-4.webp",
            ],
          },
          {
            id: 8,
            title: "Oxford Band Collar Shirt",
            category: "shirt",
            img: "/shirt/shirt-four/shirt-four.webp",
            description:
              "The Oxford Band Collar Shirt offers a modern twist on a classic style, featuring a sleek band collar and a button-down front. Made from durable, high-quality Oxford fabric, this shirt provides a comfortable fit and a sophisticated look. Its long sleeves with adjustable cuffs add versatility, allowing it to be dressed up or down. Perfect for both casual and formal occasions, this shirt pairs well with jeans or tailored trousers. Available in various colors, it brings a refined yet contemporary touch to any wardrobe.",
            price: 2078,
            extraImg: [
              "/shirt/shirt-four/shirt-four-e-1.webp",
              "/shirt/shirt-four/shirt-four-e-2.webp",
              "/shirt/shirt-four/shirt-four-e-3.webp",
              "/shirt/shirt-four/shirt-four-e-4.webp",
            ],
          },
          {
            id: 9,
            title: "Polar Fleece Zip High Neck",
            category: "sweatshirt",
            img: "/sweatshirt/sweatshirt-one/sweatshirt-one.webp",
            description:
              "The Polar Fleece Zip High Neck is a cozy and functional layer designed for warmth and comfort. Made from soft, insulating polar fleece, it features a high neckline with a zip closure, offering adjustable coverage to keep the chill at bay. Its lightweight yet durable fabric ensures freedom of movement, making it ideal for outdoor activities or casual wear. The pullover design includes elastic cuffs and hem for a snug fit, and it comes in a variety of colors. Perfect for layering in cold weather, this fleece is a versatile addition to any wardrobe.",
            price: 1998,
            extraImg: [
              "/sweatshirt/sweatshirt-one/sweatshirt-one-e-1.webp",
              "/sweatshirt/sweatshirt-one/sweatshirt-one-e-2.webp",
              "/sweatshirt/sweatshirt-one/sweatshirt-one-e-3.webp",
              "/sweatshirt/sweatshirt-one/sweatshirt-one-e-4.webp",
            ],
          },
          {
            id: 10,
            title: "Single Fleece High Neck",
            category: "sweatshirt",
            img: "/sweatshirt/sweatshirt-two/sweatshirt-two.webp",
            description:
              "The Single Fleece High Neck is a warm and stylish piece designed for comfort in cooler weather. Crafted from soft, lightweight fleece, it features a high neckline that provides extra warmth and coverage. The pullover design includes a relaxed fit, making it perfect for layering or wearing on its own. With its simple, classic look and cozy feel, this high-neck fleece is ideal for outdoor activities, casual outings, or lounging at home. Available in a range of colors, it adds a versatile and functional layer to any wardrobe.",
            price: 1078,
            extraImg: [
              "/sweatshirt/sweatshirt-two/sweatshirt-two-e-1.webp",
              "/sweatshirt/sweatshirt-two/sweatshirt-two-e-2.webp",
              "/sweatshirt/sweatshirt-two/sweatshirt-two-e-3.webp",
              "/sweatshirt/sweatshirt-two/sweatshirt-two-e-4.webp",
            ],
          },
          {
            id: 11,
            title: "Single Fleece Zip High Neck",
            category: "sweatshirt",
            img: "/sweatshirt/sweatshirt-three/sweatshirt-three.webp",
            description:
              "The Single Fleece Zip High Neck is a versatile and cozy layer designed to keep you warm in cooler conditions. Crafted from soft, insulating fleece, it features a high neckline and a convenient zip closure for adjustable coverage and easy on-and-off wear. The zippered design offers versatility, allowing you to adjust airflow as needed. With its lightweight yet warm construction, this fleece is ideal for outdoor activities or casual wear during chilly days. Available in various colors, it combines comfort and functionality for a stylish addition to your wardrobe.",
            price: 1798,
            extraImg: [
              "/sweatshirt/sweatshirt-three/sweatshirt-three-e-1.webp",
              "/sweatshirt/sweatshirt-three/sweatshirt-three-e-2.webp",
              "/sweatshirt/sweatshirt-three/sweatshirt-three-e-3.webp",
              "/sweatshirt/sweatshirt-three/sweatshirt-three-e-4.webp",
            ],
          },
          {
            id: 12,
            title: "Rib-Knit Hoodie",
            category: "sweatshirt",
            img: "/sweatshirt/sweatshirt-four/sweatshirt-four.webp",
            description:
              "The Rib-Knit Hoodie is a comfortable and stylish essential for casual wear. Crafted from soft, stretchy rib-knit fabric, it offers a snug yet flexible fit. The hoodie features a drawstring-adjustable hood, a kangaroo pocket, and ribbed cuffs and hem for added warmth and durability. Its versatile design makes it perfect for layering over t-shirts or under jackets, while its relaxed silhouette provides all-day comfort. Whether you're lounging at home or running errands, this rib-knit hoodie adds a cozy and fashionable touch to any outfit.",
            price: 2398,
            extraImg: [
              "/sweatshirt/sweatshirt-four/sweatshirt-four-e-1.webp",
              "/sweatshirt/sweatshirt-four/sweatshirt-four-e-2.webp",
              "/sweatshirt/sweatshirt-four/sweatshirt-four-e-3.webp",
            ],
          },
          {
            id: 13,
            title: "Ripstop Chino Shorts",
            category: "shorts",
            img: "/shorts/shorts-one/shorts-one.webp",
            description:
              "The Ripstop Chino Shorts offer a perfect blend of style and durability for warm-weather wear. Constructed from ripstop fabric, known for its strength and resistance to tearing, these shorts are built to withstand the rigors of outdoor activities. With a classic chino design, they feature a comfortable fit and a versatile length that hits just above the knee. The shorts include multiple pockets for convenience and functionality. Whether you're exploring the outdoors or enjoying a casual day out, the Ripstop Chino Shorts provide both comfort and durability with a touch of timeless style.",
            price: 2198,
            extraImg: [
              "/shorts/shorts-one/shorts-one-e-1.webp",
              "/shorts/shorts-one/shorts-one-e-2.webp",
              "/shorts/shorts-one/shorts-one-e-3.webp",
              "/shorts/shorts-one/shorts-one-e-4.webp",
            ],
          },
          {
            id: 14,
            title: "Zip-Pocket Shorts",
            category: "shorts",
            img: "/shorts/shorts-two/shorts-two.webp",
            description:
              "The Zip-Pocket Shorts combine functionality with modern style for your active lifestyle. Featuring zippered pockets for secure storage of essentials like keys or cards, these shorts offer convenience and peace of mind during workouts or outdoor adventures. Crafted from lightweight and breathable fabric, they ensure comfort and freedom of movement. With a versatile design suitable for both casual and athletic wear, these shorts are perfect for hitting the gym, going for a run, or simply lounging in comfort. Elevate your activewear collection with the practicality and contemporary flair of Zip-Pocket Shorts.",
            price: 1648,
            extraImg: [
              "/shorts/shorts-two/shorts-two-e-1.webp",
              "/shorts/shorts-two/shorts-two-e-2.webp",
              "/shorts/shorts-two/shorts-two-e-3.webp",
            ],
          },
          {
            id: 15,
            title: "Chino Shorts",
            category: "shorts",
            img: "/shorts/shorts-three/shorts-three.webp",
            description:
              "Chino Shorts are the epitome of laid-back sophistication. Crafted from lightweight cotton twill, they offer both comfort and style, making them a staple for warm-weather wardrobes. With a tailored fit and a clean, classic design, Chino Shorts are versatile enough to pair with a casual t-shirt for a relaxed look or dress up with a button-down shirt for a more polished ensemble. Featuring side pockets and often a back welt pocket, they combine practicality with timeless elegance. Whether you're strolling along the beach or enjoying a weekend brunch, Chino Shorts provide effortless style and comfort for any occasion.",
            price: 1798,
            extraImg: [
              "/shorts/shorts-three/shorts-three-e-1.webp",
              "/shorts/shorts-three/shorts-three-e-2.webp",
              "/shorts/shorts-three/shorts-three-e-3.webp",
              "/shorts/shorts-three/shorts-three-e-4.webp",
            ],
          },
          {
            id: 16,
            title: "Summer Shorts",
            category: "shorts",
            img: "/shorts/shorts-four/shorts-four.webp",
            description:
              "Summer Shorts are the ultimate wardrobe essential for staying cool and stylish during the warmer months. Crafted from lightweight and breathable fabrics like cotton or linen, they offer comfort and ease of movement on hot days. With a variety of lengths and styles available, from tailored chino shorts to casual cargo shorts, there's a perfect pair for every occasion. Whether you're lounging by the pool, exploring a new city, or attending a backyard barbecue, Summer Shorts provide the perfect blend of comfort and style to keep you looking and feeling cool all season long.",
            price: 1398,
            extraImg: [
              "/shorts/shorts-four/shorts-four-e-1.webp",
              "/shorts/shorts-four/shorts-four-e-2.webp",
            ],
          },
          {
            id: 17,
            title: "Tencel Shorts",
            category: "shorts",
            img: "/shorts/shorts-five/shorts-five.webp",
            description:
              "Tencel Shorts are a sustainable and stylish choice for warm-weather wardrobes. Crafted from eco-friendly Tencel fabric, derived from sustainably sourced wood pulp, these shorts offer a silky-smooth texture and excellent breathability. Known for their moisture-wicking properties, Tencel Shorts keep you cool and comfortable even on the hottest days. With a sleek and modern design, they often feature clean lines and minimalistic details, making them versatile enough to dress up or down. Whether you're exploring the city or relaxing on a beach vacation, Tencel Shorts provide a chic and eco-conscious option for summer dressing.",
            price: 1348,
            extraImg: [
              "/shorts/shorts-five/shorts-five-e-1.webp",
              "/shorts/shorts-five/shorts-five-e-2.webp",
              "/shorts/shorts-five/shorts-five-e-3.webp",
              "/shorts/shorts-five/shorts-five-e-4.webp",
            ],
          },
          {
            id: 18,
            title: "UFO Shorts",
            category: "shorts",
            img: "/shorts/shorts-four/shorts-four.webp",
            description:
              "UFO Shorts, also known as utility or cargo shorts, are a bold and functional addition to any casual wardrobe. Named for their futuristic appearance, they typically feature multiple pockets with snap or zip closures, offering ample storage space for essentials. Crafted from durable materials like cotton twill or ripstop fabric, UFO Shorts are designed to withstand rugged outdoor activities. Their loose fit and longer length provide comfort and freedom of movement, making them ideal for active pursuits. Whether you're hiking, camping, or simply running errands around town, UFO Shorts combine practicality with a distinctive style that's out of this world.",
            price: 1298,
            extraImg: [
              "/shorts/shorts-four/shorts-four-e-1.webp",
              "/shorts/shorts-four/shorts-four-e-2.webp",
              "/shorts/shorts-four/shorts-four-e-3.webp",
              "/shorts/shorts-four/shorts-four-e-4.webp",
            ],
          },
        ],
      };
    });

    this.get("/featured-products", () => {
      return {
        products: [
          {
            id: 17,
            title: "Tencel Shorts",
            img: "/shorts/shorts-five/shorts-five.webp",
            price: 1348,
          },
          {
            id: 6,
            title: "Embroidered Button-Up Top",
            img: "/shirt/shirt-two/shirt-two.webp",
            price: 1498,
          },
          {
            id: 11,
            title: "Single Fleece Zip High Neck",
            img: "/sweatshirt/sweatshirt-three/sweatshirt-three.webp",
            price: 1798,
          },

          {
            id: 9,
            title: "Polar Fleece Zip High Neck",
            img: "/sweatshirt/sweatshirt-one/sweatshirt-one.webp",
            price: 1998,
          },
          {
            id: 1,
            title: "Plain Basic T-Shirt",
            img: "/tshirt/tshirt-one/tshirt-one.webp",
            price: 998,
          },
          {
            id: 14,
            title: "Zip-Pocket Shorts",
            img: "/shorts/shorts-two/shorts-two.webp",
            price: 1648,
          },
        ],
      };
    });
  },
});
