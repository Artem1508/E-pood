// src/data/menuData.ts
//import { useTranslation } from "react-i18next";
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
