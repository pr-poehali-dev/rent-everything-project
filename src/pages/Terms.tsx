import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const sections = [
  {
    id: 'general',
    title: 'Общие положения',
    icon: 'FileText',
    items: [
      {
        question: 'Что такое RentHub?',
        answer: 'RentHub — это онлайн-платформа для аренды товаров между физическими лицами. Мы обеспечиваем безопасную среду для сделок, проверяем арендодателей и гарантируем защиту платежей.'
      },
      {
        question: 'Кто может пользоваться платформой?',
        answer: 'Платформой могут пользоваться физические лица старше 18 лет, являющиеся резидентами РФ. Для регистрации необходимо подтвердить личность и согласиться с правилами сервиса.'
      },
      {
        question: 'Как зарегистрироваться?',
        answer: 'Регистрация происходит через email или телефон. После создания аккаунта необходимо пройти верификацию личности, загрузив фото документа и селфи для подтверждения.'
      }
    ]
  },
  {
    id: 'rental',
    title: 'Правила аренды',
    icon: 'Calendar',
    items: [
      {
        question: 'Как арендовать товар?',
        answer: 'Выберите товар в каталоге, укажите даты аренды и нажмите "Забронировать". После подтверждения арендодателя внесите предоплату через платформу. В указанную дату встретьтесь с арендодателем для передачи товара.'
      },
      {
        question: 'Минимальный и максимальный срок аренды',
        answer: 'Минимальный срок аренды — 1 день. Максимальный срок устанавливается арендодателем индивидуально для каждого товара, обычно до 30 дней. Для более длительной аренды свяжитесь с владельцем напрямую.'
      },
      {
        question: 'Можно ли отменить бронирование?',
        answer: 'Да, отмена возможна за 24 часа до начала аренды без штрафов. При отмене позже чем за 24 часа удерживается 30% стоимости. Арендодатель может отменить бронирование бесплатно за 48 часов.'
      },
      {
        question: 'Что делать при получении товара?',
        answer: 'Осмотрите товар в присутствии арендодателя, проверьте его работоспособность и внешний вид. Сфотографируйте товар со всех сторон. Подтвердите получение в приложении RentHub — только после этого деньги переводятся арендодателю.'
      }
    ]
  },
  {
    id: 'owner',
    title: 'Для арендодателей',
    icon: 'User',
    items: [
      {
        question: 'Как сдать товар в аренду?',
        answer: 'Создайте объявление с фотографиями, описанием и ценой. Укажите условия аренды, залог и доступные даты. После модерации (до 24 часов) объявление станет видно всем пользователям.'
      },
      {
        question: 'Какие товары можно сдавать?',
        answer: 'Разрешены: инструменты, электроника, спорттовары, фототехника, транспорт. Запрещены: оружие, медикаменты, документы, живые существа, скоропортящиеся продукты, контрафакт.'
      },
      {
        question: 'Комиссия платформы',
        answer: 'RentHub берёт комиссию 12% от стоимости каждой аренды. Комиссия автоматически вычитается при переводе средств на ваш счёт. Первые 3 сделки — без комиссии для новых арендодателей.'
      },
      {
        question: 'Как установить залог?',
        answer: 'Залог устанавливается на усмотрение арендодателя, обычно 50-100% стоимости товара. Залог блокируется на карте арендатора и возвращается автоматически после возврата товара без повреждений.'
      }
    ]
  },
  {
    id: 'payment',
    title: 'Оплата и залог',
    icon: 'CreditCard',
    items: [
      {
        question: 'Способы оплаты',
        answer: 'Принимаем банковские карты (Visa, MasterCard, Мир), электронные кошельки (ЮMoney, QIWI), оплату через СБП. Все платежи защищены 3D-Secure.'
      },
      {
        question: 'Когда списываются деньги?',
        answer: 'Стоимость аренды блокируется при бронировании. Списание происходит после подтверждения арендатором получения товара. Залог блокируется отдельно и возвращается после возврата товара.'
      },
      {
        question: 'Возврат средств',
        answer: 'При отмене аренды средства возвращаются на карту в течение 3-5 рабочих дней. Возврат залога происходит автоматически после подтверждения возврата товара арендодателем в течение 24 часов.'
      },
      {
        question: 'Что делать при повреждении товара?',
        answer: 'Арендодатель фиксирует повреждение через приложение с фото. Из залога автоматически удерживается стоимость ремонта или компенсация. При споре о размере суммы вмешивается служба поддержки.'
      }
    ]
  },
  {
    id: 'safety',
    title: 'Безопасность',
    icon: 'Shield',
    items: [
      {
        question: 'Проверка пользователей',
        answer: 'Все пользователи проходят верификацию по паспорту и селфи. Проверенные арендодатели отмечены бейджем. Мы проверяем наличие негативных отзывов и блокируем недобросовестных пользователей.'
      },
      {
        question: 'Защита от мошенничества',
        answer: 'Все платежи проходят через платформу. Никогда не переводите деньги напрямую. Подозрительную активность сообщайте в поддержку. Товары высокой стоимости застрахованы автоматически.'
      },
      {
        question: 'Страхование товаров',
        answer: 'Товары стоимостью от 50 000 ₽ автоматически застрахованы от кражи и повреждений. Для других товаров можно оформить добровольное страхование за 5% от стоимости аренды.'
      },
      {
        question: 'Что делать при краже?',
        answer: 'Немедленно обратитесь в полицию и получите справку о краже. Сообщите в поддержку RentHub в течение 24 часов. Для застрахованных товаров компенсация выплачивается в течение 14 дней после подтверждения кражи.'
      }
    ]
  },
  {
    id: 'disputes',
    title: 'Споры и нарушения',
    icon: 'AlertCircle',
    items: [
      {
        question: 'Как решаются споры?',
        answer: 'Сначала попробуйте договориться с другой стороной в чате. Если не получается — откройте диспут в разделе "Помощь". Модератор изучит переписку, фото и примет решение в течение 48 часов.'
      },
      {
        question: 'Что считается нарушением?',
        answer: 'Нарушения: обман, оскорбления, передача товара в ненадлежащем состоянии, отказ вернуть товар, требование оплаты вне платформы, фейковые отзывы. За нарушения — предупреждение, штраф или блокировка аккаунта.'
      },
      {
        question: 'Жалобы на пользователей',
        answer: 'Отправьте жалобу через профиль пользователя с описанием проблемы и доказательствами. Модерация рассматривает обращение в течение 24 часов. За подтверждённые нарушения применяются санкции.'
      },
      {
        question: 'Блокировка аккаунта',
        answer: 'Аккаунт блокируется при систематических нарушениях, мошенничестве или жалобах от нескольких пользователей. Временная блокировка — от 7 дней, постоянная — без возможности восстановления.'
      }
    ]
  }
];

