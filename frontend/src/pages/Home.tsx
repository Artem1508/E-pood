import { Link } from "react-router-dom";
import Products from "../components/Products";
import { useTranslation } from "react-i18next";
import About from "./About";
import { useRef } from 'react';

export default function Home() {
  const { t } = useTranslation();
  const aboutRef = useRef<HTMLDivElement>(null)

  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-badge">NEW & TRENDING</div>

        <h1 className="hero-title">
          READY <br /> SET <br /> MOVE
        </h1>

        <Link to="/products" className="hero-btn">
          {t("discover")} →
        </Link>
      </section>

      {/* PRODUCT CATALOG */}
      <div className="containerCatal overflow-hidden">
        <h2 className="contCatalText">
          {t("recommended")}
        </h2>

        <Products />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
    </div>
  );
}
