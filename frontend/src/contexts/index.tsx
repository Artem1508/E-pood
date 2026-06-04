// contexts/index.tsx
import React, { type ReactNode } from 'react';
import { AuthProvider } from './AuthContext';
import { CartProvider } from './CartContext';
import { FavoritesProvider } from './FavoritesContext';
import { UserProvider } from './UserContext';

export { useAuth } from './AuthContext';
export { useCart } from './CartContext';
export { useFavorites } from './FavoritesContext';

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <CartProvider>
          <FavoritesProvider>
            {children}
          </FavoritesProvider>
        </CartProvider>
      </UserProvider>
    </AuthProvider>
  );
};