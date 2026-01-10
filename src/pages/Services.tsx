import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const categories = [
  { id: 'all', name: 'Все услуги', icon: 'LayoutGrid', count: 156 },
  { id: 'electronics', name: 'Электроника', icon: 'Smartphone', count: 42 },
  { id: 'tools', name: 'Инструменты', icon: 'Wrench', count: 38 },
  { id: 'sports', name: 'Спорт', icon: 'Bike', count: 24 },
  { id: 'photo', name: 'Фототехника', icon: 'Camera', count: 18 },
  { id: 'transport', name: 'Транспорт', icon: 'Car', count: 15 },
  { id: 'music', name: 'Музыка', icon: 'Music', count: 12 },
  { id: 'other', name: 'Разное', icon: 'Package', count: 7 },
];

const services = [
  {
    id: 1,
    title: 'Дрель ударная Makita',
    category: 'tools',
    owner: 'Алексей М.',
    rating: 4.9,
    reviews: 47,
    price: 500,
    period: 'день',
    deposit: 3000,
    location: 'Москва, м. Сокол',
    image: '🔨',
    verified: true,
    available: true,
    description: 'Профессиональная ударная дрель, мощность 750W',
  },
  {
    id: 2,
    title: 'Фотоаппарат Canon EOS R6',
    category: 'photo',
    owner: 'Дмитрий К.',
    rating: 5.0,
    reviews: 32,
    price: 3500,
    period: 'день',
    deposit: 80000,
    location: 'Санкт-Петербург, центр',
    image: '📷',
    verified: true,
    available: true,
    description: 'Полнокадровая беззеркалка с объективом 24-105mm',
  },
  {
    id: 3,
    title: 'Электросамокат Xiaomi Pro 2',
    category: 'transport',
    owner: 'Мария С.',
    rating: 4.7,
    reviews: 28,
    price: 800,
    period: 'день',
    deposit: 15000,
    location: 'Москва, м. ВДНХ',
    image: '🛴',
    verified: true,
    available: true,
    description: 'Скорость до 25 км/ч, запас хода 45 км',
  },
  {
    id: 4,
    title: 'Палатка 4-местная Quechua',
    category: 'sports',
    owner: 'Игорь П.',
    rating: 4.8,
    reviews: 19,
    price: 600,
    period: 'сутки',
    deposit: 5000,
    location: 'Казань, Вахитовский район',
    image: '⛺',
    verified: true,
    available: false,
    description: 'Автоматическая палатка, водонепроницаемая',
  },
  {
    id: 5,
    title: 'PlayStation 5 + 2 геймпада',
    category: 'electronics',
    owner: 'Андрей Л.',
    rating: 4.9,
    reviews: 56,
    price: 1200,
    period: 'день',
    deposit: 35000,
    location: 'Москва, м. Парк Культуры',
    image: '🎮',
    verified: true,
    available: true,
    description: 'Консоль + коллекция из 15 игр',
  },
  {
    id: 6,
    title: 'Швейная машинка Brother',
    category: 'other',
    owner: 'Ольга В.',
    rating: 4.6,
    reviews: 12,
    price: 400,
    period: 'день',
    deposit: 8000,
    location: 'Екатеринбург, Центр',
    image: '🪡',
    verified: false,
    available: true,
    description: 'Компьютеризированная, 40 швейных операций',
  },
  {
    id: 7,
    title: 'Сноуборд Burton + крепления',
    category: 'sports',
    owner: 'Максим Р.',
    rating: 5.0,
    reviews: 23,
    price: 900,
    period: 'день',
    deposit: 18000,
    location: 'Сочи, Красная Поляна',
    image: '🏂',
    verified: true,
    available: true,
    description: 'Длина 158см, с ботинками 42 размера',
  },
  {
    id: 8,
    title: 'Электрогитара Fender Stratocaster',
    category: 'music',
    owner: 'Сергей Т.',
    rating: 4.9,
    reviews: 15,
    price: 1500,
    period: 'день',
    deposit: 45000,
    location: 'Москва, м. Китай-город',
    image: '🎸',
    verified: true,
    available: true,
    description: 'С комбоусилителем Marshall 50W',
  },
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const filteredServices = services.filter((service) => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return b.reviews - a.reviews;
    }
  });

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
            <div className="flex items-center gap-3">
              <Button variant="ghost" asChild>
                <a href="/">
                  <Icon name="Home" size={18} className="mr-2" />
                  Главная
                </a>
              </Button>
              <Button variant="default">
                <Icon name="PlusCircle" size={18} className="mr-2" />
                Сдать в аренду
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <Badge className="mb-4" variant="secondary">
              <Icon name="Package" size={14} className="mr-1" />
              {services.length} активных предложений
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Каталог услуг
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Арендуйте всё, что нужно для ваших задач и увлечений
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Icon
                  name="Search"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  size={20}
                />
                <Input
                  placeholder="Поиск по названию или описанию..."
                  className="pl-10 h-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-[200px] h-12">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Популярные</SelectItem>
                  <SelectItem value="rating">По рейтингу</SelectItem>
                  <SelectItem value="price-low">Дешевле</SelectItem>
                  <SelectItem value="price-high">Дороже</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="w-full flex-wrap h-auto gap-2 bg-transparent justify-start">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  <Icon name={cat.icon as any} size={16} className="mr-2" />
                  {cat.name}
                  <Badge variant="secondary" className="ml-2">
                    {cat.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-8">
              {sortedServices.length === 0 ? (
                <Card className="py-16">
                  <CardContent className="text-center">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Search" size={40} className="text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
                    <p className="text-muted-foreground">
                      Попробуйте изменить параметры поиска или выбрать другую категорию
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {sortedServices.map((service, index) => (
                    <Card
                      key={service.id}
                      className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-8xl">
                          {service.image}
                        </div>
                        {!service.available && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <Badge variant="secondary">Забронировано</Badge>
                          </div>
                        )}
                        {service.verified && (
                          <Badge className="absolute top-3 right-3 bg-green-500 hover:bg-green-600">
                            <Icon name="CheckCircle" size={12} className="mr-1" />
                            Проверен
                          </Badge>
                        )}
                      </div>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg line-clamp-1">{service.title}</CardTitle>
                        <CardDescription className="line-clamp-2">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-2xl font-bold text-primary">
                              {service.price} ₽
                            </div>
                            <div className="text-xs text-muted-foreground">за {service.period}</div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 text-sm font-medium">
                              <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                              {service.rating}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {service.reviews} отзывов
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2 pt-2 border-t">
                          <div className="flex items-center gap-2 text-sm">
                            <Icon name="MapPin" size={14} className="text-muted-foreground" />
                            <span className="text-muted-foreground text-xs">{service.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Icon name="User" size={14} className="text-muted-foreground" />
                            <span className="text-muted-foreground text-xs">{service.owner}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Icon name="Shield" size={14} className="text-muted-foreground" />
                            <span className="text-muted-foreground text-xs">
                              Залог {service.deposit.toLocaleString()} ₽
                            </span>
                          </div>
                        </div>

                        <Button className="w-full" disabled={!service.available}>
                          {service.available ? (
                            <>
                              <Icon name="Calendar" size={18} className="mr-2" />
                              Забронировать
                            </>
                          ) : (
                            'Недоступно'
                          )}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Shield" size={32} className="text-primary" />
                  </div>
                  <CardTitle>Безопасные сделки</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Проверенные арендодатели, защита платежей и страхование товаров
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Clock" size={32} className="text-secondary" />
                  </div>
                  <CardTitle>Гибкие сроки</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Аренда от 1 дня, удобное бронирование и отмена за 24 часа
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="MessageCircle" size={32} className="text-primary" />
                  </div>
                  <CardTitle>Поддержка 24/7</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Помощь в решении споров и ответы на вопросы в любое время
                  </p>
                </CardContent>
              </Card>
            </div>
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
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Блог
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Вакансии
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Безопасность
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-white transition-colors">
                    Правила
                  </a>
                </li>
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
