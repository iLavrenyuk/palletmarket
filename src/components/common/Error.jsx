import React from 'react';
// import { useStore } from '../../stores';
import { useHistory } from 'react-router-dom';
import { routes } from '../../constants/Routes';

export const Error = ({ statusCode }) => {
  // const {
  //   apiErrorStore: { clearApiErrorCode },
  // } = useStore();

  const history = useHistory();

  const redirectToHomePage = () => {
    history.push(routes.Home);
  };

  const code = statusCode ? statusCode : 404;

  return (
    <div className="banner-error-page ">
      <div className="error-container container">
        <div className="col-xl-9 col-16">
          <span className="error">{code}</span>
          <span className="error-title">Woa….</span>
          <span className="error-title">Looks like something went wrong</span>
          <span className="error-text">Page you’re looking for is not available!</span>
          <button className="error-btn btn btn-main" onClick={redirectToHomePage}>
            GO to main page
          </button>
        </div>
      </div>
    </div>
  );
};
