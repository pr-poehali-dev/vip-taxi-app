import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const carClasses = [
    {
      id: 'business',
      title: 'Бизнес',
      description: 'Комфортные седаны для деловых поездок',
      price: 'от 2500 ₽',
      features: ['Седан класса E', 'Wi-Fi', 'Вода'],
      icon: 'Car'
    },
    {
      id: 'premium',
      title: 'Премиум',
      description: 'Престижные автомобили премиум-класса',
      price: 'от 4500 ₽',
      features: ['Mercedes S-Class', 'Шампанское', 'Пресса'],
      icon: 'Crown'
    },
    {
      id: 'luxury',
      title: 'Люкс',
      description: 'Эксклюзивный сервис высшего уровня',
      price: 'от 8000 ₽',
      features: ['Maybach / Rolls-Royce', 'Персональный водитель', 'VIP сервис'],
      icon: 'Sparkles'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Премиум Трансфер
          </h1>
          <p className="text-xl text-gray-300">Выберите класс автомобиля для вашей поездки</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {carClasses.map((carClass) => (
            <Card
              key={carClass.id}
              className={`bg-gray-800 border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedClass === carClass.id
                  ? 'border-yellow-500 shadow-xl shadow-yellow-500/20'
                  : 'border-gray-700 hover:border-gray-600'
              }`}
              onClick={() => setSelectedClass(carClass.id)}
            >
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    selectedClass === carClass.id
                      ? 'bg-yellow-500'
                      : 'bg-gray-700'
                  }`}>
                    <Icon name={carClass.icon} size={32} className="text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-center mb-2">{carClass.title}</h3>
                <p className="text-gray-400 text-center mb-4">{carClass.description}</p>
                
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-yellow-500">{carClass.price}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {carClass.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <Icon name="Check" size={16} className="text-yellow-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    selectedClass === carClass.id
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-black'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedClass(carClass.id);
                  }}
                >
                  {selectedClass === carClass.id ? 'Выбрано' : 'Выбрать'}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {selectedClass && (
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-12 py-6 text-xl"
            >
              Продолжить бронирование
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
