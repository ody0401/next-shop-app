import React from "react";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import PropTypes from "prop-types";
import AppLayout from "../components/AppLayout";

import store from '../store';

const Shop = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
};

Shop.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.any,
};

export default Shop;
