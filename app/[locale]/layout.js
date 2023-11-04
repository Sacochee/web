import Header from '@/compoments/header/header';
import "../globals.css"
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import Footer from '@/compoments/footer/footer';

export const metadata = {
  title: 'local',
  description: 'Generated by create next app',
}

export default async function LocaleLayout({children, params: {locale}}) {
    let message
    try {
        message = (await import(`../../message/${locale}.json`)).default;
      } catch (error) {
        notFound();
      }

  return (
    <html lang={locale}>
        <body>
            <NextIntlClientProvider locale={locale} messages={message}>
                <Header/>
                {children} 
                <Footer/>
            </NextIntlClientProvider>
        </body>
    </html>
  )
}
