// pages/SizeGuide.tsx
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function SizeGuide() {
  const { t } = useTranslation();
  const [unit, setUnit] = useState<'cm' | 'inches'>('cm');

  const sizes = [
    { size: 'XS', chest: { cm: 86, inches: 34 }, waist: { cm: 66, inches: 26 }, hip: { cm: 91, inches: 36 } },
    { size: 'S', chest: { cm: 91, inches: 36 }, waist: { cm: 71, inches: 28 }, hip: { cm: 96, inches: 38 } },
    { size: 'M', chest: { cm: 96, inches: 38 }, waist: { cm: 76, inches: 30 }, hip: { cm: 101, inches: 40 } },
    { size: 'L', chest: { cm: 101, inches: 40 }, waist: { cm: 81, inches: 32 }, hip: { cm: 106, inches: 42 } },
    { size: 'XL', chest: { cm: 106, inches: 42 }, waist: { cm: 86, inches: 34 }, hip: { cm: 111, inches: 44 } },
    { size: 'XXL', chest: { cm: 111, inches: 44 }, waist: { cm: 91, inches: 36 }, hip: { cm: 116, inches: 46 } },
  ];

  const shoeSizes = [
    { eu: 35, uk: 2, us: 4, cm: 22 },
    { eu: 36, uk: 3, us: 5, cm: 22.5 },
    { eu: 37, uk: 4, us: 6, cm: 23.5 },
    { eu: 38, uk: 5, us: 7, cm: 24.5 },
    { eu: 39, uk: 6, us: 8, cm: 25.5 },
    { eu: 40, uk: 7, us: 9, cm: 26.5 },
    { eu: 41, uk: 7.5, us: 9.5, cm: 27 },
    { eu: 42, uk: 8, us: 10, cm: 27.5 },
    { eu: 43, uk: 9, us: 11, cm: 28.5 },
    { eu: 44, uk: 10, us: 12, cm: 29.5 },
  ];

  const getMeasurement = (value: { cm: number; inches: number }) => {
    return unit === 'cm' ? `${value.cm} cm` : `${value.inches}"`;
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-4xl font-bold mb-8">Size Guide</h1>

      {/* Unit Toggle */}
      <div className="flex justify-end mb-6">
        <div className="bg-gray-100 rounded-full p-1 inline-flex">
          <button
            onClick={() => setUnit('cm')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              unit === 'cm' ? 'bg-gray-900 text-white' : 'text-gray-600'
            }`}
          >
            CM
          </button>
          <button
            onClick={() => setUnit('inches')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              unit === 'inches' ? 'bg-gray-900 text-white' : 'text-gray-600'
            }`}
          >
            Inches
          </button>
        </div>
      </div>

      {/* Clothing Size Chart */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Clothing Size Chart</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Size</th>
                <th className="border p-3 text-left">Chest</th>
                <th className="border p-3 text-left">Waist</th>
                <th className="border p-3 text-left">Hip</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((s) => (
                <tr key={s.size} className="border-b hover:bg-gray-50">
                  <td className="border p-3 font-semibold">{s.size}</td>
                  <td className="border p-3">{getMeasurement(s.chest)}</td>
                  <td className="border p-3">{getMeasurement(s.waist)}</td>
                  <td className="border p-3">{getMeasurement(s.hip)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Shoe Size Chart */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Shoe Size Chart</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">EU Size</th>
                <th className="border p-3 text-left">UK Size</th>
                <th className="border p-3 text-left">US Size</th>
                <th className="border p-3 text-left">Foot Length (cm)</th>
              </tr>
            </thead>
            <tbody>
              {shoeSizes.map((s) => (
                <tr key={s.eu} className="border-b hover:bg-gray-50">
                  <td className="border p-3 font-semibold">{s.eu}</td>
                  <td className="border p-3">{s.uk}</td>
                  <td className="border p-3">{s.us}</td>
                  <td className="border p-3">{s.cm} cm</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">How to Measure</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-3xl mb-2">📏</div>
            <h3 className="font-bold mb-2">Chest</h3>
            <p className="text-sm text-gray-600">
              Measure around the fullest part of your chest, keeping the tape measure horizontal.
            </p>
          </div>
          <div>
            <div className="text-3xl mb-2">📐</div>
            <h3 className="font-bold mb-2">Waist</h3>
            <p className="text-sm text-gray-600">
              Measure around the narrowest part of your natural waist, usually just above the belly button.
            </p>
          </div>
          <div>
            <div className="text-3xl mb-2">📏</div>
            <h3 className="font-bold mb-2">Hip</h3>
            <p className="text-sm text-gray-600">
              Measure around the widest part of your hips, keeping the tape measure horizontal.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}