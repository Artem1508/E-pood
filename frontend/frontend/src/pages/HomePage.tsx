import ProductCard from '../components/ProductCard'
import type { Product } from '../types/Product'

const sampleProducts: Product[] = [
  { id: 1, name: 'Ultraboost 23', price: 189, image: 'https://placehold.co/400x400?text=Shoe' },
  { id: 2, name: 'Forum Low', price: 109, image: 'https://placehold.co/400x400?text=Shoe' },
]

export default function HomePage() {
  return (
    <div>
      {/* HERO секция как на скриншоте */}
      <section className="hero-section">
        <div className="hero-badge">FUTURECRAFT.LOOP</div>
        <h1 className="hero-title">BE<br />REN<br />MADE</h1>
        <button className="hero-btn">DISCOVER →</button>
      </section>

      {/* Пример карточек */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Recommended</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sampleProducts.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  )
}