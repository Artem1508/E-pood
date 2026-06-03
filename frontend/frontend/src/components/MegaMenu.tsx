import { useTranslation } from "react-i18next";
import type { MenuSection } from "../Data/menuData";

type Props = {
  sections: MenuSection[];
  onLinkClick?: () => void;
};

export default function MegaMenu({ sections, onLinkClick }: Props) {
  const { t } = useTranslation();

  return (
    <div className="mega-menu">
      <div className="mega-menu-container">
        {sections.map((section, idx) => (
          <div key={idx} className="mega-menu-column">
            <h4>{t(section.title)}</h4>

            <ul>
              {section.links.map((link, i) => (
                <li key={i}>
                  <a href="#" onClick={onLinkClick}>
                    {t(link)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
