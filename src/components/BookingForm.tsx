import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface BookingFormProps {
  selectedClass: string;
  onBack: () => void;
}

const BookingForm = ({ selectedClass, onBack }: BookingFormProps) => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    time: '',
    passengers: '1',
    phone: '',
    name: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking data:', { ...formData, carClass: selectedClass });
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const classNames = {
    business: 'Бизнес',
    premium: 'Премиум',
    luxury: 'Люкс'
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Button
        variant="ghost"
        className="mb-6 text-gray-300 hover:text-white"
        onClick={onBack}
      >
        <Icon name="ArrowLeft" size={20} className="mr-2" />
        Назад к выбору класса
      </Button>

      <Card className="bg-gray-800 border-gray-700 p-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2">Бронирование трансфера</h2>
          <p className="text-gray-400">
            Класс: <span className="text-yellow-500 font-semibold">{classNames[selectedClass as keyof typeof classNames]}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="from" className="text-gray-300">
              Откуда
            </Label>
            <div className="relative">
              <Icon name="MapPin" size={20} className="absolute left-3 top-3 text-gray-400" />
              <Input
                id="from"
                name="from"
                placeholder="Адрес или аэропорт"
                value={formData.from}
                onChange={handleChange}
                required
                className="pl-10 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="to" className="text-gray-300">
              Куда
            </Label>
            <div className="relative">
              <Icon name="MapPin" size={20} className="absolute left-3 top-3 text-gray-400" />
              <Input
                id="to"
                name="to"
                placeholder="Адрес назначения"
                value={formData.to}
                onChange={handleChange}
                required
                className="pl-10 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="text-gray-300">
                Дата
              </Label>
              <div className="relative">
                <Icon name="Calendar" size={20} className="absolute left-3 top-3 text-gray-400" />
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="pl-10 bg-gray-700 border-gray-600 text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="time" className="text-gray-300">
                Время
              </Label>
              <div className="relative">
                <Icon name="Clock" size={20} className="absolute left-3 top-3 text-gray-400" />
                <Input
                  id="time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="pl-10 bg-gray-700 border-gray-600 text-white"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="passengers" className="text-gray-300">
              Количество пассажиров
            </Label>
            <div className="relative">
              <Icon name="Users" size={20} className="absolute left-3 top-3 text-gray-400" />
              <Input
                id="passengers"
                name="passengers"
                type="number"
                min="1"
                max="8"
                value={formData.passengers}
                onChange={handleChange}
                required
                className="pl-10 bg-gray-700 border-gray-600 text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-300">
              Ваше имя
            </Label>
            <div className="relative">
              <Icon name="User" size={20} className="absolute left-3 top-3 text-gray-400" />
              <Input
                id="name"
                name="name"
                placeholder="Иван Иванов"
                value={formData.name}
                onChange={handleChange}
                required
                className="pl-10 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-300">
              Телефон
            </Label>
            <div className="relative">
              <Icon name="Phone" size={20} className="absolute left-3 top-3 text-gray-400" />
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={formData.phone}
                onChange={handleChange}
                required
                className="pl-10 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
              />
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg"
          >
            <Icon name="Check" size={20} className="mr-2" />
            Забронировать трансфер
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default BookingForm;
