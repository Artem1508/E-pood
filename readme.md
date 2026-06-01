# E-Pood
Team Members:

Artjom Pshenichnikov

Marek Veskimeister

Baddar Abobakr 

 // Frontend (React + TypeScript)

 frontend/  
│  
├── src/  
│   ├── components/  
│   │   ├── Navbar.tsx  
│   │   ├── ProductCard.tsx  
│   │   └── Footer.tsx  
│   │
│   ├── pages/  
│   │   ├── Home.tsx  
│   │   ├── Login.tsx  
│   │   ├── Register.tsx  
│   │   ├── Products.tsx  
│   │   ├── ProductDetails.tsx  
│   │   ├── Cart.tsx  
│   │   ├── Checkout.tsx  
│   │   └── Dashboard.tsx  
│   │  
│   ├── services/  
│   │   ├── authService.ts  
│   │   ├── productService.ts  
│   │   └── orderService.ts  
│   │  
│   ├── types/  
│   │   ├── User.ts  
│   │   ├── Product.ts  
│   │   ├── Order.ts  
│   │   └── Payment.ts  
│   │  
│   ├── App.tsx  
│   └── main.tsx  
│  
└── package.json  




// Backend (Express + TypeScript)

backend/  
│   
├── src/   
│   │   
│   ├── config/  
│   │   └── db.ts  
│   │  
│   ├── controllers/  
│   │   ├── auth.controller.ts  
│   │   ├── product.controller.ts  
│   │   ├── order.controller.ts  
│   │   └── payment.controller.ts  
│   │  
│   ├── routes/  
│   │   ├── auth.routes.ts  
│   │   ├── product.routes.ts  
│   │   ├── order.routes.ts  
│   │   └── payment.routes.ts  
│   │  
│   ├── middleware/  
│   │   ├── auth.middleware.ts  
│   │   └── role.middleware.ts   
│   │  
│   ├── services/  
│   │   ├── auth.service.ts  
│   │   ├── product.service.ts  
│   │   └── order.service.ts  
│   │  
│   ├── types/  
│   │   ├── user.types.ts  
│   │   ├── product.types.ts  
│   │   └── order.types.ts  
│   │  
│   ├── app.ts  
│   └── server.ts  
│  
├── prisma/  
│   └── schema.prisma  
│  
└── package.json  

