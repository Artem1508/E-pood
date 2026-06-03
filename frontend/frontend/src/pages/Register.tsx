


import { useTranslation } from 'react-i18next';

export default function Register() {
  const { t } = useTranslation();
  return <h1>{t('register.title')}</h1>;
}