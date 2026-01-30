import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';
import { Box } from '@mui/material';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/navigation/Navigation';
import { Metrika } from '@/components/Metrika';
import { Suspense } from 'react';
import theme from '@/theme';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
    metadataBase: new URL('https://msk-patronage.vercel.app/'),
    title: 'Медицинский патронаж — профессиональный уход и наблюдение',
    description: 'Медицинский патронаж на дому и в стационаре: уход, контроль состояния, помощь врачей и медсестёр. Индивидуальный подход к пациенту.',
    keywords: ['платный патронаж, патронаж на дому, патронаж пожилых людей, услуги патронажа, патронажная сестра, сиделка патронаж, медицинский патронаж, патронаж больных на дому, патронаж тяжелобольных, патронаж лежачих больных, патронаж круглосуточно, патронаж с выездом врача, патронаж в Москве, услуги сиделки и патронажа, платный уход на дому, патронаж частный, патронаж престарелых, патронаж с медицинской помощью, патронажные услуги срочно, патронаж для инвалидов'],
    other: {
        ['yandex-verification']: '68327eac51dedb18',
    },
    openGraph: {
        title: 'Медицинская Сервисная Компания. Патронажные услуги на дому — профессиональный уход за больными и пожилыми. 8 (499) 719-81-00, 24/7',
        description: 'Квалифицированный уход на дому: медицинские процедуры, помощь с гигиеной, контроль состояния. Патронаж медсестры или сиделки. Работаем ежедневно.',
        images: ['/images/img1.webp'],
        url: 'https://msk-patronage.vercel.app/',
        type: 'website',
        locale: 'ru_RU',
    },
    alternates: {
        canonical: 'https://msk-patronage.vercel.app',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" prefix="og: https://ogp.me/ns#">
        <body className={montserrat.className}>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <Box className="container">
                    <Suspense>
                        <Navigation />
                        {children}
                        <Footer />
                        <Metrika />
                    </Suspense>
                </Box>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
