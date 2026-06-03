// src/data/menuData.ts

export type MenuSection = {
  title: string;      // translation key
  links: string[];    // translation keys
};

export type MegaMenuContent = {
  [key: string]: MenuSection[];
};

export const megaMenuData: MegaMenuContent = {
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
  Kids: [ {
      title: "New & Featured",
      links: ["New Arrivals", "Best Sellers", "Latest Drops", "Father's Day Shop", "SNKRS Launch Calendar", "Shop All Sale"],
    },
    {
      title: "Shoes",
      links: ["All Shoes", "Basketball", "Father's Day Shoes", "Jordan", "Lifestyle", "Running", "Sandals & Slides", "Soccer", "Training & Gym", "Custom Shoes"],
    },
    {
      title: "Clothing",
      links: ["All Clothing", "Father's Day Clothing", "Hoodies & Sweatshirts", "Jackets & Vests", "Pants", "Shorts", "Swim", "Tops & Graphic Tees"],
    },
    {
      title: "Accessories",
      links: ["All Accessories", "Bags & Backpacks", "Hats & Headwear", "Socks"],
    },],
  Brands: [ {
      title: "New & Featured",
      links: ["New Arrivals", "Best Sellers", "Latest Drops", "Father's Day Shop", "SNKRS Launch Calendar", "Shop All Sale"],
    },
    {
      title: "Shoes",
      links: ["All Shoes", "Basketball", "Father's Day Shoes", "Jordan", "Lifestyle", "Running", "Sandals & Slides", "Soccer", "Training & Gym", "Custom Shoes"],
    },
    {
      title: "Clothing",
      links: ["All Clothing", "Father's Day Clothing", "Hoodies & Sweatshirts", "Jackets & Vests", "Pants", "Shorts", "Swim", "Tops & Graphic Tees"],
    },
    {
      title: "Accessories",
      links: ["All Accessories", "Bags & Backpacks", "Hats & Headwear", "Socks"],
    }, ],
  "New & Trending": [ {
      title: "New & Featured",
      links: ["New Arrivals", "Best Sellers", "Latest Drops", "Father's Day Shop", "SNKRS Launch Calendar", "Shop All Sale"],
    },
    {
      title: "Shoes",
      links: ["All Shoes", "Basketball", "Father's Day Shoes", "Jordan", "Lifestyle", "Running", "Sandals & Slides", "Soccer", "Training & Gym", "Custom Shoes"],
    },
    {
      title: "Clothing",
      links: ["All Clothing", "Father's Day Clothing", "Hoodies & Sweatshirts", "Jackets & Vests", "Pants", "Shorts", "Swim", "Tops & Graphic Tees"],
    },
    {
      title: "Accessories",
      links: ["All Accessories", "Bags & Backpacks", "Hats & Headwear", "Socks"],
    }, ],
};
