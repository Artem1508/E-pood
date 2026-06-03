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
      <div className="containerCatal">
        <h2 className="contCatalText">
          {t("recommended")}
        </h2>

        <Products />
      </div>
    </div>
  );
}
