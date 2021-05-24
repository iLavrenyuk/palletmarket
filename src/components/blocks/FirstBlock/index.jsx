import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../../constants/Routes';
import { Button } from '../../common/Button';

export const FirstBlock = () => {
  return (
    <section className="first-block">
      <div className="bg-filter">
        <div className="container">
          <span className="title">palletmarket</span>
          <span className="sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna
          </span>
          <Link to={routes.Products}>
            <Button type="button" text="go to" />
          </Link>
        </div>
      </div>
    </section>
  );
};
