import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface SearchResult {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function SearchBar() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search function
  useEffect(() => {
    if (searchTerm.length < 2) {
      setResults([]);
      return;
    }

    const delayDebounce = setTimeout(() => {
      performSearch(searchTerm);
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  const performSearch = async (query: string) => {
    setIsLoading(true);
    try {
      // Replace with your actual API call
      // const response = await api.get(`/products/search?q=${query}`);
      
      // Mock search results
      const mockResults: SearchResult[] = [
        { id: 1, name: 'Nike Air Max 270', price: 150, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100', category: 'Shoes' },
        { id: 2, name: 'Jordan Retro 1', price: 170, image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=100', category: 'Shoes' },
        { id: 3, name: 'Adidas Ultraboost', price: 180, image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100', category: 'Shoes' },
        { id: 4, name: 'Basketball Jersey', price: 65, image: 'https://images.unsplash.com/photo-1517344884509-806e5f5f9e9c?w=100', category: 'Clothing' },
        { id: 5, name: 'Running Shorts', price: 35, image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=100', category: 'Clothing' },
      ].filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      
      setResults(mockResults);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setShowResults(false);
      setSearchTerm('');
    }
  };

  return (
    <div className="search-container" ref={searchRef}>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => setShowResults(true)}
          placeholder={t('search') || 'Search products...'}
          className="search-input"
        />
        <button type="submit" className="search-button">
          🔍
        </button>
      </form>

      {/* Search Results Dropdown */}
      {showResults && searchTerm.length >= 2 && (
        <div className="search-results">
          {isLoading ? (
            <div className="search-loading">
              <div className="spinner"></div>
              Searching...
            </div>
          ) : results.length > 0 ? (
            <>
              {results.map((result) => (
                <Link
                  key={result.id}
                  to={`/product/${result.id}`}
                  onClick={() => setShowResults(false)}
                  className="search-result-item"
                >
                  <img src={result.image} alt={result.name} className="result-image" />
                  <div className="result-info">
                    <div className="result-name">{result.name}</div>
                    <div className="result-category">{result.category}</div>
                    <div className="result-price">${result.price}</div>
                  </div>
                </Link>
              ))}
              <Link
                to={`/search?q=${encodeURIComponent(searchTerm)}`}
                onClick={() => setShowResults(false)}
                className="search-view-all"
              >
                View all results ({results.length}) →
              </Link>
            </>
          ) : (
            <div className="search-no-results">
              No results found for "{searchTerm}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    // Ctrl+K or Cmd+K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      const searchInput = document.querySelector('.search-input') as HTMLInputElement;
      searchInput?.focus();
    }
  };
  
  document.addEventListener('keydown', handleKeyDown);
  return () => document.removeEventListener('keydown', handleKeyDown);
}, []);