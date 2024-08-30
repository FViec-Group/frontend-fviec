import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import styles from './ComingSoonSection.module.scss';
import type { ComingSoonSectionProps } from './ComingSoonSection.types';

const ComingSoonSection: React.FC<ComingSoonSectionProps> = () => {
  const t = useTranslations();

  return (
    <div className={styles.ComingSoonSection}>
      <div className="space-y-5 text-center">
        <h2 className="text-5xl">{t('components.ComingSoonSection.heading')}</h2>
        <p className="text-xl text-yellow-500">
          {t('components.ComingSoonSection.description')}
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/en" locale="en">
            {t('common.language.english')}
          </Link>
          <Link href="/vi" locale="vi">
            {t('common.language.vietnamese')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonSection;