export default function Terms() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Icon name="Package" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-foreground">RentHub</h1>
            </a>
            <Button variant="outline" asChild>
              <a href="/">
                <Icon name="Home" size={18} className="mr-2" />
                На главную
              </a>
            </Button>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4" variant="secondary">
              <Icon name="FileText" size={14} className="mr-1" />
              Актуально на 31.12.2024
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Правила пользования
            </h1>
            <p className="text-lg text-muted-foreground">
              Подробное руководство по использованию платформы RentHub для безопасной аренды
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 border-b bg-white sticky top-[73px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="outline"
                size="sm"
                className="flex items-center gap-2 whitespace-nowrap transition-all hover:scale-105"
                onClick={() => scrollToSection(section.id)}
              >
                <Icon name={section.icon as any} size={16} />
                {section.title}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, sectionIndex) => (
              <Card 
                key={section.id} 
                id={section.id}
                className="animate-fade-in scroll-mt-32"
                style={{ animationDelay: `${sectionIndex * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={section.icon as any} className="text-primary" size={24} />
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {section.items.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left hover:text-primary transition-colors">
                          <span className="font-medium">{item.question}</span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="MessageCircle" size={40} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Остались вопросы?</h2>
            <p className="text-white/90 text-lg mb-8">
              Наша служба поддержки работает 24/7 и всегда готова помочь вам с любыми вопросами
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2">
                <Icon name="Mail" size={20} />
                Написать в поддержку
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-white/10 hover:bg-white/20 border-white/30 text-white">
                <Icon name="Phone" size={20} />
                +7 (800) 555-35-35
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="Info" className="text-primary" size={24} />
                  Важная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Согласие с правилами:</strong> Регистрируясь на платформе, вы автоматически соглашаетесь со всеми правилами и условиями использования сервиса RentHub.
                </p>
                <p>
                  <strong className="text-foreground">Изменения:</strong> Мы оставляем за собой право вносить изменения в правила. О существенных изменениях пользователи уведомляются по email за 7 дней.
                </p>
                <p>
                  <strong className="text-foreground">Ответственность:</strong> RentHub выступает посредником между арендодателем и арендатором. Мы не несём ответственности за качество товаров, но гарантируем безопасность платежей и помогаем в решении споров.
                </p>
                <p>
                  <strong className="text-foreground">Конфиденциальность:</strong> Ваши персональные данные защищены и используются только для обеспечения работы платформы. Подробнее в <a href="#" className="text-primary hover:underline">Политике конфиденциальности</a>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Package" className="text-white" size={20} />
                </div>
                <span className="text-lg font-bold">RentHub</span>
              </div>
              <p className="text-gray-400 text-sm">
                Платформа для аренды всего, что вам нужно
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вакансии</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Безопасность</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Правила</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Соцсети</h4>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Icon name="Mail" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 RentHub. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
