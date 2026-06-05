// pages/About.tsx
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <div id="about-section" className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About ABM</h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            ABM is a modern fashion brand that combines contemporary design with exceptional quality. 
            Founded in 2020, we set out to create clothing that not only looks good but also feels good to wear.
          </p>
          
          <p>
            Our mission is to provide high-quality, sustainable fashion that empowers individuals to 
            express their unique style. We believe in creating timeless pieces that transcend seasonal trends.
          </p>
          
          <p>
            Every ABM product is carefully designed with attention to detail, using premium materials 
            sourced from responsible suppliers. We're committed to ethical production practices and 
            minimizing our environmental impact.
          </p>
          
          <p>
            From our team to yours, thank you for choosing ABM. We're proud to be part of your style journey.
          </p>
        </div>
        
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl mb-3">✨</div>
            <h3 className="font-bold mb-2">Quality First</h3>
            <p className="text-sm text-gray-500">Premium materials and craftsmanship</p>
          </div>
          <div>
            <div className="text-4xl mb-3">🌱</div>
            <h3 className="font-bold mb-2">Sustainable</h3>
            <p className="text-sm text-gray-500">Eco-friendly practices</p>
          </div>
          <div>
            <div className="text-4xl mb-3">❤️</div>
            <h3 className="font-bold mb-2">Ethical</h3>
            <p className="text-sm text-gray-500">Fair production standards</p>
          </div>
        </div>
      </div>
    </div>
  );
}