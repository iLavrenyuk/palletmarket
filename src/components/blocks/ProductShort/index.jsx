import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pallets from '../../../img/pallets.webp';
import { routes } from '../../../constants/Routes';

export const ProductShort = () => {
  const sliderSettings = {
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    dots: false,
    arrows: false,
    slidesToShow: 1,
    focusOnSelect: true,
    speed: 800,
  };

  return (
    <section className="product-short">
      <div className="container">
        <div className="left">
          <span className="title">Наши паллеты</span>
          <p className="text">
            Информация которой чаще всего интересуются заказчики. Что-то касательно продукта.Информация которой чаще
            всего интересуются заказчики. Что-то касательно продукта
          </p>
          <Link to={routes.Products} className="link">
            Детальнее
          </Link>
        </div>
        <div className="right">
          <div className="slider">
            <Slider {...sliderSettings}>
              <img
                src="https://www.thepalletcompany.co.uk/images/webupload/pallets/new-pallets-3_gq_large.jpg"
                alt="pallets"
              />
              <img src={pallets} alt="pallets" />
              <img
                src="https://uic.org/local/cache-vignettes/L750xH563/pallets_01-1ccc9.jpg?1609826750"
                alt="pallets"
              />
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
