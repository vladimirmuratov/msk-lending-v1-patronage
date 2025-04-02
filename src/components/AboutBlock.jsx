import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const AboutBlock = () => {
    return (
        <Box
            component="section"
            id="about"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: '12px',
                paddingY: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >

            <Typography variant="h2" sx={{
                color: 'var(--main-color)',
                marginBottom: '20px',
                fontSize: { xs: '28px', sm: '34px' },
                fontWeight: 500
            }}>О нас</Typography>

            <Typography
                component="p"
                sx={{
                    fontSize: { xs: 18, sm: 20 },
                    marginBottom: '20px'
                }}
            >
                <Box component="span" sx={{ color: 'var(--red)', fontWeight: 600 }}>Медицинская Сервисная Компания
                    (МСК)</Box> — частная организация, специализирующаяся на платной
                госпитализации и патронаже. Наша миссия — обеспечивать высокий уровень медицинской помощи и заботы,
                предоставляя каждому клиенту комфорт и внимание в самых сложных жизненных ситуациях.
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>

                <Typography
                    variant="h3"
                    sx={{ color: 'var(--main-color)', fontWeight: 500, fontSize: { xs: '24px', sm: '26px' } }}>
                    Наша деятельность:
                </Typography>

                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography variant="h4"
                                    sx={{ color: 'var(--red)', fontSize: { xs: 20, sm: 22 }, fontWeight: 400 }}>
                            Организация госпитализации
                        </Typography>
                    </Box>
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                        Мы помогаем быстро и без стресса пройти процесс госпитализации в лучшие медицинские учреждения
                        Москвы.
                        Наши специалисты обеспечивают сопровождение на всех этапах — от оформления документов до выбора
                        подходящей клиники и врача.
                    </Typography>
                </Box>

                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography variant="h4"
                                    sx={{ color: 'var(--red)', fontSize: { xs: 20, sm: 22 }, fontWeight: 400 }}>
                            Патронажный уход
                        </Typography>
                    </Box>
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                        Наша команда предоставляет профессиональный уход на дому или в стационаре. Мы организуем помощь,
                        начиная с гигиенических процедур и контроля за приемом лекарств, заканчивая реабилитацией и
                        поддержкой психологического комфорта.
                    </Typography>
                </Box>

                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography variant="h4"
                                    sx={{ color: 'var(--red)', fontSize: { xs: 20, sm: 22 }, fontWeight: 400 }}>
                            Круглосуточная поддержка
                        </Typography>
                    </Box>
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                        Мы понимаем, что здоровье и безопасность не терпят отлагательств. Поэтому наши специалисты
                        всегда готовы прийти на помощь в любое время суток.
                    </Typography>
                </Box>

            </Box>

        </Box>
    );
};
