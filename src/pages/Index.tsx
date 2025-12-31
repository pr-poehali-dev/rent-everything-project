import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  { id: 'all', name: 'Все категории', icon: 'LayoutGrid' },
  { id: 'electronics', name: 'Электроника', icon: 'Laptop' },
  { id: 'tools', name: 'Инструменты', icon: 'Hammer' },
  { id: 'sport', name: 'Спорт', icon: 'Dumbbell' },
  { id: 'transport', name: 'Транспорт', icon: 'Car' },
  { id: 'photo', name: 'Фото/Видео', icon: 'Camera' },
  { id: 'home', name: 'Для дома', icon: 'Home' },
];

const mockItems = [
  {
    id: 1,
    title: 'Профессиональная камера Canon EOS R5',
    category: 'photo',
    price: 3500,
    period: 'день',
    rating: 4.9,
    reviews: 42,
    owner: {
      name: 'Алексей Морозов',
      avatar: '',
      verified: true,
      rating: 4.8,
    },
    location: 'Москва',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'Электросамокат Xiaomi Pro 2',
    category: 'transport',
    price: 1200,
    period: 'день',
    rating: 4.7,
    reviews: 28,
    owner: {
      name: 'Мария Соколова',
      avatar: '',
      verified: true,
      rating: 4.9,
    },
    location: 'Санкт-Петербург',
    image: 'https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Перфоратор Bosch Professional',
    category: 'tools',
    price: 800,
    period: 'день',
    rating: 4.8,
    reviews: 35,
    owner: {
      name: 'Дмитрий Петров',
      avatar: '',
      verified: true,
      rating: 4.7,
    },
    location: 'Москва',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'Сноуборд Burton Custom',
    category: 'sport',
    price: 1500,
    period: 'день',
    rating: 4.9,
    reviews: 19,
    owner: {
      name: 'Анна Ковалева',
      avatar: '',
      verified: true,
      rating: 5.0,
    },
    location: 'Казань',
    image: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    title: 'Квадрокоптер DJI Mavic Air 2',
    category: 'photo',
    price: 2500,
    period: 'день',
    rating: 4.8,
    reviews: 31,
    owner: {
      name: 'Игорь Новиков',
      avatar: '',
      verified: true,
      rating: 4.9,
    },
    location: 'Москва',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    title: 'Палатка туристическая 4-местная',
    category: 'sport',
    price: 600,
    period: 'день',
    rating: 4.6,
    reviews: 24,
    owner: {
      name: 'Сергей Волков',
      avatar: '',
      verified: true,
      rating: 4.8,
    },
    location: 'Нижний Новгород',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=600&fit=crop',
  },
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = mockItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Icon name="Package" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-foreground">RentHub</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Каталог
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Как это работает
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Стать арендодателем
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Icon name="Bell" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Avatar className="w-9 h-9">
                <AvatarFallback className="bg-primary text-white text-sm">ИП</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Арендуйте всё, что нужно
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Платформа для аренды товаров с проверенными арендодателями и безопасными сделками
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <div className="flex-1 relative">
                <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Найти камеру, инструменты, транспорт..."
                  className="pl-12 h-14 text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button size="lg" className="h-14 px-8">
                Найти
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className="flex items-center gap-2 whitespace-nowrap transition-all hover:scale-105"
                onClick={() => setSelectedCategory(category.id)}
              >
                <Icon name={category.icon as any} size={18} />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-1">
                Доступно для аренды
              </h3>
              <p className="text-muted-foreground">
                Найдено {filteredItems.length} {filteredItems.length === 1 ? 'товар' : 'товаров'}
              </p>
            </div>
            <Select defaultValue="popular">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Сортировка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Популярные</SelectItem>
                <SelectItem value="price-low">Цена: низкая</SelectItem>
                <SelectItem value="price-high">Цена: высокая</SelectItem>
                <SelectItem value="rating">Рейтинг</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 right-3 bg-white/95 text-foreground hover:bg-white">
                    <Icon name="Star" size={14} className="text-yellow-500 fill-yellow-500 mr-1" />
                    {item.rating}
                  </Badge>
                </div>
                <CardHeader className="pb-3">
                  <h4 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                    <Icon name="MapPin" size={14} />
                    {item.location}
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="text-xs bg-secondary text-white">
                        {item.owner.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1">
                        <p className="text-sm font-medium truncate">{item.owner.name}</p>
                        {item.owner.verified && (
                          <Icon name="BadgeCheck" size={14} className="text-primary flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Рейтинг {item.owner.rating} • {item.reviews} отзывов
                      </p>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-foreground">{item.price} ₽</span>
                    <span className="text-muted-foreground">/ {item.period}</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0 flex gap-2">
                  <Button className="flex-1" size="sm">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    Забронировать
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="MessageCircle" size={16} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="animate-fade-in">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Безопасность</h3>
                <p className="text-white/80">
                  Проверенные арендодатели и защищённые платежи
                </p>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Сообщество</h3>
                <p className="text-white/80">
                  Знакомьтесь с людьми и читайте отзывы
                </p>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sparkles" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Удобство</h3>
                <p className="text-white/80">
                  Быстрое бронирование и простая оплата
                </p>
              </div>
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
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
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
