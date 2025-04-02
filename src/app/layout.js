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
    title: 'Медицинская Сервисная Компания. Патронажные услуги в Москве. 8 (499) 719-81-00, 24/7',
    description: 'Обратитесь в нашу патронажную службу 24/7 для профессиональной помощи. Звоните +7 (499) 719-81-00.',
    keywords: ['платная патронажная служба'],
    other: {
        ['yandex-verification']: '86044fbe8b8aeb08',
    },
    openGraph: {
        title: 'Медицинская Сервисная Компания. Патронажные услуги. 8 (499) 719-81-00, 24/7',
        description: ' Обратитесь в нашу патронажную службу 24/7 для профессиональной помощи. Звоните +7 (499) 719-81-00.',
        images: ['/images/img1.webp'],
        url: 'https://patronage.mskdoctor.ru/',
        type: 'website',
        locale: 'ru_RU',
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
