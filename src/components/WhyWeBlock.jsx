import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const WhyWeBlock = () => {
    return (
        <Box
            component="section"
            id="whyWe"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: '12px',
                paddingY: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >

            <Typography
                variant="h2"
                sx={{
                    color: 'var(--main-color)',
                    marginBottom: '20px',
                    fontSize: { xs: '28px', sm: '34px' },
                    fontWeight: 500
                }}
            >
                Почему выбирают нас?
            </Typography>

            <Box sx={{display: 'flex', flexDirection: 'column', gap: {xs: '5px', sm: '10px'}}}>

                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--main-color)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}
                        >
                            Индивидуальный подход
                        </Typography>
                    </Box>
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                        Мы учитываем уникальные потребности каждого клиента, создавая персонализированные планы ухода.
                    </Typography>
                </Box>

                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--main-color)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}
                        >
                            Опытные специалисты
                        </Typography>
                    </Box>
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                        Наши сотрудники — это квалифицированные врачи, медсестры, сиделки и социальные работники с
                        большим
                        опытом.
                    </Typography>
                </Box>

                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--main-color)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}
                        >
                            Доверие и конфиденциальность
                        </Typography>
                    </Box>
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                        Мы обеспечиваем полную защиту личных данных и создаем комфортную, доверительную атмосферу.
                    </Typography>
                </Box>

                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--main-color)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}
                        >
                            Комплексность услуг
                        </Typography>
                    </Box>
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                        Мы предоставляем полный спектр услуг от первичной консультации до реабилитации и долгосрочного
                        ухода.
                    </Typography>
                </Box>

            </Box>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginTop: '20px' }}>
                Мы верим, что забота — это не только профессиональная обязанность, но и искреннее желание помочь. Каждый
                наш клиент чувствует поддержку, внимание и уважение, а наши услуги направлены на то, чтобы вернуть людям
                уверенность в завтрашнем дне.
                <br />
                С нами ваше здоровье — в надежных руках!
            </Typography>

        </Box>
    );
};
