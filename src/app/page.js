import { Banner } from '@/components/Banner';
import { text1 } from '@/config';
import { TextBlock } from '@/components/TextBlock';
import { ContactsBlock } from '@/components/ContactsBlock';
import { FormAction } from '@/components/FormAction';
import { MainInfoBlock } from '@/components/MainInfoBlock';
import PhoneBlock from '@/components/PhoneBlock';

export default function Home() {
    return (
        <main style={{ position: 'relative' }}>
            <Banner />
            {/*<CardsBlock />*/}
            <PhoneBlock text="Патронаж пожилых и лежачих больных. Звоните!"
                        style={{ paddingTop: { xs: '50px', sm: '100px' } }} />
            <MainInfoBlock />
            <PhoneBlock text="Надёжный уход за близкими — узнайте условия по телефону" />
            {/*<AboutBlock />*/}
            {/*<WhyWeBlock />*/}
            {/*<PhoneBlock text="Патронаж пожилых и лежачих больных. Звоните!" />*/}
            {/*<WeRespondBlock />*/}
            {/*<WhatWeOfferBlock/>*/}
            {/*<DirectionsOfHospitalizationBlock />*/}
            {/*<PhoneBlock />*/}
            {/*<BaseAccordion id="faq" title="Частые вопросы" items={faq} />*/}
            {/*<CoordinatorBlock />*/}
            {/*<PartnersBlock />*/}
            {/*<PhoneBlock />*/}
            {/*<BaseAccordion id="service" title="Услуги" items={services} />*/}
            <TextBlock text={text1} />
            <ContactsBlock />
            <FormAction />
        </main>

    );
}
