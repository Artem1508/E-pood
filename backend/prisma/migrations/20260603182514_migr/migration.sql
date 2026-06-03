-- CreateTable
CREATE TABLE "categories_table" (
    "category_id" SERIAL NOT NULL,
    "category_name" VARCHAR(100) NOT NULL,

    CONSTRAINT "categories_table_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "employee" (
    "id" INTEGER,
    "name" VARCHAR(50),
    "salary" INTEGER
);

-- CreateTable
CREATE TABLE "order_items_table" (
    "order_item_id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "subtotal" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "order_items_table_pkey" PRIMARY KEY ("order_item_id")
);

-- CreateTable
CREATE TABLE "orders_table" (
    "order_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "order_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "status" VARCHAR(50) DEFAULT 'Pending',
    "total_amount" DECIMAL(10,2) DEFAULT 0,

    CONSTRAINT "orders_table_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "payments_table" (
    "payment_id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "payment_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "amount" DECIMAL(10,2) NOT NULL,
    "payment_method" VARCHAR(50) NOT NULL,
    "payment_status" VARCHAR(50) DEFAULT 'Successful',

    CONSTRAINT "payments_table_pkey" PRIMARY KEY ("payment_id")
);

-- CreateTable
CREATE TABLE "person" (
    "id" INTEGER,
    "name" VARCHAR(50)
);

-- CreateTable
CREATE TABLE "products_table" (
    "product_id" SERIAL NOT NULL,
    "category_id" INTEGER NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "description" TEXT,
    "price" DECIMAL(10,2) NOT NULL,
    "stock_quantity" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "image_URL" TEXT,

    CONSTRAINT "products_table_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "roles_table" (
    "role_id" SERIAL NOT NULL,
    "role_name" VARCHAR(50) NOT NULL,

    CONSTRAINT "roles_table_pkey" PRIMARY KEY ("role_id")
);

-- CreateTable
CREATE TABLE "students" (
    "student_id" INTEGER,
    "name" VARCHAR(50),
    "age" INTEGER
);

-- CreateTable
CREATE TABLE "users_table" (
    "user_id" SERIAL NOT NULL,
    "full_name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "address" TEXT,
    "role_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_table_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_table_category_name_key" ON "categories_table"("category_name");

-- CreateIndex
CREATE INDEX "idx_orderitems_table_product" ON "order_items_table"("product_id");

-- CreateIndex
CREATE INDEX "idx_orders_table_user" ON "orders_table"("user_id");

-- CreateIndex
CREATE INDEX "idx_payments_table_order" ON "payments_table"("order_id");

-- CreateIndex
CREATE INDEX "idx_products_table_category" ON "products_table"("category_id");

-- CreateIndex
CREATE UNIQUE INDEX "roles_table_role_name_key" ON "roles_table"("role_name");

-- CreateIndex
CREATE UNIQUE INDEX "idx_users_table_email_unique" ON "users_table"("email");

-- CreateIndex
CREATE INDEX "idx_users_table_email" ON "users_table"("email");
