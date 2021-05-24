import React from 'react';
import { Card } from './Card';
import card1 from '../../../img/card1.jpg';
import card2 from '../../../img/card2.jpg';
import card3 from '../../../img/card3.jpg';
import { routes } from '../../../constants/Routes';

export const Advantages = () => {
  return (
    <section className="advantages">
      <div className="container">
        <span className="title">Преимущества</span>
        <div className="cards">
          <Card
            image={card1}
            title="Низкая рыночная цена"
            text={`Без посредников.\nБольшие обороты (опт)\nСвоя логистика`}
            link={routes.Products}
            linkName="Посмотреть цены"
          />
          <Card
            image={card2}
            title="Качество + Эко"
            text={`Открытая ценоваая политика\nСпециальные предложения\nБыстрый и понятный заказ`}
            link={routes.Products}
            linkName="Перейти и ознакомится"
          />
          <Card
            image={card3}
            title="Гибкие условия платежа"
            text={`Отсрочка платежа.\nСотрдуничество с физическими и юредическими лицами`}
            link={routes.Products}
            linkName="Детальнее"
          />
        </div>
      </div>
    </section>
  );
};
