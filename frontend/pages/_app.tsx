import React from 'react';
import { Provider } from 'react-redux';
import App, { AppContext } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { makeStore } from '../redux/store';
import '../styles/global.scss';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props as any;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);