import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('pages.Home');

  return <main>{t('title')}</main>;
}
