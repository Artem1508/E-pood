// contexts/FavoritesContext.tsx
import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { useAuth } from './AuthContext';
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
  const { user } = useAuth();


  useEffect(() => {
    if (user) {
      const savedFavorites = localStorage.getItem(`favorites_${user.id}`);
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      } else {
        setFavorites([]);
      }
    } else {
      setFavorites([]);
    }
  }, [user]);

  useEffect(() => {
    if (user && favorites.length > 0) {
      localStorage.setItem(`favorites_${user.id}`, JSON.stringify(favorites));
    } else if (user && favorites.length === 0) {
      localStorage.removeItem(`favorites_${user.id}`);
    }
  }, [favorites, user]);

  const favoriteIds = new Set(favorites.map(p => p.product_id));

  const toggleFavorite = (product: Product) => {
    if (!user) {
      console.log("Please login to manage favorites");
      return;
    }
    
    setFavorites(prev => {
      const exists = prev.some(p => p.product_id === product.product_id);
      if (exists) {
        return prev.filter(p => p.product_id !== product.product_id);
      } else {
        return [...prev, product];
      }
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