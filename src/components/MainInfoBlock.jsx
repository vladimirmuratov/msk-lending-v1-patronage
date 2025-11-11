import { memo } from 'react';
import { Box, Typography } from '@mui/material';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';

export const MainInfoBlock = memo(() => {
    return (
        <Box
            component="section"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: '12px',
                paddingTop: { xs: '25px', sm: '50px' },
                paddingBottom: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >
            <Box
                component="article"
                sx={{
                    paddingBottom: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Платный патронаж на дому в Москве
                </Typography>

                <Typography
                    sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    Вы замечаете, что вашему близкому становится трудно справляться без посторонней помощи? В этом нет
                    ничего зазорного — возраст, болезни или просто временное ухудшение самочувствия выбивают устойчивую
                    почву из-под ног не только у самого человека, но и у всей семьи.
                </Typography>
                <Typography
                    sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    Мы в <Box component="span" sx={{ color: 'var(--red)' }}>Медицинской Сервисной
                    Компании</Box> подошли к этому вопросу по-человечески: собрали команду
                    заботливых и опытных специалистов, которые берут на себя всю ежедневную рутину — от введения
                    лекарств до приготовления еды и душевных разговоров. Наша команда сиделок и медицинских сестер
                    работает круглосуточно и
                    по-настоящему вовлечена в свое дело. Для нас это не просто работа: мы стараемся вернуть человеку
                    ощущение уюта и спокойствия — то самое чувство, когда рядом кто-то надежный.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                    Будь то долгая болезнь или временные трудности — ваш близкий не останется один ни днем, ни ночью.
                </Typography>

            </Box>

            <Box
                component="article"
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Что включает патронаж на дому
                </Typography>

                <Typography
                    sx={{
                        fontSize: { xs: 18, sm: 20 },
                        color: 'var(--main-color)',
                        marginBottom: '10px',
                    }}
                >
                    <Box component="span" sx={{ color: 'var(--red)' }}>Патронаж на дому</Box> — это, по сути, та забота,
                    которую обычно дарят самые близкие люди. Только в нашем
                    случае у этого «заботливого друга» есть ещё и опыт работы в медицине.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>Что входит?</Box> Для начала — мы регулярно
                    следим за основными показателями: измеряем давление, считаем
                    пульс, контролируем температуру. Это банальные вещи, но именно благодаря им можно вовремя заметить
                    тревожные звоночки и не пропустить начало чего-то серьёзного (поверьте, иногда одно утро с "не тем"
                    пульсом – и всё уже иначе! ).
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    Приём лекарств и процедуры — <Box component="span" sx={{ color: 'var(--red)' }}>второй пункт</Box>.
                    Тут важно не просто дать таблетку «по часам», а
                    объяснить, проследить за реакцией, учесть нюансы приёма. Капельницы, уколы или перевязки — всё
                    делаем аккуратно и внимательно.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>Есть детали жизни, которые часто остаются за
                        кадром</Box> — уход за кожей и профилактика пролежней. На
                    первый взгляд мелочь: ну подумаешь, смазать кремом спину... А ведь именно это сохраняет человеку
                    комфорт и защищает здоровье! Часто пациенты стесняются попросить об этом родных, зато нам могут
                    спокойно довериться.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>Движение</Box> — вообще отдельная песня.
                    Поддержать при вставании с кровати или помочь добраться до ванной
                    — маленький подвиг для тех, кто ослаблен болезнью или возрастом. Мы это делаем тактично и терпеливо,
                    чтобы человек чувствовал уверенность и опору.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>Помогаем с кормлением</Box> (иногда нужен особый
                    подход к еде), сопровождаем на прогулках… И давайте
                    честно: просто поговорить о погоде или послушать истории из жизни порой не менее ценно, чем любая
                    процедура.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>Всё это идет рука об руку с поддержкой
                        семьи</Box>. Регулярно рассказываем родным о состоянии пациента без
                    прикрас и лишней тревоги: что изменилось, в каком настроении человек сегодня, есть ли улучшения или
                    нужны советы от врача.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                    Самое главное тут — не список услуг, а ощущение: вы точно знаете, что ваш близкий не один день за
                    днём получает внимание и заботу. В этом, пожалуй, весь смысл патронажа на дому.
                </Typography>

            </Box>

            <Box
                component="article"
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Кто заботится о ваших близких
                </Typography>

                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    В <Box component="span" sx={{ color: 'var(--red)' }}>Медицинской Сервисной Компании
                    (МСК-групп)</Box> работают
                    не просто сотрудники, а люди, для которых забота стала профессией и, что уж
                    скрывать, частью их жизни. Среди них — опытные сиделки, квалифицированные медицинские сестры и
                    врачи. Каждый из них — с реальным опытом работы с пожилыми людьми и теми, кто нуждается в особом
                    уходе.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    Перед тем как начать работать с подопечными, наши специалисты проходят обязательное медицинское
                    обследование (здоровье — прежде всего) и погружаются в стандарты современного ухода. Это не просто
                    формальность: обучение помогает им понимать тонкие моменты — как подать руку так, чтобы не обидеть
                    гордого человека; как услышать то, о чем подопечный скажет шепотом.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '5px' }}>
                    Можно выбрать тот формат поддержки, который подходит именно вам:
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '5px' }}>
                    — приходить на несколько часов днем или ночью;
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '5px' }}>
                    — оформить круглосуточный патронаж;
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    — или пригласить помощника с проживанием дома (например, когда родственник в отъезде или нужен
                    длительный реабилитационный период).
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                    По сути, вы получаете того самого "своего" человека в семье на время, когда поддержка особенно
                    нужна.
                </Typography>

            </Box>

            <Box
                component="article"
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Плюсы патронажа с МСК-групп
                </Typography>

                <Typography sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>Во-первых</Box>, пациенты у нас на связи с
                    врачом, а не просто «под присмотром». Серьёзно, медицинский
                    контроль — не пустые слова: всё здоровье пациента — под профессиональным прицелом. Например, если
                    вдруг что-то изменяется в состоянии, мы это не пропустим.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>Дальше — про отношение</Box>. Наши сотрудники не
                    ограничиваются сухим исполнением инструкций. Людям часто
                    нужен не только уход, но и обычное человеческое участие: поговорить, выслушать, поддержать
                    по-человечески — это часть нашей работы.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>Есть ещё один нюанс</Box>: покрываем всю Москву и
                    область. То есть вопрос «А вы к нам доедете? » обычно даже не стоит.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>Самое интересное — скорость</Box>: можем приехать
                    буквально за пару часов (в крупных городах это иногда сродни чуду). Человеку плохо? В этот же день
                    будет помощь.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>Можно оформить услуги хоть на сутки</Box> — хоть
                    сопровождать человека месяцами. Иногда нужна краткая поддержка после операции, а кто-то ищет
                    надёжную компанию на долгое время. Мы гибки в этом вопросе.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>Ну и самое важное</Box> для многих клиентов —
                    персональный подход: подбираем помощника так, чтобы человеку
                    было комфортно именно с ним. Опыт показывает: когда находишь «своего» специалиста, отношения
                    строятся совсем иначе.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                    Вот такие у нас рабочие будни.
                </Typography>

            </Box>

            <Box
                component="article"
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Какие бывают виды патронажа?
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', }}>
                    <Box sx={{ marginBottom: '10px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Уход за лежачими пациентами
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Это не просто про сменить простыни и принести воду. Здесь всё вращается вокруг постоянного
                            внимания: нужно следить за гигиеной, предупреждать пролежни, по часам поворачивать человека
                            в кровати, а иногда — уметь заметить малейшее изменение в состоянии (например, когда
                            температура вдруг чуть подскочила).
                        </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '10px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Патронаж после инсульта или операции
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Когда человек только после больницы — особенно после тяжёлых диагнозов — ему требуется
                            буквально “поймать руку” на новой жизни. Патронаж тут часто превращается в микс из
                            медицинских манипуляций, эмоциональной поддержки и обучения родственников базовым вещам: как
                            помочь одеться, как кормить лёжа и даже как морально не поддаться унынию.
                        </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '10px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Уход за пожилыми людьми
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Возраст — штука упрямая: вчера ещё сам ходил на рынок, а сегодня уже сложно застегнуть
                            пуговицу. Здесь патронаж чаще похож на искреннюю заботу о родителях: помощь с бытовыми
                            хлопотами, контроль приёма лекарств (их ведь иногда целая горсть), да и просто компания за
                            завтраком.
                        </Typography>
                    </Box>
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Временный или постоянный уход
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Бывает, что поддержка нужна всего на несколько недель — скажем, после перелома; а кому-то
                            требуется годами — например, при хронических заболеваниях. Гибкость тут решает всё: кто-то
                            зовёт сиделку “подменить дочь” на период командировки, а у кого-то патронаж становится
                            частью привычного режима.
                        </Typography>
                    </Box>
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Медицинское наблюдение на дому
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Иногда человек дома, но фактически мини-больница переехала к нему: измерение давления с утра
                            и вечером, постановка уколов (дома это куда приятнее! ), контроль сахара при диабете... В
                            общем, всё то же самое наблюдение врача и медсестры, только без белых стен.
                        </Typography>
                    </Box>
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'flex-start' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                                Паллиативный уход
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Об этом не принято говорить громко, хотя тишина здесь бывает обманчива. Паллиатива нужна
                            тем, кого уже нельзя вылечить — но можно максимально облегчить боль или мучения. Это где
                            каждая мелочь важна: подобрать правильную позу в кровати, найти слова поддержки для семьи...
                            Иногда такого ухода ждут всей душой даже сами родные.
                        </Typography>
                    </Box>

                    <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginTop: '15px' }}>
                        Вот такая живая мозаика патронажа — за каждым видом стоят истории конкретных людей.
                    </Typography>

                </Box>
            </Box>

            <Box
                component="article"
                sx={{
                    paddingTop: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Почему выбирают МСК-групп
                </Typography>

                <Typography sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                    Почему люди выбирают <Box component="span" sx={{ color: 'var(--red)' }}>Медицинскую Сервисную
                    Компанию</Box>? Если отбросить формальности и говорить по-простому — потому что нам
                    не все равно. За фасадом слов "уход" и "забота" стоит настоящий человеческий контакт: когда твоя
                    мама или дедушка оказываются у нас, ты точно знаешь, что о них будут думать и беспокоиться, как о
                    своих.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    Это ведь всегда про доверие — кому можно поручить близкого человека, если в семье нет ни врачей, ни
                    опыта ухода за пожилыми? Мы стараемся менять сам подход: не просто накормить по расписанию или
                    проконтролировать прием лекарств, а быть рядом так, чтобы прожить маленькую часть жизни вместе с
                    этим человеком. Замечать его настроение, подметить привычки, подстроиться под его "режим",
                    улыбнуться тогда, когда особенно тоскливо.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    В общем, наши пациенты получают больше, чем услугу по расписанию; они находят рядом людей с сердцем
                    и вниманием. Это и делает МСК-групп особенными — мы сами воспринимаем заботу не как трудную
                    обязанность "по инструкции", а как дело для души.
                </Typography>
            </Box>

        </Box>
    );
});
