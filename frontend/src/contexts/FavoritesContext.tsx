// contexts/FavoritesContext.tsx
import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { Product } from '../types/product.types';

interface FavoritesContextType {
  favorites: Product[];
  favoriteIds: Set<number>;
  toggleFavorite: (product: Product) => void;
  isFavorite: (productId: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const favoriteIds = new Set(favorites.map(p => p.product_id));

  const toggleFavorite = (product: Product) => {
    setFavorites(prev => {
      const exists = prev.some(p => p.product_id === product.product_id);
      if (exists) return prev.filter(p => p.product_id !== product.product_id);
      return [...prev, product];
    });
  };

  const isFavorite = (productId: number) => favoriteIds.has(productId);

  return (
    <FavoritesContext.Provider value={{ favorites, favoriteIds, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error('useFavorites must be used within FavoritesProvider');
  return context;
};