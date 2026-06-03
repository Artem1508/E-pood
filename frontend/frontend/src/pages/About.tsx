import{useTranslation} from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('about.title')}</h1>

      <p>({t('about.description')})</p>
        <p>
        ABM is a modern fashion e-commerce
        platform providing high-quality
        clothing and accessories.
      </p>
    </div>
  );
};

export default About;