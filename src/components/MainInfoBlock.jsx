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
                fontWeight: 500
            }}>
                Патронажная служба: забота, которая всегда рядом
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                Добро пожаловать в <Box component="span"
                                          sx={{ color: 'var(--main-color)', fontWeight: 600 }}>МСК-Групп</Box>!
                <br />
                Мы предлагаем профессиональную патронажную поддержку высочайшего уровня. Платный патронаж от <Box
                component="span"
                sx={{
                    color: 'var(--main-color)',
                    fontWeight: 600
                }}>МСК-Групп</Box> означает
                индивидуальный подход, когда каждый клиент получает комплексное внимание, включающее уход, опеку и
                персонализированные программы поддержки. Особое направление нашей деятельности – это помощь пожилым
                людям, инвалидам и тем, кто преодолевает последствия болезней или травм в процессе реабилитации.
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                Наша <Box component="span"
                          sx={{ color: 'var(--main-color)', fontWeight: 600 }}>служба патронажа</Box> — это неустанное
                присутствие поддержки и заботы в жизнях вашей семьи. Мы обеспечиваем
                комплексный уход дома, создавая атмосферу безмятежности и гарантируя безопасность для всех пациентов.
                Нашими профессионалами осуществляется тщательный контроль здоровья, активное содействие в повседневных
                делах, а также формирование комфортного пространства даже при непростых обстоятельствах. Передавая
                заботу о родных нашим специалистам — экспертам с глубоким пониманием ценности индивидуальной поддержки и
                вовлеченности во все моменты жизни близких людей.
            </Typography>

            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingY: { xs: '25px', sm: '50px' }, }}>

                <Typography variant="h2"
                            sx={{ color: 'var(--main-color)', fontWeight: 600, fontSize: { xs: '28px', sm: '34px' } }}>Основные
                    услуги платной патронажной службы:</Typography>

                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--main-color)' }} />
                        <Typography variant="h3"
                                    sx={{ color: 'var(--main-color)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>Медицинский
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
                        <CheckIcon sx={{ color: 'var(--main-color)' }} />
                        <Typography variant="h3"
                                    sx={{ color: 'var(--main-color)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>Гигиенические
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
                        <CheckIcon sx={{ color: 'var(--main-color)' }} />
                        <Typography variant="h3"
                                    sx={{ color: 'var(--main-color)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>Социальная
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
                        <CheckIcon sx={{ color: 'var(--main-color)' }} />
                        <Typography variant="h3"
                                    sx={{ color: 'var(--main-color)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>Реабилитация
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
                        <CheckIcon sx={{ color: 'var(--main-color)' }} />
                        <Typography variant="h3"
                                    sx={{ color: 'var(--main-color)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>Индивидуальный
                            подход</Typography>
                    </Box>
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>— Услуги подбираются с учетом
                        потребностей каждого клиента</Typography>
                </Box>

                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--main-color)' }} />
                        <Typography variant="h3"
                                    sx={{ color: 'var(--main-color)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>Квалифицированные
                            специалисты</Typography>
                    </Box>
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>— В штате работают медсестры,
                        сиделки и социальные работники с опытом</Typography>
                </Box>

                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--main-color)' }} />
                        <Typography variant="h3"
                                    sx={{
                                        color: 'var(--main-color)',
                                        fontSize: { xs: 22, sm: 24 },
                                        fontWeight: 500
                                    }}>Гибкость</Typography>
                    </Box>
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>— Возможность организации
                        круглосуточного или временного ухода</Typography>
                </Box>

                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--main-color)' }} />
                        <Typography variant="h3"
                                    sx={{ color: 'var(--main-color)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>Комфорт
                            и безопасность</Typography>
                    </Box>
                    <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>— Услуги предоставляются в привычной
                        для клиента домашней обстановке</Typography>
                </Box>
            </Box>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                Осознавая особую ценность внимания к близким, наша специализированная служба гарантирует
                высококачественный уход с многолетним опытом и безупречной репутацией.
                <br/>
                Платные услуги <Box component="span"
                                    sx={{ color: 'var(--main-color)', fontWeight: 600 }}>МСК-Групп</Box> не
                только обеспечивают профессиональную поддержку, но и воплощают искреннюю заботу — как проявление любви к
                тем, кто особенно нуждается в поддержке и тепле человеческого участия.
            </Typography>
        </Box>
    );
};
