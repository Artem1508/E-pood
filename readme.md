# E-Pood
E-pood on täisfunktsionaalne e-kaubanduse veebirakendus toodete haldamiseks, ostukorviga tellimuste vormistamiseks ja maksete simuleerimiseks.

Projekt jaguneb kaheks põhiosaks:

    backend - Express, Prisma, PostgreSQL, JWT autentimine, rollipõhine autoriseerimine ja Swagger API dokumentatsioon

    frontend - React, Vite, TypeScript, TailwindCSS ja kohandatud CSS

Backend haldab andmeid, autentimist, rollikontrolle, CRUD operatsioone ja aruandepäringuid. Frontend renderdab kasutajaliidest, keelevahetust, ostukorvi, tellimuste vormistamist ja admin paneeli.
# Frontend (React + TypeScript)

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
  
  
# Backend (Express + TypeScript)  
  
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




Põhimõte on lihtne: marsruudid ühendavad endpoint-id, kontrollerid töötlevad HTTP päringuid, teenused sisaldavad ärilogikat ja frontendi komponendid on taaskasutatavad ning väikesed.

# Funktsionaalsus

    registreerimine ja sisselogimine

    JWT autentimine

    toodete sirvimine

    toodete lisamine ostukorvi

    ostukorvi haldamine (koguse muutmine, eemaldamine)

    toodete lisamine lemmikutesse

    lemmikute lehekülg

    tellimuse vormistamine (aadress, kontaktandmed)

    tellimuse ajalugu

    maksete simuleerimine

    kolmkeelne liides (eesti, inglise, vene)

    teavitused (toast notifications)

    Swagger API dokumentatsioon

 Pooleli olev funktsionaalsus

    otsing – hetkel puudub töötav otsing

    admin paneel – pooleli, põhifunktsionaalsus puudulik

    töötaja vaade – pooleli

 # Rollid

Klient (role_id = 3)

    saab registreeruda ja sisse logida

    saab sirvida tooteid

    saab lisada tooteid ostukorvi ja lemmikutesse

    saab vormistada tellimusi

    näeb oma tellimuste ajalugu

Töötaja (role_id = 2)

    pooleli

Administraator (role_id = 1)

    pooleli


# Backendi seadistus

    cd backend
    npm install

  Loo .env fail:

    PORT=5000
    DATABASE_URL="postgresql://kasutaja:parool@localhost:5432/e_pood"
    JWT_SECRET="sinu-salajane-voti"

  Genereeri Prisma klient:

    npx prisma generate
    npx prisma db push
    npm run dev
    
  Swagger dokumentatsioon:
     
    http://localhost:5000/api-docs

# Frontendi seadistus

    cd frontend
    npm install
    npm run dev

  Frontend töötab aadressil:

    http://localhost:5173


 # API Endpoints

 Auth

    POST /api/auth/register – registreerimine
    
    POST /api/auth/login – sisselogimine
    
    GET /api/auth/users – kõik kasutajad (Admin)
    
    GET /api/auth/users/:id – kasutaja andmed (Admin või ise)
    
    PUT /api/auth/users/:id – kasutaja muutmine (Admin või ise)
    
    DELETE /api/auth/users/:id – kasutaja kustutamine (Admin)

Tooted

    GET /api/products – kõik tooted

    GET /api/products/:id – ühe toote andmed

    POST /api/products – toote lisamine (Admin/Employee)

    PUT /api/products/:id – toote muutmine (Admin/Employee)

    DELETE /api/products/:id – toote kustutamine (Admin)

Kategooriad

    GET /api/categories – kõik kategooriad

    POST /api/categories – kategooria lisamine (Admin)

Tellimused

    POST /api/orders – tellimuse loomine (Customer)

    GET /api/orders/my-orders – kasutaja enda tellimused (Customer)

Maksed

    POST /api/payments – makse loomine (Customer)

    GET /api/payments/my-payments – kasutaja enda maksed (Customer)

Kasutajad

    GET /api/users – kõik kasutajad (Admin)

    GET /api/users/:id – kasutaja andmed (Admin või ise)

    PUT /api/users/:id – kasutaja muutmine (Admin või ise)

    DELETE /api/users/:id – kasutaja kustutamine (Admin)

Süsteem

    GET /health – serveri tervisekontroll

    GET /api-docs – Swagger dokumentatsioon

# Kokkuvõte

Projekti raames on realiseeritud täisfunktsionaalne backend kõigi vajalike endpointidega, andmebaasi skeem indeksite, vaadete, trigeri ja protseduuriga. Frontendis on realiseeritud põhiline kasutajaliides – toodete sirvimine, ostukorv, lemmikud, tellimuste vormistamine ja tellimuste ajalugu. Töötaja ja administraatori vaated on pooleli, otsing puudub. 
