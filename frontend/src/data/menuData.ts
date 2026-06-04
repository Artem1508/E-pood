// src/data/menuData.ts

// Original type (kept)
export type MenuSection = {
  title: string;      // translation key
  links: string[];    // translation keys
};

// ADDED: type for object-based menu (menProducts, womenProducts)
export type MenuCategoryGroup = {
  [subcategory: string]: {
    name: string;
    url: string;
  }[];
};

// UPDATED: MegaMenuContent now supports BOTH shapes
export type MegaMenuContent = {
  [key: string]: MenuSection[] | MenuCategoryGroup;
};

export const megaMenuData: MegaMenuContent = {
  menProducts: {
    Shoes: [
      { name: "Basketball", url: "/category/men/shoes/basketball" },
      { name: "Running", url: "/category/men/shoes/running" },
      { name: "Lifestyle", url: "/category/men/shoes/lifestyle" },
      { name: "Jordan", url: "/category/men/shoes/jordan" },
      { name: "Training & Gym", url: "/category/men/shoes/training" },
    ],
    Clothing: [
      { name: "T-Shirts", url: "/category/men/clothing/t-shirts" },
      { name: "Hoodies & Sweatshirts", url: "/category/men/clothing/hoodies" },
      { name: "Jeans", url: "/category/men/clothing/jeans" },
      { name: "Shorts", url: "/category/men/clothing/shorts" },
    ],
    Accessories: [
      { name: "Hats & Headwear", url: "/category/men/accessories/hats" },
      { name: "Bags & Backpacks", url: "/category/men/accessories/bags" },
      { name: "Socks", url: "/category/men/accessories/socks" },
    ],
  },

  womenProducts: {
    Shoes: [
      { name: "Running", url: "/category/women/shoes/running" },
      { name: "Lifestyle", url: "/category/women/shoes/lifestyle" },
      { name: "Sandals", url: "/category/women/shoes/sandals" },
    ],
    Clothing: [
      { name: "Dresses", url: "/category/women/clothing/dresses" },
      { name: "Tops", url: "/category/women/clothing/tops" },
      { name: "Pants", url: "/category/women/clothing/pants" },
    ],
  },

  // --- Your original array-based sections (kept exactly as-is) ---

  men: [
    {
      title: "new_featured",
      links: [
        "new_arrivals",
        "best_sellers",
        "latest_drops",
        "fathers_day_shop",
        "launch_calendar",
        "shop_all_sale"
      ]
    },
    {
      title: "shoes",
      links: [
        "all_shoes",
        "basketball",
        "fathers_day_shoes",
        "jordan",
        "lifestyle",
        "running",
        "sandals_slides",
        "soccer",
        "training_gym",
        "custom_shoes"
      ]
    },
    {
      title: "clothing",
      links: [
        "all_clothing",
        "fathers_day_clothing",
        "hoodies_sweatshirts",
        "jackets_vests",
        "pants",
        "shorts",
        "swim",
        "tops_graphic_tees"
      ]
    },
    {
      title: "accessories",
      links: [
        "all_accessories",
        "bags_backpacks",
        "hats_headwear",
        "socks"
      ]
    }
  ],

  women: [
    {
      title: "new_featured",
      links: [
        "new_arrivals",
        "best_sellers",
        "latest_drops",
        "fathers_day_shop",
        "launch_calendar",
        "shop_all_sale"
      ]
    },
    {
      title: "shoes",
      links: [
        "all_shoes",
        "basketball",
        "fathers_day_shoes",
        "jordan",
        "lifestyle",
        "running",
        "sandals_slides",
        "soccer",
        "training_gym",
        "custom_shoes"
      ]
    },
    {
      title: "clothing",
      links: [
        "all_clothing",
        "fathers_day_clothing",
        "hoodies_sweatshirts",
        "jackets_vests",
        "pants",
        "shorts",
        "swim",
        "tops_graphic_tees"
      ]
    },
    {
      title: "accessories",
      links: [
        "all_accessories",
        "bags_backpacks",
        "hats_headwear",
        "socks"
      ]
    }
  ],

  kids: [
    {
      title: "new_featured",
      links: [
        "new_arrivals",
        "best_sellers",
        "latest_drops",
        "fathers_day_shop",
        "launch_calendar",
        "shop_all_sale"
      ]
    },
    {
      title: "shoes",
      links: [
        "all_shoes",
        "basketball",
        "fathers_day_shoes",
        "jordan",
        "lifestyle",
        "running",
        "sandals_slides",
        "soccer",
        "training_gym",
        "custom_shoes"
      ]
    },
    {
      title: "clothing",
      links: [
        "all_clothing",
        "fathers_day_clothing",
        "hoodies_sweatshirts",
        "jackets_vests",
        "pants",
        "shorts",
        "swim",
        "tops_graphic_tees"
      ]
    },
    {
      title: "accessories",
      links: [
        "all_accessories",
        "bags_backpacks",
        "hats_headwear",
        "socks"
      ]
    }
  ],

  brands: [
    {
      title: "new_featured",
      links: [
        "new_arrivals",
        "best_sellers",
        "latest_drops",
        "fathers_day_shop",
        "launch_calendar",
        "shop_all_sale"
      ]
    },
    {
      title: "shoes",
      links: [
        "all_shoes",
        "basketball",
        "fathers_day_shoes",
        "jordan",
        "lifestyle",
        "running",
        "sandals_slides",
        "soccer",
        "training_gym",
        "custom_shoes"
      ]
    },
    {
      title: "clothing",
      links: [
        "all_clothing",
        "fathers_day_clothing",
        "hoodies_sweatshirts",
        "jackets_vests",
        "pants",
        "shorts",
        "swim",
        "tops_graphic_tees"
      ]
    },
    {
      title: "accessories",
      links: [
        "all_accessories",
        "bags_backpacks",
        "hats_headwear",
        "socks"
      ]
    }
  ],

  new: [
    {
      title: "new_featured",
      links: [
        "new_arrivals",
        "best_sellers",
        "latest_drops",
        "fathers_day_shop",
        "launch_calendar",
        "shop_all_sale"
      ]
    },
    {
      title: "shoes",
      links: [
        "all_shoes",
        "basketball",
        "fathers_day_shoes",
        "jordan",
        "lifestyle",
        "running",
        "sandals_slides",
        "soccer",
        "training_gym",
        "custom_shoes"
      ]
    },
    {
      title: "clothing",
      links: [
        "all_clothing",
        "fathers_day_clothing",
        "hoodies_sweatshirts",
        "jackets_vests",
        "pants",
        "shorts",
        "swim",
        "tops_graphic_tees"
      ]
    },
    {
      title: "accessories",
      links: [
        "all_accessories",
        "bags_backpacks",
        "hats_headwear",
        "socks"
      ]
    }
  ]
};
