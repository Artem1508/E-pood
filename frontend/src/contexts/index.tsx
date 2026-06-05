import React,  { type ReactNode } from 'react';
import { AuthProvider } from './AuthContext';
import { CartProvider } from './CartContext';
import { FavoritesProvider } from './FavoritesContext';
import { ToastProvider } from './ToastContext';

export { useAuth } from './AuthContext';
export { useCart } from './CartContext';
export { useFavorites } from './FavoritesContext';
export { useToast } from './ToastContext';

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <AuthProvider>
      <CartProvider>
        <FavoritesProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </FavoritesProvider>
      </CartProvider>
    </AuthProvider>
  );
};