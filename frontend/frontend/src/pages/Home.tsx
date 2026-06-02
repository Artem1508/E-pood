import Products from '../components/Products';

export default function Home() {
  return (
    <div>
      {/* HERO секция */}
      <section className="hero-section">
        <div className="hero-badge">FUTURECRAFT.LOOP</div>
        <h1 className="hero-title">BE<br />REN<br />MADE</h1>
        <button className="hero-btn">DISCOVER →</button>
      </section>

      {/* Каталог товаров */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Recommended for You</h2>
        <Products />
      </div>
    </div>
  );
}