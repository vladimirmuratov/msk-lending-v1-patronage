import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const MainInfoBlock = () => {
    return (
        <Box
            component="section"
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
                fontWeight: 600
            }}>
                Патронажная служба: забота, которая всегда рядом
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                <Box component="span" sx={{ color: 'var(--red)', fontWeight: 600 }}>
                    Медицинская Сервисная Компания (МСК)</Box> предлагает профессиональную патронажную поддержку.
                Платный патронаж
                от <Box component="span" sx={{ color: 'var(--red)', fontWeight: 600 }}>МСК</Box> обеспечивает
                индивидуальный подход, при котором каждый клиент получает комплексное внимание,
                включая уход, опеку и персонализированные программы поддержки. Мы специализируемся на помощи пожилым
                людям, инвалидам и тем, кто восстанавливается после болезней или травм.
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                Наша <Box component="span" sx={{ color: 'var(--red)', fontWeight: 600 }}>служба
                патронажа</Box> обеспечивает постоянную поддержку и заботу для вашей семьи. Организуем комплексный
                уход на дому, создавая атмосферу спокойствия и гарантируя безопасность пациентов. Профессионалы <Box
                component="span" sx={{ color: 'var(--red)', fontWeight: 600 }}>МСК</Box> осуществляют контроль здоровья,
                помогают в повседневных делах и формируют комфортное пространство в
                любых условиях. Доверяя заботу о близких нашим специалистам, вы получаете экспертов с глубоким
                пониманием ценности индивидуальной поддержки.
            </Typography>

            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingY: { xs: '25px', sm: '50px' }, }}>

                <Typography variant="h2"
                            sx={{
                                color: 'var(--main-color)',
                                fontWeight: 600,
                                fontSize: { xs: '28px', sm: '34px' },
                                marginBottom: '20px'
                            }}>Основные
                    услуги нашей патронажной службы:</Typography>

                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography variant="h3"
                                    sx={{ color: 'var(--red)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>Медицинский
                            уход</Typography>
                    </Box>
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>— Контроль приема
                        лекарств</Typography>
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>— Смена повязок и перевязка
                        ран</Typography>
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>— Измерение давления, температуры,
                        уровня сахара в крови и других показателей здоровья</Typography>
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>— Организация процедур на дому
                        (инъекции, капельницы)</Typography>
                </Box>

                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography variant="h3"
                                    sx={{ color: 'var(--red)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>Гигиенические
                            процедуры</Typography>
                    </Box>
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>— Помощь в умывании, принятии душа
                        или ванны</Typography>
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>— Смена одежды, постельного и
                        нательного белья</Typography>
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>— Уход за кожей и
                        волосами</Typography>
                </Box>

                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography variant="h3"
                                    sx={{ color: 'var(--red)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>Социальная
                            поддержка</Typography>
                    </Box>
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>— Сопровождение на прогулках, к
                        врачу или в другие учреждения</Typography>
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>— Общение, поддержание
                        психологического комфорта</Typography>
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>— Организация досуга: чтение,
                        настольные игры, разговоры</Typography>
                </Box>

                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography variant="h3"
                                    sx={{ color: 'var(--red)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>Реабилитация
                            и физическая активность</Typography>
                    </Box>
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>— Помощь в выполнении
                        рекомендованных упражнений</Typography>
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>— Организация массажа или других
                        восстановительных процедур</Typography>
                </Box>
            </Box>

            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingY: { xs: '25px', sm: '50px' }, }}>

                <Typography variant="h2"
                            sx={{ color: 'var(--main-color)', fontWeight: 600, fontSize: { xs: '28px', sm: '34px' } }}>Преимущества
                    платной патронажной службы:</Typography>

                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography variant="h3"
                                    sx={{ color: 'var(--red)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>Индивидуальный
                            подход</Typography>
                    </Box>
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>— Услуги подбираются с учетом
                        потребностей каждого клиента</Typography>
                </Box>

                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography variant="h3"
                                    sx={{ color: 'var(--red)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>Квалифицированные
                            специалисты</Typography>
                    </Box>
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>— В штате работают медсестры,
                        сиделки и социальные работники с опытом</Typography>
                </Box>

                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography variant="h3"
                                    sx={{
                                        color: 'var(--red)',
                                        fontSize: { xs: 22, sm: 24 },
                                        fontWeight: 500
                                    }}>Гибкость</Typography>
                    </Box>
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>— Возможность организации
                        круглосуточного или временного ухода</Typography>
                </Box>

                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography variant="h3"
                                    sx={{ color: 'var(--red)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>Комфорт
                            и безопасность</Typography>
                    </Box>
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>— Услуги предоставляются в привычной
                        для клиента домашней обстановке</Typography>
                </Box>
            </Box>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                Специализированная служба <Box component="span"
                                               sx={{ color: 'var(--red)', fontWeight: 600 }}>МСК</Box> обеспечивает
                высококачественный уход с многолетним опытом. Мы предлагаем
                профессиональную поддержку и искреннюю заботу для тех, кто нуждается в тепле человеческого участия.
            </Typography>
        </Box>
    );
};
