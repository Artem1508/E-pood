# E-Pood
Team Members:

Artjom Pshenichnikov

Marek Veskimeister

Baddar Abobakr 

 // Frontend (React + TypeScript)

frontend/  
│  
├── src/  
│ │  
│ ├── api/  
│ │ └── axios.ts  
│ │  
│ ├── components/  
│ │ ├── Footer.tsx  
│ │ ├── Header.tsx  
│ │ ├── LanguageSelector.tsx  
│ │ ├── Layout.tsx  
│ │ ├── Loading.tsx  
│ │ ├── MainNav.tsx  
│ │ ├── MegaMenu.tsx  
│ │ ├── Navbar.tsx  
│ │ ├── ProductCard.tsx  
│ │ ├── Products.tsx  
│ │ ├── ProtectedRoute.tsx  
│ │ ├── TestNav.tsx  
│ │ ├── Toast.tsx  
│ │ └── TopBar.tsx  
│ │  
│ ├── contexts/  
│ │ ├── AuthContext.tsx  
│ │ ├── CartContext.tsx  
│ │ ├── FavoritesContext.tsx  
│ │ ├── ToastContext.tsx  
│ │ ├── UserContext.tsx  
│ │ └── index.tsx  
│ │  
│ ├── data/  
│ │ └── menuData.ts  
│ │  
│ ├── layouts/  
│ │ ├── AdminLayout.tsx  
│ │ ├── EmployeeLayout.tsx  
│ │ └── MainLayout.tsx  
│ │  
│ ├── locales/  
│ │ ├── ar/   
│ │ │ └── translation.json  
│ │ ├── en/  
│ │ │ └── translation.json  
│ │ ├── et/  
│ │ │ └── translation.json  
│ │ └── ru/  
│ │ └── translation.json  
│ │  
│ ├── pages/  
│ │ ├── About.tsx  
│ │ ├── ApiDocs.tsx  
│ │ ├── Cart.tsx  
│ │ ├── Checkout.tsx  
│ │ ├── Dashboard.tsx  
│ │ ├── Favorites.tsx  
│ │ ├── Home.tsx  
│ │ ├── Login.tsx  
│ │ ├── OrderSuccess.tsx  
│ │ ├── Orders.tsx  
│ │ ├── ProductDetails.tsx  
│ │ ├── Products.tsx  
│ │ ├── Register.tsx  
│ │ ├── ReturnsInfo.tsx  
│ │ ├── ShippingInfo.tsx  
│ │ ├── SizeGuide.tsx  
│ │ ├── TestPages.tsx  
│ │ │  
│ │ ├── admin/  
│ │ │ ├── Categories.tsx  
│ │ │ ├── Dashboard.tsx  
│ │ │ ├── Payments.tsx  
│ │ │ ├── Products.tsx  
│ │ │ └── Users.tsx  
│ │ │  
│ │ ├── customer/  
│ │ │ ├── Dashboard.tsx  
│ │ │ └── Orders.tsx  
│ │ │  
│ │ └── employee/  
│ │ ├── Inventory.tsx  
│ │ └── Orders.tsx  
│ │  
│ ├── services/   
│ │ ├── auth.service.ts  
│ │ ├── category.service.ts  
│ │ ├── order.service.ts  
│ │ ├── payment.service.ts  
│ │ └── product.service.ts  
│ │  
│ ├── types/  
│ │ ├── auth.types.ts  
│ │ ├── category.types.ts  
│ │ ├── order.types.ts  
│ │ ├── payment.types.ts  
│ │ ├── product.types.ts   
│ │ ├── roles.types.ts  
│ │ └── user.types.ts  
│ │  
│ ├── utils/  
│ │ └── categoryImages.ts  
│ │  
│ ├── App.tsx  
│ ├── App.css  
│ ├── TopBar.css  
│ ├── i18n.ts  
│ ├── index.css  
│ └── main.tsx  
│  
├── package.json  
└── vite.config.ts  
  
  
// Backend (Express + TypeScript)  
  
backend/  
│  
├── prisma/  
│ ├── schema.prisma  
│ └── migrations/  
│  
├── src/  
│ │  
│ ├── config/  
│ │ └── db.ts  
│ │  
│ ├── controllers/  
│ │ ├── auth.controller.ts  
│ │ ├── category.controller.ts  
│ │ ├── order.controller.ts  
│ │ ├── payments.controller.ts  
│ │ ├── product.controller.ts  
│ │ └── review.controller.ts  
│ │  
│ ├── middleware/  
│ │ ├── auth.middleware.ts  
│ │ ├── csp.middleware.ts  
│ │ ├── error.middleware.ts  
│ │ └── role.middleware.ts  
│ │  
│ ├── routes/  
│ │ ├── auth.routes.ts  
│ │ ├── category.routes.ts  
│ │ ├── order.routes.ts  
│ │ ├── payments.routes.ts  
│ │ ├── product.routes.ts  
│ │ ├── review.routes.ts  
│ │ └── test.routes.ts  
│ │  
│ ├── services/  
│ │ └── auth.service.ts  
│ │  
│ ├── utils/  
│ │ └── jwt.ts  
│ │   
│ ├── app.ts  
│ └── server.ts  
│  
├── backup.sql  
├── nodemon.json  
├── package.json  
└── tsconfig.json  


