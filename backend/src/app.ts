import express from "express";
import cors from "cors";
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

import authRoutes from "./routes/auth.routes";
import categoryRoutes from "./routes/category.routes";
import productRoutes from "./routes/product.routes";
import orderRoutes from "./routes/order.routes";
import paymentRoutes from "./routes/payments.routes";
import testRoutes from "./routes/test.routes";
import { errorHandler } from "./middleware/error.middleware";
import { cspMiddleware } from "./middleware/csp.middleware";

const app = express();

app.use(cspMiddleware);

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'E-pood API Documentation',
      version: '1.0.0',
      description: 'E-commerce API documentation for E-pood application',
      contact: {
        name: 'API Support',
        email: 'support@epood.com'
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT'
      }
    },
    servers: [
      {
        url: 'http://localhost:5000/api',
        description: 'Development server'
      },
      {
        url: 'https://api.epood.com/api',
        description: 'Production server'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Enter JWT token'
        }
      },
      schemas: {
        // User Schema
        User: {
          type: 'object',
          properties: {
            user_id: {
              type: 'integer',
              example: 1,
              description: 'Unique user identifier'
            },
            email: {
              type: 'string',
              format: 'email',
              example: 'user@example.com',
              description: 'User email address'
            },
            full_name: {
              type: 'string',
              example: 'John Doe',
              description: 'User full name'
            },
            role_id: {
              type: 'integer',
              enum: [1, 2, 3],
              example: 3,
              description: '1=Admin, 2=Employee, 3=Customer'
            },
            created_at: {
              type: 'string',
              format: 'date-time',
              description: 'Account creation date'
            }
          }
        },
        
        // Category Schema
        Category: {
          type: 'object',
          properties: {
            category_id: {
              type: 'integer',
              example: 1,
              description: 'Unique category identifier'
            },
            category_name: {
              type: 'string',
              example: 'Shoes',
              description: 'Category name'
            },
            description: {
              type: 'string',
              example: 'All kinds of shoes',
              description: 'Category description'
            },
            created_at: {
              type: 'string',
              format: 'date-time',
              description: 'Creation date'
            }
          }
        },
        
        // Product Schema
        Product: {
          type: 'object',
          properties: {
            product_id: {
              type: 'integer',
              example: 1,
              description: 'Unique product identifier'
            },
            name: {
              type: 'string',
              example: 'Cotton T-Shirt',
              description: 'Product name'
            },
            price: {
              type: 'number',
              example: 29.99,
              description: 'Product price in EUR'
            },
            category_id: {
              type: 'integer',
              example: 1,
              description: 'Category ID'
            },
            category_name: {
              type: 'string',
              example: 'Shirts',
              description: 'Category name (joined)'
            },
            description: {
              type: 'string',
              example: 'Comfortable 100% cotton t-shirt',
              description: 'Product description'
            },
            image_URL: {
              type: 'string',
              example: '/images/products/shirt.jpg',
              description: 'Product image URL'
            },
            stock: {
              type: 'integer',
              example: 100,
              description: 'Available stock quantity'
            },
            created_at: {
              type: 'string',
              format: 'date-time',
              description: 'Creation date'
            }
          }
        },
        
        // Order Schema
        Order: {
          type: 'object',
          properties: {
            order_id: {
              type: 'integer',
              example: 1001,
              description: 'Unique order identifier'
            },
            user_id: {
              type: 'integer',
              example: 1,
              description: 'User ID who placed the order'
            },
            order_date: {
              type: 'string',
              format: 'date-time',
              example: '2026-01-15T10:30:00Z',
              description: 'Order creation date'
            },
            total_amount: {
              type: 'number',
              example: 180.00,
              description: 'Total order amount'
            },
            status: {
              type: 'string',
              enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
              example: 'pending',
              description: 'Order status'
            },
            shipping_address: {
              type: 'string',
              example: 'Tallinn, Estonia, 10145',
              description: 'Shipping address'
            },
            customer_name: {
              type: 'string',
              example: 'John Doe',
              description: 'Customer full name'
            },
            customer_email: {
              type: 'string',
              format: 'email',
              example: 'john@example.com',
              description: 'Customer email'
            },
            customer_phone: {
              type: 'string',
              example: '+372 5555 1234',
              description: 'Customer phone number'
            },
            payment_status: {
              type: 'string',
              enum: ['pending', 'paid', 'failed', 'refunded'],
              example: 'pending',
              description: 'Payment status'
            },
            items: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  product_id: { type: 'integer', example: 1 },
                  name: { type: 'string', example: 'Cotton T-Shirt' },
                  price: { type: 'number', example: 29.99 },
                  quantity: { type: 'integer', example: 2 },
                  image_url: { type: 'string', example: '/images/products/shirt.jpg' }
                }
              }
            },
            payment: {
              $ref: '#/components/schemas/Payment',
              description: 'Payment information (if exists)'
            }
          }
        },
        
        // Payment Schema
        Payment: {
          type: 'object',
          properties: {
            payment_id: {
              type: 'integer',
              example: 5001,
              description: 'Unique payment identifier'
            },
            order_id: {
              type: 'integer',
              example: 1001,
              description: 'Order ID this payment belongs to'
            },
            user_id: {
              type: 'integer',
              example: 1,
              description: 'User ID who made the payment'
            },
            amount: {
              type: 'number',
              example: 180.00,
              description: 'Payment amount'
            },
            status: {
              type: 'string',
              enum: ['pending', 'completed', 'failed', 'refunded'],
              example: 'completed',
              description: 'Payment status'
            },
            payment_method: {
              type: 'string',
              enum: ['card', 'paypal', 'bank_transfer'],
              example: 'card',
              description: 'Payment method'
            },
            transaction_id: {
              type: 'string',
              example: 'TXN_123456789',
              description: 'External transaction ID'
            },
            payment_date: {
              type: 'string',
              format: 'date-time',
              example: '2026-01-15T10:35:00Z',
              description: 'Payment processing date'
            }
          }
        },
        
        // Error Schema
        Error: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: false
            },
            message: {
              type: 'string',
              example: 'Error message'
            },
            error: {
              type: 'string',
              example: 'Detailed error description'
            }
          }
        },
        
        // Success Schema
        Success: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: true
            },
            message: {
              type: 'string',
              example: 'Operation completed successfully'
            }
          }
        }
      }
    },
    tags: [
      {
        name: 'Auth',
        description: 'Authentication endpoints - login and register'
      },
      {
        name: 'Products',
        description: 'Product management endpoints'
      },
      {
        name: 'Categories',
        description: 'Category management endpoints'
      },
      {
        name: 'Orders',
        description: 'Order management endpoints'
      },
      {
        name: 'Payments',
        description: 'Payment processing endpoints'
      },
      {
        name: 'System',
        description: 'System health and test endpoints'
      }
    ]
  },
  apis: ['./src/routes/*.ts']
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Middleware
app.use(cors());
app.use(express.json());

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  explorer: true,
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'E-pood API Documentation'
}));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/test", testRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "E-pood API is running",
    docs: "http://localhost:5000/api-docs"
  });
});

// Error handler
app.use(errorHandler);

export default app;