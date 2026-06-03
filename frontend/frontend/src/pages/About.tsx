import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("about_title")}</h1>

      <p>{t("about_description")}</p>

      <p>{t("about_text")}</p>
    </div>
  );
};

export default About;
