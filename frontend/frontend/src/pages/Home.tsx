import Products from "../components/Products";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-badge">NEW & TRENDING</div>

        <h1 className="hero-title">
          READY <br /> SET <br /> MOVE
        </h1>

        <button className="hero-btn">
          {t("discover")} →
        </button>
      </section>

      {/* PRODUCT CATALOG */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">
          {t("recommended")}
        </h2>

        <Products />
      </div>
    </div>
  );
}
