// src/data/menuData.ts
export type MenuSection = {
  title: string;
  links: string[];
};

export type MegaMenuContent = {
  [key: string]: MenuSection[];
};

export const megaMenuData: MegaMenuContent = {
  Men: [
    {
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
    },
  ],
  Women: [
    // аналогичная структура, можно скопировать с правками
  ],
  Kids: [ /* ... */ ],
  Brands: [ /* ... */ ],
  "New & Trending": [ /* ... */ ],
};