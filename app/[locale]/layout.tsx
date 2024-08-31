import { Messages } from '@/global';
import '@/styles/global.scss';
import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import React from 'react';
import { ApolloWrapper } from '../apollo/apollo-wrapper';
import { fonts } from '../font';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata(): Promise<Metadata> {
  const messages = (await getMessages()) as Messages;

  return {
    title: messages.pages.Home.title,
    description: messages.pages.Home.description,
    icons: [
      { rel: 'apple-touch-icon', url: '/favicon/apple-touch-icon.png' },
      { rel: 'icon', url: '/favicon/favicon.ico' },
    ],
    manifest: '/favicon/site.webmanifest',
  };
}

export default async function LocaleLayout(props: Props) {
  const { children, params } = props;

  const locale = params.locale;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={fonts.roboto.className}>
        <NextIntlClientProvider messages={messages}>
          <ApolloWrapper>{children}</ApolloWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
