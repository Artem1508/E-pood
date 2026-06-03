import{useTranslation} from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div>
          <h4 className="font-bold mb-3">{t("help")}</h4>
          <ul className="Row">
            <div className="Column"><a href="#">{t("shipping")}</a></div>
            <div className="Column"><a href="#">{t("returns")}</a></div>
            <div className="Column"><a href="#">{t("size_guide")}</a></div>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-8">© 2026 ABM | Nude Edition</div>
    </footer>
  )
}