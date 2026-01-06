import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [area, setArea] = useState([150]);
  const [floors, setFloors] = useState([2]);
  const [material, setMaterial] = useState('brick');
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    calculatePrice();
  }, []);

  useEffect(() => {
    calculatePrice();
  }, [area, floors, material]);

  const calculatePrice = () => {
    const basePricePerSqm: { [key: string]: number } = {
      brick: 45000,
      block: 38000,
      wood: 42000,
      frame: 35000,
    };

    const floorMultiplier = 1 + (floors[0] - 1) * 0.15;
    const price = area[0] * basePricePerSqm[material] * floorMultiplier;
    setCalculatedPrice(Math.round(price));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: 'Вилла "Морской бриз"',
      area: '280 м²',
      price: '18 млн ₽',
      image: 'https://cdn.poehali.dev/projects/6c5abee1-ca3f-4896-9b1f-60753827373c/files/9349188d-0b07-489f-8889-fda010fa7348.jpg',
      features: ['3 спальни', 'Терраса', 'Вид на море'],
    },
    {
      title: 'Коттедж "Южный"',
      area: '220 м²',
      price: '12 млн ₽',
      image: 'https://cdn.poehali.dev/projects/6c5abee1-ca3f-4896-9b1f-60753827373c/files/4fb12cb1-139f-4ba5-82b1-1a887636828e.jpg',
      features: ['4 спальни', 'Гараж', 'Сад'],
    },
    {
      title: 'Дом "Панорама"',
      area: '340 м²',
      price: '22 млн ₽',
      image: 'https://cdn.poehali.dev/projects/6c5abee1-ca3f-4896-9b1f-60753827373c/files/2b1cdd08-5b9e-421f-8e36-46c371befce3.jpg',
      features: ['5 спален', 'Бассейн', 'Панорамные окна'],
    },
  ];

  const services = [
    {
      icon: 'Home',
      title: 'Проектирование',
      description: 'Индивидуальные и типовые проекты домов с учетом особенностей участка и пожеланий клиента',
    },
    {
      icon: 'HardHat',
      title: 'Строительство под ключ',
      description: 'Полный цикл строительства от фундамента до финишной отделки с гарантией качества',
    },
    {
      icon: 'Wrench',
      title: 'Реконструкция',
      description: 'Капитальный ремонт и модернизация существующих строений любой сложности',
    },
    {
      icon: 'Shield',
      title: 'Гарантийное обслуживание',
      description: 'Полное гарантийное и постгарантийное обслуживание построенных объектов',
    },
  ];

  const reviews = [
    {
      name: 'Александр Петров',
      text: 'Построили дом за 8 месяцев, качество на высоте! Все работы выполнены в срок, команда профессионалов.',
      rating: 5,
      location: 'Ялта',
    },
    {
      name: 'Мария Иванова',
      text: 'Очень довольны результатом! Учли все наши пожелания, проект получился лучше, чем мы ожидали.',
      rating: 5,
      location: 'Алушта',
    },
    {
      name: 'Дмитрий Соколов',
      text: 'Отличное соотношение цены и качества. Рекомендую всем, кто планирует строительство в Крыму!',
      rating: 5,
      location: 'Севастополь',
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <Icon name="Building2" size={32} className="text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                КрымСтройДом
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-primary transition-colors font-medium">
                Проекты
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors font-medium">
                Услуги
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-primary transition-colors font-medium">
                Портфолио
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-primary transition-colors font-medium">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('calculator')} className="text-gray-700 hover:text-primary transition-colors font-medium">
                Калькулятор
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-gray-700 hover:text-primary transition-colors font-medium">
                Контакты
              </button>
            </div>
            <Button onClick={() => scrollToSection('contacts')} className="hidden md:flex">
              Связаться
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </nav>
        </div>
      </header>

      <section
        className={`pt-32 pb-20 px-4 bg-gradient-to-br from-orange-50 via-white to-blue-50 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Строим дома вашей мечты{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  в Крыму
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Профессиональное строительство под ключ с гарантией качества. Современные технологии, надежные материалы и точные сроки.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button onClick={() => scrollToSection('calculator')} size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button onClick={() => scrollToSection('projects')} size="lg" variant="outline" className="text-lg px-8 py-6">
                  Смотреть проекты
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">50+</div>
                  <div className="text-sm text-gray-600 mt-1">Построенных домов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">7</div>
                  <div className="text-sm text-gray-600 mt-1">Лет на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">98%</div>
                  <div className="text-sm text-gray-600 mt-1">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://cdn.poehali.dev/projects/6c5abee1-ca3f-4896-9b1f-60753827373c/files/9349188d-0b07-489f-8889-fda010fa7348.jpg"
                  alt="Современный дом в Крыму"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border-4 border-orange-100">
                <div className="flex items-center gap-3">
                  <Icon name="Award" size={32} className="text-primary" />
                  <div>
                    <div className="font-bold text-lg">Гарантия 5 лет</div>
                    <div className="text-sm text-gray-600">На все работы</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг для строительства дома вашей мечты
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Популярные проекты</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Готовые решения для комфортной жизни в Крыму
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 hover:border-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    {project.price}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-gray-700">{project.area}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <span key={idx} className="bg-blue-100 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full mt-6" variant="outline">
                    Подробнее
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наше портфолио</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Реализованные проекты — наша гордость
            </p>
          </div>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="villas">Виллы</TabsTrigger>
              <TabsTrigger value="cottages">Коттеджи</TabsTrigger>
              <TabsTrigger value="houses">Дома</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  >
                    <img
                      src={projects[item % 3].image}
                      alt={`Проект ${item}`}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <h3 className="text-xl font-bold mb-2">Проект №{item}</h3>
                        <p className="text-sm">Построен в 2023 году</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="villas">
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <img
                      src={projects[0].image}
                      alt={`Вилла ${item}`}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="cottages">
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <img
                      src={projects[1].image}
                      alt={`Коттедж ${item}`}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="houses">
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <img
                      src={projects[2].image}
                      alt={`Дом ${item}`}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Калькулятор стоимости</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Рассчитайте предварительную стоимость строительства вашего дома
            </p>
          </div>
          <Card className="border-2 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">Параметры вашего дома</CardTitle>
              <CardDescription>Укажите основные характеристики для расчета</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Площадь дома: {area[0]} м²</Label>
                <Slider value={area} onValueChange={setArea} min={80} max={500} step={10} className="py-4" />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>80 м²</span>
                  <span>500 м²</span>
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-lg font-semibold">Количество этажей: {floors[0]}</Label>
                <Slider value={floors} onValueChange={setFloors} min={1} max={3} step={1} className="py-4" />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>1 этаж</span>
                  <span>3 этажа</span>
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-lg font-semibold">Материал стен</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { value: 'brick', label: 'Кирпич', icon: 'Box' },
                    { value: 'block', label: 'Блоки', icon: 'Package' },
                    { value: 'wood', label: 'Дерево', icon: 'Trees' },
                    { value: 'frame', label: 'Каркас', icon: 'Grid3x3' },
                  ].map((mat) => (
                    <button
                      key={mat.value}
                      onClick={() => setMaterial(mat.value)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        material === mat.value
                          ? 'border-primary bg-primary text-white shadow-lg scale-105'
                          : 'border-gray-200 hover:border-primary hover:shadow-md'
                      }`}
                    >
                      <Icon name={mat.icon} size={32} className="mx-auto mb-2" />
                      <div className="font-semibold">{mat.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg mb-2">Предварительная стоимость</div>
                    <div className="text-5xl font-bold">{calculatedPrice.toLocaleString('ru-RU')} ₽</div>
                    <div className="text-sm mt-2 opacity-90">
                      * Итоговая стоимость может отличаться после точного расчета
                    </div>
                  </div>
                  <Icon name="Calculator" size={64} className="opacity-30" />
                </div>
              </div>

              <Button onClick={() => scrollToSection('contacts')} size="lg" className="w-full py-6 text-lg" variant="outline">
                <Icon name="Phone" size={20} className="mr-2" />
                Получить точный расчет
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Что говорят о нас те, кто уже построил дом мечты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2 hover:border-primary hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <CardTitle>{review.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Icon name="MapPin" size={16} />
                    {review.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">Свяжитесь с нами</h2>
              <p className="text-xl text-gray-300">
                Готовы обсудить ваш проект? Мы с радостью ответим на все вопросы!
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <a href="tel:+79786872757" className="text-gray-300 hover:text-primary transition-colors">
                      +7 (978) 687-27-57
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:info@krymstroy.ru" className="text-gray-300 hover:text-secondary transition-colors">
                      info@krymstroy.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-gray-300">г. Севастополь</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Оставьте заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="example@mail.ru" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Input id="message" placeholder="Расскажите о вашем проекте..." />
                </div>
                <Button className="w-full py-6 text-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Building2" size={24} className="text-primary" />
            <span className="text-xl font-bold text-white">КрымСтройДом</span>
          </div>
          <p>© 2024 КрымСтройДом. Все права защищены.</p>
          <p className="text-sm mt-2">Строительство домов под ключ в Крыму</p>
        </div>
      </footer>
    </div>
  );
}