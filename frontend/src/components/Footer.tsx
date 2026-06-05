import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div>
          <h4 className="font-bold mb-3">{t("help")}</h4>
          <ul className="Row">
            <div className="Column"><Link to="/shipping-info">{t("shipping")}</Link></div>
            <div className="Column"><Link to="/returns-info">{t("returns")}</Link></div>
            <div className="Column"><Link to="/size-guide">{t("size_guide")}</Link></div>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-8">© 2026 ABM | Nude Edition</div>
    </footer>
  );
}