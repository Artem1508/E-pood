import { MenuSection } from "../data/menuData";

type Props = {
  sections: MenuSection[];
};

export default function MegaMenu({ sections }: Props) {
  return (
    <div className="mega-menu">
      <div className="mega-menu-container">
        {sections.map((section, idx) => (
          <div key={idx} className="mega-menu-column">
            <h4>{section.title}</h4>
            <ul>
              {section.links.map((link, i) => (
                <li key={i}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}